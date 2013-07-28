define([
	'underscore',
	'backbone',

	'collections/PersonCollection',
	'collections/DomainsCollection'
], function(_, Backbone, 
		PersonCollection,
		DomainsCollection
	) {

	var AppModel = Backbone.Model.extend({
		defaults: {
			workers: new PersonCollection(),
			domains: new DomainsCollection([
				// { domain: "JS" } , 
				// { domain: "NET" },
				// { domain: "RoR" },
				// { domain: "JAVA" },
				// { domain: "ALM" }
			])
		},

		// safe: 'matchBacklog',

		initialize: function() {
			
		}
	});

	return AppModel;
});