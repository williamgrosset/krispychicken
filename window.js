function click(e) {
    chrome.tabs.executeScript(null, {code:"alert('This is a test')"});
    console.log("here");
}
chrome.browserAction.onClicked.addListener(click);
