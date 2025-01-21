chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "startInterval") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length === 0) {
                sendResponse({ status: "No active tab found" });
                return;
            }

            chrome.tabs.sendMessage(tabs[0].id, { action: "startInterval", minute: message.minute }, (response) => {
                if (chrome.runtime.lastError) {
                    console.error("Error sending message:", chrome.runtime.lastError.message);
                } else {
                    console.log("Message sent successfully:", response);
                }
                sendResponse({ status: "Interval started" });
            });
        });

        return true; // Async response
    } else if (message.action === "stopInterval") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length === 0) {
                sendResponse({ status: "No active tab found" });
                return;
            }

            chrome.tabs.sendMessage(tabs[0].id, { action: "stopInterval" }, (response) => {
                if (chrome.runtime.lastError) {
                    console.error("Error sending message:", chrome.runtime.lastError.message);
                } else {
                    console.log("Message sent successfully:", response);
                }
                sendResponse({ status: "Interval stopped" });
            });
        });

        return true; // Async response
    }
});
