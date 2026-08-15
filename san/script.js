let generatedOTP = "";
let timeLeft = 30;
let timer;

// Send OTP
function sendOTP() {

    let phone = document.querySelector("input[type='tel']").value;

    if (phone.length !== 10) {
        alert("Please enter a valid 10-digit phone number");
        return;
    }

    generatedOTP = Math.floor(100000 + Math.random() * 900000);

    alert("Your OTP is: " + generatedOTP);

    startTimer();
}

// Resend OTP
function resendOTP() {

    generatedOTP = Math.floor(100000 + Math.random() * 900000);

    alert("New OTP: " + generatedOTP);

    startTimer();
}

// 30-second timer
function startTimer() {

    timeLeft = 30;

    let timerText = document.querySelector(".container p");

    timerText.innerHTML =
        "You can resend OTP in " + timeLeft + " seconds";

    clearInterval(timer);

    timer = setInterval(function () {

        timeLeft--;

        timerText.innerHTML =
            "You can resend OTP in " + timeLeft + " seconds";

        if (timeLeft <= 0) {

            clearInterval(timer);

            timerText.innerHTML = "You can resend OTP";
        }

    }, 1000);
}

// Submit OTP
function submitOTP() {

    let enteredOTP =
        document.querySelector("input[type='text']").value;

    if (enteredOTP == generatedOTP) {

        alert("OTP Verified Successfully!");

        // Next page
        // window.location.href = "booking.html";

    } else {

        alert("Invalid OTP. Please try again.");
    }
}