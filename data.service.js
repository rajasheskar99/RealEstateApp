angular.module("data",[])
 .service("dataService",function(){
    var self=this
    self.username = 'johndoe1337@fakemail.com';
    self.myArray=[
            {id:1, imgUrl:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D',name :'villa',address:"hyderabad",cost:"Rs6,50,000"},
            {id:10, imgUrl:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2UlMjBwcm9wZXJ0eXxlbnwwfHwwfHx8MA%3D%3D',name :'bungalow',address:"hyderabad",cost:"Rs7,50,000"},
            {id:2,imgUrl:'https://plus.unsplash.com/premium_photo-1661964475795-f0cb85767a88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8fDA%3D', name:"Farmhouse",address:"hyderabad",cost:"Rs4,50,000"},
            {id:3,imgUrl:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fHww', name:"bungalow",address:"chennai",cost:"Rs7,20,000"},
            {id:4,imgUrl:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D', name:"bungalow",address:"chennai",cost:"Rs7,20,000"},
            {id:8,imgUrl:'https://media.istockphoto.com/id/1056805978/photo/comfort-of-home.jpg?s=612x612&w=0&k=20&c=2xasokrYK8-gBDth7FcG1ca0QZ3Jm8grhRtKEz7K_64=', name:"cottage",address:"chennai",cost:"Rs7,50,000"},         
            {id:5,imgUrl:'https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2VzfGVufDB8fDB8fHww', name:"woden cottage",address:"bangalore",cost:"Rs8,00,000"}  ,
            {id:1, imgUrl:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2UlMjBwcm9wZXJ0eXxlbnwwfHwwfHx8MA%3D%3D',name :'bungalow',address:"bangalore",cost:"Rs7,50,000"},
            {id:6,imgUrl:'https://media.istockphoto.com/id/1337820901/photo/large-modern-contemporary-house-in-wood-and-concrete.jpg?s=612x612&w=0&k=20&c=LEF8Y7_lp2axbnOKoVH5Z6nA6V6j4HaoJxXtpJHozos=', name:"cottage",address:"bangalore",cost:"Rs8,20,000"},
            {id:7,imgUrl:'https://media.istockphoto.com/id/185930591/photo/oregon-forest-modern-log-cabin.jpg?s=612x612&w=0&k=20&c=IFs0X3lySCHGVk2LfbzLV6SjG1fMKqOY5EPLoLoWqas=', name:"cottage",address:"goa",cost:"Rs6,00,000"},
            {id:8,imgUrl:'https://media.istockphoto.com/id/1056805978/photo/comfort-of-home.jpg?s=612x612&w=0&k=20&c=2xasokrYK8-gBDth7FcG1ca0QZ3Jm8grhRtKEz7K_64=', name:"cottage",address:"goa",cost:"Rs7,50,000"},                                                                              
           {id:9,imgUrl:'https://media.istockphoto.com/id/1226113451/photo/modern-house-in-the-forest.jpg?s=612x612&w=0&k=20&c=COLtcy3ense6x4Tq5dX4XvGVsYhJhG8KFRplU8npufk=', name:"cottage",address:"goa",cost:"Rs7,00,000"},
        ]   
         
    })