// this mobile nav toggling was created using Paul's js lecture example/tutorial activity from March 9's class
// as a reference

'use strict';


var menu = document.querySelector('#menu');

menu.classList.add('hidden');

menu.setAttribute('aria-hidden', true);
menu.setAttribute('aria-labelledby', 'menu-toggle');

// setup hamburger icon to allow toggling the mobile menu button
let menuBtn = document.querySelector('#menutoggle');

menuBtn.setAttribute('id', 'menu-toggle');
menuBtn.setAttribute('aria-controls', 'menu');
menuBtn.setAttribute('aria-expanded', 'false');



// listen for clicks on the menu button (hamburger icon)
menuBtn.addEventListener('click',

  function(){
    // for debugging purposes
    console.log('menu ham button aka menuBtn has been clicked');

    // if the main menu has the 'hidden' class appended to it
    // show the hamburger menu
    if(menu.classList.contains('hidden')){
      menuBtn.classList.add('active');

      console.log('menu is hidden, but showing the menu now'); // debugging purposes

      // then remove hidden attribute
      menu.classList.remove('hidden');

      // and set hidden to false to show the menu aka set expanded to true
      menu.setAttribute('aria-hidden', 'false');
      menu.setAttribute('aria-expanded', 'true');

    // otherwise if user clicks the menu button again, hide the menu
    }else{
      menuBtn.classList.remove('active');

      menu.classList.add('hidden');
      menu.setAttribute('aria-hidden', 'true');
      menu.setAttribute('aria-expanded', 'false');
    }
  }

);
