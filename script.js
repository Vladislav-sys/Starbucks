let imgCircle = document.querySelector(".header-img-circle");
let img = document.querySelector(".header-img");
let sliderButtons = document.querySelectorAll(".header-slider-element");



function changeImg(button) {
   for (let i = 0; i < sliderButtons.length; i++) {
      sliderButtons[i].classList.remove("active");
   }
   button.classList.add("active");
   let buttonImg = button.childNodes[0];
   img.src = buttonImg.src;
   imgCircle.style.backgroundColor = buttonImg.dataset.circlecolor;

}

for (let i = 0; i < sliderButtons.length; i++) {
   sliderButtons[i].onclick = function (){
      changeImg(sliderButtons[i]);
   };
}


let themeChanger = document.querySelector(".header-theme-changer");

themeChanger.onclick = function () {
   document.body.classList.toggle("dark-theme");
};



let headerBurger = document.querySelector(".header-burger");

headerBurger.onclick = function() {
   headerBurger.classList.toggle("active");
   headerBurger.previousElementSibling.classList.toggle("active");
   document.body.classList.toggle("hide");
};