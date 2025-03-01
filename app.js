//Q 1
var  studentNames = [];

//Q 2
var studentNames = {};

//Q 3
var fruits = ["Apple", "Banana", "Cherry"];

//Q 4
var num = [5, 10, 20];

//Q 5
var result = [true,false];

//Q 6
var total = ["user",true,15,"city"];

//Q 7
var education = ["SSC <br>" ,"HSC <br>", "BCS <br>","BS <br>", "BCOM <br>", "MS <br>",];
document.write(education);

//Q 8
var students = ["Michael", "John", "Tony"];
var score = [320, 230, 480];

document.write("score of",students[0], "is",score[0],"percentage:",score[0]*100/500);
document.write("score of",students[1], "is",score[1],"percentage:",score[1]*100/500);
document.write("score of",students[2], "is",score[2],"percentage:",score[2]*100/500);

//Q 10
// var score = [320, 230, 480];
// Arrays.sort(score);

//Q 11

var cities = ["karachi", "lahore", "peshawar", "quetta", "islamabad"];
selectdCities = cities.slice(0,2);
console.log(selectdCities);

//Q 12

var arr = ["This ", " is ", " my ", " cat"];
var result = arr.join(""); 
console.log(result);

//Q13

var stationary = [];


stationary.push("keyboard");
stationary.push("mouse");
stationary.push("monitor");

console.log(stationary);


var removedItem1 = stationary.shift(); 
var removedItem2 = stationary.shift(); 
var removedItem3 = stationary.shift(); 
console.log( removedItem1);
console.log( removedItem2);
console.log( removedItem3);



//Chapter 15 Array (I)

//Q 1,2,3
var arr =[] ;
arr =  ["input"];
var alphabet =  ["h" , "i", "j", "k", "l", "m"];
alert(alphabet[2]);

//Q 4
document.write(alphabet.length);

//Q 5
arr.splice(1,0,"output");
alert(arr[1]);

//Chapter 16 Array (II)

//Q 1

var value = ["One"];
value.push("Two");
alert(value[1]);

//Q 2
var Alphabet=["h" , "i", "j", "k", "l", "m"];
Alphabet.pop();
//Q 3
Alphabet.push(5,"o");

//Chapter 16 Array (III)

var sizes = ["S","M","L","XL","XXL"];
sizes.shift();

//Q 2
var sizes = ["S","M","L","XL","XXL"];
sizes.unshift(10,15,20);

//Q 3
var arr = [2];
arr.unshift(1);
alert(arr[0]);

//Q 4
var sizes = ["S","M","XL","XXL"];
var our = sizes.splice(2,0,"L");

//Q 5
var sizes = ["S","M","XL","XXL"];
var newSizes = sizes.slice(0,3);
alert(newSizes);

//Q 6
var pets = ["dog","cat","fox","duck","frog"];
pets.splice(1,4,"horse","cow");
console.log(pets);

//Q 7
var pets = ["dog","cat","fox","duck","frog"];
pets.splice(1,2);
console.log(pets);

//Q 8
var pets = ["dog","cat","fox","duck","frog"];
pets.slice(3,4);















