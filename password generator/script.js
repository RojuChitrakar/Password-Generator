let inputslider=document.getElementById("inputslider");
let slidervalue= document.getElementById("slidervalue");
let passbox= document.getElementById("passbox");
let lowewrcase= document.getElementById("lowercase");
let uppercase= document.getElementById("uppercase");
let numbers= document.getElementById("numbers");
let symbol= document.getElementById("symbol");
let btn= document.getElementById("btn");
let copyicon=document.getElementById("copyicon");



slidervalue.textContent=inputslider.value;
inputslider.addEventListener('input', ()=>{
    slidervalue.textContent=inputslider.value;
});

btn.addEventListener('click',()=>{
    passbox.value= generatePassword();
});
let upperchars= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchars="abcdefghijklmnopqrstuvwxyz";
let allnumbers="0123456789";
let symbols="!@#$%^&*";
function generatePassword(){
    let genPassword="";
    let allchars="";
    allchars += lowercase.checked ? lowerchars : "";
    allchars += uppercase.checked ? upperchars : "";
    allchars += numbers.checked ? allnumbers : "";
    allchars += symbol.checked ?symbols : "";
    let i=1;
    while(i<=inputslider.value){
       genPassword+=allchars.charAt(Math.floor(Math.random()*allchars.length));
       i++;
    }
    return genPassword;
}
copyicon.addEventListener('click',()=>{
    if(passbox.value !="" || passbox.value.length>=1){
        navigator.clipboard.writeText(passbox.value);
        copyicon.innerText= "check";
        copyicon.title="Password Copied";

        setTimeout(()=>{
              copyicon.innerHTML="content_copy";
              copyIcone.title="";
        },3000);
    }
});