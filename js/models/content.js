window.ValdarisApp = window.ValdarisApp || {};

window.ValdarisApp.Content = Backbone.Model.extend({
	defaults : {
		title:null,
		secondTitle:null,
		imgUrl:null,
		content:null,
		imageCredit:null
	}
})