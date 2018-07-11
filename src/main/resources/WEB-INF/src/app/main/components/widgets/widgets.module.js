(function() {
	'use strict';

	angular
		.module('app.components.widgets',
			[
				// 3rd Party Dependencies
				'gridshore.c3js.chart'
			]
		)
		.config(config);

	/** @ngInject */
	function config($stateProvider, msApiProvider) {
		$stateProvider.state('app.components_widgets', {
			url: '/components/widgets',
			views: {
				'content@app': {
					templateUrl: 'app/main/components/widgets/widgets.html',
					controller: 'WidgetsController as vm'
				}
			},
			resolve: {
				Valid: function(msApi) {
					return msApi.resolve('records.validate@get');
				}
			}
		});

		msApiProvider.register('records.validate', ['api/chain/validate']);
	}

})();