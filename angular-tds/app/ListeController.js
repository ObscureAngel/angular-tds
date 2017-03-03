angular.module("ListesApp").controller("ListesController", [ "$http", function($http) {
	
	var self=this;
	self.dispoItems = [];
	self.step=1;
	self.includedItems=[];
	self.selectedIncludedItems=[];self.selectedDispoItems=[];
	
	$http.get("data/products.json").success(function(data){
		self.dispoItems =data;
	});

	self.addToIncluded=function(){
		self.selectedIncludedItems=[];
		 angular.forEach(self.selectedDispoItems, function (value) {
			self.includedItems.push(value);
			self.selectedIncludedItems.push(value);
			self.dispoItems.splice(self.dispoItems.indexOf(value),1);
	 });
		 self.selectedDispoItems=[];
	};
	self.addAllToIncluded=function(){
		self.includedItems.push.apply(self.includedItems, self.dispoItems);
		self.dispoItems=[];
		self.selectedDispoItems=[];
	};
	self.removeFromIncluded=function(){
		self.selectedDispoItems=[]; 
		angular.forEach(self.selectedIncludedItems, function (value) {
			self.dispoItems.push(value);
			self.selectedDispoItems.push(value);
			self.includedItems.splice(self.includedItems.indexOf(value),1);
	});
		self.selectedIncludedItems=[];
	};
	self.removeAllFromIncluded=function(){
		self.dispoItems.push.apply(self.dispoItems, self.includedItems);
		self.includedItems=[];
		self.selectedIncludedItems=[];
	};
	self.selectItem=function(){
		self.addToIncluded();
	};
	self.deselectItem=function(){
		self.removeFromIncluded();
	};
} ]);
	
	/*this.dispoItems = itemsLocal;
	this.step = 1;
	this.included = []
	this.selectedDispoItem = 0;
	this.selectedIncluItem = 0;
	
	this.addToIncluded = function() {
		this.included.push(this.selectedDispoItem);
	};
	
	this.addAllToIncluded = function() {
		this.included = this.dispoItems;
	};
	
	this.removeAllFromIncluded = function() {
		this.included = [];
	};
	
	this.removeFromIncluded = function() {
		this.included.splice(this.included.indexOf(this.selectedIncluItem),1);
	}
	
	this.selectItem = function() {
		
	}
	
});*/