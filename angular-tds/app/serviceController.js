angular.module('ServiceApp', []).controller('ServiceController', function(){
	
	this.products = listeServices;
	this.prixTotal = 0;
	this.nbrServices = 1;
	
	var listeServices = [
	    {
	        name : 'Web Development',
	        price : 300,
	        active : true
	    },{
	        name : 'Design',
	        price : 400,
	        active : false
	    },{
	        name : 'Integration',
	        price : 250,
	        active : false
	    },{
	        name : 'Formation',
	        price : 220,
	        active : false
	    }
	]
	
	this.total = function() {
		this.prixTotal = 0;
	};
	
	this.toggleActive = function(service) {
		this.products[service].active = true;
	};
	
});