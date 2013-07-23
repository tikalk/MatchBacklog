define([
	'jquery',
	'underscore',
	'backbone',

	'views/PersonsView'
], function(
	$, _, Backbone, 
	PersonsView
	) {
   
	var AppView = Backbone.View.extend({
		el: '.container',
		
		initialize: function() {
			this.views = {
				workers: new PersonsView({ 
					model: this.model,
					collection: this.model.get('workers')
				})
			};
		}
	});
   
	return AppView;
});