function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex untuk memvalidasi format email

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true; // Jika validasi berhasil, form bisa disubmit
}


