
///Functions 
/*
//a block of code that fulfil specific task
// why need the function 
// 1) reusability 
// 2) specific task





//1)fun declaration 
 // we can call function here also 
 //it is possible because of Hoisting in js 
 //that does all function on top of file 

 run();

function run()
{
    console.log("running");
}

//func call/invoke
run();






///2) named function assignment 

//walk(); 
//we can not call assignment fun up of fun declaration 
//hoistion does not allowed this 

let walk =function walking()
      {
           console.log("walking");
      }

// fun call
walk();

//you can not call by their name in assignment function 
// walking(); //it give error 

///3)unname fun asssignment 

let jump=function() // here fun name is not there 
{
    console.log("Jumping");
}

jump();
*/
/*
///arument -->spacial object in js 
//it store the input parameter of the function  

let s= function sum(a,b)
{
    return a+b;
}
console.log(s());     // Nan not a number 
console.log(s(1));    //Nan
console.log(s(1,2));  //3
console.log(s(1,2,3,4,5,6)); //3
//in above func call the other than the 1,2 parmeter store in argument obj






///dynamic fun using argument 

let sumof = function sumd()
{
    let total=0;
    for(let i of arguments)
    {
        total+=i;
    }
    return total;
}

console.log(sumof());         //0
console.log(sumof(1));        //1
console.log(sumof(1,2));      //3
console.log(sumof(1,2,3,4));  //10
console.log(sumof('a','b',1,2)); //0ab12 //consider as char
console.log(sumof('a','b'));    //ab
console.log(sumof(1,2,'a'));    //3a //first two as in and then char






/// handle the parameter using the Rest parameter call

function multi(num,num2,...arg)
{
    let p =arg;
    console.log(p);
    let val=num*num2;
    console.log(typeof(arg));

    for(let i of p)
    {
        val*=i;
    }
    return val;
}

// in rest  opeartor store the rest all value the given parameter 
// in above case other than num and num2 all parameter are in arg
// the rest type is a array 
//after rest we can not define any prameter rest is last parameter

console.log('\nmultiplication\n');
console.log(multi()); //nan
console.log(multi(1)); //nan
console.log(multi(1,2)); //2
console.log(multi(1,2,3,4)); //24
console.log(multi(1,2,'a')); //nan
console.log(multi('a',1,2)); //nan






/// Default parameter 

function interest(p,r=6,y=10)
{
    return (p*r*y)/100;
}

//default parameter always start from the right to left 

console.log(interest(1000)); //here r=6,y=10


*/


/*
///Getter And Setter 

let person={
    fname:'sagar',
    lname:'jadhav'
}

function print_name()
{
    return `${person.fname} ${person.lname}`;
}
console.log(print_name());


//the above functin can is read only format we can not change the value 
//so use get and set in object 
console.log("person1")
let person1={
    fname:'amar',
    lname:'jadhav',
    get fullname(){
     return `${person1.fname} ${person1.lname}`;
    },

    set fullname(name)
    {
        // if(typeof(name)!=String)
        // {
        //     throw new Error("you have not sent string ");
        // }
       let part= name.split(' ');
       this.fname=part[0];
       this.lname=part[1];
    }
    //set and the get are not function 
}
console.log(person1.fullname); //getter call

//set the value 
person1.fullname="sanjay jadhav"

console.log(person1.fullname); //change the value from amar j to sanjay j




*/


////Try and Catch 
// in the code that have chances of error that code wrete in the try block
// if error is occur the it go in catch block and  throw error

//eg 
// person1.fullname=1;//genrate error 

try{
 person1.fullname=1 //genrate error 
}
catch(e){
    console.log('you not sent string')
    //alert('you not sent string ')
}
try{
    person1.fullname=1 //genrate error 
   }
   catch(e){
       console.log(e)
       //alert('you not sent string ')
   }






///scope of variable 

//var 
// if define at every where except in function 
// you can access st everywhere 
// when var define in function that time thr scopeof var in that fun only

//let 
//when we declare the let as globaly the access at everywhere 
//when declare in any block like if, loop, fun that time acceess is only in defined block





