var imgURL = chrome.extension.getURL('chicken.png');

var div = document.createElement('div');
div.style.height="157px";
div.style.width="321px";
div.style.position="absolute";
div.style.bottom="50%";
div.style.left="40%";
div.style.zIndex="5";
div.style.backgroundImage='url(' + imgURL + ')';
document.body.appendChild(div);

var imgURL = chrome.extension.getURL('chicken.png'); 
document.body.style.backgroundImage='url(' + imgURL + ')'; 
var audio = new Audio('duffman.mp3'); 
audio.play();