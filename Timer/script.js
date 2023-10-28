let hrinput=document.querySelector("#hr");
let mininput=document.querySelector("#min");
let secinput=document.querySelector("#sec");

const startbtn=document.querySelector("#start");
const resetbtn=document.querySelector("#reset");
const pausebtn=document.querySelector("#pause");
const continuebtn=document.querySelector("#continue");
// console.log(pausebtn);

let timerId;
let savetime;
startbtn.addEventListener("click",function(e) {
    let hrs=hrinput.value || 0;
    let min=mininput.value || 0;
    let sec=secinput.value || 0;
    hrs=parseInt(hrs);
    min=parseInt(min);
    sec=parseInt(sec);
    // console.log(hrs + " " + min + " " + sec)
    // console.log(typeof(hrs))

    const res=validate(hrs,min,sec);
    if(res==false){
        return false;
    }
    console.log(res);
    const { transformedSecs,
        transformedMins,
        transformedHrs
    } = transforminputs( hrs, min,sec);

    hrinput.value=transformedHrs;
    mininput.value=transformedMins;
    secinput.value=transformedSecs;
    let counttime=transformedHrs*3600 + transformedMins*60+transformedSecs;
    timer(counttime);
    startbtn.style.display = "none";
    pausebtn.style.display="block";

})
resetbtn.addEventListener('click',() => {
    mininput.value="00";
    secinput.value="00";
    hrinput.value="00";
    savetime=0;
    clearInterval(timerId)
});

pausebtn.addEventListener("click",() => {
    clearInterval(timerId);
    // console.log("clicked pause")
    pausebtn.style.display = "none";
    continuebtn.style.display = "block";

});
continuebtn.addEventListener('click',() => {
    timer(savetime);
    pausebtn.style.display = "block";
    continuebtn.style.display = "none";
});



function validate(hrs,min,sec) {

    if(hrs<0 || hrs>24 || sec<0 || min<0){
        alert("Please enter a valid time");
        return false;
    }
   const {thrs}=transforminputs(hrs,min,sec)
    if(thrs>24){
        alert("Please enter a valid time");
        return false;
    }
    return true;
}

function transforminputs(hrs,min,sec){
    if(sec>=60){
        min++;
        sec-=60;
    }
    if(min>=60){
        hrs++;
        min-=60;
    }
    if (sec == 0 && min > 0) {
        min--;
        sec = 59
    } else if (min == 0 && hrs > 1) {
        hrs--;
        min = 59;
        sec = 59;

    }

    return {
        transformedSecs: sec,
        transformedMins: min,
        transformedHrs: hrs
    }
}

function timer(counttime){
     timerId=setInterval(() => {
        counttime--;
        savetime=counttime;
        UpdateUI(counttime);
    }, 1000);
}
function UpdateUI(counttime){
    let hrs=Math.floor(counttime/3600);
    let min=Math.floor((counttime-hrs*3600)/60);
    let sec=counttime%60;
    // console.log(hrs,min,sec);
    if(min==0 && sec==0 && hrs==0){
        alert("timeout")
        clearInterval(timerId);
        return ;
    }
    if(sec>0){
        sec--;
        secinput.value=sec<10?`0${sec}`:`${sec}`;
        return ;
    }
    if(min>0){
        min--;
        mininput.value=min<10?`0${min}`:`${min}`;
        secinput.value=59;
        return ;
    }
    if(hrs>0){
        hrs--;
        mininput.value=59;
        secinput.value=59;
        hrinput.vaue=hrs<10?`0${hrs}`:`${hrs}`;


    }
    
}