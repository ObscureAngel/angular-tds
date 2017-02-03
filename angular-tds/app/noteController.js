angular.module('NoteApp',['ngCookies']).controller('NoteController', ["$cookies", function(cookies){
	
	this.messageNote = "";
	this.messageLength = 100;
	this.status = false;
	
	this.count = function() {
		this.messageLength = 100 - this.messageNote.length;
	};
	
	this.clear = function() {
		this.messageNote = "";
	};
	
	this.save = function(){
		var monCookie = cookies.get('monCookie');
		var monTexte = this.messageNote;
		
		cookies.put('monCookie', monTexte);
		
		this.clear();
		this.status = true;
	};
	
}]);