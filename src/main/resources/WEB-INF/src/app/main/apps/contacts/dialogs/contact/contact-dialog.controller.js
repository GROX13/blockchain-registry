(function() {
	'use strict';

	angular
		.module('app.contacts')
		.controller('ContactDialogController', ContactDialogController);

	/** @ngInject */
	function ContactDialogController($log, $http, $mdDialog, Owners, Contact, Contacts, User, msUtils) {
		var vm = this;

		// Data
		vm.title = 'Edit Contact';
		vm.contact = angular.copy(Contact);
		vm.contacts = Contacts;
		vm.owners = Owners;
		vm.user = User;
		vm.newContact = false;
		vm.allFields = false;

		if (!vm.contact) {
			vm.contact = {
				'id': msUtils.guidGenerator(),
				'avatar': 'assets/images/avatars/profile.jpg'
			};

			vm.title = 'New Contact';
			vm.newContact = true;
			vm.contact.tags = [];
		}

		// Methods
		vm.addNewContact = addNewContact;
		vm.saveContact = saveContact;
		vm.deleteContactConfirm = deleteContactConfirm;
		vm.closeDialog = closeDialog;
		vm.toggleInArray = msUtils.toggleInArray;
		vm.exists = msUtils.exists;

		//////////

		/**
		 * Add new contact
		 */
		function addNewContact() {
			// vm.contacts.unshift(vm.contact);

			// closeDialog();

			$log.debug(vm.contact);

			vm.disable = true;
			$http({
				method: 'POST',
				url: 'api/owner/create',
				data: {
					personalId: vm.contact.personalId,
					firstName: vm.contact.firstName,
					lastName: vm.contact.lastName,
					records: [],
					purchaseDate: formatDate(vm.contact.purchaseDate),
					ownedUntilDate: vm.contact.ownedUntilDate ? formatDate(vm.contact.ownedUntilDate) : null,
					purchaseLocation: vm.contact.purchaseLocation,
					estimatedKilometersPerYear: parseInt(vm.contact.estimatedKilometersPerYear)
				}
			})
				.then(function(result) {
					$log.debug(result);
					vm.owners.push(result.data);
					closeDialog();
					vm.disable = false;
				})
				.catch(function(result) {
					$log.error(result);
					vm.disable = false;
				})
		}

		function formatDate(date) {
			var d = new Date(date),
				month = '' + (d.getMonth() + 1),
				day = '' + d.getDate(),
				year = d.getFullYear();

			if (month.length < 2) month = '0' + month;
			if (day.length < 2) day = '0' + day;

			return [year, month, day].join('-');
		}

		/**
		 * Save contact
		 */
		function saveContact() {
			// Dummy save action
			for (var i = 0; i < vm.contacts.length; i++) {
				if (vm.contacts[i].id === vm.contact.id) {
					vm.contacts[i] = angular.copy(vm.contact);
					break;
				}
			}

			closeDialog();
		}

		/**
		 * Delete Contact Confirm Dialog
		 */
		function deleteContactConfirm(ev) {
			var confirm = $mdDialog.confirm()
				.title('Are you sure want to delete the contact?')
				.htmlContent('<b>' + vm.contact.name + ' ' + vm.contact.lastName + '</b>' + ' will be deleted.')
				.ariaLabel('delete contact')
				.targetEvent(ev)
				.ok('OK')
				.cancel('CANCEL');

			$mdDialog.show(confirm).then(function() {

				vm.contacts.splice(vm.contacts.indexOf(Contact), 1);

			});
		}

		/**
		 * Close dialog
		 */
		function closeDialog() {
			$mdDialog.hide();
		}

	}
})();