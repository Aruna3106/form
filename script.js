const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;
    const age = document.getElementById("age").value;

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError =
        document.getElementById("confirmPasswordError");
    const ageError = document.getElementById("ageError");

    const successMessage =
        document.getElementById("successMessage");

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    ageError.textContent = "";
    successMessage.textContent = "";

    // Remove old classes
    document.querySelectorAll("input").forEach(function (input) {
        input.classList.remove("error", "success");
    });

    let valid = true;

    // Name validation
    if (name === "") {

        nameError.textContent = "Name is required";
        document.getElementById("name").classList.add("error");
        valid = false;

    } else if (name.length < 3) {

        nameError.textContent =
            "Name must contain at least 3 characters";

        document.getElementById("name").classList.add("error");
        valid = false;

    } else {

        document.getElementById("name").classList.add("success");
    }


    // Email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent = "Email is required";
        document.getElementById("email").classList.add("error");
        valid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Enter a valid email address";

        document.getElementById("email").classList.add("error");
        valid = false;

    } else {

        document.getElementById("email").classList.add("success");
    }


    // Phone validation
    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {

        phoneError.textContent =
            "Phone number is required";

        document.getElementById("phone").classList.add("error");
        valid = false;

    } else if (!phonePattern.test(phone)) {

        phoneError.textContent =
            "Phone number must contain 10 digits";

        document.getElementById("phone").classList.add("error");
        valid = false;

    } else {

        document.getElementById("phone").classList.add("success");
    }


    // Password validation
    if (password === "") {

        passwordError.textContent =
            "Password is required";

        document.getElementById("password").classList.add("error");
        valid = false;

    } else if (password.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters";

        document.getElementById("password").classList.add("error");
        valid = false;

    } else {

        document.getElementById("password").classList.add("success");
    }


    // Confirm password validation
    if (confirmPassword === "") {

        confirmPasswordError.textContent =
            "Please confirm your password";

        document
            .getElementById("confirmPassword")
            .classList.add("error");

        valid = false;

    } else if (password !== confirmPassword) {

        confirmPasswordError.textContent =
            "Passwords do not match";

        document
            .getElementById("confirmPassword")
            .classList.add("error");

        valid = false;

    } else {

        document
            .getElementById("confirmPassword")
            .classList.add("success");
    }


    // Age validation
    if (age === "") {

        ageError.textContent = "Age is required";
        document.getElementById("age").classList.add("error");
        valid = false;

    } else if (age < 18 || age > 100) {

        ageError.textContent =
            "Age must be between 18 and 100";

        document.getElementById("age").classList.add("error");
        valid = false;

    } else {

        document.getElementById("age").classList.add("success");
    }


    // Final result
    if (valid) {

        successMessage.textContent =
            "🎉 Registration successful!";

        form.reset();

        document.querySelectorAll("input").forEach(function (input) {
            input.classList.remove("success");
        });
    }
});