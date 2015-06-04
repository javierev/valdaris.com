window.ValdarisApp = window.ValdarisApp || {};

window.ValdarisApp.ContentDetailView = Backbone.View.extend({
	el: '#main_content',
	template : _.template($('#template-content').html()),
	initialize: function() {
		this.render();
	},
	render : function() {
		this.$el.html(this.template(this.model.toJSON()));
	}
})