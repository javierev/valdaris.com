window.ValdarisApp = window.ValdarisApp || {};

window.ValdarisApp.ContentDetailView = Backbone.View.extend({
	el: '#main_content',
	template: _.template($('#template-content').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		this.$el.show();
	},
	close: function() {
		//remove event listeners, but there isn't any
		this.$el.hide();
	}
})