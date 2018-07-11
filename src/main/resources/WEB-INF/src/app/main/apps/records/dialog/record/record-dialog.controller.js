(function() {
	'use strict';

	angular
		.module('app.contacts')
		.controller('RecordDialogController', RecordDialogController);

	/** @ngInject */
	function RecordDialogController($mdDialog, $http, $log, Owners, Record, Records, Contact, Contacts, User, msUtils) {
		var vm = this;

		// Data
		vm.title = 'Edit Record';
		vm.contact = angular.copy(Contact);
		vm.owners = Owners;
		vm.record = angular.copy(Record);
		vm.records = Records;
		vm.contacts = Contacts;
		vm.user = User;
		vm.newContact = false;
		vm.allFields = false;

		if (!vm.contact) {
			vm.contact = {
				'id': msUtils.guidGenerator(),
				'name': '',
				'lastName': '',
				'avatar': 'assets/images/avatars/profile.jpg',
				'nickname': '',
				'company': '',
				'jobTitle': '',
				'email': '',
				'phone': '',
				'address': '',
				'birthday': null,
				'notes': ''
			};

			vm.title = 'New Record';
			vm.newContact = true;
			vm.contact.tags = [];
		}

		// Methods
		vm.addNewContact = addNewContact;
		vm.addNewRecord = addNewRecord;
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
			vm.contacts.unshift(vm.contact);

			closeDialog();
		}

		/**
		 * Add new record
		 */
		function addNewRecord() {
			$log.debug(vm.record);
			vm.disable = true;
			$http({
				method: 'POST',
				url: 'api/record/create',
				data: {
					ownerPersonalId: vm.record.ownerPersonalId,
					recordBean: {
						date: formatDate(vm.record.date),
						kilometres: parseInt(vm.record.kilometers),
						source: vm.record.source,
						comments: vm.record.comments
					}
				}
			})
				.then(function(result) {
					$log.debug(result);
					vm.records.push(result.data);
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