
// TODO on click on menu, open
// TODO on click on X, close
// TODO if click on overlay, close
// TODO on click on x, remove item
// TODO click on q to add item

// TODO KEEP TRACK OF THE CART ITEM COUNT

// ! vars
var isCartOpen = false;

var cartOverlay = document.querySelector('#cart-overlay');

var items = [
	document.querySelector('#cart-overlay .cart-product-wrapper .product:nth-child(1)'),
	document.querySelector('#cart-overlay .cart-product-wrapper .product:nth-child(2)'),
	document.querySelector('#cart-overlay .cart-product-wrapper .product:nth-child(3)')];

var itemCounts = [
	document.querySelector('#cart-overlay .cart-product-wrapper .product:nth-child(1) .item-count'),
	document.querySelector('#cart-overlay .cart-product-wrapper .product:nth-child(2) .item-count'),
	document.querySelector('#cart-overlay .cart-product-wrapper .product:nth-child(3) .item-count')];

var	bagItemCountDesktop = document.querySelector('#bag-item-count-desktop');

// ! runtime functions

// function for toggling the state of the cart overlay
function toggleCart(){
	openCart(!isCartOpen);
}

// function for opening and closing the cart overlay
// doOpen: true = open the menu, false = close the menu
function openCart(doOpen) {
	// on open overlay
	if (doOpen == true) {
		isCartOpen = true;
		cartOverlay.classList.remove('hide');
	}
	// on close overlay
	else {
		isCartOpen = false;
		cartOverlay.classList.add('hide');
	}
}

// function for adding item (by removing the 'hide' class from a item card in the cart already)
// i: index for item to reveal [0,1,2]
function addItem(i) {
	items[i].classList.remove('hide');

	// change the menu icon display number
	var currentN = parseInt(bagItemCountDesktop.innerHTML);
	currentN++;
	itemCounts[i].innerHTML = currentN;
}

// function for removing item
// i: index for the item to be removed [0,1,2]
function removeItem(i) {
	items[i].classList.add('hide');

	// change the menu icon display number
	var currentN = parseInt(bagItemCountDesktop.innerHTML);
	currentN--;
	if(currentN==0) bagItemCountDesktop.classList.add('hide');
	itemCounts[i].innerHTML = currentN;
}

// function to increase or decrease purchase amount
// i: index of item to change count for [0,1,2]
// n: amount to change by (+1 or -1)
function changeItemCount(i, n) {
	var currentN = parseInt(itemCounts[i].innerHTML);
	currentN+=n;
	if(currentN<0) currentN = 0;
	itemCounts[i].innerHTML = currentN;
}