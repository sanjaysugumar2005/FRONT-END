let selectedSlot = "";

function showSlots(period) {

    let slotsContainer = document.getElementById("slots");

    slotsContainer.innerHTML = "";

    let startHour;
    let endHour;

    if (period === "midnight") {
        startHour = 0;
        endHour = 5;
    }

    else if (period === "morning") {
        startHour = 5;
        endHour = 12;
    }

    else if (period === "afternoon") {
        startHour = 12;
        endHour = 17;
    }

    else if (period === "evening") {
        startHour = 17;
        endHour = 20;
    }

    else if (period === "night") {
        startHour = 20;
        endHour = 24;
    }

    for (let hour = startHour; hour < endHour; hour++) {

        for (let minute = 0; minute < 60; minute += 15) {

            let nextMinute = minute + 15;
            let nextHour = hour;

            if (nextMinute === 60) {
                nextMinute = 0;
                nextHour++;
            }

            let startTime = formatTime(hour, minute);
            let endTime = formatTime(nextHour, nextMinute);

            let button = document.createElement("button");

            button.className = "slot";

            button.innerText =
                startTime + " - " + endTime;

            button.onclick = function () {

                document
                    .querySelectorAll(".slot")
                    .forEach(slot => {
                        slot.classList.remove("selected");
                    });

                button.classList.add("selected");

                selectedSlot =
                    startTime + " - " + endTime;
            };

            slotsContainer.appendChild(button);
        }
    }
}


function formatTime(hour, minute) {

    let period = hour >= 12 ? "PM" : "AM";

    let displayHour = hour % 12;

    if (displayHour === 0) {
        displayHour = 12;
    }

    let displayMinute =
        minute.toString().padStart(2, "0");

    return displayHour + ":" +
        displayMinute + " " +
        period;
}


function confirmBooking() {

    let date =
        document.getElementById("date").value;

    if (date === "") {
        alert("Please select a date.");
        return;
    }

    if (selectedSlot === "") {
        alert("Please select a time slot.");
        return;
    }

    let bookingId =
        "CNG" +
        Math.floor(
            100000 + Math.random() * 900000
        );

    let booking = {

        bookingId: bookingId,

        bunkName:
            document.getElementById("bunkName").innerText,

        date: date,

        time: selectedSlot
    };

    localStorage.setItem(
        "cngBooking",
        JSON.stringify(booking)
    );

    alert(
        "Booking Successful!\n\n" +
        "Booking ID: " + bookingId + "\n" +
        "Date: " + date + "\n" +
        "Time: " + selectedSlot
    );
}