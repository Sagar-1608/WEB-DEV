
/// object in js 
//colection of key value pair 


//object creation 
let rectangle={
    length:1,
    breadth :5,

    // method creating 

    drow: function()
    {
        console.log("this is rectangle ")
    }
}

console.log(rectangle)

// calling function 
rectangle.drow();





// object creation 

/// 1) factorey function  
// use camle case notation eg-> numberOfstudent 
// this function creating the objects 

function createRect()  // function createRect(len , bed ) //you can pass parameter also in this function 
{
    return rectangle1={
        length : 1,
        k:1,

        // method 
        drow:function()
        {
            console.log('drowing the rectangle ')
        }
    }
};

// trhe createRect return object 

// creating the returned obj 

let RectObj1 = createRect();
console.log(RectObj1);
console.log(RectObj1.length);
console.log(RectObj1.drow);
console.log(RectObj1.drow());
// we can create myltiple objects like as Rectobj1 ans use



//2) constructor function
// use paskal notation -> first letter of every word  is capital eg -> NumberOfSrudent 
// this function intialize or define the properties or method of object
// here use this keyword 
// not return object required 
function Rect1()
{
    this.len =2;
    this.k =1;
    this.drow=function()
    {
        console.log('the rect3 i here');
    }

}

// object creation 
let obj1 = new Rect1();

console.log('costructor fun')
console.log(obj1.k);
console.log(obj1.len);
console.log(obj1.drow());
console.log(obj1.drow)
console.log(obj1);


/// dynamic nature of Object 
// dynamicaly you can do crud operation 

let o2 = new Rect1();
// update property 
console.log(o2.k);
o2.k=5;
console.log(o2.k);
//add new property 
o2.color = "red";
console.log(o2.color);
//remove prooerty 
delete o2.color
//console.log(o2);


/// Contructor property 
//o2.contructor // iges the coctructor code 


/// function are also objects


/// types 
// permitive - numbers, string, bool, null, undefine
// reference - function , objects, array (this all are also objects )

// difference between this types 


// premitive 
let a = 10;
let b =a ; // copy value 
a++;
console.log(a); // 11
console.log(b); // 10
// hete copy of value 

// reference 

let c = {val:10};
let d= c;  // copy address
c.val++;
console.log(c.val); //11
console.log(d.val); // 11

// when premitive pass in function same as pass by value 

let s=10;

function incr(s)
{
    s++;
}
incr(s);
console.log(s); // 10

// when reference type pass in fun then it same sa pass by reference or pass by address
 let g={val:2};
function incr1(g)
{
    g.val++;
}
incr1(g);
  console.log(g.val)

/// for in loop 

let ob={
    length:12,
    b:13

}

for (let i in ob )
{
    console.log(i,ob[i]);
}


/// for of loop
//this loop use in only iterable values like array 
//not for obj

// but you can use on obj as follow 

for(let i of Object.keys(ob))
{
    console.log(i, ob[i]);
}


// cheaking property persent or not usint if and in 

if('b' in ob) console.log("present b"); // right ans 
else console.log("Absent b");




/// object cloning 

// let c = {val:10};
// let d= c;  
// in above case not new obj is create here c and d show same address 

// the clone of object create by below 

let src ={
    a:10,
    b:11,
    c:12
}
let des ={} // empty obj 

for(let i in src)
{
   des[i]=src[i];
}

for(let i in des)
{
    console.log(i,des[i]);
}


// clone of obj using assign 
let des1 = Object.assign({},src); //des1 is clone of src

for(let i in des1)
{
    console.log(i,des1[i]);
}

// clone obj using spread 
let des2 = {...src};
for(let i in des2)
{
    console.log(i,des2[i]);
}

///garbage calector 

// in js the dynamic memory allocation is there so 
// garbage colector  dealocate the memory of the not required variable 






























