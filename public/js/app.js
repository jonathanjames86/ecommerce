angular.module('ecomApp', [ui-router])
.config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/')
  $stateProvider
    .state('productSearch',{
    url:  '/product-search',
    templateUrl: 'productView.html'
  });
});
