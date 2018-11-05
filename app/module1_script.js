var  cat = angular.module('my_app',[])
                    .controller('my_controller',function($scope)
{
$scope.x="none";
$scope.food="";
$scope.message=" ";
var j=0;
$scope.choose = function(food)
{
    var strc = new Array();
    var strCopy = food.split(',');
    for(i=0;i<strCopy.length;i++)
    {
        if(strCopy[i]!="") /*,, and , , will not be counted*/
        {
           strc.push(strCopy[i]);
           j++;
        }
    }
    if(food=="")
    {
    $scope.message="Please enter data first";
    $scope.x="red";
    }
    else if(strc.length<=3)
    {
    $scope.message="enjoy..!";
    $scope.x="green";
    }
    else if(strc.length>=3)
    {
    $scope.message="Too much..!";
    $scope.x="green";
    }
}
});
