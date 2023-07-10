(function () {
	let template = document.createElement("template");
	template.innerHTML = `<form id="form">
		<fieldset>
			<legend style="font-family: calibri; font-weight:bold;">Network Graph Properties</legend>
			<table style="width: 100%; font-family: calibri;">
				<tr>
					<td>
						<div>Data:</div>
						<div>
							<textarea id="builder_data"style="min-height: 150px;width: 100%;">	</textarea>
						</div>
						<div>
							<button type="button" id="builder_data_submit">Set Data</button>
						</div>
					</td>
				</tr>
		</fieldset>
	</form>
	<style>:host{display:block;padding:1em 1em 1em 1em;} input:out-of-range{background-color:rgba(255,0,0,0.25);}</style>`;
	class NetworkGraph_Bps extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({
					mode: "open"
				});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
			this._shadowRoot.getElementById("builder_data_submit").addEventListener("click", this._formSubmit.bind(this));
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
							Data: this.Data
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

	}
	customElements.define("com-asml-network-bps", NetworkGraph_Bps);
})();
