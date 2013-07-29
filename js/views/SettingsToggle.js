define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone
	
	) {
	
	var SettingsToggle = Backbone.View.extend({

		el: '#settings-toggle',

		events: {
			'click': 'toggleSettings'
		},

		initialize: function() {

		},

		toggleSettings: function(ev){
			this.model.get('settings').set({
				show_settings: !this.model.get('settings').get('show_settings')
			})
		}

	});

	return SettingsToggle;
});