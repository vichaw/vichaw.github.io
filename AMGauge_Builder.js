(function () {
	let template = document.createElement("template");
	template.innerHTML = `<form id="form">
							<fieldset>
							<legend style="font-family: calibri; font-weight:bold;">Gauge Properties</legend>
							<table style="font-family: calibri">
								<tr>
									<td>Primary Value</td>
									<td>
										<input id="builder_prval" type="number" size="5" maxlength="5" value="55">
									</td>
								</tr>
								<tr>
									<td>Secondary Value</td>
									<td>
										<input id="builder_scval" type="number" size="5" maxlength="5" value="45">
									</td>
								</tr>
								<tr>
									<td>Scale Min Value</td>
									<td>
										<input id="builder_minval" type="number" size="5" maxlength="5" value="0">
									</td>
								</tr>
								<tr>
									<td>Scale Max Value</td>
									<td>
										<input id="builder_maxval" type="number" size="5" maxlength="5" value="100">
									</td>
								</tr>
								<tr>
									<td>Set Range1 Start Value</td>
									<td>
										<input id="builder_r1stval" type="number" size="5" maxlength="5" value="0">
									</td>
									<td>End Value</td>
									<td>
										<input id="builder_r1edval" type="number" size="5" maxlength="5" value="45">
									</td>
								</tr>
								<tr>
									<td>Set Range2 Start Value</td>
									<td>
										<input id="builder_r2stval" type="number" size="5" maxlength="5" value="45">
									</td>
									<td>End Value</td>
									<td>
										<input id="builder_r2edval" type="number" size="5" maxlength="5" value="75">
									</td>
								</tr>
								<tr>
									<td>Set Range3 Start Value</td>
									<td>
										<input id="builder_r3stval" type="number" size="5" maxlength="5" value="75">
									</td>
									<td>End Value</td>
									<td>
										<input id="builder_r3edval" type="number" size="5" maxlength="5" value="100">
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
										<div>Primary color:</div>
									</td>
									<td>
										<input id="builder_prcol"type="color"value="#FFFFFF">
									</td>
								</tr>
								<tr>
									<td>
										<div>Secondary color:</div>
									</td>
									<td>
										<input id="builder_sccol"type="color"value="#FFFF00">
									</td>
								</tr>
								<tr>
									<td>
										<div>Range1 color:</div>
									</td>
									<td>
										<input id="builder_r1col"type="color"value="#DA291C">
									</td>
								</tr>
								<tr>
									<td>
										<div>Range2 color:</div>
									</td>
									<td>
										<input id="builder_r2col"type="color"value="#FFCD00">
									</td>
								</tr>
								<tr>
									<td>
										<div>Range3 color:</div>
									</td>
									<td>
										<input id="builder_r3col"type="color"value="#43B02A">
									</td>
								</tr>
							</table>
							<input type="submit" style="display:none;">
							</fieldset>
						</form>
						<style>
							:host {
							display: block;
							padding: 1em 1em 1em 1em;
							}
							td{
								padding: 5px;
							}
						</style>`;
	class AMGauge_Bps extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({
					mode: "open"
				});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
			this._shadowRoot.getElementById("builder_prval").addEventListener("input", this._formSubmit.bind(this));
			this._shadowRoot.getElementById("builder_scval").addEventListener("input", this._formSubmit.bind(this));
			this._shadowRoot.getElementById("builder_minval").addEventListener("input", this._formSubmit.bind(this));
			this._shadowRoot.getElementById("builder_maxval").addEventListener("input", this._formSubmit.bind(this));
			this._shadowRoot.getElementById("builder_r1stval").addEventListener("input", this._formSubmit.bind(this));
			this._shadowRoot.getElementById("builder_r1edval").addEventListener("input", this._formSubmit.bind(this));
			this._shadowRoot.getElementById("builder_r2stval").addEventListener("input", this._formSubmit.bind(this));
			this._shadowRoot.getElementById("builder_r2edval").addEventListener("input", this._formSubmit.bind(this));
			this._shadowRoot.getElementById("builder_r3stval").addEventListener("input", this._formSubmit.bind(this));
			this._shadowRoot.getElementById("builder_r3edval").addEventListener("input", this._formSubmit.bind(this));
			this._shadowRoot.getElementById("builder_prcol").addEventListener("change", this._formSubmit.bind(this));
			this._shadowRoot.getElementById("builder_sccol").addEventListener("change", this._formSubmit.bind(this));
			this._shadowRoot.getElementById("builder_r1col").addEventListener("change", this._formSubmit.bind(this));
			this._shadowRoot.getElementById("builder_r2col").addEventListener("change", this._formSubmit.bind(this));
			this._shadowRoot.getElementById("builder_r3col").addEventListener("change", this._formSubmit.bind(this));
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
							PrimValue: this.PrimValue,
							SecValue: this.SecValue,
							GaugeScaleStart: this.GaugeScaleStart,
							GaugeScaleEnd: this.GaugeScaleEnd,
							Rng1Start: this.Rng1Start,
							Rng1End: this.Rng1End,
							Rng2Start: this.Rng2Start,
							Rng2End: this.Rng2End,
							Rng3Start: this.Rng3Start,
							Rng3End: this.Rng3End,
							Rng1Col: this.Rng1Col,
							Rng2Col: this.Rng2Col,
							Rng3Col: this.Rng3Col,
							PrimCol: this.PrimCol,
							SecCol: this.SecCol
						}
					}
				}));
		}
		set PrimValue(newVal) {
			this._shadowRoot.getElementById("builder_prval").value = newVal;
		}
		get PrimValue() {
			return this._shadowRoot.getElementById("builder_prval").valueAsNumber;
		}
		set SecValue(newVal) {
			this._shadowRoot.getElementById("builder_scval").value = newVal;
		}
		get SecValue() {
			return this._shadowRoot.getElementById("builder_scval").valueAsNumber;
		}
		set GaugeScaleStart(newVal) {
			this._shadowRoot.getElementById("builder_minval").value = newVal;
		}
		get GaugeScaleStart() {
			return this._shadowRoot.getElementById("builder_minval").valueAsNumber;
		}
		set GaugeScaleEnd(newVal) {
			this._shadowRoot.getElementById("builder_maxval").value = newVal;
		}
		get GaugeScaleEnd() {
			return this._shadowRoot.getElementById("builder_maxval").valueAsNumber;
		}
		set Rng1Start(newVal) {
			this._shadowRoot.getElementById("builder_r1stval").value = newVal;
		}
		get Rng1Start() {
			return this._shadowRoot.getElementById("builder_r1stval").valueAsNumber;
		}
		set Rng1End(newVal) {
			this._shadowRoot.getElementById("builder_r1edval").value = newVal;
		}
		get Rng1End() {
			return this._shadowRoot.getElementById("builder_r1edval").valueAsNumber;
		}
		set Rng2Start(newVal) {
			this._shadowRoot.getElementById("builder_r2stval").value = newVal;
		}
		get Rng2Start() {
			return this._shadowRoot.getElementById("builder_r2stval").valueAsNumber;
		}
		set Rng2End(newVal) {
			this._shadowRoot.getElementById("builder_r2edval").value = newVal;
		}
		get Rng2End() {
			return this._shadowRoot.getElementById("builder_r2edval").valueAsNumber;
		}
		set Rng3Start(newVal) {
			this._shadowRoot.getElementById("builder_r3stval").value = newVal;
		}
		get Rng3Start() {
			return this._shadowRoot.getElementById("builder_r3stval").valueAsNumber;
		}
		set Rng3End(newVal) {
			this._shadowRoot.getElementById("builder_r3edval").value = newVal;
		}
		get Rng3End() {
			return this._shadowRoot.getElementById("builder_r3edval").valueAsNumber;
		}
		set Rng1Col(newColor) {
			this._shadowRoot.getElementById("builder_r1col").value = newColor;
		}
		get Rng1Col() {
			return this._shadowRoot.getElementById("builder_r1col").value;
		}
		set Rng2Col(newColor) {
			this._shadowRoot.getElementById("builder_r2col").value = newColor;
		}
		get Rng2Col() {
			return this._shadowRoot.getElementById("builder_r2col").value;
		}
		set Rng3Col(newColor) {
			this._shadowRoot.getElementById("builder_r3col").value = newColor;
		}
		get Rng3Col() {
			return this._shadowRoot.getElementById("builder_r3col").value;
		}
		set PrimCol(newColor) {
			this._shadowRoot.getElementById("builder_prcol").value = newColor;
		}
		get PrimCol() {
			return this._shadowRoot.getElementById("builder_prcol").value;
		}
		set SecCol(newColor) {
			this._shadowRoot.getElementById("builder_sccol").value = newColor;
		}
		get SecCol() {
			return this._shadowRoot.getElementById("builder_sccol").value;
		}

	}
	customElements.define("com-dtt-amgauge-bps", AMGauge_Bps);
})();
