(function () {
	let template = document.createElement("template");
	template.innerHTML = `<form id="form">
		<fieldset>
			<legend style="font-family: calibri; font-weight:bold;">Bullet Chart Properties</legend>
			<table style="width: 100%; font-family: calibri;">
				<tr>
					<td>
						<div>Data:</div>
						<div>
							<textarea id="builder_data"style="min-height: 150px;width: 100%;">[{"min":0, "max":100, "format": "#'%'", "chdata":{"category": "KPI1", "value": 65, "median": 18, "prior":30, "2yprior":90}},{"min":-10, "max":110, "format": "#,###", "chdata":{"category": "KPI2", "value": -5, "median": 88, "prior":30, "2yprior":90}}]</textarea>
						</div>
						<div>
							<button type="button" id="builder_data_submit">Set Data</button>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<br/><div>
							<b>Define Colors</b>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div>Base color:</div>
						<input id="builder_bscol"type="color"value="#046a38">
					</td>
				</tr>
				<tr>
					<td>
						<div>Median color:</div>
						<input id="builder_medcol"type="color"value="#7c7c7c">
					</td>
				</tr>
				<tr>
					<td>
						<div>Base PY color:</div>
						<input id="builder_bpycol"type="color"value="#007cb0">
					</td>
				</tr>
				<tr>
					<td>
						<div>Base 2PY color:</div>
						<input id="builder_b2pycol"type="color"value="#86bc25">
					</td>
				</tr>
				
		</fieldset>
	</form>
	<style>:host{display:block;padding:1em 1em 1em 1em;} input:out-of-range{background-color:rgba(255,0,0,0.25);}</style>`;
	class AMBullet_Bps extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({
					mode: "open"
				});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
			this._shadowRoot.getElementById("builder_data_submit").addEventListener("click", this._formSubmit.bind(this));
			this._shadowRoot.getElementById("builder_bscol").addEventListener("change", this._formSubmit.bind(this));
			this._shadowRoot.getElementById("builder_medcol").addEventListener("change", this._formSubmit.bind(this));
			this._shadowRoot.getElementById("builder_bpycol").addEventListener("change", this._formSubmit.bind(this));
			this._shadowRoot.getElementById("builder_b2pycol").addEventListener("change", this._formSubmit.bind(this));
		}
		_formSubmit(e) {
			e.preventDefault();
			this._shadowRoot.getElementById("form").dispatchEvent(new Event('submit'));
		}
		_submit(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							Data: this.Data,
							BsCol: this.BsCol,
							MedCol: this.MedCol,
							BpyCol: this.BpyCol,
							B2pyCol: this.B2pyCol
						}
					}
				}));
		}
		set Data(newVal) {
			this._shadowRoot.getElementById("builder_data").value = newVal;
		}
		get Data() {
			return this._shadowRoot.getElementById("builder_data").value;
		}
		set BsCol(newColor) {
			this._shadowRoot.getElementById("builder_bscol").value = newColor;
		}
		get BsCol() {
			return this._shadowRoot.getElementById("builder_bscol").value;
		}
		set MedCol(newColor) {
			this._shadowRoot.getElementById("builder_medcol").value = newColor;
		}
		get MedCol() {
			return this._shadowRoot.getElementById("builder_medcol").value;
		}
		set BpyCol(newColor) {
			this._shadowRoot.getElementById("builder_bpycol").value = newColor;
		}
		get BpyCol() {
			return this._shadowRoot.getElementById("builder_bpycol").value;
		}
		set B2pyCol(newColor) {
			this._shadowRoot.getElementById("builder_b2pycol").value = newColor;
		}
		get B2pyCol() {
			return this._shadowRoot.getElementById("builder_b2pycol").value;
		}

	}
	customElements.define("com-dtt-ambullet-bps", AMBullet_Bps);
})();
