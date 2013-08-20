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
			// this.listenTo(this.collection, 'change', this.renderChange);
			this.listenTo(this.model.get('domains'), 'add remove reset', this.filterPersons);
			this.listenTo(this.model.get('match'), 'add remove reset', this.filterPersons);
			this.listenTo(this.model.get('recruit'), 'add remove reset', this.filterPersons);
			this.listenTo(this.model.get('settings'), 'change', this.onSettingsChange);
			this.collection.fetch({ reset: true });
		},

		render: function() {
			this.update(this.collection);
			this.updateBySettings();
		},

		// renderChange: function(model){
		// 	console.log('model changed', model);
		// 	_.each(this.views, function(view){
		// 		view.collection.set([model]);
		// 	});
		// },

		update: function(persons) {
			this.views.news.collection.reset(persons.where({ backlog_status: "1.New" }));
			this.views.decision.collection.reset(persons.where({ backlog_status: "3.Decision" }));
			this.views.pending.collection.reset(persons.where({ backlog_status: "4.Pending" }));
			this.views.match.collection.reset(persons.where({ backlog_status: "2.Match" }));
		},

		filterPersons: function () {
			var hasFilters = this.model.get('domains').length;
			var domains = this.model.get('domains');
			var match = this.model.get('match');
			var recruit = this.model.get('recruit');
			var filteredPersons = this.collection.models;

			// the 'domains' id's are those to be rendered
			if (domains.length) {	
				filteredPersons = this.collection.filter(function(person){
					return domains.where({ "id": person.get('domain') }).length;
				});
			}
			if (match.length) {
				filteredPersons = _.filter(filteredPersons, function(person) {
					return match.where({ "id": person.get('match_status')}).length;
				});
			}
			if (recruit.length) {
				filteredPersons = _.filter(filteredPersons, function(person){
					return recruit.where({ "id": person.get('recruitment_status')}).length;
				});
			}
			
			if (filteredPersons) {
				this.update(new Backbone.Collection(filteredPersons));
				return;
			}
			// if domains is empty than all persons should be shown
			this.render();

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