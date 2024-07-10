// Set the date we're counting down to (e.g., New Year)
const countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    // Get current date and time
    const now = new Date().getTime();

    // Calculate the distance between now and the countdown date
    const distance = countDownDate - now;

    // Calculate days, hours, minutes and seconds remaining
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the HTML elements
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // If the countdown is over, clear the interval
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdownTimer').innerHTML = '<div class="expired">Countdown expired!</div>';
    }
}, 1000);
