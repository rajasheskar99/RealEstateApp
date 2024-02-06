var weatherapp=angular.module("weatherService",[])
    weatherapp.service("weatherService" ,function($http){
        var keyId="fa35eec484258fcca7d8a0d6f21922bf"
        this.getWeather=function(city){
            var api="api.openweathermap.org/data/2.5/weather"
            var tmpUnits="metric"
            var params={                 
                q:city,
                appid:keyId,
                units:tmpUnits,
                 
            }
            return $http.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=fa35eec484258fcca7d8a0d6f21922bf`)
                .then(function(res){
                    //console.log("hello");
                    console.log(res);
                    return res.data
                     
                })
        }
    })
 
 //'https://api.openweathermap.org/data/2.5/weather?units=metric&q=hyderabad&appid=fa35eec484258fcca7d8a0d6f21922bf'

//  api.openweathermap.org/data/2.5/weather?appid=fa35eec484258fcca7d8a0d6f21922bf&q=hyderabad&units=metric