sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], (UIComponent, JSONModel) => {
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
            oModel.loadData("model/data.json");
            this.setModel(oModel);
        }
    });
});