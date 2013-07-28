define([
	'underscore',
	'backbone'
], function(_, Backbone) {
   
    var SettingsModel = Backbone.Model.extend({
		defaults: {
			backlog_url: '',
			show_settings: false
		},

		// safe: 'settings'
	});
   
    return SettingsModel;
});