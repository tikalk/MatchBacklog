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
			recruit: new FilterCollection(),
			types: new FilterCollection(),
			settings: new SettingsModel()
		},

		// safe: 'matchBacklog',

		initialize: function() {
			this.get('recruit').labelsMap = {
				"hired": "Tikal",
				"": "Empty"
			};

			this.get('types').labelsMap = {
				"1": "candidate",
				"2": "match",
				"3": "lead"
			}
		}
	});

	return AppModel;
});