const ar=['green','red','blue','yellow'];
const button=document.querySelector(".btn");
const color=document.querySelector("#color");
button.addEventListener("click",function(){
    const r=getRandom();
    document.body.style.backgroundColor=ar[r];
    color.textContent=ar[r];
});
function getRandom(){
    return Math.floor(Math.random()*ar.length);
}


