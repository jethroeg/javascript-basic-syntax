// console.log('hello world');

// alert('hello this is jethroe')

// How to write a comment inline

// Variables

// var b = 'smoothie';
// console.log(b)

// var someNumber = 45;
// console.log(someNumber);

// var age = prompt('What is your age?');

// document.getElementById('someText').innerHTML = age;

// for example if you have <p id="someText"><p>

// Numbers in Javascript

/* var num1 = 10;

// increment num1 by 1
num1++;
// decrement num1 by 1 
num1--;
console.log(num1);
console.log(num1 % 6);
// increment/decrement by 10

num1 += 20;

console.log(num1);
*/ 

 // Function
/*
 function fun() {
    var name = prompt('What is your name? ');
    document.getElementById('someText').innerHTML = 'hello ' + name;

 }

fun();
*/

/* function greeting(name) {
    console.log(name)
}
greeting('jethroe')
*/

/* Arguments

function someNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}
someNumbers(69, 69);
*/

// while loop

/* var num = 0

while (num < 100) {
    num += 1;
    console.log(num);
}
*/ 
//for loop
/*
for (let num = 1; num < 101; num++) {
    console.log(num);
}
*/

// data types that I don't know yet
/*
let name = {first: 'jethroe', last: 'gatbunton'}; // he mentioned that this is like dictionaries in python
let random; //undefined
let nothing = null; //value null
*/

// strings in javascript (common methods)
/*
let fruit = 'bananaq'
let moreFruits = 'banana\napple' //new line
console.log(moreFruits);
console.log(moreFruits.length);
console.log(fruit.indexOf('q'));
console.log(fruit.slice(1, 6))
console.log(fruit.replace('q', ' split')) //this is cool it replaces it
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(6)) // get the letter on that index
console.log(fruit[4]) // get the letter on that index
console.log(fruit.split('')); // split by character 
console.log(fruit.split(',')); // split by comma
*/

// Array 
// two ways to create the same array

/* let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana', 'apple', 'orange', 'pineapples');

//alert(fruits[1]);
//console.log(fruits[2]);
fruits[0] = 'pear'
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
*/

// array common methods
/*
console.log('to string', fruits.toString());
console.log(fruits.join(', '))
console.log(fruits.pop(), fruits) // pop removes the last item from the array
console.log(fruits.push('blackberries'), fruits);
fruits[fruits.length] = 'new fruit';
console.log(fruits);
fruits.shift(); // removes the first element from an array
console.log(fruits);
fruits.unshift('kiwi'); // add first element from an array
console.log(fruits)

let vegetables = ['asparagus', 'broccoli', 'lettuce'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort())

let someNumber = [95, 939, 684, 3, 4, 45, 788, 22, 76, 654, 3]
console.log(someNumber.sort(function(a, b) {return a-b})) //ascending
console.log(someNumber.sort(function(a, b) {return b-a})) // descending
*/
/*
let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);
*/

// objects in java script 
// dictionaries in python
/*
let student = {
    first: "jethroe", 
    last: "gatbunton", 
    age: 18, 
    height: 175,
    studentInfo: function (){
    return this.first + '\n' + this.last + '\n' + this.age;
    } 
};

console.log(student.first);
console.log(student.last);
student.first = "troy";
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());
*/

// if else conditionals
// 18-35 is my target demographic
// && and
// || or
/* this one is self-made. the prompt is kinda cool rathher than asigning a variable deliberately lmao

var age = prompt('what is your age? ')
if ((age >= 18) && (age <= 35)) {
    status = 'target demo';
} else {
    status = 'not my audience'
}
console.log(status)
*/
// he says that you might want to write var instead of let in this type of status

/* var age = prompt("what is your age? ");

if ( (age >= 18) && (age <= 35) ) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}
*/
// switch statements 
// differetiate beetween weekday vs weekend
// day 0 --> sunday
// day 6 --> saturday
// day 0, 5, 6 - weekend

/*
switch (5) {
    case 0: 
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6: 
        text = 'weekend';
        break;
    default: 
        text = 'weekday';
        break;
}
console.log(text)
*/



