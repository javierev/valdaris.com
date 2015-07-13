window.ValdarisApp = window.ValdarisApp || {};

window.ValdarisApp.Content = Backbone.Model.extend({
	defaults : {
		title:null,
		secondTitle:null,
		imgUrl:null,
		imgAlignment:'right',
		content:null,
		imageCredit:null
	}
})