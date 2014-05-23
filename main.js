/**
 * Created by cedric.claus on 23/05/2014.
 */
var myApp = angular.module('myApp', []);

myApp.factory("Data",function(){
    return {message : "i'm data from a service"}
})

function FirstCtrl($scope,Data){
 $scope.data = Data;
}

function SecondCtrl($scope,Data){
    $scope.data = Data;
}

