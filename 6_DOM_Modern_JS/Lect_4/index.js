
// API
/*
// promise 
// it give output ithet compte or failur


// to excute multipe asyn method at same time you can use this promise

setTimeout(function()
{
    console.log("first");
},3000)

setTimeout(function()
{
    console.log("second");
},4000)



let newpro = new Promise(function(resolve, reject)
{
setTimeout(function()
{
    console.log("first1 ");
},3000)

})

let newpro1 = new Promise(function(resolve, reject)
{
setTimeout(function()
{
    console.log("second1 ");
},3000)

})







// here time of second  and second1 is same 
// but second1 print before the second
// it because of promise it start excute method at atime


/// then and catch on promise 

let newprom = new Promise(function(resolve, reject)
{
    let a=-1;
setTimeout(function()
{
    console.log("second1");
},3000)

if(a<0) resolve('it is greater than 1');
else reject(new Error('error occure'));

})

newprom.then((value)=>{console.log(value)}); //when a<0
newprom.catch((value)=>{console.log(value)}); //when a>0
*/

/// multiple promise one after one 
/*
let p1 = new Promise(function(resolve , reject){
    setTimeout(()=>{
        console.log('settime out1 started')
    }, 2000);
    resolve(true);

})


 let output =p1.then(()=>{
    let p2 = new Promise(function(resolve , reject){
        setTimeout(()=>{
            console.log('settime out2 started')
        }, 3000);
        resolve("promise 2 resolved ");
    })
    return p2;
});

output.then((value)=>{console.log(value)});

// output of above multiple promise one after one is 

//promise 2 resolved    // simple code 
//settime out 1 started  // timeout 2sec
//settime out 2 started  // timeout 3sec




///Asyn and await Function

//asyn function return promices 
//making functionn asyn 

async function utility()
{   
    
    let p1 = new Promise(function(resolve,reject)
    {
        setTimeout(()=>{
            console.log("solapur mai garmi hai ")
        },5000);
    });
    
    let p2 = new Promise(function(resolve,reject)
    {
        setTimeout(()=>{
            console.log("pune is cool ")
        },6000);
    });
    
    // when below code p1 and p2 goes paralaly 
    // let ds = p1;
    // let dp = p2;

    //when await is apply on it they not run paralaly
     
    
    let ds =await p1;
    
    let dp = await p2;
    

    return [ds,dp];  
}

utility()


*/












/// API 
// fetch Api 

// get api info using fetch
//// return type of fetch is  promise

async function get()
{

    let cont =await fetch('https://jsonplaceholder.typicode.com/todos/1'); // geting the infor from the api 
    let output = await cont.json(); // converting the recived content  

    /// Json - javascript object notation it is like our js object structure it key pair element are there 
    console.log(output);
}
get();


// send or put call in Api 

// 

async function helper()
{
    // cerating  object 

    let options ={
        method: 'POST',
        body: JSON.stringify({
            title:'sagar',
            body:'Big',
            userId:100
        }),
        headers:{
            'Content-type':'application/json; charset=UTF-8',
        },
    };

    let cont =await fetch('https://jsonplaceholder.typicode.com/posts',options); // putting the info to the api 
    let response = cont.json();
    return response;
}

async function utilit()
{
    let ans = helper();
    console.log(ans);
}
utilit();


// closer in js 
// when nested function are there 
// the upper unction data and logic 
//are stoted in form of ***references*** for inner function 

//eg 

function outer(){
    let name = "sagar";
    function inner()
    {
        console.log(name);
    }
    return inner();
}

let fun1 = outer();
// when outer call end that time the variable of outer is distroy
// but when ineer is call then by closer the reference of all vriable and the logic store 

fun1(); // out put sagar 





// home work - calsses and export models in js 




 



























