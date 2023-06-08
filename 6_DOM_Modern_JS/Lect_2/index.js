

//event in js 

// target event 
let element =document.querySelector('button')
/*
// by using the target event change the bg color of this button 
element.addEventListener('click',function(){
    element.textContent='sagar';
    element.style.cssText='color:balck; text:bold; background:green';
})



// onclick changing the body color 
let ele1 = document.querySelector('body')
// ele1.addEventListener('click',function()
// {
//     ele1.style.cssText='background:pink';
// })

// changing the all para to red 

let ele2 = document.querySelectorAll('h6')

ele2.addEventListener('click',function()
{
    ele2.style.cssText='background:pink';
})

// removing the event listner 

element.addEventListener('click',function(){
    element.textContent='sagar';
    element.style.cssText='color:balck; text:bold; background:green';
})

element.removeEventListener('click',function(){
    element.textContent='sagar';
    element.style.cssText='color:balck; text:bold; background:green';
})
// not remove above because the prameter functions are in diffrent addrdee

let fun = function()
{
    element.textContent='sagar';
    element.style.cssText='color:balck; text:bold; background:green';
}

element.addEventListener('click',fun)
element.removeEventListener('click',fun)
// here remover is work because fun is same in both add and remover

*/

/// Default action prevention 
// eg ancher tag default actionn is open link
// you can prevent it as below 

let anc = document.querySelectorAll('a')
console.log(anc);

// action prevent on google 3

let google3=anc[2];

google3.addEventListener('click',function(event)
{
    event.preventDefault();
    console.log("maja aya ")
})



/// Avoid too  many event 
/*
let newdiv = document.createElement('div')

for(let i=0; i<=100; i++)
{
     let newele = document.createElement('p');
     newele.textContent='This is the para '+i;

     // event 

     newele.addEventListener('click',function(event){
        console.log('I have clicked on para '+i);
     })

     newdiv.appendChild(newele);

}
document.body.appendChild(newdiv);

*/
// optimize above code 

// 1
// only one fun rather than 100
let newdiv = document.createElement('div')
/*function fun(event){
    console.log(event.target.textContent);
 }

 // add the listner on div rather tha the all para 
 newdiv.addEventListener('click',fun);

for(let i=0; i<=100; i++)
{
     let newele = document.createElement('p');
     newele.textContent='This is the para '+i;
     newdiv.appendChild(newele);

}
document.body.appendChild(newdiv);
*/

// click on target only 

let cont = document.querySelector('.wrapper');
console.log(cont)
cont.addEventListener('click',function(event)
{
    if(event.target.nodeName==='SPAN')
        console.log(event.target.textContent+' pr click kia hai ')
    else if(event.target.nodeName==='P')
     console.log(event.target.textContent+' pr click kia hai ')

       
});









