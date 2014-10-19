function makeFunction() {
    var name = "Hello Closure";
    
    function displayClosure() {
        console.log(name);
    }
    
    return displayClosure;
}

makeFunction()();