// ======================================
// LOAD USER DETAILS
// ======================================

const userName =
    localStorage.getItem("userName");

const carModel =
    localStorage.getItem("carModel");

const carNumber =
    localStorage.getItem("carNumber");


if (userName) {

    document.getElementById("userName").textContent =
        userName;
}


if (carModel) {

    document.getElementById("carModel").textContent =
        carModel;
}


if (carNumber) {

    document.getElementById("carNumber").textContent =
        carNumber;
}


// ======================================
// DATE
// ======================================

const dateInput =
    document.getElementById("bookingDate");


// Today's date

const today =
    new Date();

const year =
    today.getFullYear();

const month =
    String(today.getMonth() + 1).padStart(2, "0");

const day =
    String(today.getDate()).padStart(2, "0");


const todayString =
    `${year}-${month}-${day}`;


// Prevent past dates

dateInput.min =
    todayString;


// ======================================
// VARIABLES
// ======================================

let selectedShift = "";

let selectedSlot = "";


// ======================================
// SAMPLE BOOKED SLOTS
// ======================================
//
// These are only for testing.
// Later Flask + SQLite will provide
// the real booked slots.
//

const bookedSlots = {

    "shift1": [
        "12:30 AM",
        "1:20 AM",
        "3:00 AM",
        "8:40 AM",
        "10:10 AM"
    ],

    "shift2": [
        "12:20 PM",
        "2:40 PM",
        "4:10 PM",
        "7:30 PM",
        "9:50 PM"
    ]

};


// ======================================
// SELECT SHIFT
// ======================================

function selectShift(shift) {

    selectedShift =
        shift;

    selectedSlot =
        "";


    // Remove active from shifts

    document
        .querySelectorAll(".shift")
        .forEach(element => {

            element.classList.remove("active");

        });


    // Activate selected shift

    document
        .getElementById(shift)
        .classList.add("active");


    // Generate slots

    generateSlots(shift);


    // Show slots

    document.getElementById(
        "slotSection"
    ).style.display = "block";
}


// ======================================
// GENERATE 10-MINUTE SLOTS
// ======================================

function generateSlots(shift) {

    const slotsContainer =
        document.getElementById("slots");


    slotsContainer.innerHTML =
        "";


    let startHour;
    let endHour;


    if (shift === "shift1") {

        // 12:00 AM → 12:00 PM

        startHour = 0;

        endHour = 12;

    } else {

        // 12:00 PM → 12:00 AM

        startHour = 12;

        endHour = 24;
    }


    // Create 10 minute slots

    for (
        let hour = startHour;
        hour < endHour;
        hour++
    ) {

        for (
            let minute = 0;
            minute < 60;
            minute += 10
        ) {

            const time =
                formatTime(
                    hour,
                    minute
                );


            const slot =
                document.createElement("button");


            slot.type =
                "button";

            slot.classList.add("slot");


            // Check booked

            if (
                bookedSlots[shift]
                .includes(time)
            ) {

                // RED

                slot.classList.add(
                    "booked"
                );

                slot.textContent =
                    `🔴 ${time}`;

                slot.disabled =
                    true;

            } else {

                // GREEN

                slot.classList.add(
                    "available"
                );

                slot.textContent =
                    `🟢 ${time}`;


                slot.onclick =
                    function () {

                        selectSlot(
                            slot,
                            time
                        );

                    };
            }


            slotsContainer.appendChild(
                slot
            );
        }
    }
}


// ======================================
// FORMAT TIME
// ======================================

function formatTime(
    hour,
    minute
) {

    let displayHour =
        hour % 12;


    if (displayHour === 0) {

        displayHour = 12;
    }


    const minuteString =
        String(minute)
        .padStart(2, "0");


    const ampm =
        hour < 12
            ? "AM"
            : "PM";


    return `${displayHour}:${minuteString} ${ampm}`;
}


// ======================================
// SELECT SLOT
// ======================================

function selectSlot(
    element,
    time
) {

    // Remove previous selection

    document
        .querySelectorAll(".slot.available")
        .forEach(slot => {

            slot.classList.remove(
                "selected"
            );

        });


    // Select current slot

    element.classList.add(
        "selected"
    );


    selectedSlot =
        time;
}


// ======================================
// CONFIRM BOOKING
// ======================================

function confirmBooking() {

    const bookingDate =
        dateInput.value;

    const errorMessage =
        document.getElementById(
            "errorMessage"
        );


    // Check date

    if (bookingDate === "") {

        errorMessage.textContent =
            "Please select a booking date.";

        errorMessage.style.display =
            "block";

        return;
    }


    // Check shift

    if (selectedShift === "") {

        errorMessage.textContent =
            "Please select Shift-1 or Shift-2.";

        errorMessage.style.display =
            "block";

        return;
    }


    // Check slot

    if (selectedSlot === "") {

        errorMessage.textContent =
            "Please select an available 10-minute slot.";

        errorMessage.style.display =
            "block";

        return;
    }


    // Save booking

    localStorage.setItem(
        "bookingDate",
        bookingDate
    );


    localStorage.setItem(
        "bookingShift",
        selectedShift
    );


    localStorage.setItem(
        "bookingTime",
        selectedSlot
    );


    // Go to ticket



        window.location.href = "ticket.html";
}