// Get saved username

const userName =
    localStorage.getItem("userName");


// Display username

if (userName) {

    document.getElementById("displayUserName").textContent =
        userName;
}


// CONTINUE TO BOOKING

function continueToBooking() {

    const carNumber =
        document.getElementById("carNumber").value
        .trim()
        .toUpperCase();

    const carModel =
        document.getElementById("carModel").value
        .trim();

    const errorMessage =
        document.getElementById("errorMessage");


    // Car number format

    // Example:
    // TN31NS1234

    const carNumberPattern =
        /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;


    // Check car number

    if (!carNumberPattern.test(carNumber)) {

        errorMessage.textContent =
            "Invalid car number. Use format TN31NS1234.";

        errorMessage.style.display = "block";

        return;
    }


    // Check car model

    if (carModel === "") {

        errorMessage.textContent =
            "Please enter your car model name.";

        errorMessage.style.display = "block";

        return;
    }


    // Save car details

    localStorage.setItem(
        "carNumber",
        carNumber
    );

    localStorage.setItem(
        "carModel",
        carModel
    );


    // Go to booking page

    window.location.href =
        "bookingthree.html";
}