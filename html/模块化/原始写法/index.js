// var _count = 0;
// function m1() {
//     console.log('m1');
// }

// function m2() {
//     console.log('m2');
// }

// var module1 = {
//     _count: 0,
//     m1: function(){
//         console.log('m1');
//     },
//     m2: function(){
//         console.log('m2');
//     }
// }

var module1 = (function(){
    var _count = 0;

    function m1() {
        console.log('m1');
    }

    function m2() {
        console.log('m2');
    }

    return {
        m1: m1,
        m2: m2,
        getCount: function(){
            return _count;
        }
    }
})();
