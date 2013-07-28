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
			this.renderUrl();
			this.listenTo(this.model, 'change:show_settings', this.toggle);
		},

		renderUrl: function(){
			this.$('.url').val(this.model.get('backlog_url'));
		},

		handleSubmit: function(ev){
			ev.preventDefault();
			// update all models
			this.model.set({
				backlog_url: this.$('.url').val()
			});
			this.close();
		},
		close: function(ev){
			this.model.set('show_settings', false);
		},
		
		toggle: function(){
			this.$el.toggleClass('hide', !this.model.get('show_settings'));
		}

	});

	return SettingsView;
});