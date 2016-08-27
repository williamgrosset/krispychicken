var imgURL = chrome.extension.getURL('chicken.png');

/*var div = document.createElement('div');
div.style.height="157px";
div.style.width="321px";
div.style.position="absolute";
div.style.bottom="50%";
div.style.left="40%";
div.style.zIndex="5";
div.style.backgroundImage='url(' + imgURL + ')';
document.body.appendChild(div);*/

var imgURL = chrome.extension.getURL('chicken.png'); 
//document.body.style.backgroundImage='url(' + imgURL + ')'; 

function replaceImages(domImg, srcImage) {
    var img = new Image();
    img.onload = function()
    {
        // Load completed
        domImg.src = this.src;
    };
    img.src = srcImage;
}

var imgs = document.getElementsByTagName('img');
for (var i  = 0; i < imgs.length; i++) {
    imgs[i].src = replaceImages(imgs[i], imgURL);
}


// FIX ME (AUDIO)
var audio = new Audio('duffman.mp3'); 
audio.play();