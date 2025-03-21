console.log("this this is js first tute 5")

// varable 
// by using var and let you can define variable 
// but let is use only in created block out of the block the scope of let is distroy 
// using var keywoed you can created variable and this variable scope every where in program 

// eg 



{
    var s =45;
    console.log(s);
}
{
    let a =5;
    console.log(a);

}
console.log(s);




//console.log(a); //this give error 

// redeclaration of variable 

let c=12;

var s = 78;


console.log(c);
console.log(s);

// let c=45; // not redifine possibe in let case 

var s = 63 // posible in var condition 

// primitive data type 
//string
//Number
// Boolean
// undefined    
let t;
console.log(t); //it give output as undefined 
// null

// dynamic typing 
// you can change the type of variable in between  the code 
let d = "data";

console.log(d);
d=5;
console.log(d); // you can change the type of variable 

// array 
// all type of vlue is store in array eg 1, sam, true  and so on

let array1 =["as",12,true]
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);




///operatores 

//experation  : any expresion is a javascript program it not give error 
4555;
"ddkaskkkwwjwj"  // not give any error 

//operator
let a = 45, b = 4;

// arithmatic operator

console.log("a+b:", a + b)
console.log("a-b:", a - b)
console.log("a*b:", a * b)
console.log("a/b:", a / b) // it give accurate value of division not like c++ that is whole number 
console.log("a%b:", a % b)
console.log("a**b:", a ** b) // power
console.log("a++:", a++) // 45
console.log("a--:", a--) // 46
console.log("++a:", ++a) //46
console.log("--a:", --a) //45

//assignment (=,+=,-=,.....)
//comparison (==,!=,===,!==,<,>,<=,>=)

let p = 5
let q = 5

console.log("p==q", p == q) //t
console.log("p!=q", p != q) // f
console.log("p===q", p === q) // t
console.log("p!==q", p !== q) // f

// when containt is same but datatype id not same 
let x = 6
let y = "6"

console.log("x==y", x == y) //t  // loose equality  same cvalue hai or diffrent data type hai to bhi chalega 
console.log("x!=y", x != y) //f

//required same data type and same value for true 
console.log("x===y", x === y) //f   // strict equality it give false data type is not same 

console.log("x!==y", x !== y) //t



// ternary Operator 
// condition ? val1: val2;    // if cond is true then val1 else val2
 let gh=12;
(10<12)? gh=10:gh=gh;
console.log(gh);

//logical (&&,||,!) 

//logical (&&,||,!) with non-booleans value 
console.log(false || "sagar") // it giive output as sagar  truthy value is output 

// falssy value are - undifine , null, 0, false, ' ', NaN
// truthy value are - anything that not falssy
let l ;
console.log(false||l); // output undefiend


// bitwise and and or same as cpp


///// condition expresion 

// input from user 



const prompt = require("prompt-sync")();  // this is required for prompt

let n = prompt("enter number :") // it is take input form usr as default string 
console.log(n)
console.log(typeof n)
n = Number.parseInt(n) // converting string to number 
console.log(typeof n)

// condition expresion 
//if
//if else 
//if elseif else 
// same as c++

// swith case 
// same as c++

// ternary opreator 

console.log(n < 18 ? "not drive" : "drive")


///// 
// tute_8 
// cheeeaking age 

let age = prompt("enter age:")
if (age > 10 && age < 20) {
    console.log("your age between 10 and 20")
}
else {
    console.log("your age not  between 10 and 20")
}


//switch case 

age = Number.parseInt(age)

switch (age) {
    case 12:
        console.log("your age 12")
        break
    case 13:
        console.log("your age 13")
        break
    case 14:
        console.log("your age 14")
        break
    case 15:
        console.log("your age 15")
        break
    default :
        console.log("your age is not speacial")
       

}


/////
// tute_9 loops 

// for 

for(let i =0; i<10;i++)
{
    console.log(i);
} 


// for in loop
// it is use for the boject 

let mark = {
    sagar: 90,
    vishal :20,
    anil : 45,
    pooja : 12

}

for(let i in mark)
{
    console.log("mark of ",i,"are :",mark[i])
}

// for of loop 
for (const i of "sagar") {
    console.log(i)
    
} // in for of loop the object required to iterative that is (string, array ....)



//// 
// tute_10 while loop 

// while and do while loop are same as c++



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// new tutorial Hitesh cai or caode consept
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////// Variables
const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

////////////////////////////////Data Type 



"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object


//////////////////////////////////////////////// conversion operation ////////////////////////////////////////////


let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ////////*********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


////////////////////////////////////// Comparision ////////////////



//// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);



////////////////////// String ////////////////////////


const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));



///////////////////////////////////////////// Math //////////////////////////////////



const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)




/////////////////////////////////Dates ///////////////////////////



let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})



//////////////////////////////////////////////////// summery of above ///////////


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
