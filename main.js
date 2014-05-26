/**
 * Created by cedric.claus on 23/05/2014.
 */
var myApp = angular.module('myApp', []);

myApp.factory("Data",function(){
    return {message : "i'm data from a service",
            message2 : " Cedric"
        }
})

myApp.filter('reverse',function(Data){
    return function(toto){
        return toto.split("").reverse().join("") +Data.message2;
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

