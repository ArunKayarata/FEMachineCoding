const inc=document.querySelector(".input");
let num=document.querySelector(".number");
const btn=document.querySelector(".btn");
const resetbtn=document.querySelector(".reset");


let val=parseInt(num.innerText);
let b=1;
inc.addEventListener("change",function(event){
    b=parseInt(event.target.value);
  
})

btn.addEventListener("click",function(event){
    let a=event.target.innerText;  
    if(a=='+'){
        val+=b;
    }else{
        val-=b;
    }
    num.innerText=val;
})
resetbtn.addEventListener("click",function(event){
   
    num.innerText="0";
    val=0;
    inc.value=1;
    b=1;
})