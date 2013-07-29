define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone

	) {
	
	var ImportServer = Backbone.View.extend({

		el: '#import-server',

		events: {
			'click': 'importFromServer'
		},

		initialize: function(){
			this.listenTo(this.collection, 'sync', this.removeLoading);
		},

		importFromServer: function(ev){
			this.renderLoading();
			this.collection.fetch();
		},

		renderLoading: function(){
			this.$el.addClass('loading');
		},

		removeLoading: function(){
			this.$el.removeClass('loading');
		}
	});

	return ImportServer;
});