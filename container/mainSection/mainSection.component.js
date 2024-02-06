angular.module("mainSection")
    .component("mainsection",{
        templateUrl:'./container/mainSection/mainSection.template.html',
        controller:['dataService',function(dataService){
            var self = this;
            self.username = dataService.username;
            self.propertyList=dataService.myArray
            
        }]
    })
 