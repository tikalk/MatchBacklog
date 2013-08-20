define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/filter.html'
], function($, _, Backbone,
	
	filterHtml
	) {
	
	var Filter = Backbone.View.extend({

		events: {
			"click .btn-group .btn": "onFilterClick",
			"click [value='clear']": "clearFilter"
		},

		template: _.template(filterHtml),

		initialize: function() {
			this.filters = this.options.filters;
			// the attr to be displayed and extracted from the collection
			this.filter = this.options.filter;
			// TODO: this view is restricted to a btn group
			this.$filters = this.$('.btn-group');
			this.listenTo(this.collection, 'reset add remove change', this.renderFilters);
			// active filters model
			this.listenTo(this.filters, 'reset add remove', this.updateFilterState);
		},

		renderFilters: function(){
			var domains = _.chain(this.collection.toJSON())
				.pluck(this.filter)
				.uniq()
				.value();

			this.$filters.html(
				_.map(domains, this.preRenderFilter, this)
			);
		},

		preRenderFilter: function(filter) {
			//this.model.get('domains').get(domain) ? 'active' : '';
			var active = this.filters.get(filter) ? 'active' : '';
			var label = this.filters.getDisplayLabel(filter);
			return this.template({ 
				filter: filter, 
				active: active, 
				label: label
			});
		},

		onFilterClick: function (ev) {
			var filter = $(ev.target).val();
			var enable = !$(ev.target).hasClass('active');
			this.filters.update(filter, enable);
		},

		updateFilterState: function (filter, domains) {
			this.$el.toggleClass('filtered', domains.length > 0);
		},

		clearFilter: function(ev){
			this.$('.btn-group .btn').removeClass('active');
			this.filters.reset();	
		}
	});

	return Filter;
});