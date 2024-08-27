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
let overflowContent = document.querySelector(".overflow__content")
let overflowClose = document.querySelector(".close")
let overflowOpen = document.querySelector(".header__btn")
let overflowBtn = document.querySelector(".overflow__btn")
let overflowText = document.querySelector(".overflow__text")
let overflowForm = document.querySelector(".overflow__form")
let overflowSpan = document.querySelector(".overflow__span")
let mores = document.querySelectorAll(".models__more")
let modelsRows = document.querySelectorAll(".models__table")
let overflowImg = document.querySelector(".overflow__img")


overflowClose.addEventListener("click", ()=>{
  overflowContent.style.display= "none"
  overflow.style.display= "none"
  if (burger.className == "burger active"){
      body.classList.add("active")
  } else
  body.classList.remove("active")
  overflowSpan.classList.remove("active")
  overflowImg.classList.remove("active")
   overflowText.textContent = "Оставьте заявку и мы свяжемся с вами в ближайшее время! Спасибо что вы с нами!"
   overflowText.classList.remove("active")
})

overflowOpen.addEventListener("click", ()=>{
  overflowContent.style.display= "flex"
  overflow.style.display= "block"
  overflowForm.style.display= "flex"
  body.classList.add("active")

})

overflowBtn.addEventListener("click", (e)=>{
  e.preventDefault() 
  overflowText.classList.add("active")
  overflowText.textContent = "Спасибо, что выбираете нас!"
  overflowForm.style.display = "none"
  overflowSpan.classList.add("active")
  overflowImg.classList.add("active")
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


