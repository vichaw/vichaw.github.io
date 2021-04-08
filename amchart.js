(function() {

	let src1="https://www.amcharts.com/lib/3/amcharts.js"
	let src2="https://www.amcharts.com/lib/3/gauge.js"
	let src3="https://www.amcharts.com/lib/3/themes/dark.js"

	let script1 = document.createElement('script');
	let script2 = document.createElement('script');
	let script3 = document.createElement('script');

	script1.type = 'text/javascript';
	script2.type = 'text/javascript';
	script3.type = 'text/javascript';

	script1.src = src1;
	script2.src = src2;
	script3.src = src3;

    let template = document.createElement("template");
    template.innerHTML = `
		<style>
			.amcharts-chart-div>a{
				visibility: hidden;
			}
			h1.hidden {
				visibility: hidden;
			}
		</style>
		<div id="chartdiv" style="width: 100% !important; height: 400px !important; background-color: #282828 !important;" ></div>
		`;
    class Amchart extends HTMLElement {
        constructor() {
            super();

            let shadowRoot = this.attachShadow({
                mode: "open"
            });
            this._shadowRoot = shadowRoot;
            shadowRoot.appendChild(template.content.cloneNode(true));
            this.addEventListener("click", event => {
                var event = new Event("onClick");
                this.dispatchEvent(event);
            });
            this.loadAmchartLibraires();           
            
            this._props = {};
            this._firstConnection = false;
        }
       
         //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this._firstConnection = true;
            this.loadAmchartLibraires();           
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
            debugger;
             if(this._firstConnection){
             	//this.loadAmchart();  
             }
        }

        loadAmchartLibraires(){
        	script1.addEventListener("load", event=>{
            	console.log(event);
            	this.amchartsLoaded = true;	
            	this._shadowRoot.appendChild(script2);
            });

            script2.addEventListener("load", event=>{
            	console.log(event);
            	this._shadowRoot.appendChild(script3);
            });

            script3.addEventListener("load", event=>{
            	console.log(event);
            	this.loadAmchart();
            });

			this._shadowRoot.appendChild(script1);
			if(this.amchartsLoaded){
				this.loadAmchart();
			}
        }

        loadAmchart(){
        	debugger;
        	this.guage2 = AmCharts.makeChart("chartdiv",
				{
					"type": "gauge",
					"minRadius": 34,
					"fontFamily": "Calibri",
					"hideBalloonTime": 0,
					"theme": "dark",
					"arrows": [
						{
							"id": "Actual",
							"innerRadius": "32%",
							"nailRadius": 22,
							"radius": "93%",
							"startWidth": 8,
							"color": "#FFFFFF",
							"value": 60
						},
						{
							"color": "#FFFF00",
							"id": "Plan",
							"innerRadius": "62%",
							"radius": "105%",
							"startWidth": 2,
							"value": 50
						}
					],
					"axes": [
						{
							"axisThickness": 1,
							"bottomText": "50",
							"bottomTextFontSize": 36,
							"bottomTextYOffset": -125,
							"endAngle": 90,
							"endValue": 100,
							"fontSize": 14,
							"id": "GaugeAxis-1",
							"minorTickLength": 0,
							"radius": "98%",
							"startAngle": -90,
							"tickLength": 10,
							"valueInterval": 20,
							"bands": [
								{
									"color": "#008000",
									"endValue": 40,
									"id": "GaugeBand-1",
									"innerRadius": "65%",
									"startValue": 0,
									"balloonText": "Plan:50"
								},
								{
									"color": "#00CC00",
									"endValue": 75,
									"id": "GaugeBand-2",
									"innerRadius": "65%",
									"startValue": 40,
									"balloonText": "Plan:50"
								},
								{
									"color": "#00EE00",
									"endValue": 100,
									"id": "GaugeBand-3",
									"innerRadius": "65%",
									"startValue": 75,
									"balloonText": "Plan:50"
								}
							]
						}
					],
					"allLabels": [],
					"balloon": {},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Speedometer"
						}
					]
				}
			);
			//this.guage2.write("chartdiv2");
			// if(AmCharts.isReady){
			// 	this.guage2.write("chartdiv");	
			// }else{
			// 	AmCharts.ready(function () {
            //     	this.guage2.write("chartdiv");	
            // 	});
			// }
        }
    }
    customElements.define("com-dtt-amchart", Amchart);
})();