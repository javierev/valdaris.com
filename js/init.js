(function($, app) {
	
	//Backbone.js initialization
	var router = new ValdarisApp.Router();

	$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

})(jQuery, window.ValdarisApp);