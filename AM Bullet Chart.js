var getScriptPromisify = (src) => {
	  return new Promise(resolve => {
		$.getScript(src, resolve);
	  })
	}

(function() {
	
	let template = document.createElement("template");
    template.innerHTML = `
		<div id="chartdiv" style="width: 100% !important; height: inherit; " ></div>
		`;
	
    class Amchart extends HTMLElement {
        constructor() {
            super();

            let shadowRoot = this.attachShadow({
                mode: "open"
            });
			
			/* let src1="https://cdn.amcharts.com/lib/4/core.js";
			let src2="https://cdn.amcharts.com/lib/4/charts.js";
			let src3="https://cdn.amcharts.com/lib/4/themes/animated.js";

			let script1 = document.createElement('script');
			let script2 = document.createElement('script');
			let script3 = document.createElement('script');

			script1.type = 'text/javascript';
			script2.type = 'text/javascript';
			script3.type = 'text/javascript';

			script1.src = src1;
			script2.src = src2;
			script3.src = src3; 
			
			shadowRoot.appendChild(script1);
			shadowRoot.appendChild(script2);
			shadowRoot.appendChild(script3); */
			
            shadowRoot.appendChild(template.content.cloneNode(true));
            this.addEventListener("click", event => {
                var event = new Event("onClick");
                this.dispatchEvent(event);
            });    
            
            this._props = {};
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
			// console.log("onCustomWidgetAfterUpdate")
			// console.log("this._props prop = ", this._props);
			this._props = { ...this._props, ...changedProperties };
			// console.log("changedProperties = ", changedProperties);
            //  if(this._firstConnection){
			
			if ("KPIs" in changedProperties) {
				this.$KPIs = changedProperties["KPIs"];
			}
			if ("BaseData" in changedProperties) {
				this.$BaseData = changedProperties["BaseData"];
			}
			if ("MedianData" in changedProperties) {
				this.$MedianData = changedProperties["MedianData"];
			}
			if ("PriorData" in changedProperties) {
				this.$PriorData = changedProperties["PriorData"];
			}
			if ("Prior2Data" in changedProperties) {
				this.$Prior2Data = changedProperties["Prior2Data"];
			}
			if ("MinData" in changedProperties) {
				this.$MinData = changedProperties["MinData"];
			}
			if ("MaxData" in changedProperties) {
				this.$MaxData = changedProperties["MaxData"];
			}
			if ("NumFormat" in changedProperties) {
				this.$NumFormat = changedProperties["NumFormat"];
			}
						
			this.renderAmchart(this.$KPIs, this.$BaseData, this.$MedianData, this.$PriorData, this.$Prior2Data, this.$MinData, this.$MaxData, this.$NumFormat);  
        }
		
        async renderAmchart(kpis, baseVal, medVal, prVal, pr2Val, minVal, maxVal, formVal){
			
			await getScriptPromisify("https://cdn.amcharts.com/lib/4/core.js");
			await getScriptPromisify("https://cdn.amcharts.com/lib/4/charts.js");
			await getScriptPromisify("https://cdn.amcharts.com/lib/4/themes/animated.js");
			
			var cdiv = this.shadowRoot.getElementById('chartdiv');
			var bullet = new am4core.ready(function() {
				
				// Themes begin
				am4core.useTheme(am4themes_animated);
				// Themes end

				var kpi = kpis;
				var base = baseVal;
				var median = medVal;
				var prior = prVal;
				var prior2y = pr2Val; 
				var min = minVal;
				var max = maxVal;
				var format = formVal;
				
				var container = am4core.create(cdiv, am4core.Container);
				container.width = am4core.percent(100);
				container.height = kpi.length*90;
				container.layout = "vertical";
				
				for (var i=0; i<kpi.length; i++){
					
					var data = 	{
							"category":kpi[i],
							"value":base[i],
							"median":median[i],
							"prior":prior[i],
							"2yprior":prior2y[i]
						};
					createBulletChart(container, "solid", min[i], max[i], format[i], data); 
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
				function createBulletChart(parent, colorType, min, max, nf, data) {
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
				  series.columns.template.fill = am4core.color("#046a38");
				  series.columns.template.stroke = am4core.color("#000");
				  series.columns.template.strokeWidth = 1;
				  series.columns.template.strokeOpacity = 0.5;
				  series.columns.template.height = am4core.percent(65);
				  series.tooltipText = "{value}";


				  var series2 = chart.series.push(new am4charts.StepLineSeries());
				  series2.dataFields.valueX = "median";
				  series2.dataFields.categoryY = "category";
				  series2.strokeWidth = 2;
				  series2.noRisers = true;
				  series2.startLocation = 0.0;
				  series2.endLocation = 1.00;
				  series2.tooltipText = "{valueX}";
				  series2.tooltip.getFillFromObject = false;
				  series2.tooltip.background.fill = am4core.color("#7c7c7c");
				  series2.stroke = am4core.color("#7c7c7c");
				  
				  var series3 = chart.series.push(new am4charts.StepLineSeries());
				  series3.dataFields.valueX = "prior";
				  series3.dataFields.categoryY = "category";
				  series3.strokeWidth = 2;
				  series3.noRisers = true;
				  series3.startLocation = 0.0;
				  series3.endLocation = 1.00;
				  series3.tooltipText = "{valueX}";
				  series3.tooltip.getFillFromObject = false;
				  series3.tooltip.background.fill = am4core.color("#007cb0");
				  series3.tooltip.pointerOrientation = "up";
				  series3.stroke = am4core.color("#007cb0");
				  
				  var series4 = chart.series.push(new am4charts.StepLineSeries());
				  series4.dataFields.valueX = "2yprior";
				  series4.dataFields.categoryY = "category";
				  series4.strokeWidth = 2;
				  series4.noRisers = true;
				  series4.startLocation = 0.0;
				  series4.endLocation = 1.00;
				  series4.tooltipText = "{valueX}";
				  series4.tooltip.getFillFromObject = false;
				  series4.tooltip.background.fill = am4core.color("#86bc25");
				  series4.tooltip.pointerOrientation = "down";
				  series4.stroke = am4core.color("#86bc25");

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
    customElements.define("com-dtt-ambullet", Amchart);
})();
