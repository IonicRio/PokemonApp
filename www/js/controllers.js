angular.module('starter.controllers', [])

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

.controller('ListarCtrl', function($scope, $http) {
    $http.get('http://pokeapi.co/api/v1/pokedex/1/').then(function(pokemons){
        $scope.pokemons = pokemons.data;
    });
})
.controller('PokemonCtrl', function($scope, $stateParams, $http) {


        $http.get('http://pokeapi.co/api/v1/pokemon/' + $stateParams.id + '/').then(function(pokemon){
            $scope.pokemon = pokemon.data;
            console.log(pokemon.data.sprites[0]);



            //return pokemon.data.id;
            return pokemon.data.sprites[0];

        }).then(function(sprite){
            console.log(sprite);
            $http.get('http://pokeapi.co/' + sprite.resource_uri).then(function(sprite){
                $scope.sprite = 'http://pokeapi.co/' + sprite.data.image;

                //console.log(sprite);
            });
        });

        //http://pokeapi.co/api/v1/sprite/1/
        $scope.sprite = null;
    });
