(function(){
  var client_id = 'fef792f76d3e465ab3315d8caa518427';
  var app = angular.module('InstagramApp', []);
  app.factory("InstagramFactory", ['$http', function($http) {
    return {
      fetchPopular: function(callback){
        var endpoint = "https://api.instagram.com/v1/media/popular";
        endpoint += "?count=99";
        endpoint += "&client_id=" + client_id;
        endpoint += "&callback=JSON_CALLBACK";
        $http.jsonp(endpoint).success(function(response){
          callback(response.data);
        });
      }
    }
  }]);
  app.controller('ShowImages', function($scope, InstagramAPI){
    $scope.data = {};
    InstagramAPI.fetchPopular(function(data){
      $scope.pics = data;
    });
  });
})();