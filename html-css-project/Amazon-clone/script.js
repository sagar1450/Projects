// const slides=document.querySelectorAll(".silde");
// let counter=2;

// slides.forEach(
//     (silde,index)=>{
//         silde.style.left=`${index * 100}%`
//     }
// )

// const slideImage=(num)=>{
//     if(num==slides.length){
//         counter=0;
//         num=0;
//     }

//     if(num<0){
//         counter=slides.length-1;
//         num=slides.length-1;
//     }
//     slides.forEach(
//         (silde)=>{
//             silde.style.transform=`translateX(-${counter * 100}%)`
//         }
//     )

// }

// slideImage(counter);



// const controller=(x)=>{
//     counter=counter+x;
//     slideImage(counter);
// }

// const goPrev=()=>{
// if(counter!=0){
//     counter--; 
//     slideImage()
// }
// }

// const goNext=()=>{
//     if(counter<slides.length-1){
//         counter++;
//         slideImage()
//     }else{
//         counter=0;
//     }  

// }
const slides = document.querySelectorAll(".silde");
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

}
// today deals slider

var count = 0;
var inc = 0;
margin = 0;
var slider = document.getElementsByClassName("today-content")[0];
var itemDisplay = 0;
if (screen.width > 990) {
    itemDisplay = document.getElementsByClassName("today-deals")[0].getAttribute("item-display-d");
    margin = itemDisplay * 5;
}
if (screen.width > 700 && screen.width < 990) {
    itemDisplay = document.getElementsByClassName("today-deals")[0].getAttribute("item-display-t");
    margin = itemDisplay * 6.8;
}
if (screen.width > 280 && screen.width < 700) {
    itemDisplay = document.getElementsByClassName("today-deals")[0].getAttribute("item-display-m");
    margin = itemDisplay * 20;
}


var items = document.getElementsByClassName("img-container");
var itemleft = items.length % itemDisplay;
var itemslide = Math.floor(items.length / itemDisplay) - 1;
for (let i = 0; i < items.length; i++) {
    items[i].style.width = (screen.width / itemDisplay) - margin + "px";
    console.log(items[i].style.width)
}

function next() {
    if (inc !== itemslide + itemleft) {
        if (inc == itemslide) {
            inc = inc + itemleft;
            count = count - (screen.width / itemDisplay) * itemleft;
        }
        else {
            inc++;
            count = count - screen.width;
        }
    }
    slider.style.left = count + "px";
}

function prev() {
    if (inc !== 0) {
        if (inc == itemleft) {
            inc = inc - itemleft;
            count = count + (screen.width / itemDisplay) * itemleft;
        }
        else {
            inc--;
            count = count + screen.width;
        }
    }
    console.log(inc)
    slider.style.left = count + "px";
}

// black mode

const Navlanguge = document.querySelector(".nav-languages");
const Selectlanguage = document.querySelector(".languages-select");
const Triangle = document.querySelector(".triangle");
const black1 = document.querySelector(".black1");



Navlanguge.addEventListener("click", (event) => {
    Selectlanguage.classList.toggle("active");
    black1.classList.toggle("active-1");
    Triangle.classList.toggle("active")
    document.body.classList.add("stop-scroll");

})

// sidebar

const SideBar = document.querySelector(".sidebar")
const cross = document.querySelector(".fa-xmark")
const black = document.querySelector(".black");
const Sidebtn = document.querySelector(".panel-select")

Sidebtn.addEventListener("click", () => {
    SideBar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll");
})

cross.addEventListener("click", () => {
    SideBar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
})

// back to top

const Backtop = document.querySelector(".topbtn");

Backtop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behaviour: "smooth"
    })

})


