///<reference path="angular.min.js"/>
 //var app = angular.module("myModule",[])
   //                  .controller("myController",function($scope){
     //                   var employees=[
       //                     { firstname : "David", lastname : "Hastings" , salary : 24000},
         //                   { firstname : "Rohit", lastname : "Sharma" , salary : 26000},
           //                 { firstname : "Virat", lastname : "Kohli" , salary : 28000},
             //               { firstname : "MS", lastname : "Dhoni" , salary : 40000}
           //             ];

 //$scope.employees=employees;
 //});
 var app=angular.module("myModule",[])
                .controller("myController",function($scope){
                    var countries=[
                              {
                                  name : "UK",
                                  cities :[
                                      {name : "London"},
                                      {name : "Manchester"},
                                      {name : "Birmingham"},
                                  ]
                              },
                              {
                                name : "USA",
                                cities :[
                                    {name : "Los Angeles"},
                                    {name : "New York"},
                                    {name : "Boston"},
                                ]
                            },
                            {
                                name : "INDIA",
                                cities :[
                                    {name : "Hyderabad"},
                                    {name : "Mumbai"},
                                    {name : "Bangalore"},
                                ]
                            }
                    ];
                    $scope.countries=countries;
                });