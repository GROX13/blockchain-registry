(function() {
	'use strict';

	angular
		.module('app.records', ['xeditable'])
		.config(config);

	/** @ngInject */
	function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider) {

		$stateProvider.state('app.records', {
			url: '/records',
			views: {
				'content@app': {
					templateUrl: 'app/main/apps/records/records.html',
					controller: 'RecordsController as vm'
				}
			},
			resolve: {
				Records: function(msApi) {
					return msApi.resolve('records.records@get');
				},
				Owners: function (msApi) {
					return msApi.resolve('owners.owners@get');
				},
				Contacts: function(msApi) {
					return msApi.resolve('contacts.contacts@get');
				},
				User: function(msApi) {
					return msApi.resolve('contacts.user@get');
				}
			}
		});

		// Translation
		$translatePartialLoaderProvider.addPart('app/main/apps/records');

		// Api
		msApiProvider.register('records.records', ['api/chain/list']);
		msApiProvider.register('owners.owners', ['api/owner/list']);
		msApiProvider.register('contacts.contacts', ['app/data/contacts/contacts.json']);
		msApiProvider.register('contacts.user', ['app/data/contacts/user.json']);

		// Navigation
		msNavigationServiceProvider.saveItem('apps.records', {
			title: 'Records',
			icon: 'icon-barley',
			state: 'app.records',
			weight: 11
		});

	}

})();