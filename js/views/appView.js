define([
	'jquery',
	'underscore',
	'backbone',

	'views/PersonsView',
	'views/DomainFilter',
	'views/ImportView',
	'views/MatchFilter',
	'views/SettingsView',
	'views/SettingsToggle'

], function(
	$, _, Backbone, 
	PersonsView,
	DomainFilter,
	ImportView,
	MatchFilter,
	SettingsView,
	SettingsToggle
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
				}),

				settingsView: new SettingsView({
					model: this.model
				}),

				settingsToggle: new SettingsToggle({
					model: this.model
				})
			};
		}
	});
   
	return AppView;
});