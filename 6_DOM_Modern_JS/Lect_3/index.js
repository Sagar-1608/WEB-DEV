
/// performence 
//time calcualtion for block of code 

let t1 = performance.now();
for(let i=0; i<=100; i++)
{
    let ele = document.createElement('p');
    ele.textContent='this is para '+i;
    document.body.appendChild(ele);
}
let t2= performance.now()

console.log('time required' + (t2-t1)); //=0.6000000238418579


let t3= performance.now()



// optimising above code 
let mydiv= document.createElement('div');

for(let i=0; i<=100; i++)
{
    let ele = document.createElement('p');
    ele.textContent='this is para '+i;
    mydiv.appendChild(ele);
}
document.body.appendChild(mydiv);


let t4= performance.now()


console.log('time required' + (t4-t3));//0.30000001192092896



/// document fargment
// this is a light weight DOM or virtual DOM
// you can add all cerated element in document fargment
// it not take time for Refllow and repaint 
// it create all new eelement as virtual and at the end append it in document 


// reduce the time by using 

let frag = document.createDocumentFragment();

let t5= performance.now();
for(let i=0; i<=100; i++)
{
    let ele = document.createElement('p');
    ele.textContent='this is para '+i;
    frag.appendChild(ele);
}
document.body.appendChild(frag);
let t6= performance.now()

console.log('time required' + (t6-t5)) // =0.19999998807907104
// this is reduce time 


///event loop

// it accure on the asynchronuse elemwnt or function 
// eg the event listner 



///setTimeOut
// it is also asyn element 

// syntax 
// setTimeout(func, time)

console.log('hi');

setTimeout(function()
{
    console.log('TimeOut');
}, 5000)

console.log('hello');

// here output is 
// hi 
// hello
// TimeOut

// because the settimeout take delay of 5ms 
//thats way this goes in browser and when time out then goes in event queue
// and then when call stack is empty then excute it 




