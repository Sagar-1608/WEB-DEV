 
 // by using the onclick
 const count = document.querySelector('#count');

 let val = count.textContent;

 console.log(typeof(val));
  val = parseInt(val);

  function increment()
  {
    // val++;
    // count.textContent=val;

  }

  function decrement()
  {
    // val--;
    // count.textContent=val;

  }







  
  // by using event listner 

  let incr = document.querySelector('.b2');
  let decr = document.querySelector('.b1');


incr.addEventListener('click',function()
{
  val++;
  count.textContent=val;

})

decr.addEventListener('click',function()
{
  val--;
  count.textContent=val;

})


  

