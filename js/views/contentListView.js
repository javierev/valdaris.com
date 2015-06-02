window.ValdarisApp = window.ValdarisApp || {};

window.ValdarisApp.ContentListView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($('#template-list-content').html()),
	render: function() {
		this.$el.html(this.template({
			titulo: this.model.get('titulo')
		}));
	}
});