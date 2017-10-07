/*Glue between view and model is called controller.
*/

calcModule.controller("calcctrl", function($scope, calcfactory) /*in controller factory is injected*/{
    $scope.doadd=function() {
        var result = calcfactory.addition($scope.firstno, $scope.secondno);
        $scope.myresult=result;
    }
    $scope.dosub=function() {
        var result = calcfactory.subtract($scope.firstno, $scope.secondno);
        $scope.myresult=result;
    }
    $scope.domul=function() {
        var result = calcfactory.multiply($scope.firstno, $scope.secondno);
        $scope.myresult=result;
    }
    $scope.dodiv=function() {
        var result = calcfactory.division($scope.firstno, $scope.secondno);
        $scope.myresult=result;
    }
})