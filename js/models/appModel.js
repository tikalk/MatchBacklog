define([
	'underscore',
	'backbone',

	'collections/PersonCollection',
	'collections/DomainsCollection',
	'collections/MatchCollection',

	'models/SettingsModel'
], function(_, Backbone, 
		PersonCollection,
		DomainsCollection,
		MatchCollection,

		SettingsModel
	) {

	var AppModel = Backbone.Model.extend({
		defaults: {
			workers: new PersonCollection(),
			domains: new DomainsCollection(),
			match: new MatchCollection(),
			settings: new SettingsModel()
		},

		// safe: 'matchBacklog',

		initialize: function() {
			
		}
	});

	return AppModel;
});