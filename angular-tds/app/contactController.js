angular.module('ContactApp', []).controller('ContactController', function() {
	
	this.edit = 0;
	this.operation = "";
	this.contact = 0;
	this.contacts = 0;
	this.tmpContact = 0;
	
	this.toAdd = function() {
		this.operation = "ajoutContact";
	};
	
	this.toUpdate = function(contact) {
		
	};
	
	this.add = function() {
		
	};
	
	this.delete = function() {
		
	};
	
});