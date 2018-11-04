var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp
.filter("Gender",function()
{
  return function(gender)
  {
    if(gender =="male")
    {
      return 1;
    }
    else 
    {
      if(gender =="female")
    {
      return 2;
    }
  }
  }
})
.service('sanju',function()
{
  this.myfunc = function(x)
  {
    return x.toString(16);
  }
})
.filter('myfilter',['sanju',function(sanju)
{
  return function(x)
  {
    return sanju.myfunc(x);
  }
}
])
.controller('PhoneListController', function PhoneListController($scope,$location,$timeout,$interval,sanju,$http) {
 /*absUrl() is used with $location service to give the absolute link or url*/  
 $http.get("dummyhtml.html").then(function(response)
 {
   $scope.message=response.data;
 })
 $scope.hex= sanju.myfunc(255);
 $scope.myurl = $location.absUrl();
  $scope.employees = [
    /*{
      name: "john",
      dateofbirth: new Date("May 05,1970"),
      gender: "male",
      salary: 1000
    },*/ {
      name: "sanju",
      dateofbirth: new Date("June 17,2000"),
      gender : "male",
      salary: 2000
    }, {
      name: "tulasi",
      dateofbirth: new Date("January 20,1999"),
      gender : "female",
      salary: 500
    },
    /* {
      name: "sridhar",
      dateofbirth: new Date("January 22,1999"),
      gender : "male",
      salary: 5000
    }*/
  ];
  $scope.fname="sanju";
  $timeout(function()
 {    
      $scope.fname="angularjs";
 },2000);
 $scope.tym= new Date().toLocaleTimeString();
 $interval(function()
 {
    $scope.tym= new Date().toLocaleTimeString();
 },1000);
  $scope.columnsort="name";
  $scope.reversesort=false;
  $scope.sortdata=function(column)
  {
    if($scope.columnsort==column)
    {
      $scope.reversesort=!($scope.reversesort);
    }
    else{
    $scope.reversesort=false;}
    $scope.columnsort=column;
  }
  $scope.getsortclass = function(column)
  {
    if($scope.columnsort==column)
    {
      return $scope.reversesort ? 'arrow-down' : 'arrow-up';
    }
    return '';
  }
  $scope.search = function(item)
  {
    if($scope.searchvalue==undefined)
    {
      return true;
    }
    else{
      if(item.name.toLowerCase().indexOf($scope.searchvalue.toLowerCase())!=-1 || item.gender.toLowerCase().indexOf($scope.searchvalue.toLowerCase())!=-1 )
      {
        return true;
      }
    }
    return false;
  }
});