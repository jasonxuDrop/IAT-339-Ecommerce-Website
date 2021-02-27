

// test for the nav underline function
function patternpageFuntion() {

  // document.getElementById("nav-pattern").style.color = "red";

  //document.getElementsByClassName('underline1').style.display = "inline-block";
  var elems = document.getElementsByClassName('patternhighlight');
  for (var i = 0; i < elems.length; i++){
    elems[i].style.color = '#83cdd7';
  }
}


function citationpageFuntion() {
  var elems = document.getElementsByClassName('citehighlight');
  for (var i = 0; i < elems.length; i++){
    elems[i].style.color = '#83cdd7';
  }
}

function processpageFuntion() {
  var elems = document.getElementsByClassName('underline4');
  for (var i=0;i<elems.length;i+=1){
    elems[i].style.display = 'block';
  }
}
