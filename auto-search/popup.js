document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("startButton").addEventListener("click", () => {
        const minute = parseInt(document.getElementById("minuteInput").value);
        const inputField = document.getElementById("minuteInput");

        if (!isNaN(minute) && minute > 0) {
            chrome.runtime.sendMessage({ action: "startInterval", minute: minute }, (response) => {
                console.log(response.status);
                window.close();
            });
        } else {
            inputField.style.border = "2px solid red";
            inputField.focus();
        }
    });

    document.getElementById("stopButton").addEventListener("click", () => {
        chrome.runtime.sendMessage({ action: "stopInterval" }, (response) => {
            console.log(response.status);
            window.close();
        });
    });
});