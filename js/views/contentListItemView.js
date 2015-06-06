window.ValdarisApp = window.ValdarisApp || {};

window.ValdarisApp.ContentListItemView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($('#template-list-content').html()),
	initialize: function() {
		this.render();
	},
	events : {
		'click a' : function(e) {
			e.preventDefault();
		},
		'click' : function(e) {
			e.stopPropagation();
			this.trigger('seeContents', this.model);
		}
	},
	render: function() {
		this.$el.html(this.template({
			title: this.model.get('title')
		}));
	}
});