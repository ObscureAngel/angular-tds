angular.module('NoteApp').controller('NoteController', function(){
	
	this.messageNote = "";
	this.messageLength = 100;
	
	this.count = function() {
		this.messageLength = 100 - this.messageNote.length;
	};
	
	this.clear = function() {
		this.messageNote = "";
	};
	
});