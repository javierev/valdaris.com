window.ValdarisApp = window.ValdarisApp || {};

window.ValdarisApp.Contents = Backbone.Collection.extend({
	url: 'http://valdaris.com/contents.php',
	model: window.ValdarisApp.Content
})