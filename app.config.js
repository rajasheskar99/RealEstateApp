angular.module('realEstateApp')
    .config(['$routeProvider',function($routeProvider){
        $routeProvider.
        when('/',{
            template:'<mainsection></mainsection>'
        })
        .when("/about",{
            template:'<aboutsection></aboutsection>'
        })
        .when("/login",{
            template:'<login></login>'
        })
        .when("/contact",{
            template:'<contact-sec></contact-sec>'
        })
        .when('/error',{
            template:'<error></error>'
        })
        .otherwise('/error')
         
      
         
    }])