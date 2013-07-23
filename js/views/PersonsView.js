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

		// view: {
		// 	type: PersonCard
		// 	// collection: YoutubeSearchResultsList
		// },

		// transition: {
		// 	duration: 200,
		// 	css: 'transition-in'
		// },

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
			this.listenTo(this.collection, 'reset change destroy sort add remove', this.render);
			this.collection.fetch({ reset: true });
		},

		render: function() {
			this.views.news.collection.reset(this.collection.where({ backlog_status: "1.New" }));
			this.views.decision.collection.reset(this.collection.where({ backlog_status: "3.Decision" }));
			this.views.pending.collection.reset(this.collection.where({ backlog_status: "4.Pending" }));
			this.views.match.collection.reset(this.collection.where({ backlog_status: "2.Match" }));
		}

	});

	return PersonsView;
});