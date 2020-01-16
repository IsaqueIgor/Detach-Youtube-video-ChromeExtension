let video;
const scriptGo = "video = document.querySelector('video'); video.requestPictureInPicture()";

chrome.browserAction.onClicked.addListener(function(tab) {    
    chrome.tabs.executeScript(null, {
        code: scriptGo
    })
});