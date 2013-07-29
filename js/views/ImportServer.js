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

		importFromServer: function(ev){
			this.model.fetch();
		}
	});

	return ImportServer;
});