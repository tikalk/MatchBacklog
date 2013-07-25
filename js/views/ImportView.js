define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone

	) {
	
	var ImportView = Backbone.View.extend({

		el: '#import-manager',

		initialize: function() {
			this.$input = this.$('input');
			this.$input.on('change', _.bind(this.handleFileUpload, this));
		},

		handleFileUpload: function (ev) {
			var file = ev.target.files[0],
				reader = new FileReader();
			reader.onload = _.bind(function (event) {
				var json = _(event.target.result).csvToJSON();
				this.model.get('workers').reset(json.rows);
			}, this);
			reader.readAsText(file);
		}
	});

	return ImportView;
});