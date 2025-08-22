sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (UIComponent, JSONModel, ResourceModel) => {
	"use strict";

	return UIComponent.extend("ui5.databinding.Component", {
		metadata: {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		},

		init: function () {
			UIComponent.prototype.init.apply(this, arguments);

			// Cargar y asignar el modelo JSON
			const oModel = new JSONModel();
			oModel.loadData("model/data.json", null, false); // <--- carga síncrona
			this.setModel(oModel);
			// Configurar el modelo de recursos para internacionalización
			const i18nModel = new ResourceModel({
				bundleName: "ui5.databinding.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
		}
	});
});