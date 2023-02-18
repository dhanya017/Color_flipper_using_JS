const ar=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const color=document.querySelector('#color');
const button=document.querySelector('.btn');
button.addEventListener('click',function(){
    let h='#';
    for(let i=0;i<6;i++){
        h+=ar[getRandom()];
    }
    document.body.style.backgroundColor=h;
    color.textContent=h;

});
function getRandom(){
    return Math.floor(Math.random()*ar.length);
}