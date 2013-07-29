define([
	'jquery',
	'underscore',
	'csvjson'
], function($, _) {
   
	var Utils = {
		formatNumberWithComma: function(num) {
			return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},

		// excludes {array} - values of elements to exclude in calculation
		getPortviewSize: function(excludes) {
			var hasExcludes = excludes && excludes.length ? excludes : false;
				sidebar = hasExcludes && excludes.indexOf('sidebar') === -1 ? $('.sidebar').outerWidth() : 0,
				height = window.innerHeight - $('.navbar').outerHeight() - $('.youtube-player').outerHeight(),
				width = window.innerWidth - sidebar;
			return _.clone({ height: height, width: width });
		},

		csvToJSON: function (csv) {
			return csvjson.csv2json(csv);
		}
	};
   
	_.mixin(Utils);

	return Utils;
});