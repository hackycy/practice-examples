//cart.js
define(['user'], function (user) {
    console.log('cart');
    user.m1();
    user.m2();
    var getCartCount = function(){
        return 100;
    }
    return {
        getCartCount:getCartCount
    }
});