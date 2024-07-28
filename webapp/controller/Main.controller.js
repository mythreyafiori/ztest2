sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
],
    function (Controller, JSONModel,MessageToast,MessageBox) {
        "use strict";

        return Controller.extend("com.demo.demo.controller.Main", {
            onInit: function () {


                // creating json model for storing data

                var oModel = new JSONModel();

                // assigning name for the json model
                this.getView().setModel(oModel, "demomodel");


            },

            ok: function()
            {

               var a = this.getView().getModel("demomodel").getData();
               var obj = [];
               obj.push(a);
               this.getView().getModel("Test").setData(obj);

            },


            submit: function () {


                var a = this.getView().getModel("demomodel").getData();
              //  MessageToast.show("Data loaded successfully");
             //   MessageBox.information("Project 1234567 was created and assigned to team \"ABC\".");

             this.getOwnerComponent().getTargets().display("Detail");
            }
        });
    });
