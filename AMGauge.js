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

			if ("PrimValue" in changedProperties) {
				this.$PrimValue = changedProperties["PrimValue"];
			}
			
			if ("SecValue" in changedProperties) {
				this.$SecValue = changedProperties["SecValue"];
			}
			if ("BottomText" in changedProperties) {
				this.$BottomText = changedProperties["BottomText"];
			}
			if ("GaugeScaleStart" in changedProperties) {
				this.$GaugeScaleStart = changedProperties["GaugeScaleStart"];
			}
			
			if ("GaugeScaleEnd" in changedProperties) {
				this.$GaugeScaleEnd = changedProperties["GaugeScaleEnd"];
			}

			if ("Rng1Start" in changedProperties) {
				this.$Rng1Start = changedProperties["Rng1Start"];
			}
			
			if ("Rng1End" in changedProperties) {
				this.$Rng1End = changedProperties["Rng1End"];
			}
			
			if ("Rng2Label" in changedProperties) {
				this.$Rng2Label = changedProperties["Rng2Label"];
			}
			if ("Rng2Start" in changedProperties) {
				this.$Rng2Start = changedProperties["Rng2Start"];
			}
			
			if ("Rng2End" in changedProperties) {
				this.$Rng2End = changedProperties["Rng2End"];
			}
			
			if ("Rng3Label" in changedProperties) {
				this.$Rng3Label = changedProperties["Rng3Label"];
			}
			if ("Rng3Start" in changedProperties) {
				this.$Rng3Start = changedProperties["Rng3Start"];
			}
			
			if ("Rng3End" in changedProperties) {
				this.$Rng3End = changedProperties["Rng3End"];
			}
			
			if ("Rng1Col" in changedProperties) {
				this.$Rng1Col = changedProperties["Rng1Col"];
			}
			if ("Rng2Col" in changedProperties) {
				this.$Rng2Col = changedProperties["Rng2Col"];
			}
			if ("Rng3Col" in changedProperties) {
				this.$Rng3Col = changedProperties["Rng3Col"];
			}
			if ("PrimCol" in changedProperties) {
				this.$PrimCol = changedProperties["PrimCol"];
			}
			if ("SecCol" in changedProperties) {
				this.$SecCol = changedProperties["SecCol"];
			}
			if ("StAngle" in changedProperties) {
				this.$StAngle = changedProperties["StAngle"];
			}
			if ("EndAngle" in changedProperties) {
				this.$EndAngle = changedProperties["EndAngle"];
			}
			
			this.renderAmchart(this.$PrimValue, this.$SecValue, this.$BottomText, this.GaugeScaleStart, this.GaugeScaleEnd, this.$Rng1Start, this.$Rng1End, this.$Rng2Label, this.$Rng2Start, this.$Rng2End, this.$Rng3Label, this.$Rng3Start, this.$Rng3End, this.$Rng1Col, this.$Rng2Col, this.$Rng3Col, this.$PrimCol, this.$SecCol, this.$StAngle, this.$EndAngle);    
        }
		
        async renderAmchart(pVal, sVal, bText, scStart, scEnd, r1Start, r1End, r2Lbl, r2Start, r2End, r3Lbl, r3Start, r3End, r1Col, r2Col, r3Col, pCol, sCol, sAngle, eAngle){
			
			await getScriptPromisify("https://cdn.amcharts.com/lib/4/core.js");
			await getScriptPromisify("https://cdn.amcharts.com/lib/4/charts.js");
			await getScriptPromisify("https://cdn.amcharts.com/lib/4/themes/animated.js");
			
			var cdiv = this.shadowRoot.getElementById('chartdiv');
			var gauge = new am4core.ready(function() {
	
						am4core.useTheme(am4themes_animated);

						// create chart
						var chart = am4core.create(cdiv, am4charts.GaugeChart);
						chart.innerRadius = am4core.percent(65);
						// chart.radius = am4core.percent(75);
						chart.startAngle = sAngle;
						chart.endAngle = eAngle;
						chart.showTooltipOn = "hover";
						chart.tooltipText = r2Lbl;
						
						var axis = chart.xAxes.push(new am4charts.ValueAxis());
						axis.min = scStart;
						axis.max = scEnd;
						axis.strictMinMax = true;
						axis.renderer.labels.template.fill = am4core.color("#fff");
						axis.renderer.labels.template.fontFamily = "Calibri";
						axis.renderer.labels.template.fontSize = 16;
						axis.renderer.minGridDistance = 350;
						axis.numberFormatter.numberFormat = "#,###"; // #,### or #'%'
						axis.renderer.labels.template.radius = 18;
						/* axis.renderer.inside = true;
						axis.renderer.line.strokeOpacity = 1;
						axis.renderer.ticks.template.strokeOpacity = 1;
						axis.renderer.ticks.template.length = 10;
						axis.renderer.labels.template.radius = 30;
						axis.renderer.line.stroke = "#FFFFFF";
						axis.renderer.ticks.stroke = "#FFFFFF"; */
						

						var label = chart.radarContainer.createChild(am4core.Label);
						label.isMeasured = true;
						label.fontSize = 45;
						label.x = am4core.percent(50);
						label.y = am4core.percent(100);
						label.horizontalCenter = "middle";
						label.verticalCenter = "bottom";
						label.text = bText;
						label.fill = "#D8D8D8";
						
						var range0 = axis.axisRanges.create();
						range0.value = r1Start;
						range0.endValue = r1End;
						range0.axisFill.fillOpacity = 1;
						range0.axisFill.fill = r1Col;
						// range0.label.text = "text";
						// range0.label.fill = am4core.color("#0c0");

						var range1 = axis.axisRanges.create();
						range1.value = r2Start;
						range1.endValue = r2End;
						range1.axisFill.fillOpacity = 1;
						range1.axisFill.fill = r2Col;
						range1.label.text = r2Lbl; //Shown at start of Range
						range1.label.fill = sCol;

						var range2 = axis.axisRanges.create();
						range2.value = r3Start;
						range2.endValue = r3End;
						range2.axisFill.fillOpacity = 1;
						range2.axisFill.fill = r3Col;
						range2.label.text = r3Lbl; //Shown at start of Range
						range2.label.fill = sCol;
						// range2.label.text = "text2";

						var hand1 = chart.hands.push(new am4charts.ClockHand());
						hand1.fill = pCol;
						hand1.stroke = pCol;
						hand1.value = pVal;
						hand1.innerRadius = am4core.percent(25);
						hand1.radius = am4core.percent(105);
						hand1.pin.disabled = true;
						// hand1.tooltipText = "{value}";
						
						var hand2 = chart.hands.push(new am4charts.ClockHand());
						hand2.fill = sCol;
						hand2.stroke = sCol;
						hand2.value = sVal;
						hand2.innerRadius = am4core.percent(58);
						hand2.radius = am4core.percent(105);
						hand2.startWidth = 2;
						hand2.pin.disabled = true;
						// hand2.tooltipText = "{value}";
					});
        }
    }
    customElements.define("com-dtt-amgauge", Amchart);
})();
