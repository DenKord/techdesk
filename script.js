const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    initialSlide: 0,
    centeredSlides: true,
    centerInsufficientSlides: true,
    spaceBetween: 0,
    speed: 700,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1080: {
        slidesPerView: 3,
        initialSlide: 1,
        spaceBetween: 110,
      }
    }
  });


let burger = document.querySelector(".burger")
let nav = document.querySelector(".nav")
let up = document.querySelector(".up")
let body = document.querySelector(".body")
let overflow = document.querySelector(".overflow")
let OverflowContentTwo = document.querySelector(".overflow__content-two") 
let overflowContent = document.querySelector(".overflow__content")
let overflowClose = document.querySelectorAll(".close")
let overflowOpen = document.querySelector(".header__btn")
let overflowBtn = document.querySelector(".overflow__btn")
let mores = document.querySelectorAll(".models__more")
let modelsRows = document.querySelectorAll(".models__table")
let overflowImg = document.querySelector(".overflow__img")

overflowClose.forEach(close => {
  close.addEventListener("click", ()=>{
    overflowContent.style.display= "none"
    overflow.style.display= "none"
    OverflowContentTwo.style.display = "none"
    if (burger.className == "burger active"){
        body.classList.add("active")
    } else
    body.classList.remove("active")
  })
});

window.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.tel').forEach(function(input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;

      if (pos < 3 && event.keyCode !== 8 && event.keyCode !== 46) { // Allow backspace (8) and delete (46) keys
        event.preventDefault();
      }

      var matrix = "+7 (___) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a;
          });

      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i);
      }

      var reg = matrix.substr(0, this.value.length).replace(/_+/g, function(a) {
          return "\\d{1," + a.length + "}";
      }).replace(/[+()]/g, "\\$&");

      reg = new RegExp("^" + reg + "$");

      if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) {
        this.value = new_value;
      }

      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }

      // Fix cursor position
      if (pos < this.value.length) {
        this.setSelectionRange(pos, pos);
      }
    }

    function handleDelete(event) {
      if (this.selectionStart == 0 && this.selectionEnd == this.value.length) {
        this.value = "";
      }
    }

    function handleInput(event) {
      if (this.value === "") {
        this.value = "+7 ";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
    input.addEventListener("keydown", handleDelete, false);
    input.addEventListener("input", handleInput, false);

  });
});

overflowOpen.addEventListener("click", ()=>{
  overflowContent.style.display= "flex"
  overflow.style.display= "block"
  body.classList.add("active")

})

overflowBtn.addEventListener("click", (e)=>{
  e.preventDefault() 
  overflowContent.style.display = "none"
  OverflowContentTwo.style.display = "flex"
})

up.addEventListener("click", ()=>{
  window.scroll({
    left:0,
    top: 0,
    behavior: "smooth"
  })
})


burger.addEventListener("click", ()=>{
  burger.classList.toggle("active")
  body.classList.toggle("active")
  nav.classList.toggle("active")
})

for(let i = 0; i < mores.length; i++)
  mores[i].onclick = function (){
    if (mores[i].innerHTML == "Показать еще..." ){
      mores[i].innerHTML = "Скрыть" 
    } else
    mores[i].innerHTML = "Показать еще..." 

    modelsRows[i].classList.toggle("active")
}


