function continueToBunk() {

    const userName =
        document.getElementById("userName").value.trim();

    const phoneNumber =
        document.getElementById("phoneNumber").value.trim();

    const errorMessage =
        document.getElementById("errorMessage");


    // Check username

    if (userName === "") {

        errorMessage.textContent =
            "Please enter your username.";

        errorMessage.style.display = "block";

        return;
    }


    // Check phone number

    if (!/^[6-9][0-9]{9}$/.test(phoneNumber)) {

        errorMessage.textContent =
            "Please enter a valid 10-digit phone number.";

        errorMessage.style.display = "block";

        return;
    }


    // Save user details

    localStorage.setItem(
        "userName",
        userName
    );

    localStorage.setItem(
        "phoneNumber",
        phoneNumber
    );


    // Go to next page

    window.location.href = "bunktwo.html";
}