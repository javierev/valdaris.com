ValdarisApp.Router = Backbone.Router.extend({
	routes : {
		'' : '_listado',
		'detalle/:nombre' : '_detalle',
		'*notFound' : '_notFound'
	},
	initialize: function() {
		ValdarisApp.contentsList = new ValdarisApp.Contents();
		this.listView = new ValdarisApp.ContentsView({
			collection:ValdarisApp.contentsList
		});
	},
	_listado: function() {

	},
	_detalle: function() {
	
	},
	_notFound: function() {
		
	}
})