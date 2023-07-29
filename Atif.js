let count=0;
let element=document.getElementById('A')

function counter(){
    count++;
    element.innerText=count
}
function rest(){
   count=0;
   element.innerText=count
}
function table(){
    for (let count=1; count <11; count++)
    element.innerHTML+=`2 x ${count} = ${count*2} <br/>`;
}


