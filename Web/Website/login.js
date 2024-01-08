document.addEventListener("DOMContentLoaded", () => {
  const textInputs = document.querySelectorAll("input");
  const loginForm = document.querySelector(".form-container");
  const errorContainer = document.querySelector(".error-container");

  textInputs.forEach((textInput) => {
    textInput.addEventListener("focus", () => {
      let parent = textInput.parentNode;
      parent.classList.add("active");
    });

    textInput.addEventListener("blur", () => {
      let parent = textInput.parentNode;
      parent.classList.remove("active");
    });
  });

  const passwordInput = document.querySelector(".password-input");
  const eyeBtn = document.querySelector(".eye-btn");

  eyeBtn.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeBtn.innerHTML = "<i class='bi bi-eye-fill'></i>";
    } else {
      passwordInput.type = "password";
      eyeBtn.innerHTML = "<i class='bi bi-eye-slash-fill'></i>";
    }
  });

  const signUpBtn = document.querySelector(".sign-up-btn");
  const signInBtn = document.querySelector(".sign-in-btn");
  const signUpForm = document.querySelector(".sign-up-form");
  const signInForm = document.querySelector(".sign-in-form");

  signUpBtn.addEventListener("click", () => {
    signInForm.classList.add("hide");
    signUpForm.classList.add("show");
    signInForm.classList.remove("show");
  });

  signInBtn.addEventListener("click", () => {
    signInForm.classList.remove("hide");
    signUpForm.classList.remove("show");
    signInForm.classList.add("show");
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector(".password-input");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);

    if (emailValid && passwordValid) {
        window.location.href = "page_loader.html";
    } else if(emailValid === false && passwordValid === true) {
        alert("Enter the wrong email format!");
    } else if(emailValid === true && passwordValid === false) {
        errorContainer.textContent = "Password must be at least 8 characters, including letters and numbers!";
    }
  });

  function validateEmail(email) {
    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    // Kiểm tra độ dài mật khẩu và sự tồn tại của chữ cái và chữ số
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  }
});
