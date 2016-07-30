/**
 * Created by jennifersha on 7/29/16.
 */
(function(){
    var app = angular.module('store-products', []);


    app.directive('productReview', function(){
        return{
            restrict: 'E',
            templateUrl: 'templates/product-review.html',
            controller: function() {
                this.review = {};

                this.addReview = function (product) {
                    this.review.createdOn = Date.now();
                    product.reviews.push(this.review);
                    this.review = {};
                };
            },
            controllerAs: 'reviewCtrl'
        }
    });


    app.directive('productTabs', function(){
        return{
            restrict: 'E',
            templateUrl: 'templates/product-tabs.html',
            controller: function() {
                this.tab = 1;
                this.selectTab = function (setTab) {
                    this.tab = setTab;
                };
                this.isSelected = function (checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panel'
        }
    });


    app.directive('productDescription', function(){
        return{
            restrict:'A',
            templateUrl: 'templates/product-description.html'
        }
    });


    app.directive('previousReviews', function(){
        return{
            restrict:'A',
            templateUrl: 'templates/previous-reviews.html'
        }
    });
    

})();