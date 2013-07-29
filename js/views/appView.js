define([
	'jquery',
	'underscore',
	'backbone',

	'views/PersonsView',
	'views/ImportView',
	'views/ImportServer',
	'views/SettingsView',
	'views/SettingsToggle',
	'views/ui/Filter',

], function(
	$, _, Backbone, 
	PersonsView,
	ImportView,
	ImportServer,
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

				importServer: new ImportServer({
					model: this.model.get('workers')
				}),

				matchFilter: new Filter({
					el: '#match-filter',
					collection: this.model.get('workers'),
					filters: this.model.get('match'),
					filter: 'match_status'
				}),

				settingsView: new SettingsView({
					model: this.model.get('settings')
				}),

				settingsToggle: new SettingsToggle({
					model: this.model
				})
			};
		}
	});
   
	return AppView;
});