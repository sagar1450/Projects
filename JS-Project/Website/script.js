const burger=document.querySelector(".burger");
const navbar=document.querySelector(".navbar");
const navList=document.querySelector(".nav-list");
const rightnav=document.querySelector(".rightnav");

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})