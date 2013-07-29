define([
	'underscore',
	'backbone',

	'collections/PersonCollection',
	'collections/FilterCollection',

	'models/SettingsModel'
], function(_, Backbone, 
		PersonCollection,
		FilterCollection,
		
		SettingsModel
	) {

	var AppModel = Backbone.Model.extend({
		defaults: {
			workers: new PersonCollection(),
			domains: new FilterCollection(),
			match: new FilterCollection(),
			settings: new SettingsModel()
		},

		// safe: 'matchBacklog',

		initialize: function() {
			
		}
	});

	return AppModel;
});