angular.module("property")
    .component("propertydetail",{
        templateUrl:'./container/propertyDetail/property.template.html',
        controller:['$routeParams', 'weatherService', 'dataService' ,function($routeParams,weatherService ,dataService){
            var self=this
            self.weatherData=null
            self.proId=$routeParams.id  
            console.log(self.proId)
            self.propertyInfo=dataService.myArray.filter(ele=>self.proId==ele.id)[0]
            self.city=this.propertyInfo.address
            console.log(self.propertyInfo)
            
            // self.getData=function(){
                weatherService.getWeather(self.city)
                .then(function(res){
                    console.log(res);
                    console.log(res.main.temp);
                    self.temp=Math.round(res.main.temp);
                    self.humidity=res.main.humidity
                    self.win=Math.round(res.wind.speed)
                     self.imageText=res.weather[0].main+'.png'
                     console.log(self.imageText+'.png')
                })
            //console.log(self.weatherData)
            // }
            

        }]
    })
