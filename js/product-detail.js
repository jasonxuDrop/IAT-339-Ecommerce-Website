"use strict";

$(document).ready(function(){
    // console.log('Width:  ' +  getWidth() );
    var element = document.getElementById("product-detail-pg-container");

    // if(getWidth() < 1068){
    //     console.log('Apply remove');
    //     // remove max-row from hero
    //     element.classList.remove("grid-container");
    //     element.classList.add("grid-container-bleed");
    //     // remove column sizing on black box

    //     // remove column sizing on hero 

    //     // remove detail image preview
    //     var detailPreview = document.getElementById()
    // } else{
    //     element.classList.remove("grid-container-bleed");
    //     element.classList.add("grid-container");
    // }
    

    // function getWidth() {
    //     if (self.innerWidth) {
    //       return self.innerWidth;
    //     }
      
    //     if (document.documentElement && document.documentElement.clientWidth) {
    //       return document.documentElement.clientWidth;
    //     }
      
    //     if (document.body) {
    //       return document.body.clientWidth;
    //     }
    //   }

    function myFunction(x){
        if(x.matches){
            console.log('Apply remove');
            // remove max-row from hero
            element.classList.remove("grid-container");
            element.classList.add("grid-container-bleed");
        } else {
            console.log('Apply remove');
            // remove max-row from hero
            element.classList.remove("grid-container-bleed");
            element.classList.add("grid-container");
        }
    }

    var x = window.matchMedia("(max-width: 73em)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
});
