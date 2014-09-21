function Person(firstName, lastName, age) {
    var firstName = firstName;
    var lastName = lastName;
    var age = age;
    
    this.sayHi = function()
    {
        console.log("Hi from " + firstName + " " + lastName);
    }
    
    function thisIsAPrivateFunction() 
    {
        console.log("You cannot call me");       
    }
    
    this.callMyPrivateFunction = function()
    {
        console.log("calling from an instance of the Person class")
        thisIsAPrivateFunction();
        console.log(this);
    }
}