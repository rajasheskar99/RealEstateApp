angular.module("mainSection")
    .component("mainsection",{
        templateUrl:'./container/mainSection/mainSection.template.html',
        controller:function(){
            this.myArray=[
                { name :'villa',address:"hyderabad",cost:" >Rs6,50,000"},
                { name:"Farmhouse",address:"delhi",cost:" >Rs4,50,000"},
                { name:"bungalow",address:"chennai",cost:" >Rs7,20,000"},
                { name:"woden cottage",address:"bangalore",cost:" >Rs8,00,000"}                  
            ]
        }
    })
 