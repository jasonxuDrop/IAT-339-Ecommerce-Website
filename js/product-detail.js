"use strict";

$(document).ready(function(){
    var element = document.getElementById("product-detail-pg-container");

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
