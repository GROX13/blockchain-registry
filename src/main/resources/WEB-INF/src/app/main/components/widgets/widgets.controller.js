(function() {
	'use strict';

	angular
		.module('app.components.widgets')
		.controller('WidgetsController', WidgetsController);

	/** @ngInject */
	function WidgetsController(Valid) {
		var vm = this;

		// Data

		console.debug(Valid);
		vm.widget11 = {
			title: 'RECORDS',
			value: Valid.number,
			valid: Valid.valid
		};

		// Methods

		//////////
	}

})();