sap.ui.controller("poapproval.itemDetails", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf poapproval.itemDetails
*/
	onInit: function() {
		/*var sServiceUrlPo = "proxy/http/122.165.148.177:8000/sap/opu/odata/sap/ZPO_FINAL_SRV";
		var user = "sapdev";
		var pass = "admin@123";

		var oModelPo = new sap.ui.model.odata.ODataModel(sServiceUrlPo, true, user,	pass);
		var oJsonModel = new sap.ui.model.json.JSONModel(oModelPo);
		oModelPo.read("/PurchaseOrderHeaderCollection",null,null,true,function(oData,response) {
			oJsonModel.setData(oData);
		});
		this.getView().setModel(oJsonModel1);
console.log(oJsonModel);*/

		
	},

	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf poapproval.itemDetails
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf poapproval.itemDetails
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf poapproval.itemDetails
*/
//	onExit: function() {
//
//	}

});