define([
	'underscore',
	'backbone',

	'collections/PersonCollection'
], function(_, Backbone, 
		PersonCollection
	) {

	var AppModel = Backbone.Model.extend({
		defaults: {
			workers: new PersonCollection()
		},

		safe: 'matchBacklog',

		initialize: function() {
			
		}
	});

	return AppModel;
});