ValdarisApp.Router = Backbone.Router.extend({
	routes : {
		'' : '_list',
		'info/:id' : '_info',
		'*notFound' : '_notFound'
	},
	initialize: function() {
		ValdarisApp.contentsList = new ValdarisApp.Contents();
		ValdarisApp.contentsList.fetch().done(function() {
			Backbone.history.start();
		});
		this.listView = new ValdarisApp.ContentsView({
			collection:ValdarisApp.contentsList
		});
		this.listenTo(this.listView, 'seeContents', this._infoModel);
	},
	_list: function() {
		//Nothing to do here
	},
	_info: function(id) {
		//Close the current detail
		if (!!this.currentContent) {
			this.currentContent.close();
		}
		var item = ValdarisApp.contentsList.get(id);
		this._infoModel(item);
	},
	_infoModel: function(model) {
		if (!!model) {
			this.currentContent = new ValdarisApp.ContentDetailView({model:model});
			this.navigate('info/'+model.get('id'));
		} else {
			this._notFound();
		}
	},
	_notFound: function() {
		alert('not found!');
	}
})