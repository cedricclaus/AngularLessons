/**
 * Created by cedric.claus on 23/05/2014.
 */
var myApp = angular.module('superHero', []);

myApp.directive("superman",function(){
    return {
        restrict : "E",
        template : "<div>Here I'am</div>"
    }
})



