window.ValdarisApp = window.ValdarisApp || {};

window.ValdarisApp.Contents = Backbone.Collection.extend({
	//change this URL to make it work!
	url: 'http://localhost:8080/contents',
	model: window.ValdarisApp.Content
})