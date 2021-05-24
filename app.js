(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.items = "";
  $scope.resultMessage = "";
  $scope.numberOfItemsEntered = null;

//check for entered items and evaluate the appropriate message to show
  $scope.checkItems = function () {
    if($scope.items.length > 0) {
      console.log($scope.items);
      var arrayOfItems = $scope.items.split(',');
      $scope.resultMessage = checkNumberOfItems(arrayOfItems);
      $scope.numberOfItemsEntered = true;
    }
    else {
      $scope.resultMessage = "Please enter data first!";
      $scope.numberOfItemsEntered = false;
    }
  };
}

//take the entered items and return the number of items
  function checkNumberOfItems(string) {
    var numItems = string.length;
    if(numItems < 4)
      return "Enjoy!"
    else
      return "Too much!";
  }
})();
