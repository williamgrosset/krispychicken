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
document.body.style.backgroundImage='url(' + imgURL + ')'; 

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

// Fried Chicken EVERYWHERE
var imgs = document.getElementsByTagName('img');
for (var i  = 0; i < imgs.length; i++) {
    imgs[i].src = replaceImages(imgs[i], imgURL);
}

var counts = []

var divs = document.querySelectorAll('div');
for (var i = 0; i < divs.length; i++) {
  divs[i].style.transition='all 0.3s';
  counts[i] = 0;
  twitchSometimes(divs[i], i);
}

function twitchSometimes(div, i) {
  var ran = Math.floor(Math.random() * 10000);
  setInterval(function() {changeRotation(div, i);}, ran);
}

function changeRotation(div, i) {
  counts[i] = counts[i] + 1;
  if(counts[i] % 2 === 0) {
    div.style.transform='rotate(0deg)';
  }
  else {
    div.style.transform='rotate(5deg)';
  }
}

/* AUDIO
document.addEventListener("DOMContentLoaded", function(event) {
  var audio = document.getElementsByTagName("audio")[0];
  console.log(audio);
  audio.load();
  audio.play();
});
*/