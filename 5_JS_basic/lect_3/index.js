
///math object 

//random 
//console.log(Math.random()); //genrate number from 0 to 1
//other method of math object
//.round
//.abs
//.max
//.min
//.pi




///string 
//there are two type og string in js 
//1.primitive and other is object wali 

//1
/*

let pri_string = "    saga   r   ";
let obj_string = new String("  sagar"); //this string create by string costructor call

console.log(typeof(pri_string));
console.log(typeof(obj_string));

//string operation  pri_string
console.log(pri_string.length)
console.log(pri_string.includes('s'));
console.log(pri_string.startsWith('s'));
console.log(pri_string.endsWith('ar'));
console.log(pri_string.startsWith('fgat'));
console.log(pri_string.toUpperCase());
console.log(pri_string.toLowerCase);
console.log(pri_string.indexOf['g']);
console.log(pri_string.indexOf['j']);
console.log(pri_string.trim()); // remove space from start and end  not store parment 
console.log(pri_string.replace('ar','pt'));


//string obj_string 
console.log("\n\n\n");
console.log(obj_string.length)
console.log(obj_string.includes('s'));
console.log(obj_string.startsWith('s'));
console.log(obj_string.endsWith('ar'));
console.log(obj_string.startsWith('fgat'));
console.log(obj_string.toUpperCase());
console.log(obj_string.toLowerCase);
console.log(obj_string.indexOf['g']); //give undefine 
console.log(obj_string.indexOf['j']);  // give undefine 
console.log(obj_string.trim()); // remove space from start and end  not store parment 
console.log(obj_string.replace('ar','pt'));

//split the string with space 

let message = "this is my first tutorial";
let word=message.split(" "); // this function gives object as output 
console.log(word);
console.log(typeof(word));
*/





///Templete Literal 

// to print the single coate you neet \' in string or for new line \n
/*
let message1 = "this is my \'first\' \n tutorial";
console.log(message1);

// to print whatever style of string we can do using `` backtrik notation 
let message2 =`this
is    


'message' 2 ${message1}`;  //${adding new string }
console.log(message2);


////date and time 

let date = new Date();
console.log(date);

let date1 = new Date('Aug 16 2001 10:15');
console.log(date1);

let date2 = new Date(2001,7,16,10.15);
console.log(date2);

 */












/*
///////// Array /////////

let number = [1,2,3,5];

console.log(number);


///insert 

//at end 
number.push(10);
console.log(number);
//at start
number.unshift(0);
console.log(number);
//between 
//splice(start: number, deleteCount?: number):
// number.splice(2,0,'s','a','g','a','r');
number.splice(2,0,1,2,3,4);
console.log(number);

///searching  on premitive 
console.log(number.indexOf(5));
console.log(number.indexOf(30) ); //when not present then return -1;
 
//find 1
if(number.indexOf(4)!=-1)
   {
    console.log("present");
   }
   else console.log("absent");
//find2
console.log(number.includes(5));
//find 3 in perticulat body 
console.log(number.indexOf(2,5));


///searching on reference/ object array

let cources = [{val:12, nav:"sagar"},{val:12, nav:"jadhav"}]

console.log(cources.indexOf({val:12, nav:"sagar"})); 
//it gives -1 because the reference of this is diffrent 


// so to find the in objects of array we need the call back function 
//eg 

let course = cources.find(function(c)
{
    return c.nav=="sagar"; //return object
    
}) //here function(c) is call back
    
// by using arrow function createing above function 
let fonnd = cources.find(c=>c.nav=="jadhav");
console.log(course);
console.log(fonnd);

*/



/*
///removing 
let n =[1,2,3,4,5,6]
//end
n.pop();
console.log(n);
//start
n.shift();
console.log(n);
//middle 2 num delete
n.splice(1,2);
console.log(n);

//delete entire arr
//1
let n1  =[1,2,3,4,5]
//console.log(n1);

let n2=n1; //copy address
//deleete 1
//n1=[];
//console.log(n1); // here n1 is empty but the n2 wil  be as it is 
//console.log(n2); //because it copy address 

//deleete 2
//to remove from the both arr use below method 
n1.length=0;
console.log(n1); //empty 
console.log(n2); //empty 

// delete 3
let p=[1,2,3,4]
let q=p;
p.splice(0,p.length);

console.log("delete3")
console.log(p);
console.log(q);

*/

/*
///combining and slicing 

console.log("combine");

let a=[1,2,3,4,5,6];
let b=[7,8,9];

// combining 
//first method
let combine = a.concat(b);
console.log(combine);
// second method 
for(let i =0;i<b.length;i++)
{
    a.push(b[i]);
}
console.log(a);

//third method 
console.log("by using spread")
//by using spread oprator 
let aa=[1,2,3,4,5,6];
let bb=[7,8,9];
let comb =[...aa,...bb]
//adding value with combine
let combi = [...'r',aa,true,...bb,'t'] 
console.log(comb);
//console.log(combi);

 
// slicing 
let slice = a.slice(6,9) //slice(star index[include], end index[exclude] )
console.log(slice);

*/




////iterating in arr
let arr=[1,2,3,4,5,6,7,8]

// for in 
for(let i in arr)
{
    console.log(i); //print index
    console.log(arr[i],"    "); //print value 
}
console.log("\n");

//for of
for(let i of arr)
{
    console.log(i); //print value 
}

console.log("\n");
// for each 
arr.forEach(element => console.log(element)); //print value 


/// join and split 
console.log("join and split")
let j = [1,2,3,4,5,6]
let jn= j.join(',');
console.log(jn);
console.log(typeof(jn));   // string 
//split in stiring see above 


///sort in arr 
let g=[4,40,1,10]
let s=g.sort(); 
//this sort function sort the value consider as string 
console.log(s);
let p = g.sort( (ele) =>{
    return parseInt(ele);  
})
console.log(p);








///Filtering 
let f = [1,2,5,-4,-5,4,6,-3]
let filtered=f.filter(ele=>ele>0)
console.log(filtered );



///Reducing the array 
let arr1 =[1,2,3,4];

// sum 
let z=0;
for(let i of arr1)
{
    z+=i;
}

console.log(z);

//reducing method 

// .reduce((accumulator,currentvalue)=>accumulator+currentvalue,0)
// here 0 is initial value of accumulator and currentvalue is firt value of arra 
let ss= arr1.reduce((acc,curr)=>acc+curr,0)
console.log(ss);







