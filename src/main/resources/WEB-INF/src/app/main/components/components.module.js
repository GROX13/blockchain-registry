(function() {
	'use strict';

	angular
		.module('app.components', [
			'app.components.widgets'
		])
		.config(config);

	/** @ngInject */
	function config(msNavigationServiceProvider) {

		msNavigationServiceProvider.saveItem('components.widgets', {
			title: 'Widgets',
			icon: 'icon-apps',
			state: 'app.components_widgets',
			weight: 10
		});
	}
})();