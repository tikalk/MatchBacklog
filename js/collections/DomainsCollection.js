define([
	'underscore',
	'backbone',
	'models/FilterModel'
], function(_, Backbone,
	FilterModel
	) {
   
    var Domains = Backbone.Collection.extend({
		
		model: FilterModel, 

		initialize: function() {
			// this.listenTo(this, 'reset', this.updatePlayedId);
		},

		update: function(val, add) {
			if (add) {
				this.add({
					id: val
				});
				return;
			}
			this.remove({
				id: val
			});
		}
	});
   
    return Domains; 
});