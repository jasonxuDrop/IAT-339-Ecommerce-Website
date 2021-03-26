"use strict";

$(document).ready(function(){
    console.log('Width:  ' +  getWidth() );

    if(getWidth() < 1068){
        console.log('Apply remove');
        // remove column sizing on black box

        // remove column sizing on hero 

        // remove detail image preview
        var detailPreview = document.getElementById()
    }


    function getWidth() {
        if (self.innerWidth) {
          return self.innerWidth;
        }
      
        if (document.documentElement && document.documentElement.clientWidth) {
          return document.documentElement.clientWidth;
        }
      
        if (document.body) {
          return document.body.clientWidth;
        }
      }
});
