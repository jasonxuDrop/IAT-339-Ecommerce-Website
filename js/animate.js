"use strict";

$(document).ready(function(){
    var lastScrollTop = 0;

    var scrollableElement = document.body; //document.getElementById('scrollableElement');
    var header = document.querySelector(".header-wrapper");

    scrollableElement.addEventListener('wheel', checkScrollDirection);

    function checkScrollDirection(event) {
        if (checkScrollDirectionIsUp(event)) {
            console.log('UP');
            header.classList.add("sticky");
            header.classList.remove("hide-nav");
        } else {
            console.log('Down');
            header.classList.remove("sticky");
            header.classList.add("hide-nav");
        }
    }

    function checkScrollDirectionIsUp(event) {
        if (event.wheelDelta) {
            return event.wheelDelta > 0;
        }
        return event.deltaY < 0;
    }
});