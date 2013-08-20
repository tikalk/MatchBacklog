define([
	'underscore',
	'backbone'
], function(_, Backbone) {
   
    var FilterModel = Backbone.Model.extend({
		defaults: {
			id: '',
			// displayed label for rendering
			label: ''
		}
	});
   
    return FilterModel;
});