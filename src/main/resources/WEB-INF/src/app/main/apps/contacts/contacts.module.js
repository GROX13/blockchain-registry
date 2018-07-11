(function() {
	'use strict';

	angular
		.module('app.contacts',
			[
				// 3rd Party Dependencies
				'xeditable'
			]
		)
		.config(config);

	/** @ngInject */
	function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider) {

		$stateProvider.state('app.contacts', {
			url: '/contacts',
			views: {
				'content@app': {
					templateUrl: 'app/main/apps/contacts/contacts.html',
					controller: 'ContactsController as vm'
				}
			},
			resolve: {
				Owners: function(msApi) {
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
		$translatePartialLoaderProvider.addPart('app/main/apps/contacts');

		// Api
		msApiProvider.register('owners.owners', ['api/owner/list']);
		msApiProvider.register('contacts.contacts', ['app/data/contacts/contacts.json']);
		msApiProvider.register('contacts.user', ['app/data/contacts/user.json']);

		// Navigation
		msNavigationServiceProvider.saveItem('apps.contacts', {
			title: 'Owners',
			icon: 'icon-account-box',
			state: 'app.contacts',
			weight: 10
		});

	}

})();