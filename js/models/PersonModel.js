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
			"assigned_user_name": "avirams",

			// generated for display purposes
			candidate_weeks_age_display: '',
			lead_weeks_age_display: '',
			backlog_type_display: '',
			backlog_type_label: '',
			person_name_display: ''

		},

		backlog: {
			types: {
				"1": "user", //"candidate",
				"2": "screenshot",//"match",
				"3": "search"//"lead"
			}
		},

		backlog_labels: {
			"1": "candidate",
			"2": "match",
			"3": "lead" 
		},

		initialize: function() {
			this.listenTo(this, 'change', this.check);
			this.check();
		},

		check: function () {
			// verify candidate's weeks age
			var weeks = parseInt(this.get('candidate_weeks_age'), 10);
			var status = weeks < 0 ? "important" : weeks === 0 ? "info" : "success";
			this.set('candidate_weeks_age_display', status);	

			// verify lead weeks age
			weeks = parseInt(this.get('lead_weeks_age'), 10);
			status = weeks < 0 ? "important" : weeks === 0 ? "info" : "success";
			this.set('lead_weeks_age_display', status);	

			// verify backlog type
			var btype = parseInt(this.get('backlog_type'), 10);
			this.set('backlog_type_display', this.backlog.types[btype]);
			this.set('backlog_type_label', this.backlog_labels[btype]);

			// verify person name
			this.set('person_name_display', 
				btype === 3 ? 
				this.get('lead_name') :
				this.get('candidate_name')
			);
		}
	});
   
    return PersonModel;
});