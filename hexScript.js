const values=[1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
const button=document.getElementById('btn');
const color=document.querySelector('.color');
let hexValue="#";
button.addEventListener("click",()=>{
    for(let i=1;i<=6;i++){
        hexValue+=values[Math.floor(Math.random()*values.length)];
    }
    document.body.style.backgroundColor=hexValue;
    color.textContent=hexValue;
    hexValue="#";
});