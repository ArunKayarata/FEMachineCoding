const box=document.querySelector(".ratings");
const allstars=document.querySelectorAll(".star");
const score=document.querySelector(".number");

let filled=0;
box.addEventListener("click",function(event){
    let curr=event.target.dataset.index;
    score.innerText=curr;
    for(let i=0;i<filled;i++){
        allstars[i].classList.remove("star_filled");
    }
    for(let i=0;i<curr;i++){
        allstars[i].classList.add("star_filled");
    }
   filled=curr;
})
box.addEventListener("mouseover",function(event){
    let curr=event.target.dataset.index;
    for(let i=0;i<filled;i++){
        allstars[i].classList.remove("star_filled");
    }
    for(let i=0;i<curr;i++){
        allstars[i].classList.add("star_filled");
    }
   filled=curr;
})