define([
	'jquery',
	'underscore',
	'backbone',
	'views/PersonCard'
], function($, _, Backbone,
	PersonCard
	) {
	
	var PersonsView = Backbone.View.extend({

		view: {
			type: PersonCard,
			target: '.persons-list'
			// collection: YoutubeSearchResultsList
		},

		// transition: {
		// 	duration: 200,
		// 	css: 'transition-in'
		// },

		initialize: function() {
			this.listenTo(this, 'view-after:render', this.renderTitle);
		},

		renderTitle: function () {
			this.$('h2 .count').html(this.collection.length);
		}, 

	});

	return PersonsView;
});