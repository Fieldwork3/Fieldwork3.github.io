
function calculate(myLocation, myLocation2, myLocation3) {
    var myName = "This is Stackup, at " + myLocation + ", " + myLocation2;
    console.log(myName);
}

/*above is a procedure to just perform a task
can pass external value to between the brackets ()
*/
// below is a return value; by adding return just before closing }
/*
comments for multiple lines
*/

calculate("One North", "JTC Launchpad");
//to do a dynamic function to return multple times

calculate("test","test");

function getMyFullName() {
    var firstName = "Stackup";
    var lastName = "One North";
    var fullName = firstName + " " + lastName;
    return fullName;
}
var myFullName = getMyFullName();
console.log(myFullName);

function greet(firstName, lastName, bornYear){
    var age = 2018 - bornYear;
    var greetings = "Hello," + firstName + " " + lastName + ", " + age;
    console.log(greetings);
}

greet("Michael", "Jordan", 1988);
greet("Mauro", "Icardi", 1987);
greet("Lionel", "Messi", 1977);

function testMe(){
    alert("Hi you hit the button");
}
