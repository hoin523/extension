clearInterval();

if (window.location.href.startsWith('https://114.unipost.co.kr')) {
    let intervalId;

    function startInterval() {
        // Prompt the user for input and ensure only numbers are entered
        let minute;
        do {
            minute = prompt("몇 분?(숫자만 입력 가능 && 1 이상)");
        } while (isNaN(minute) && (minute > 0));

        // Clear any existing interval
        if (intervalId) {
            clearInterval(intervalId);
        }

        // Set a new interval
        intervalId = setInterval(() => {
            console.log("Interval running...");
        }, minute (60 * 1000));
    }

    // Start the interval
    startInterval();
}