
 var app = angular.module('app',['ui.router']);
    app.config(['$stateProvider',function($stateProvider){
        $stateProvider.state('firstMessae',{
            url:"/first",
            template:"<strong>hi this is my first ui-route message</strong>"
        });
    }]);
 