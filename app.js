(function() {
	var app = angular.module('store', []);

	// Controllers are where we defines our apps behavior by defining
    // functions and values...
    // Scope of controller only applies to the div or area it CONTROLS
    app.controller('StoreController', function() {
    	this.products = gems;
    });

    var gems = [
    	{
    	  name: 'Dodecahedron',
    	  price: 2.95,
    	  description: '....',
    	  images: [
    	    {
  			  full: 'full',
  			  thumb: 'thumb'
  		    }
    	  ],
    	  canPurchase: true,
    	  soldOut: false
    	},
    	{
    	  name: 'Pentagonal Gem',
    	  price: 5.95,
    	  description: '....',
    	  images: [
    	    {
  			  full: 'full',
  			  thumb: 'thumb'
  		    }
    	  ],
    	  canPurchase: true,
    	  soldOut: false
        },
        {
    	  name: 'Star Gem',
    	  price: 12.95,
    	  description: '....',
    	  images: [
    	    {
  			  full: 'full',
  			  thumb: 'thumb'
  		    }
    	  ],
    	  canPurchase: true,
    	  soldOut: false
    	},
    	{
    	  name: 'Oval Gem',
    	  price: 2.95,
    	  description: '....',
    	  images: [
    	    {
  			  full: 'full',
  			  thumb: 'thumb'
  		    }
    	  ],
    	  canPurchase: true,
    	  soldOut: false
        }

    ]; 

})();

/*
   Directives - HTML Annotations that trigger Javascript behaviors

   Modules - Where our application components live

   Controllers - Where we add application Behavior

   Expressions - How values get displayed within the page	

   Some directives so far:
   		DIRECTIVES:
   		    : ng-app - attach the Application Module to the page
   		        eg: <html ng-app="store">

   		    : ng-controller - attach a Controller function to the page
   		        eg: <body ng-controller="StoreController as store">

   		    : ng-show / ng-hide - display a section based on an Expression
   		        eg: <h1 ng-show="name"> Hello, {{name}} ! </h1>

   		    : ng-repeat - repeat a section for each item in an Array
   		        eg: <li ng-repeat="product in store.products"> {{product.name}} </li>
			
			: ng-src - present script or css file image etc some resource
				eg: <img ng-src="{{product.images[0].full}}"/>

	
	Filters: Syntax {{ data | filter:options }}
		FILTERS:
			: currency - used to properly format currency
				eg: {{ store.price | currency }}

			: date - used to format dates properly
				eg: {{ 1388123412321 | date:'MM/dd/yyyy @ h:mma' }}

			: uppercase/lowercase - upper or lowers strings
				eg: {{ 'your mama' | uppercase }}

			: limitTo - Limits number of characters in a string, as well as number of items in arrays
			    eg: {{ 'My Description' | limitTo: 8 }} My Descr
			    eg: <li ng-repeat="product in store.products | limitTo:3"> 

			: orderBy - Will products in ascending or decending order...Users - for descending
			    eg: <li ng-repeat="product in store.products | orderBy:'-price'">
*/