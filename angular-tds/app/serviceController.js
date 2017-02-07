angular.module('ServiceApp', []).controller('ServiceController', function(){

	var listeServices = [
		{
			number : 0,
			name : 'Web Development',
			price : 300,
			active : true
		},{
			number : 1,
			name : 'Design',
			price : 400,
			active : false
		},{
			number : 2,
			name : 'Integration',
			price : 250,
			active : false
		},{
			number : 3,
			name : 'Formation',
			price : 220,
			active : false
		}
		];

	var promo = {
			"B22":0.05,
			"AZ":0.01,
			"UBOAT":0.02
	}

	this.products = listeServices;
	this.prixTotal = 300;
	this.nbrServices = 1;
	this.listePromo = promo;

	this.total = function() {
		var i;
		this.prixTotal = 0;
		for (i = 0; i < 4; i++) {
			if (this.products[i].active == true) {
				this.prixTotal = this.prixTotal + this.products[i].price;
			};
		};

	};

	this.toggleActive = function(service) {
		if (this.products[service].active == true) {
			this.nbrServices = this.nbrServices - 1;
			this.products[service].active = false;
			this.total();
		} else {
			this.nbrServices = this.nbrServices + 1;
			this.products[service].active = true;
			this.total();
		}

	};
	
	this.verifPromo = function() {
		
	};

});