define([
	'underscore',
	'backbone'
], function(_, Backbone) {
   
    var PersonModel = Backbone.Model.extend({
		defaults: {
			"backlog_status": "1.New",
			"domain": ".Net",
			"recruitment_status": "tech interviewed",
			"candidate_name": "Jonathan Ben Ami",
			"candidate_weeks_age": "0",
			"lead_name": "",
			"lead_initiative": "",
			"lead_weeks_age": "0",
			"assigned_user_name": "avirams"
		},

		initialize: function() {

		}
	});
   
    return PersonModel;
});