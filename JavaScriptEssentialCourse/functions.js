var logFunction = function(message) 
{
    console.log(message);
}

var makeRandomNumber = function() 
{
    var randomNum = Math.random();
    var randomNumBy10 = randomNum * 10;
    var roundedNum = Math.ceil(randomNumBy10);
    return roundedNum;
}

function makeRandomNumber20()
{
    var randomNum = Math.random();
    var randomNumBy20 = randomNum * 20;
    var roundedNum = Math.ceil(randomNumBy20);
    return roundedNum;   
}