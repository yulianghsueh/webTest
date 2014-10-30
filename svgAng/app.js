var app = angular.module('triangular', []);

app.controller('MainCtrl', function($scope) {

  $scope.circles = [{
    'x': 15,
    'y': 20,
    'r': 15
  }, {
    'x': 50,
    'y': 60,
    'r': 20
  }, {
    'x': 80,
    'y': 10,
    'r': 10
  }, ]
  $scope.dotest = function() {
    this.circles.map(function(c) {
      c.r += 2;
      c.x += 2;
      c.y += 2;
    });
  }
});