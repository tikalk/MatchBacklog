define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone

	) {
	
	var DomainFilter = Backbone.View.extend({

		el: '#domain-filter',

		events: {
			"mouseup .btn": "onFilterClick"
		},

		initialize: function() {
		},

		onFilterClick: function (ev) {
			var filter = $(ev.target).val();
			var enable = !$(ev.target).hasClass('active');
			this.model.get('domains').update(filter, enable);
		}
	});

	return DomainFilter;
});