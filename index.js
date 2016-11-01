function countdown(callback){
    window.setTimeout(function() {
        callback()
    }, 2000 );
}

function createMultiplier(multiplyValue){

//how do you pass arg to inner function?
     return function (value){
        return multiplyValue * value
    }
}

function multiplier(num1, num2){
    return num1 * num2
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
