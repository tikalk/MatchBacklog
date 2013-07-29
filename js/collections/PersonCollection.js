define([
	'underscore',
	'backbone',
	'models/PersonModel'
], function(_, Backbone, PersonModel) {
   
    var PersonCollection = Backbone.Collection.extend({
		model: PersonModel,
		
		url: '/get-workers.php',

		initialize: function() {
			// this.listenTo(this, 'reset', this.updatePlayedId);
		}
	});
   
    return PersonCollection; 
});