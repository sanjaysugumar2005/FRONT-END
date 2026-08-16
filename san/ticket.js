// ==========================================
// GET DATA FROM PREVIOUS PAGES
// ==========================================

const userName =
    localStorage.getItem("userName");

const phoneNumber =
    localStorage.getItem("phoneNumber");

const carModel =
    localStorage.getItem("carModel");

const carNumber =
    localStorage.getItem("carNumber");

const bookingDate =
    localStorage.getItem("bookingDate");

const bookingShift =
    localStorage.getItem("bookingShift");

const bookingTime =
    localStorage.getItem("bookingTime");

const bunkName =
    localStorage.getItem("bunkName") || "Torrent CNG";


// ==========================================
// CHECK BOOKING DATA
// ==========================================

if (
    !userName ||
    !phoneNumber ||
    !carModel ||
    !carNumber ||
    !bookingDate ||
    !bookingShift ||
    !bookingTime
) {

    alert("Booking details are missing.");

    window.location.href = "index.html";
}


// ==========================================
// CREATE TICKET NUMBER
// ==========================================

let ticketNumber =
    localStorage.getItem("ticketNumber");


if (!ticketNumber) {

    ticketNumber =
        "TCNG-" +
        Math.floor(
            100000 +
            Math.random() * 900000
        );

    localStorage.setItem(
        "ticketNumber",
        ticketNumber
    );
}


// ==========================================
// DISPLAY TICKET DETAILS
// ==========================================

document.getElementById(
    "ticketNumber"
).textContent = ticketNumber;


document.getElementById(
    "bookingDate"
).textContent = bookingDate;


document.getElementById(
    "bookingShift"
).textContent = bookingShift.toUpperCase();


document.getElementById(
    "bookingTime"
).textContent = bookingTime;


document.getElementById(
    "carModel"
).textContent = carModel;


document.getElementById(
    "carNumber"
).textContent = carNumber;


document.getElementById(
    "userName"
).textContent = userName;


document.getElementById(
    "phoneNumber"
).textContent = phoneNumber;


document.getElementById(
    "bunkName"
).textContent = bunkName;


// ==========================================
// QR CODE DATA
// ==========================================

const qrData = JSON.stringify({

    ticketNumber: ticketNumber,

    userName: userName,

    phoneNumber: phoneNumber,

    carModel: carModel,

    carNumber: carNumber,

    bookingDate: bookingDate,

    bookingShift: bookingShift,

    bookingTime: bookingTime,

    bunkName: bunkName

});


// ==========================================
// GENERATE QR CODE
// ==========================================

new QRCode(
    document.getElementById("qrcode"),
    {
        text: qrData,

        width: 180,

        height: 180
    }
);


// ==========================================
// DONE BUTTON
// ==========================================

function goHome() {

    window.location.href =
        "index.html";
}