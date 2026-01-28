let time = 5;
const timer = document.getElementById("timer");

const countdownInterval = setInterval(() => {
    time--;
    timer.textContent = time;

    if (time === 0) {
        clearInterval(countdownInterval);

        document.getElementById("countdown").classList.remove("show");
        document.getElementById("birthday").classList.add("show");

        // Show birthday for 4 seconds
        setTimeout(() => {
            document.getElementById("birthday").classList.remove("show");
            document.getElementById("message").classList.add("show");
        }, 4000);
    }
}, 1000);
