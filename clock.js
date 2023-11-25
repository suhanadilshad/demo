function updateClock() {
    // Get current time
    let currentTime = new Date();

    // Extract hours, minutes, and seconds
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // Format hours, minutes, and seconds
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Build the formatted time string
    let timeString = hours + ":" + minutes + ":" + seconds;

    // Update the clock display
    document.getElementById("clock").innerHTML = timeString;
}

// Call updateClock function every second
setInterval(updateClock, 1000);

// Call updateClock function once to initialize the clock
updateClock();