angular.module("container")
    .component("container",{
        templateUrl:'container/container.template.html',
        controller:function myContainerCtlr(){
            this.home=true
            this.about=false
            this.isLogin=false
            this.contact=false

            this.getClicked=function(e){
                console.log(e.target.textContent)
                switch(e.target.textContent){
                     
                    case e.target.textContent="Home":
                        this.home=true
                        this.about=false
                        this.isLogin=false
                        this.contact=false
                        break
                    case e.target.textContent="About":
                        this.home=false
                        this.about=true
                        this.isLogin=false
                        this.contact=false
                        break
                    case e.target.textContent="Login":
                        this.home=false
                        this.about=false
                        this.isLogin=true
                        this.contact=false
                        break
                    case e.target.textContent="Contact":
                        this.home=false
                        this.about=false
                        this.isLogin=false
                        this.contact=true
                        break
                    case e.target.textContent="Real Estate":
                        this.home=true
                        this.about=false
                        this.isLogin=false
                        this.contact=false
                        break
                    default:
                        null
                }

            }
        }
    })
 