angular.module('currencyApp', []).config(['$sceDelegateProvider', function($sceDelegateProvider) {
  // We must whitelist the JSONP endpoint that we are using to show that we trust it
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://free.currencyconverterapi.com/**'
  ]);
}]);

angular.module("currencyApp").controller("currencyController",['$http', function($http) {
	
	$http.get('app/data/currencymap.json').then(function(response) {
        this.currencies = response.data;
    },
    function(response) {
        console.log("Erreur avec le statut Http : "+response.status);
    });
	
	$http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+from.code+'_'+to.code, {jsonpCallbackParam: 'callback'}).then(function(response) {
	        this.result = response.data[this.from.code+'_'+this.to.code].val;
	
	});
	
	this.from = "";
	this.to = "";
	this.what = "";
	
	this.getResult = function() {
		//retourne le résultat de la conversion
	}
	
	this.swap = function() {
		//echange la monnaie source et la monnaie cible 
	}
	
}]);