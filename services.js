angular.module("factoryServiceModule",[])
    .factory("factoryService",function($http){
        var serviceObj={}
        serviceObj.getData=function(){
            return $http.get('https://api.chucknorris.io/jokes/random?category=dev')
        }
        return serviceObj
    })