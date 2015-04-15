angular.module('starter.controllers', ['Pokemon'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ListarCtrl', ['$scope', '$http', 'Pokemon', function($scope, $http, Pokemon) {
    Pokemon.getPokedex().then(function(pokemons){
        $scope.pokemons = pokemons.data;
    });
}])


.controller('PokemonCtrl',['$scope', '$stateParams', '$http', 'Pokemon', 
                    function($scope, $stateParams, $http, Pokemon) {


         Pokemon.getPokemon($stateParams.id).then( function(_response) {
              $scope.pokemon = _response.data;


              console.log(_response.data);

               //return pokemon.data.id;
            return _response.data;

            }).then(function(_pokemon){
                /// @TODO              
                 Pokemon.getSprites(_pokemon).then(function(_responses){
                    console.log(_responses);
                 });
                });
                    
                  //http://pokeapi.co/api/v1/sprite/1/
                  $scope.sprite = null;
              }]);
