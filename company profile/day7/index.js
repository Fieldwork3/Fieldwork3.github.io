
//to get value of HTML element
//document.getElementById("firstNumber").value;

//to display value
//document.getElementById("result").value="";

function calculate() {
    var first_number;
    var second_number;
    var operator;
    var total;

    first_number = document.getElementById("firstNumber").value;
    second_number = document.getElementById("secondNumber").value;
    operator = document.getElementById("operator").value;

    if(operator == "+"){
        total = parseInt(first_number) + parseInt(second_number);
    }
    else if(operator == "-"){
        total = parseInt(first_number) - parseInt(second_number); 
    }
    else if(operator == "/"){
        total = parseInt(first_number) / parseInt(second_number);
    }
    else if(operator == "*"){
        total = parseInt(first_number) * parseInt(second_number);
    }

    /* note value by default is string. 
    Use a default function parseInt() to change to integer
    */

    document.getElementById("result").value = total;

}

//morning
//afternoon
//evening
var greet;
//nothing shown if greet is undefine. Must assign first.
greet = "afternoon";

if(greet == "morning") {
    console.log("This is Morning");
}
else if(greet == "afternoon") {
    console.log("This is Afternoon");
}
else if(greet == "evening") {
    console.log("This is Evening");
}
else{
    console.log("Night Time");
}
//if assignment of var is removed, then it will show the default "Night Time"


greet = "afternoon";

if(operator == "+") {
    console.log("This is Morning");
}
else if(greet == "afternoon") {
    console.log("This is Afternoon");
}
else if(greet == "evening") {
    console.log("This is Evening");
}
else{
    console.log("Night Time");
}

var greetings = ["Morning", "Afternoon", "Evening"];
console.log(greetings);
console.log(greetings.length);

//to print specific value order of the array

console.log(greetings[1]);
console.log(greetings[2]);
console.log(greetings[3]);

var primeNumber = [1, 3, 5, 7, 9, 12, 15];

console.log(primeNumber[primeNumber.length - 1]);

//to print out the prime numbers

/*
var step = 0;
while( step < primeNumber.length ){
    
    console.log(step);
    step = step + 1;
}
*/

var step = 0;
while( step < primeNumber.length ){

    console.log(primeNumber[step]);
    step = step + 1;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//if even number, print -> "Even Number"
// if not, print "Not Even Number"

step = 0;
while( step < numbers.length) {
    
    var isEven = numbers[step] % 2;

    // next is use conditional statement

    if(isEven == 0){
        console.log(numbers[step] + " is even number");
    }else{
        console.log(numbers[step] + " is not even number")
    }

    step = step +1;
}

var numbers_2 = [1,2,3,4,5,6,7,8,9,10];
for( var a = 0 ; a < numbers_2.length; a++) {
    console.log(numbers_2[a]);
}

var collections = [];

console.log(collections);

collections.push("Test");

console.log(collections);

collections.push("Test2");

console.log(collections);



var myCollections = [];

//if var myCollections = [] is inside the function, it will always re-initialise the var 
//and reload only one number always, so do it once outside the function

function addMe() {
    var myText = document.getElementById("myText").value;
    myCollections.push(myText);

    //3)to empty value  
    document.getElementById("myResult").innerHTML = ""

    //document.getElementById("myResult").innerHTML = "This is Test only";
    //innerHTML is to get it display out in HTML.

    for( var a = 0; a < myCollections.length ; a++ ){
        var currValue = myCollections[a] + "<br>"; // 4)to bring on next line
        // a is current index value.
        var currResultValue = document.getElementById("myResult").innerHTML;
        document.getElementById("myResult").innerHTML = currResultValue + currValue;
        //2) not to replace the previous value, so the additon of two Values
    }
}

var test = document.getElementById("myResult").innerHTML;
console.log(test);
