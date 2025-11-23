document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirmPassword").value;

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (name.length < 3) {
        alert("Name must be at least 3 characters.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Enter a valid email address.");
        return;
    }

    if (pass.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    if (pass !== confirmPass) {
        alert("Passwords do not match!");
        return;
    }

    alert("Signup successful!");
});
