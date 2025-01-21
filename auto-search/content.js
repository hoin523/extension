let intervalId = null;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "startInterval") {
        const intervalTime = message.minute * 60 * 1000; // 분 단위 -> 밀리초 단위
        if (intervalId) clearInterval(intervalId);

        var iframe = document.getElementById('ui-tabs-TM902313');
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        const doSearchElement = iframeDocument.querySelector('.doSearch');
        console.log(doSearchElement);

        intervalId = setInterval(() => {
            console.log(`자동검색 실행 중 : ${message.minute}분 주기`, doSearchElement);
            if (doSearchElement) {
                doSearchElement.click();
            }
        }, intervalTime);

        sendResponse({ status: "Interval started" });
    }

    if (message.action === 'stopInterval') {
        clearInterval(intervalId);
        sendResponse({ status: "Interval stopped" });
    }
});
