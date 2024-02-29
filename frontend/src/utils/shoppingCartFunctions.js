import countDiscountPrice from "./countDiscountPrice.js"

let cart;
// let cartTotalValue;

function initializeCart() {
    let cartData = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cartData);
    } else {
        cart = [];
    }
}

function emptyShoppingCart(){
    cart = [];
    setCart();
}

function removeCompletelyFromCart(product){
    let cartItemIndex = cart.findIndex(item => item.product && item.product.id === product.id);
        if (cartItemIndex > -1) { 
            cart.splice(cartItemIndex, 1); 
          }
    setCart();
}

function addToCart(product) {
    if (product && product.hasOwnProperty('id')) { 
        if (cart.length === 0) {
            cart.push({ product: product, amount: 1 });
        } else {
            let cartItemIndex = cart.findIndex(item => item.product && item.product.id === product.id);
            if (cartItemIndex !== -1) {
                cart[cartItemIndex].amount += 1;
            } else {
                cart.push({ product: product, amount: 1 });
            }
        }
        setCart();
    } else {
        console.error("Invalid product:", product);
    }
}

function removeOneFromCart(product) {
    let cartItemIndex = cart.findIndex(item => item.product && item.product.id === product.id);
    if (cartItemIndex !== -1) {
        cart[cartItemIndex].amount -= 1;
        if (cart[cartItemIndex].amount == 0) cart.splice(cartItemIndex, 1);
        setCart();
    }
}

function cartTotal(){
    let cartTotalValue = cart.reduce((acc, item) => acc + (countDiscountPrice(item.product.price, item.product.discount) * item.amount), 0); 
    localStorage.setItem("cartTotalValue", JSON.stringify(cartTotalValue));
}

function getCartTotal(){
    return JSON.parse(localStorage.getItem("cartTotalValue"));
}

function getCartLength(){
    setCart();
    return cart.length;
}


function setCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
    cartTotal();
}

function getCartItemAmount(product){
    if (cart){
        const cartItem = cart.find(item => item.product && item.product.id === product.id);
        return cartItem ? cartItem.amount : 0;
    } else {
        return 0;
    }
}

export default {getCartLength, getCartTotal, emptyShoppingCart, getCartItemAmount, cartTotal, removeCompletelyFromCart, addToCart, removeOneFromCart, initializeCart}; 
