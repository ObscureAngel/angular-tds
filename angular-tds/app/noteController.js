angular.module('NoteApp',['ngCookies']).controller('NoteController', ["$cookies", function(cookies){
	
	var txt = cookies.get('monCookie');
	
	//cookies.put('monCookie', "");
	
	this.messageNote = txt;
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
		
		this.status = true;
	};
	
}]);