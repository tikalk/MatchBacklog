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
					// collection: this.collection
				}),

				pending: new PersonsList({
					el: this.$('#pending')
					// collection: this.collection
				}),

				inp: new PersonsList({
					el: this.$('#inp')
					// collection: this.collection
				}),

				match: new PersonsList({
					el: this.$('#match')
					// collection: this.collection
				})
			};
			this.listenTo(this.collection, 'reset change destroy sort', this.render);
			this.collection.fetch({ reset: true });
		},

		render: function() {
			this.views.news.collection.reset(this.collection.where({ backlog_status: "1.New" }));
			this.views.pending.collection.reset(this.collection.where({ backlog_status: "2.PendingReassignment" }));
			this.views.inp.collection.reset(this.collection.where({ backlog_status: "3.InProcess" }));
			this.views.match.collection.reset(this.collection.where({ backlog_status: "3.Match" }));
		}

	});

	return PersonsView;
});