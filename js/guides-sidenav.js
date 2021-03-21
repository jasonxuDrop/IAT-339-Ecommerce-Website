// article on the pages
var articleGraphic = document.querySelector('#graphic');
var articleSwitch = document.querySelector('#switch');
var articleKeycap = document.querySelector('#keycap');
var articlePlate = document.querySelector('#plate');

// pages [cover, switch, keycap, plate]
var page0 = document.querySelector('#graphic div:nth-child(5)');
var page1 = document.querySelector('#graphic div:nth-child(4)');
var page2 = document.querySelector('#graphic div:nth-child(3)');
var page3 = document.querySelector('#graphic div:nth-child(2)');

// nav <a>s
var aSwitch = document.querySelector('#guide-nav li:nth-child(1) a');
var aKeycap = document.querySelector('#guide-nav li:nth-child(2) a');
var aPlate = document.querySelector('#guide-nav li:nth-child(3) a');

// hide all sections but graphic
articleSwitch.classList.add('hide');
articleKeycap.classList.add('hide');
articlePlate.classList.add('hide');

function showSwitch(){
    // highlight the selected article in the nav
    aSwitch.classList.add('selected')
    aKeycap.classList.remove('selected');
    aPlate.classList.remove('selected');

    // clear page stylings
    page0.classList.remove('lifted');
    page1.classList.remove('lifted');
    page2.classList.remove('lifted');
    page3.classList.remove('lifted');
    page1.classList.remove('lit');
    page2.classList.remove('lit');
    page3.classList.remove('lit');

    // lift up the pages
    page1.classList.add('lit');
    page0.classList.add('lifted');

    // reveal the sections
    articleGraphic.classList.add('hide');
    articleSwitch.classList.remove('hide');
    articleKeycap.classList.add('hide');
    articlePlate.classList.add('hide');
}
function showKeycap(){
    // highlight the selected article in the nav
    aSwitch.classList.remove('selected')
    aKeycap.classList.add('selected');
    aPlate.classList.remove('selected');

    // clear page stylings
    page0.classList.remove('lifted');
    page1.classList.remove('lifted');
    page2.classList.remove('lifted');
    page3.classList.remove('lifted');
    page1.classList.remove('lit');
    page2.classList.remove('lit');
    page3.classList.remove('lit');

    // lift up the pages
    page2.classList.add('lit');
    page1.classList.add('lifted');

    // reveal the sections
    articleGraphic.classList.add('hide');
    articleSwitch.classList.add('hide');
    articleKeycap.classList.remove('hide');
    articlePlate.classList.add('hide');
}
function showPlate(){
    // highlight the selected article in the nav
    aSwitch.classList.remove('selected')
    aKeycap.classList.remove('selected');
    aPlate.classList.add('selected');

    // clear page stylings
    page0.classList.remove('lifted');
    page1.classList.remove('lifted');
    page2.classList.remove('lifted');
    page3.classList.remove('lifted');
    page1.classList.remove('lit');
    page2.classList.remove('lit');
    page3.classList.remove('lit');

    // lift up the pages
    page3.classList.add('lit');
    page2.classList.add('lifted');

    // reveal the sections
    articleGraphic.classList.add('hide');
    articleSwitch.classList.add('hide');
    articleKeycap.classList.add('hide');
    articlePlate.classList.remove('hide');
}