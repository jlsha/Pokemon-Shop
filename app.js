/**
 * Created by jennifersha on 7/22/16.
 */
(function() {
    var app = angular.module('pokemonShop', []);


    app.controller('ShopController', function () {
        this.products = pokemons;

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
            ]
        },
        {
            "name": "pikachu",
            "price": 25,
            "height": "1 feet 4 inches",
            "weight": "13.2 lbs",
            "category": "mouse",
            "type": ["electric"],
            "weakness": ["ground"]
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
            ]
        }
    ]





})();