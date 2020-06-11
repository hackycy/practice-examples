var _count = 0;
var expose_num = 100;
var m1 = function(){
    console.log('m1');
}
var m2 = function(){
    console.log('m2');
}
var getCount = function(){
    return _count;
}
module.exports.m1 = m1;
module.exports.m2 = m2;
module.exports.getCount = getCount;
module.exports.expose_num = expose_num;