'use strict';


var menu = document.querySelector('#menu');

menu.classList.add('hidden');

menu.setAttribute('aria-hidden', true);
menu.setAttribute('aria-labelledby', 'menu-toggle');

// setup hamburger button to allow toggling the menu
let menuBtn = document.querySelector('#menutoggle');

menuBtn.setAttribute('id', 'menu-toggle');

menuBtn.setAttribute('aria-controls', 'menu');
menuBtn.setAttribute('aria-expanded', 'false');



// listen for clicks, scrolls, page loads, etc
// click is the event, thing to do on click is the function
menuBtn.addEventListener('click',

  function(){
    // for debugging purposes
    console.log('menu ham button aka menuBtn has been clicked');


    if(menu.classList.contains('hidden')){

      console.log('menu is hidden, but showing the menu now');

      // remove hidden attribute
      menu.classList.remove('hidden');

      // set hidden to false to show the menu aka set expanded to true
      menu.setAttribute('aria-hidden', 'false');
      menu.setAttribute('aria-expanded', 'true');

    // otherwise if user clicks again, hide the menu again
    }else{
      console.log('menu is shown, hiding the menu now');
      menu.classList.add('hidden');

      menu.setAttribute('aria-hidden', 'true');
      menu.setAttribute('aria-expanded', 'false');
    }
  }

);
