define([
	'underscore',
	'backbone',

	'collections/PersonCollection',
	'collections/DomainsCollection',
	'collections/MatchCollection'
], function(_, Backbone, 
		PersonCollection,
		DomainsCollection,
		MatchCollection
	) {

	var AppModel = Backbone.Model.extend({
		defaults: {
			workers: new PersonCollection(),
			domains: new DomainsCollection(),
			match: new MatchCollection()
		},

		// safe: 'matchBacklog',

		initialize: function() {
			
		}
	});

	return AppModel;
});