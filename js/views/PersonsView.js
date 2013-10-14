define([
	'jquery',
	'underscore',
	'backbone',
	'views/PersonsList'
], function($, _, Backbone,
	PersonsList
	) {
	
	var PersonsView = Backbone.View.extend({

		el: '.boards',

		initialize: function() {
			this.views = {
				news: new PersonsList({
					el: this.$('#new')
				}),

				match: new PersonsList({
					el: this.$('#match')
				}),

				decision: new PersonsList({
					el: this.$('#decision')
				}),

				pending: new PersonsList({
					el: this.$('#pending')
				})
			};

			this.listenTo(this.collection, 'reset destroy sort add remove', this.render);
			this.listenTo(this.model.get('domains'), 'add remove reset', this.filterPersons);
			this.listenTo(this.model.get('match'), 'add remove reset', this.filterPersons);
			this.listenTo(this.model.get('recruit'), 'add remove reset', this.filterPersons);
			this.listenTo(this.model.get('types'), 'add remove reset', this.filterPersons);
			this.listenTo(this.model.get('settings'), 'change', this.onSettingsChange);
			this.collection.fetch({ reset: true });
		},

		render: function() {
			this.update(this.collection);
			this.updateBySettings();
		},

		update: function(persons) {
			this.views.news.collection.reset(persons.where({ backlog_status: "1.New" }));
			this.views.decision.collection.reset(persons.where({ backlog_status: "3.Decision" }));
			this.views.pending.collection.reset(persons.where({ backlog_status: "4.Pending" }));
			this.views.match.collection.reset(persons.where({ backlog_status: "2.Match" }));
		},

		filterPersons: function () {
			var filters = [
				{
					filter: this.model.get('domains'),
					id: 'domain'
				},
				{
					filter: this.model.get('match'),
					id: 'match_status'
				},
				{
					filter: this.model.get('recruit'),
					id: 'recruitment_status'
				},
				{
					filter: this.model.get('types'),
					id: 'backlog_type'
				}
			];
			var filteredPersons = _.reduce(filters, this.parseFilters, this.collection.models);
			
			if (filteredPersons) {
				this.update(new Backbone.Collection(filteredPersons));
				return;
			}
			// if domains is empty than all persons should be shown
			this.render();

		},

		parseFilters: function (items, config) {
			var filter = config.filter;
			var id = config.id;
			if (config.filter.length) {
				items = _.filter(items, (function(person){
					return filter.where({ "id": person.get(id) }).length;
				}));	
			}
			return items;
		},

		onSettingsChange: function(settings){
			if (settings.hasChanged('backlog_url')) {
				this.updateBySettings();
				this.render();
			}
		},

		updateBySettings: function(){
			var urls = {
				backlog_url: this.model.get('settings').get('backlog_url')
			}
			if (urls.backlog_url) {

				this.collection.each(function(person){
					person.set(urls);
				});
			}
		}

	});

	return PersonsView;
});