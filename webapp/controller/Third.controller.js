sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
],
    function (Controller, JSONModel,MessageToast,MessageBox) {
        "use strict";

        return Controller.extend("com.demo.demo.controller.Third", {
            onInit: function () {


            },

            onPressThird: function()
            {

                this.getOwnerComponent().getTargets().display("Third");

            }
          
        });
    });
