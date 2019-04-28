//Question No 5:
var Fruit = /** @class */ (function () {
    function Fruit(name) {
        this.fruitName = name;
    }
    Fruit.prototype.printName = function () {
        return "Fruit Name is: " + this.fruitName;
    };
    return Fruit;
}());
var newFruit = new Fruit("Kiwi");
document.querySelector("#fruitDiv").innerHTML = newFruit.printName();
// Question No 6:
var Vars = /** @class */ (function () {
    function Vars(name, age, todayIsCloudy) {
        this.myName = name;
        this.myAge = age;
        this.todayIsCloudy = todayIsCloudy;
    }
    Vars.prototype.printVar = function () {
        var str = " Name: " + this.myName + " <br>Age: " + this.myAge + " <br>Today's Weather: " + this.todayIsCloudy;
        return str;
    };
    return Vars;
}());
var newVars = new Vars("Waqas", 36, true);
document.querySelector("variablesDiv").innerHTML = newVars.printVar();
