define([
	'underscore',
	'backbone'
	// 'models/FilterModel'
], function(_, Backbone
	
	) {
   	var MatchModel = Backbone.Model.extend({
   		defaults: {
   			id: ''
   		}
   	});

    var Domains = Backbone.Collection.extend({
		
		model: MatchModel, 

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