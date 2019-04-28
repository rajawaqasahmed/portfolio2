//Question No 5:

class Fruit{
    fruitName: string;
    constructor(name: string) {
        this.fruitName = name;
    }
    printName(){
       
        return "Fruit Name is: " + this.fruitName;
    }
}
let newFruit = new Fruit("Kiwi");
document.querySelector("#fruitDiv").innerHTML = newFruit.printName();





// Question No 6:

class Vars{
    myName: string;
    myAge: number;
    todayIsCloudy: boolean;
    
    constructor(name: string, age: number, todayIsCloudy: boolean){
        this.myName= name;
        this.myAge= age;
        this.todayIsCloudy= todayIsCloudy;
        }
        printVar(){
            let str: String = " Name: " + this.myName + " <br>Age: " + this.myAge + " <br>Today's Weather: " + this.todayIsCloudy;
            return str;
        }
    }
    
    let newVars = new Vars("Waqas", 36, true);
    document.querySelector("variablesDiv").innerHTML = newVars.printVar();

    
    
    
    
    
    
