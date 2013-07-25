define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone

	) {
	
	var DomainFilter = Backbone.View.extend({

		el: '#domain-filter',

		events: {
			"click .btn-group .btn": "onFilterClick",
			"click [value='clear']": "clearFilter"
		},

		initialize: function() {
		},

		onFilterClick: function (ev) {
			var filter = $(ev.target).val();
			var enable = !$(ev.target).hasClass('active');
			this.model.get('domains').update(filter, enable);
		},

		clearFilter: function(ev){
			this.$('.btn-group .btn').removeClass('active');
			this.model.get('domains').reset();	
		}
	});

	return DomainFilter;
});