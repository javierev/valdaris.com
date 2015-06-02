window.ValdarisApp = window.ValdarisApp || {};

window.ValdarisApp.ContentsView = Backbone.View.extend({
	el: '#sidebar-wrapper',
	render: function() {
		var contentList = this.collection.map(this.renderModel, this);
		this.$('ul.sidebar-nav').html(contentList);
	},
	renderModel: function(model) {
		var contentListItemView = new window.ValdarisApp.ContentListItemView({
			model: model
		});
		return contentListItemView.el;
	}
})