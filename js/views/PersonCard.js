define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/PersonCard.html'
], function($, _, Backbone, PersonCardHtml) {
   
    var PerosnCard = Backbone.View.extend({
		tagName: 'li',
		
		className: 'person-card animated',
		
		template: _.template(PersonCardHtml),

		// transition: {
		// 	duration: 200,
		// 	css: 'fadeInUp'
		// },

		events: {
			// 'click .media-title': 'selectMedia',
			// 'click .media-desc': 'toggleInformation'
		},

		initialize: function() {
			// this.listenTo(this.model, 'change:isPlaying', this.render);
		},

		render: function() {
			this.$el.html( this.template(this.model.toJSON()) );
			this.$('[data-toggle="tooltip"]').tooltip();
			return this;
		}
	});
   
    return PerosnCard;
});