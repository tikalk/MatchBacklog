require([
	'jquery',
	'bootstrap',
	// 'safe',
	// 'switcher',
	'views/appView',
	'models/appModel',
	'routers/appRouter'
], function( $, bootstrap, 
	// safe, switcher, 
	AppView, AppModel, AppRouter ) {
	// var appModel = new AppModel();
	window.appModel = new AppModel()
	var appView = new AppView({ model: appModel });
	var appRouter = new AppRouter({ model: appModel });
});