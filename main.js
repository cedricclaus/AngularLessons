/**
 * Created by cedric.claus on 23/05/2014.
 */
var myApp = angular.module('myApp', []);

myApp.factory("Data",function(){
    return {message : "i'm data from a service"}
})

myApp.filter('reverse',function(Data){
    return function(text){
        return text.split("").reverse().join(""); data.message;
    }
})

function FirstCtrl($scope,Data){
 $scope.data = Data;
}

function SecondCtrl($scope,Data){
    $scope.data = Data;

    $scope.reversedMessage = function(message) {
        return message.split("").reverse().join("");
    }
}

