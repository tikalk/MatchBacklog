define([
	'jquery',
	'underscore',
	'backbone',

	'views/PersonsView',
	'views/ImportView',
	'views/SettingsView',
	'views/SettingsToggle',
	'views/ui/Filter',

], function(
	$, _, Backbone, 
	PersonsView,
	ImportView,
	SettingsView,
	SettingsToggle,

	Filter
	) {
   
	var AppView = Backbone.View.extend({
		el: '.container',
		
		initialize: function() {
			this.views = {
				workers: new PersonsView({ 
					model: this.model,
					collection: this.model.get('workers')
				}),

				domainFilter: new Filter({
					el: '#domain-filter',
					collection: this.model.get('workers'),
					filters: this.model.get('domains'),
					filter: 'domain'
				}),

				importView: new ImportView({
					model: this.model
				}),

				matchFilter: new Filter({
					el: '#match-filter',
					collection: this.model.get('workers'),
					filters: this.model.get('match'),
					filter: 'match_status'
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