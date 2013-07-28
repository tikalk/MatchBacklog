define([
	'underscore',
	'backbone'
], function(_, Backbone) {
   
    var FilterModel = Backbone.Model.extend({
		defaults: {
			id: ''
		}
	});
   
    return FilterModel;
});