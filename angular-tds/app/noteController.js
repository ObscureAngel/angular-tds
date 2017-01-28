angular.module('NoteApp').controller('NoteController', function(){
	
	this.messageNote = "";
	this.messageLength = 0;
	
	this.count = function() {
		this.messageLength = this.messageNote.length;
	};
	
});