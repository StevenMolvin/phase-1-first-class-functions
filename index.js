function receivesAFunction(x) {
    x();
}
function returnsANamedFunction() {
    return receivesAFunction;
}
function returnsAnAnonymousFunction() {
    return function () {
        console.log("I am anonymous");
    };
    
}