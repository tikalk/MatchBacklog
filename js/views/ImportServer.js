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
		},

		handleFileUpload: function (ev) {
			var file = ev.target.files[0],
				reader = new FileReader(),
				settings = this.model.get('settings');
			reader.onload = _.bind(function (event) {
				var json = _(event.target.result).csvToJSON();
				// update json with backlog_url
				_.each(json.rows, function(row){
					row.backlog_url = settings.get('backlog_url');
				});
				// update the model 
				this.model.get('workers').reset(json.rows);
			}, this);
			reader.readAsText(file);
		}
	});

	return ImportServer;
});