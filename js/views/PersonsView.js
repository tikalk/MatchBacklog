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
			this.filteredPersons = new Backbone.Collection();
			this.listenTo(this.collection, 'reset change destroy sort add remove', this.render);
			this.listenTo(this.model.get('domains'), 'add remove reset', this.filterPersons);
			this.collection.fetch({ reset: true });
		},

		render: function() {
			this.update(this.collection);
		},

		update: function(persons) {
			this.views.news.collection.reset(persons.where({ backlog_status: "1.New" }));
			this.views.decision.collection.reset(persons.where({ backlog_status: "3.Decision" }));
			this.views.pending.collection.reset(persons.where({ backlog_status: "4.Pending" }));
			this.views.match.collection.reset(persons.where({ backlog_status: "2.Match" }));
		},

		filterPersons: function () {
			var hasFilters = this.model.get('domains').length;
			var domains = this.model.get('domains');

			// the 'domains' id's are those to be rendered
			if (domains.length) {	
				filteredPersons = this.collection.filter(function(person){
					return domains.where({ "id": person.get('domain') }).length;
				});
				this.update(new Backbone.Collection(filteredPersons));
				return;
			}
			// if domains is empty than all persons should be shown
			this.render();

		}

	});

	return PersonsView;
});