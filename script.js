/***** TOGGLE BAR *****/ 

let button = document.querySelector(".navbar_toggle");
let icon = button.querySelector(".fa-bars");

button.onclick = function() {
  const navs = document.querySelectorAll('.navbar_items')  
  navs.forEach(nav => nav.classList.toggle('navbar__ToggleShow'));
  
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-times");
  }
  else {
    icon.classList.replace("fa-times", "fa-bars");
  }
}

/***** SCROLL REVEAL *****/

ScrollReveal({     // used to animate the page
  distance:'80px', // animate from 80px away from their starting position 
  duration: 1500,  // animation will take 1.5sec to complete from start to finish  
  delay: 200, // delay 200ms before the animation starts
});

ScrollReveal().reveal('.hero_image', {origin:'top'});     // top to bottom
ScrollReveal().reveal('.hero_description', {origin:'bottom'});     //bottom to top
ScrollReveal().reveal('.detail_head, .voting', {origin:'left'});   //left to right
ScrollReveal().reveal('.detail_text, .womens', {origin:'right'});  //right to left


   