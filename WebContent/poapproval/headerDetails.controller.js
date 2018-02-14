sap.ui.controller("poapproval.headerDetails", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf poapproval.headerDetails
*/
	onInit: function() {
		//hello world
		var sServiceUrlPo = "proxy/http/122.165.148.177:8000/sap/opu/odata/sap/ZPO_FINAL_SRV";
		var user = "sapdev";
		var pass = "admin@123";

		var oModelPo = new sap.ui.model.odata.ODataModel(
				sServiceUrlPo, true, user,
				pass);
		var oJsonModel = new sap.ui.model.json.JSONModel(
				oModelPo);
		oModelPo
				.read(
						"/PurchaseOrderHeaderCollection",
						null,
						null,
						true,
						function(oData,
								response) {
							oJsonModel
									.setData(oData);
						});
console.log(oJsonModel);
		sap.ui.getCore().setModel(oJsonModel,"header");
	},

	hitSearch : function(oEvent){
		var aFilters = [];
		var sQuery = oEvent.getSource().getValue();
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("PONumber", sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
					}
		var list = this.getView().byId("idList");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");
		/*var searchField = oEvent.getParameter("query");
		var oList = this.getView().byId("idList");
		var oFilter = new sap.ui.model.Filter("PONumber",sap.ui.model.FilterOperator.Contains,searchField);
		var aFilter = [oFilter];
		oList.getBinding("items").filter(aFilter);*/
	},
	itemPress: function(oEvent){
		debugger
		//var path = oEvent.getParameter("listItem").getBindingContextPath();
		var po = oEvent.getParameter("listItem").getProperty("title");
		console.log(po);
		/*var extra = "/PurchaseOrderItem/results/";
		var path = path + extra;*/
		/*var extra = path.getProperty("POItem");
		console.log(extra);*/
		var oApp = sap.ui.getCore().byId("idApp");
		/*var oView2 = sap.ui.getCore().byId("idItemDetails1");
		oView2.bindElement(path);*/
		//this.getView().getModel()
		var sServiceUrlPo = "proxy/http/122.165.148.177:8000/sap/opu/odata/sap/ZPO_FINAL_SRV";
		var user = "sapdev";
		var pass = "admin@123";

		var oPo = new sap.ui.model.json.JSONModel();
		oPo.setData({
			po : po
		});

		sap.ui.getCore().setModel(oPo,"po");
        
		var oModelPo = new sap.ui.model.odata.ODataModel(sServiceUrlPo, true, user,	pass);
		var oJsonModel = new sap.ui.model.json.JSONModel(oModelPo);
		/*var surya = this.getView().byId("po").getValue();
		var surya = surya;
		console.log(surya)*/
		oModelPo.read("/PurchaseOrderHeaderCollection('" + po + "')?$expand=PurchaseOrderItem",null,null,true,function(oData,response) {
							oJsonModel.setData(oData);
						});
		sap.ui.getCore().setModel(oJsonModel,"items");
		
		oApp.to("idItemDetails1","flip");
	}
/* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf poapproval.headerDetails
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf poapproval.headerDetails
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf poapproval.headerDetails
*/
//	onExit: function() {
//
//	}

});