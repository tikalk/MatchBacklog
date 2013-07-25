define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/domainFilter.html'
], function($, _, Backbone,
	domainFilter
	) {
	
	var DomainFilter = Backbone.View.extend({

		el: '#domain-filter',

		events: {
			"click .btn-group .btn": "onFilterClick",
			"click [value='clear']": "clearFilter"
		},

		template: _.template(domainFilter),

		initialize: function() {
			this.$filters = this.$('.btn-group');
			this.listenTo(this.model.get('workers'), 'reset add remove change', this.renderFilters);
			this.listenTo(this.model.get('domains'), 'reset add remove', this.updateFilterState);
		},

		renderFilters: function(){
			var domains = _.chain(appModel.attributes.workers.toJSON())
				.pluck('domain')
				.uniq()
				.value();

			this.$filters.html(
				_.map(domains, this.preRenderFilter, this)
			);
		},

		preRenderFilter: function(domain) {
			var active = this.model.get('domains').get(domain) ? 'active' : '';
			return this.template({ domain: domain, active: active });
		},

		onFilterClick: function (ev) {
			var filter = $(ev.target).val();
			var enable = !$(ev.target).hasClass('active');
			var hasFilters = false;
			this.model.get('domains').update(filter, enable);
		},

		updateFilterState: function (filter, domains) {
			this.$el.toggleClass('filtered', domains.length > 0);
		},

		clearFilter: function(ev){
			this.$('.btn-group .btn').removeClass('active');
			this.model.get('domains').reset();	
		}
	});

	return DomainFilter;
});