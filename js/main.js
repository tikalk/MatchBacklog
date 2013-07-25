require([
	'jquery',
	'bootstrap',
	// 'safe',
	// 'switcher',
	'utils',
	'views/appView',
	'models/appModel',
	'routers/appRouter'
], function( $, bootstrap, utils,
	// safe, switcher, 
	AppView, AppModel, AppRouter ) {
	// var appModel = new AppModel();
	window.appModel = new AppModel()
	var appView = new AppView({ model: appModel });
	var appRouter = new AppRouter({ model: appModel });
});