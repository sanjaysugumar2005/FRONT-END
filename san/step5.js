// ==========================================
// TORRENT CNG
// STEP 5 - BOOKING CONFIRMATION
// ==========================================


// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    loadBookingData();

});


// ==========================================
// LOAD BOOKING DATA
// ==========================================

function loadBookingData() {

    const carName =
        localStorage.getItem("carName") || "Not Available";

    const carNumber =
        localStorage.getItem("carNumber") || "Not Available";

    const bookingDate =
        localStorage.getItem("bookingDate") || "Not Available";

    const bookingTime =
        localStorage.getItem("bookingTime") || "Not Available";

    const bunkName =
        localStorage.getItem("bunkName") || "Torrent CNG";


    // ======================================
    // GENERATE TOKEN
    // ======================================

    let token =
        localStorage.getItem("cngToken");


    if (!token) {

        token = generateToken();

        localStorage.setItem(
            "cngToken",
            token
        );

    }


    // ======================================
    // DISPLAY DATA
    // ======================================

    document.getElementById(
        "tokenNumber"
    ).textContent = token;


    document.getElementById(
        "carName"
    ).textContent = carName;


    document.getElementById(
        "carNumber"
    ).textContent = carNumber;


    document.getElementById(
        "bookingDate"
    ).textContent = bookingDate;


    document.getElementById(
        "bookingTime"
    ).textContent = bookingTime;


    document.getElementById(
        "bunkName"
    ).textContent = bunkName;


    // ======================================
    // CREATE BOOKING OBJECT
    // ======================================

    const booking = {

        token: token,

        carName: carName,

        carNumber: carNumber,

        bookingDate: bookingDate,

        bookingTime: bookingTime,

        bunkName: bunkName,

        status: "WAITING"

    };


    // ======================================
    // SAVE COMPLETE BOOKING
    // ======================================

    localStorage.setItem(
        "currentBooking",
        JSON.stringify(booking)
    );


    // ======================================
    // GENERATE QR
    // ======================================

    generateQR(booking);

}


// ==========================================
// GENERATE TOKEN
// ==========================================

function generateToken() {

    const randomNumber =
        Math.floor(
            100 + Math.random() * 900
        );


    return "CNG-" + randomNumber;

}


// ==========================================
// GENERATE QR CODE
// ==========================================

function generateQR(booking) {

    const qrContainer =
        document.getElementById("qrcode");


    if (!qrContainer) {

        console.error(
            "QR container not found."
        );

        return;

    }


    // Clear old QR

    qrContainer.innerHTML = "";


    // Check QR library

    if (
        typeof QRCode === "undefined"
    ) {

        qrContainer.innerHTML = `

            <p style="
                color:red;
                font-size:12px;
                text-align:center;
            ">

                QR Code library failed to load.

            </p>

        `;

        console.error(
            "QRCode library not loaded."
        );

        return;

    }


    // Convert booking to JSON

    const qrData =
        JSON.stringify(booking);


    // Generate QR

    new QRCode(
        qrContainer,
        {

            text: qrData,

            width: 200,

            height: 200,

            colorDark: "#000000",

            colorLight: "#ffffff",

            correctLevel:
                QRCode.CorrectLevel.H

        }
    );

}


// ==========================================
// BACK TO HOME
// ==========================================

function goHome() {

    window.location.href =
        "index.html";

}