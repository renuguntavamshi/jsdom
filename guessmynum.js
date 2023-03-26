let randomnum=Math.floor((Math.random()*100)+1);
console.log(randomnum);
let count=100;
let bodycolor=document.querySelector("body");
let inputvalue=document.querySelector("#num");
document.getElementById("count").innerText=count;
let btn=document.getElementById("btn1");
btn.addEventListener('click',counting);
btn.addEventListener('click',counting2);

function counting(){
    console.log(count);
    count--;
     document.getElementById("count").innerText=count;
}
function counting2(){
            if(inputvalue.value<randomnum){
                document.getElementById("guess").innerText="Your Guess is Low";

            }
    else if(inputvalue.value > randomnum){
        document.getElementById("guess").innerText="Your Guess is High";
    }
    else if(inputvalue===undefined){
        document.getElementById("guess").innerText="You need to Enter an input value to check";
    }
    else{
        document.getElementById("guess").innerText="🤩🤩 Hurray You Won 🤩🤩";
        document.querySelector("#highscore").innerText=count;
        btn.style.display="none";
        bodycolor.style.backgroundColor="lightgreen";
    }
    console.log(inputvalue.value);
       }