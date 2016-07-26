/**
 * Created by jennifersha on 7/22/16.
 */
(function() {
    var app = angular.module('pokemonShop', []);


    app.controller('ShopController', function () {
        this.products = pokemons;
    });

    app.controller('PanelController', function(){
        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

    app.controller('ReviewController', function(){
        this.review = {};
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    var pokemons = [
        {
            "name": "bulbasaur",
            "price": 20,
            "height": "2 feet 4 inches",
            "weight": "15.2 lbs",
            "category": "seed",
            "type": [
                "grass",
                "poison"
            ],
            "weakness":[
                "fire",
                "flying",
                "ice",
                "psychic"
            ],
            "canPurchase": true,
            "reviews":[
                {
                    "stars": 5,
                    "body": "A cute addition!",
                    "author": "Corey"
                    
                },
                {
                    "stars": 4,
                    "body": "Smaller than I expected!",
                    "author": "Stephanie"

                },
            ]
        },
        {
            "name": "charmander",
            "price": 20,
            "height": "2 feet 0 inches",
            "weight": "18.7 lbs",
            "category": "lizard",
            "type": ["fire"],
            "weakness":[
                "ground",
                "rock",
                "water"
            ],
            "canPurchase": true,
            "reviews":[
                {
                    "stars": 5,
                    "body": "A cute addition!",
                    "author": "Corey"

                }
            ]
            
        },
        {
            "name": "squirtle",
            "price": 20,
            "height": "1 feet 8 inches",
            "weight": "19.8 lbs",
            "category": "tiny turtle",
            "type": ["water"],
            "weakness":[
                "electric",
                "grass"
            ],
            "canPurchase": true,
            "reviews":[
                {
                    "stars": 5,
                    "body": "A cute addition!",
                    "author": "Corey"

                }
            ]
        },
        {
            "name": "pidgey",
            "price": 15,
            "height": "1 feet 0 inches",
            "weight": "4.0 lbs",
            "category": "tiny bird",
            "type": [
                "normal",
                "flying"
            ],
            "weakness":[
                "electric",
                "ice",
                "rock"
            ],
            "canPurchase": true,
            "reviews":[
                {
                    "stars": 5,
                    "body": "A cute addition!",
                    "author": "Corey"

                }
            ]
        },
        {
            "name": "ekans",
            "price": 15,
            "height": "6 feet 7 inches",
            "weight": "15.2 lbs",
            "category": "snake",
            "type": ["poison"],
            "weakness":[
                "ground",
                "psychic"
            ],
            "canPurchase": true,
            "reviews":[
                {
                    "stars": 5,
                    "body": "A cute addition!",
                    "author": "Corey"

                }
            ]
        },
        {
            "name": "pikachu",
            "price": 25,
            "height": "1 feet 4 inches",
            "weight": "13.2 lbs",
            "category": "mouse",
            "type": ["electric"],
            "weakness": ["ground"],
            "canPurchase": true,
            "reviews":[
                {
                    "stars": 5,
                    "body": "A cute addition!",
                    "author": "Corey"

                }
            ]
        },
        {
            "name": "sandshrew",
            "price": 15,
            "height": "2 feet 0 inches",
            "weight": "26.5 lbs",
            "category": "mouse",
            "type": ["ground"],
            "weakness":[
                "grass",
                "ice",
                "water"
            ],
            "canPurchase": true,
            "reviews":[
                {
                    "stars": 5,
                    "body": "A cute addition!",
                    "author": "Corey"

                }
            ]
        },
        {
            "name": "clefairy",
            "price": 15,
            "height": "2 feet 0 inches",
            "weight": "16.5 lbs",
            "category": "fairy",
            "type": ["fairy"],
            "weakness":[
                "steel",
                "poison"
            ],
            "canPurchase": false,
            "reviews":[
                {
                    "stars": 5,
                    "body": "A cute addition!",
                    "author": "Corey"

                }
            ]

        }
    ]





})();