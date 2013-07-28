define([
	'jquery',
	'underscore',
	'backbone',

	'views/PersonsView',
	'views/DomainFilter',
	'views/ImportView',
	'views/MatchFilter'
], function(
	$, _, Backbone, 
	PersonsView,
	DomainFilter,
	ImportView,
	MatchFilter
	) {
   
	var AppView = Backbone.View.extend({
		el: '.container',
		
		initialize: function() {
			this.views = {
				workers: new PersonsView({ 
					model: this.model,
					collection: this.model.get('workers')
				}),

				domainFilter: new DomainFilter({
					model: this.model
				}),

				importView: new ImportView({
					model: this.model
				}),

				matchFilter: new MatchFilter({
					model: this.model
				})
			};
		}
	});
   
	return AppView;
});