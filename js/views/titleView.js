window.ValdarisApp = window.ValdarisApp || {};

window.ValdarisApp.TitleView = Backbone.View.extend({
	el: '#page-title',
	template: _.template($('#template-title').html()),
	initialize: function(params) {
		this.model = params.model || new ValdarisApp.TitleModel();
		this.render();
	},
	events : {
		'click #menutoggle' : function(e) {
			e.preventDefault();
			this.toggleSidebar();
		}
	},
	render: function() {
		var self = this;
		var html = this.template(self.model.attributes);
		console.log(html);
		this.$el.prepend(html);
		return this;
	},
	toggleSidebar: function() {
		$("#wrapper").toggleClass("toggled");
	}
})