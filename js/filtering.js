
// tutorial used: https://www.w3schools.com/howto/howto_js_filter_elements.asp


'use strict';


filterSelection("all")


function filterSelection(str) {
  var div;
  var j;
  div = document.getElementsByClassName("filterCard");

  if (str == "all") {
    str = "";
  }

  // for all in the array populated with filterDiv class elements
  for (j = 0; j < div.length; j++) {
    // remove display
    removeAttribute(div[j], "show");

    if (div[j].className.indexOf(str) > -1){
      setAttribute(div[j], "show");
    }
  }
}


// listen for clicks for elements within the filter container
var filterContainer = document.getElementById("filterContainer");
var filterToggle = filterContainer.getElementsByClassName("filterbtn");

// for each target in the filterToggle array
for (var i = 0; i < filterToggle.length; i++) {

  // add a listener to listen for each for each filter button in the filterToggle arr
  filterToggle[i].addEventListener("click", function() {

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

  });
}



// set attributes to be shown
function setAttribute(target, name) {
  var i, arr1, arr2;
  arr1 = target.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      target.className += " " + arr2[i];
    }
  }
}

// used for removing the show attribute on unfiltered elements
function removeAttribute(target, name) {
  var i, arr1, arr2;
  arr1 = target.className.split(" ");
  arr2 = name.split(" ");

  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  target.className = arr1.join(" ");
}
