// ==========================================
// TORRENT CNG
// ADMIN DASHBOARD JAVASCRIPT
// ==========================================


// Station state

let stationOpen = true;


// Dashboard numbers

let totalBookings = 24;
let waitingTokens = 8;
let completedTokens = 14;
let noShowTokens = 2;


// ==========================================
// STATION OPEN / CLOSE
// ==========================================

function toggleStation() {

    const text =
        document.getElementById("stationText");

    const button =
        document.getElementById("stationButton");

    const dot =
        document.getElementById("stationDot");


    if (stationOpen === true) {

        stationOpen = false;

        text.textContent =
            "Station Closed";

        button.textContent =
            "Open Station";

        dot.style.background =
            "#ff3b30";

        dot.style.boxShadow =
            "0 0 15px #ff3b30";

        alert("🔴 Station Closed");

    } else {

        stationOpen = true;

        text.textContent =
            "Station Open";

        button.textContent =
            "Close Station";

        dot.style.background =
            "#20c66b";

        dot.style.boxShadow =
            "0 0 15px #20c66b";

        alert("🟢 Station Open");

    }

}


// ==========================================
// QR VERIFICATION
// ==========================================

function verifyQR() {

    const booking =
        prompt(
            "Enter Booking ID or Token Number:"
        );


    if (!booking) {

        return;

    }


    alert(
        "✅ Booking Verified!\n\n" +
        "Booking: " + booking
    );

}


// ==========================================
// CALL NEXT TOKEN
// ==========================================

function nextToken() {

    if (waitingTokens <= 0) {

        alert(
            "No waiting tokens!"
        );

        return;

    }


    waitingTokens--;

    completedTokens++;

    updateDashboard();


    alert(
        "🎫 Next token called!"
    );

}


// ==========================================
// EMERGENCY MODE
// ==========================================

function emergencyMode() {

    const answer =
        confirm(
            "⚠️ Activate Emergency Mode?\n\n" +
            "New bookings will be stopped."
        );


    if (!answer) {

        return;

    }


    stationOpen = false;


    document.getElementById(
        "stationText"
    ).textContent =
        "Emergency Mode";


    document.getElementById(
        "stationButton"
    ).textContent =
        "Open Station";


    const dot =
        document.getElementById(
            "stationDot"
        );


    dot.style.background =
        "#ff3b30";


    dot.style.boxShadow =
        "0 0 15px #ff3b30";


    alert(
        "🚨 Emergency Mode Activated!"
    );

}


// ==========================================
// REFRESH DASHBOARD
// ==========================================

function refreshDashboard() {

    updateDashboard();

    alert(
        "🔄 Dashboard Refreshed!"
    );

}


// ==========================================
// UPDATE NUMBERS
// ==========================================

function updateDashboard() {

    document.getElementById(
        "totalBookings"
    ).textContent =
        totalBookings;


    document.getElementById(
        "waitingTokens"
    ).textContent =
        waitingTokens
            .toString()
            .padStart(2, "0");


    document.getElementById(
        "completedTokens"
    ).textContent =
        completedTokens;


    document.getElementById(
        "noShowTokens"
    ).textContent =
        noShowTokens
            .toString()
            .padStart(2, "0");

}


// ==========================================
// LOGOUT
// ==========================================

function logout() {

    const answer =
        confirm(
            "Are you sure you want to logout?"
        );


    if (!answer) {

        return;

    }


    alert(
        "👋 Admin logged out successfully!"
    );

}


// ==========================================
// PAGE LOADED
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "✅ Torrent CNG Admin Dashboard Loaded"
        );

        updateDashboard();

    }
);