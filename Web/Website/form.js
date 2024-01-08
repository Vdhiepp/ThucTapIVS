const textInputs = document.querySelectorAll("input");

textInputs.forEach(textInputs => {
    textInputs.addEventListener("focus", () => {
        let parent = textInputs.parentNode;
        parent.classList.add("active");
    });

    textInputs.addEventListener("blur", () => {
        let parent = textInputs.parentNode;
        parent.classList.remove("active");
    });
});

//kết nối đến Form EmailJS
(function () {
    emailjs.init("kk9-1rhV2oCuMvnOD");
})();
//kiểm tra định dạng của email
function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
// Tạo một số ngẫu nhiên gồm 6 chữ số từ 100000 đến 999999
function generateRandomCode() {
    return Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
}

//emailcheck
let EmailBtn = document.querySelector('.email-btn');
EmailBtn.addEventListener('click', (event) => {
    event.preventDefault();
    var emailField = document.getElementById('email').value;
    if (emailField == "") {
        alert('Please enter email!');
        return false;
    } else if (!isValidEmail(emailField)) {
        alert('Invalid email format. Please re-enter!');
        return false;
    } else {
        const code = generateRandomCode(); // Tạo mã ngẫu nhiên
        var templateParams = {
            to_email: emailField,
            code: code.toString()
        };
        emailjs.send('service_ilwx70b', 'template_gmheoxk', templateParams)
            .then(function (response) {
                alert('Email sent successfully!', response.status, response.text);
                // Chuyển sang trang otpcheck.html với thông tin email và mã xác nhận đã được gửi đi
                window.location.href = `otpcheck.html?email=${encodeURIComponent(emailField)}&code=${encodeURIComponent(code)}`;
            }, function (error) {
                console.error('Error sending email:', error);
                alert('An error occurred while sending the email. Please try again later!');
            });
    }
});