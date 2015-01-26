var app = angular.module('AppName', [ ]);
app.controller('StoreController', function(){
	 this.data = [{name: 'Gem', price : 3.49},{name: 'Emerald', price : 17.99}];
});
app.controller("PanelController",function(){
	this.tab = 1;
	this.selectTab = function(setTab){
		this.tab = setTab;
	};
	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	};
});
app.controller("ReviewController", function(){
	this.review = {};
	this.addReview = function(product){
		product.reviews.push(this.review);
		this.review = {};
	};
});