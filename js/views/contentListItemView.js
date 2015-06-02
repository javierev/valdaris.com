window.ValdarisApp = window.ValdarisApp || {};

window.ValdarisApp.ContentListItemView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($('#template-list-content').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template({
			title: this.model.get('title')
		}));
	}
});