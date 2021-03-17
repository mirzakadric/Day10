function myFunction(delValue) { // Change this line

    // Only change code below this line

    var lion = {
        name : "Simba",
        legs : 4,
        tail : 1,
        roar : "roar-roar"
    };

    delete lion[delValue];
    return lion;

    // Only change code above this line
}
console.log(myFunction("roar")); // Change this line
module.exports = myFunction;