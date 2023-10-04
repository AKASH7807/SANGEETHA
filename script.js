var hamburger=document.querySelector(".hamburger");
var navbar= document.querySelector('ul');

hamburger.addEventListener('click',()=>{
    navbar.classList.toggle("slide");
});