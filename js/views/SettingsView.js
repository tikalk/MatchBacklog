define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone
	
	) {
	
	var SettingsView = Backbone.View.extend({

		el: '#settings',

		events: {
			'submit': 'handleSubmit',
			'click .close': 'close'
		},

		initialize: function() {
			this.toggle();
			this.listenTo(this.model.get('settings'), 'change:show_settings', this.toggle);
		},

		handleSubmit: function(ev){
			ev.preventDefault();
			// update all models
			this.model.get('settings').set({
				backlog_url: this.$('.url').val()
			});
			this.close();
		},
		close: function(ev){
			this.model.get('settings').set('show_settings', false);
		},
		
		toggle: function(){
			this.$el.toggleClass('hide', !this.model.get('settings').get('show_settings'));
		}

	});

	return SettingsView;
});