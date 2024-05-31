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
  distance:'80px',
  duration: 2000,    
  delay: 200,
});

ScrollReveal().reveal('.hero_image', {origin:'top'});     // top to bottom
ScrollReveal().reveal('.hero_description', {origin:'bottom'});     //bottom to top
ScrollReveal().reveal('.detail_head, .voting', {origin:'left'});   //left to right
ScrollReveal().reveal('.detail_text, .womens', {origin:'right'});  //right to left


/*
<script src="https://smtpjs.com/v3/smtp.js">
</script>

<script>
    var btn = document.getElementById('send_btn');
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    
    var name = document.getElementsByName('name').value;
    var email = document.getElementsByName('email').value;
    var subject = document.getElementsByName('subject').value;
    var message = document.getElementsByName('message').value;
    var body = 'name: ' +name + '<br> email: ' + email + '<br> subject: ' + subject + '<br> message: ' + message;
    Email.send({
      Host : "smtp.gmail.com",
      Username : "dharshiniv989@gmail.com",
      Password : "yiqy jhpp jano bkgf",
      To : 'dharshiniv989@gmail.com',
      From : email,
      Subject : subject,
      Body : body
    }).then(
    message => alert(message)
    );
  })
</script>
*/