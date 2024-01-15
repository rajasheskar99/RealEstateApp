angular.module("aboutSection")
    .component("aboutsection",{
        templateUrl:'./container/aboutSection/aboutSection.template.html',
        controller:['factoryService',function getDataFromApi(factoryService){
            var self=this
            self.data

            self.getData=function(){
                factoryService.getData().then(function(res){
                    self.data=res.data.value})
            }
        }]})


        /*
        self.getData=function(){
                $http({
                    method:'GET',
                    url:'https://api.chucknorris.io/jokes/random?category=dev'
                }).then(function(response){
                    self.data=response.data.value
                },function(response){
                    console.log(response)
                })
        */