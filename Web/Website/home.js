let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
}

window.onscroll = () => {
   navbar.classList.remove('active');
}

document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
   faqBox.onclick = () => {
      faqBox.parentElement.classList.toggle('active');
   }
});

// phần hình ảnh di chuyển có 2 button prev và next
var swiper = new Swiper(".home-slider", {
   loop: true,
   effect: "coverflow",
   spaceBetween: 30,
   grabCursor: true,
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

// phần hình ảnh di chuyển ở mục gallery
var swiper = new Swiper(".gallery-slider", {
   loop: true,
   effect: "coverflow",
   slidesPerView: "auto",
   centeredSlides: true,
   grabCursor: true,
   coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
   },
   pagination: {     //phân trang 
      el: ".swiper-pagination",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop: true,
   slidesPerView: "auto",
   grabCursor: true,
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination",
   },
   breakpoints: {
      768: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 2,
      },
   },
});

function sendMail(){

   var params = {
      name: document.getElementById("cus_name").value,
      email_id: document.getElementById("email_id").value,
      phone_number: document.getElementById("phone_number").value,
      checkin_date: document.getElementById("checkin_date").value,
      checkout_date: document.getElementById("checkout_date").value,
      amount_1: document.getElementById("amount_1").value,
      amount_2: document.getElementById("amount_2").value,
      rooms: document.getElementById("rooms").value,
      type: document.getElementById("type").value
   }

   const serviceID = "service_uxz0f16";
   const templateID = "template_5rsl2hj";

   emailjs.send(serviceID, templateID, params).then(function(res) {
   alert("Success! Thank you for your reservation "+ res.status);
   })
}

// function isValidEmail(email) {
//    var emailRegex = /\S+@\S+\.\S+/;
//    return emailRegex.test(email);
// }
// let ConfirmBtn = document.querySelector('.submit-btn');
// ConfirmBtn.addEventListener('click', (event) => {
//    event.preventDefault();
//    var name = document.getElementById("cus_name").value;
//    var email = document.getElementById("email_id").value;
//    var phone = document.getElementById("phone_number").value;
//    var checkin = document.getElementById("checkin_date").value;
//    var checkout = document.getElementById("checkout_date").value;
//    var amount1 = document.getElementById("amount_1").value;
//    var amount2 = document.getElementById("amount_2").value;
//    var room = document.getElementById("rooms").value;
//    var type = document.getElementById("type").value;
//    if (name == "" && email == "" && phone == "" && checkin == "" && checkout == "") {
//       alert('Please enter email!');
//       return false;
//    } else if (!isValidEmail(emailField)) {
//       alert('Invalid email format. Please re-enter!');
//       return false;
//    } else {
//       var templateParams = {
//          to_name: name,
//          to_email: email,
//          to_phone: phone,
//          to_checkin: checkin,
//          to_checkout: checkout,
//          to_amount1: amount1,
//          to_amount2: amount2,
//          to_room: room,
//          to_type: type
//      };
//       emailjs.send('service_ilwx70b', 'template_bf9vogg', templateParams)
//             .then(function (response) {
//                 alert('Email sent successfully!', response.status, response.text);
//                 // Chuyển sang trang otpcheck.html với thông tin email và mã xác nhận đã được gửi đi
//                 window.location.href = `otpcheck.html?email=${encodeURIComponent(emailField)}&code=${encodeURIComponent(code)}`;
//             }, function (error) {
//                 console.error('Error sending email:', error);
//                 alert('An error occurred while sending the email. Please try again later!');
//             });
//    }
// })