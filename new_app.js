/*
$(document).ready(function(){
	var a = 10;
	$("#value").html(a);
	setTimeout(function(){
		a = 15;
		$("#value").html(a);
	}, 5000)
})
*/
/*function Ctrl($scope, $timeout){
	$scope.a = 806;
	//$scope.timeInMs = 50;
	var countUp = function(){
		$scope.a += 1;
	}
	$timeout(countUp, 1000);
}*/
angular.module('MyAppName', [])
    .controller('Ctrl', function($scope, $timeout) {
    $scope.a = 1;
    var countUp = function() {
        $scope.a+= 1;
        $timeout(countUp, 1000);
    }
    $timeout(countUp, 1000);
});
