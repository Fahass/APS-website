
const dropDown = document.querySelector(".dropDown")
// ---
const hamBurger = document.querySelector(".hamburger")
const barOne = document.querySelector("#bar-one")
const barTwo = document.querySelector("#bar-two")
const barThree = document.querySelector("#bar-three")
// ---


hamBurger.addEventListener("click", ()=>{
    // Nav-links Dropdown 
    dropDown.classList.toggle("active");

    // Hamburger Menu 
    barOne.classList.toggle("transform")
    barTwo.classList.toggle("transform")
    barThree.classList.toggle("transform")
}) 

// ---
dropDown.addEventListener("click", ()=>{
    // Nav-links Dropdown 
    dropDown.classList.remove("active");

     // Hamburger Menu 
     barOne.classList.remove("transform")
     barTwo.classList.remove("transform")
     barThree.classList.remove("transform")
})

// Swiper

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    breakpoints: {
        1024:{
            slidesPerView: 3,
        },
        900:{
            slidesPerView: 2,
        },
        780:{
            slidesPerView: 1,
        }
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });