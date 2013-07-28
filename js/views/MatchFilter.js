define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/matchFilter.html'
], function($, _, Backbone,
	matchFilter
	) {
	
	var MatchFilter = Backbone.View.extend({

		el: '#match-filter',

		events: {
			"click .btn-group .btn": "onFilterClick",
			"click [value='clear']": "clearFilter"
		},

		template: _.template(matchFilter),

		initialize: function() {
			this.$filters = this.$('.btn-group');
			this.listenTo(this.model.get('workers'), 'reset add remove change', this.renderFilters);
			// active filters model
			this.listenTo(this.model.get('match'), 'reset add remove', this.updateFilterState);
		},

		renderFilters: function(){
			var domains = _.chain(this.model.get('workers').toJSON())
				.pluck('match_status')
				.uniq()
				.value();

			this.$filters.html(
				_.map(domains, this.preRenderFilter, this)
			);
		},

		preRenderFilter: function(filter) {
			var active = false;//this.model.get('domains').get(domain) ? 'active' : '';
			return this.template({ filter: filter, active: active });
		},

		onFilterClick: function (ev) {
			var filter = $(ev.target).val();
			var enable = !$(ev.target).hasClass('active');
			var hasFilters = false;
			this.model.get('match').update(filter, enable);
		},

		updateFilterState: function (filter, domains) {
			this.$el.toggleClass('filtered', domains.length > 0);
		},

		clearFilter: function(ev){
			this.$('.btn-group .btn').removeClass('active');
			this.model.get('match').reset();	
		}
	});

	return MatchFilter;
});