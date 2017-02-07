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
	this.prixRemise = 0;
	this.nbrServices = 1;
	this.listePromo = promo;
	this.promoActive = false;
	this.inputPromo = "";
	this.resultPromo = 0;
	this.msgPromo = ""

	this.total = function() {
		var i;
		this.prixTotal = 0;
		for (i = 0; i < 4; i++) {
			if (this.products[i].active == true) {
				this.prixTotal = this.prixTotal + this.products[i].price;
			};
		};
		this.verifPromo();

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
		if (this.promoActive) {
			if (this.listePromo[this.inputPromo] == null) {
				this.resultPromo = "inv";
				this.msgPromo = "Code invalide";
			} else {
				this.msgPromo = "";
				this.resultPromo = this.prixTotal * this.listePromo[this.inputPromo];
				this.resultPromo = Math.round(this.resultPromo*100)/100
				this.prixRemise = this.prixTotal - this.resultPromo;
			}
		}
	};
	
	this.togglePromoActive = function() {
		if (this.promoActive == true) {
			this.promoActive = false;
		} else {
			this.promoActive = true;
		}
	};

});