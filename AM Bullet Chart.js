var getScriptPromisify = (src) => {
	  return new Promise(resolve => {
		$.getScript(src, resolve);
	  })
	}

function addStyle(styles) {
             
            /* Create style document */
            var css = document.createElement('style');
            css.type = 'text/css';
         
            if (css.styleSheet)
                css.styleSheet.cssText = styles;
            else
                css.appendChild(document.createTextNode(styles));
             
            /* Append style to the tag name */
            document.getElementsByTagName("head")[0].appendChild(css);
        }

var styles = 'html.sap-desktop body ::-webkit-scrollbar{width:.75rem;height:.75rem} ::-webkit-scrollbar-thumb { \
		  background: #5c5c5cee !important;  \
		  border-radius: 4px; \
		} ::-webkit-scrollbar-track { \
		  background: black !important; \
		}';
         

(function() {
	
	let template = document.createElement("template");
    template.innerHTML = `
		<div id="chartdiv" style="width: 100% !important; height: inherit; " ></div>
		`;
	
    class AMBullet extends HTMLElement {
        constructor() {
            super();

            let shadowRoot = this.attachShadow({
                mode: "open"
            });
						
            shadowRoot.appendChild(template.content.cloneNode(true));
            this.addEventListener("click", event => {
                var event = new Event("onClick");
                this.dispatchEvent(event);
            });    
            this._firstUpdate = true;
            this._props = {};
		
	    this.addStyle(styles);
            // this._firstConnection = false;
        }
       
         //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            // this._firstConnection = true;
            // this.loadAmchartLibraires();           
        }

        //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = { ...this._props,
                ...changedProperties
            };
        }

        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        
        }

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
        onCustomWidgetAfterUpdate(changedProperties) {

			this._props = { ...this._props, ...changedProperties };
			
			if ("Data" in changedProperties) {
				this.$Data = changedProperties["Data"];
			}
			if ("BsCol" in changedProperties) {
				this.$BsCol = changedProperties["BsCol"];
			}
			if ("MedCol" in changedProperties) {
				this.$MedCol = changedProperties["MedCol"];
			}
			if ("BpyCol" in changedProperties) {
				this.$BpyCol = changedProperties["BpyCol"];
			}
			if ("B2pyCol" in changedProperties) {
				this.$B2pyCol = changedProperties["B2pyCol"];
			}
						
			this.renderAmchart(this.$Data, this.$BsCol, this.$MedCol, this.BpyCol, this.B2pyCol);  
        }
		
        async renderAmchart(txtData, basecol, medcol, pycol, py2col){
			
			if (this._firstUpdate) {
				await getScriptPromisify("https://cdn.amcharts.com/lib/4/core.js");
				await getScriptPromisify("https://cdn.amcharts.com/lib/4/charts.js");
				await getScriptPromisify("https://cdn.amcharts.com/lib/4/themes/animated.js");
				this._firstUpdate = false;
			}
			
			var cdiv = this.shadowRoot.getElementById('chartdiv');
			var bullet = new am4core.ready(function() {
				
				// Themes begin
				am4core.useTheme(am4themes_animated);
				// Themes end
				
				var data = JSON.parse(txtData);
				
				var container = am4core.create(cdiv, am4core.Container);
				container.width = am4core.percent(100);
				container.height = data.length*90;
				container.layout = "vertical";
				
				for (var i=0; i<data.length; i++){
					
					createBulletChart(container, "solid", data[i].min, data[i].max, data[i].format, data[i].chdata, basecol, medcol, pycol, py2col); 
				}

				/* Create ranges 
				function createRange(axis, from, to, color) {
				  var range = axis.axisRanges.create();
				  range.value = from;
				  range.endValue = to;
				  range.axisFill.fill = color;
				  range.axisFill.fillOpacity = 0.8;
				  range.label.disabled = true;
				  range.grid.disabled = true;
				}
				*/

				/* Create bullet chart with specified color type for background */
				function createBulletChart(parent, colorType, min, max, nf, data, colbs, colmd, colpy, colpy2) {
				  // var colors = ["#19d22800", "#b4dd1e00", "#f4fb1600", "#f6d32b00", "#fb711600"];

				  /* Create chart instance */
				  var chart = container.createChild(am4charts.XYChart);
				  chart.paddingRight = 25;
				  chart.paddingLeft = 25;
				  chart.paddingTop = 0;
				  chart.paddingBottom = 0;
				  chart.width = am4core.percent(100);
				  chart.height = am4core.percent(100);

				  /* Add data */
				  chart.data.push(data);
				  
				  /* Create axes */
				  var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
				  categoryAxis.dataFields.category = "category";
				  categoryAxis.renderer.minGridDistance = 30;
				  categoryAxis.renderer.grid.template.disabled = true;
				  categoryAxis.renderer.labels.template.rotation = 0;
				  categoryAxis.renderer.labels.template.wrap = true;
				  categoryAxis.renderer.labels.template.fontFamily = "Calibri";
				  categoryAxis.renderer.labels.template.fontSize = 20;
				  categoryAxis.renderer.labels.template.fontWeight = "Bold";
				  categoryAxis.renderer.labels.template.textAlign = "end";
				  categoryAxis.renderer.labels.template.fill = am4core.color("#fff");
				  categoryAxis.renderer.labels.template.maxWidth = 200;
				  categoryAxis.renderer.labels.template.minWidth = 200;
				  categoryAxis.cursorTooltipEnabled = false;

				  var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
				  valueAxis.renderer.minGridDistance = 30;
				  valueAxis.renderer.grid.template.disabled = true;
				  valueAxis.min = min;
				  valueAxis.max = max;
				  valueAxis.strictMinMax = true;
				  valueAxis.numberFormatter = new am4core.NumberFormatter();
				  valueAxis.numberFormatter.numberFormat = nf; // #,### or #'%'
				  valueAxis.renderer.baseGrid.disabled = true;
				  valueAxis.renderer.labels.template.fontFamily = "Calibri";
				  valueAxis.renderer.labels.template.fontSize = 13;
				  valueAxis.renderer.minGridDistance = 250;
				  valueAxis.renderer.labels.template.fill = am4core.color("#fff");
				  

				  /* 
					In order to create separate background colors for each range of values, 
					you have to create multiple axisRange objects each with their own fill color 
				  
				  if (colorType === "solid") {
					var start = 0, end = 20;
					for (var i = 0; i < 5; ++i) {
					  createRange(valueAxis, start, end, am4core.color(colors[i]));
					  start += 20;
					  end += 20;
					}
				  }
				  */
				  /*
					In order to create a gradient background, only one axisRange object is needed
					and a gradient object can be assigned to the axisRange's fill property. 
				  
				  else if (colorType === "gradient") {
					var gradient = new am4core.LinearGradient();
					for (var i = 0; i < 5; ++i) {
					  // add each color that makes up the gradient
					  gradient.addColor(am4core.color(colors[i]));
					}
					createRange(valueAxis, 0, 200, gradient);
				  }
				  */

				  /* Create series */
				  var series = chart.series.push(new am4charts.ColumnSeries());
				  series.dataFields.valueX = "value";
				  series.dataFields.categoryY = "category";
				  series.columns.template.fill = am4core.color(colbs);
				  series.columns.template.stroke = am4core.color("#000");
				  series.columns.template.strokeWidth = 1;
				  series.columns.template.strokeOpacity = 0.5;
				  series.columns.template.height = am4core.percent(65);
				  if(nf.includes("%")){
					  series.tooltipText = "{value}%";	
				  }else{
					  series.tooltipText = "{value}";
				  }


				  var series2 = chart.series.push(new am4charts.StepLineSeries());
				  series2.dataFields.valueX = "median";
				  series2.dataFields.categoryY = "category";
				  series2.strokeWidth = 2;
				  series2.noRisers = true;
				  series2.startLocation = 0.0;
				  series2.endLocation = 1.00;
				  if(nf.includes("%")){
					  series2.tooltipText = "{valueX}%";	
				  }else{
					  series2.tooltipText = "{valueX}";
				  }
				  series2.tooltip.getFillFromObject = false;
				  series2.tooltip.background.fill = am4core.color(colmd);
				  series2.stroke = am4core.color(colmd);
				  
				  var series3 = chart.series.push(new am4charts.StepLineSeries());
				  series3.dataFields.valueX = "prior";
				  series3.dataFields.categoryY = "category";
				  series3.strokeWidth = 2;
				  series3.noRisers = true;
				  series3.startLocation = 0.0;
				  series3.endLocation = 1.00;
				  if(nf.includes("%")){
					  series3.tooltipText = "{valueX}%";	
				  }else{
					  series3.tooltipText = "{valueX}";
				  }
				  series3.tooltip.getFillFromObject = false;
				  series3.tooltip.background.fill = am4core.color(colpy);
				  series3.tooltip.pointerOrientation = "up";
				  series3.stroke = am4core.color(colpy);
				  
				  var series4 = chart.series.push(new am4charts.StepLineSeries());
				  series4.dataFields.valueX = "2yprior";
				  series4.dataFields.categoryY = "category";
				  series4.strokeWidth = 2;
				  series4.noRisers = true;
				  series4.startLocation = 0.0;
				  series4.endLocation = 1.00;
				  if(nf.includes("%")){
					  series4.tooltipText = "{valueX}%";	
				  }else{
					  series4.tooltipText = "{valueX}";
				  }
				  series4.tooltip.getFillFromObject = false;
				  series4.tooltip.background.fill = am4core.color(colpy2);
				  series4.tooltip.pointerOrientation = "down";
				  series4.stroke = am4core.color(colpy2);

				  chart.cursor = new am4charts.XYCursor()
				  chart.cursor.lineX.disabled = true;
				  chart.cursor.lineY.disabled = true;

				  valueAxis.cursorTooltipEnabled = true;
				  categoryAxis.cursorTooltipEnabled = false;
				  chart.arrangeTooltips = false;
				}				
			});
        }
    }
    customElements.define("com-dtt-ambullet", AMBullet);
})();
