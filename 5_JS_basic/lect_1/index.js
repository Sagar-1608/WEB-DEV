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


