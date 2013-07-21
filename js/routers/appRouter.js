define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {
   
    var AppRouter = Backbone.Router.extend({

		routes: {
			'': 'showDashboard'
		},

		initialize: function(attributes) {
			this.model = attributes.model;
			Backbone.history.start();
		},

		showDashboard: function() {
			
		}
	});
   
    return AppRouter;
});