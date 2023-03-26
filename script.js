

let text=document.getElementById("text");
text.style.color="red";
console.log(text);
let head1=document.getElementsByTagName("h1");
console.log(head1[0]);
let box=document.getElementsByClassName("box");
console.log(box[0]);
document.getElementById("heading1").innerText="Hello World";
function replacetext(){
    document.getElementById("replace").innerText="Welcome to Elevation Academy";
}
let heading=document.getElementById("heading");
heading.style.color="red";
let z=document.querySelector("p");
z.style.color="grey";
let nodelist=document.querySelectorAll("h2");
for(let i=0;i<nodelist.length;i++){
    nodelist[i].style.backgroundColor="green";
    for(let i=0;i<nodelist.length;i++){
        nodelist[i].style.color="lightgrey";
        console.log(nodelist[i]);
    }
}
let parent=document.querySelector(".parent");
let btn=document.querySelector("#changedirection");
let count=0;
btn.addEventListener("click",()=>{
if(count%2===0)
{parent.setAttribute('style','flex-direction:column');
console.log(count);
}
else{
    parent.setAttribute('style','flex-direction:row');
    console.log(count);
}
count++;
})
let time= document.getElementById("clock");
setInterval(runningtime,1000);
function runningtime(){
    let date=new Date();
   
   time.innerHTML=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}
