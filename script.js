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

// counts to keep track of what step the group is on for transformations
var counts = []
// 7 intervals that each group transforms together on
var intervals = []
// groups of elements that transform together
var groups = [[], [], [], [], [], [], []]

var imgURL = chrome.extension.getURL('chicken.png'); 
document.body.style.backgroundImage="url(' + imgURL + ')"; 

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
  groups[i%7] = groups[i%7].concat([divs[i]]);
  counts[i] = 0;
}

for (var i = 0; i < groups.length; i++) {
  twitchSometimes(groups[i], i);
}

function twitchSometimes(group, i) {
  // takes an array of elements and gives them all transformations
  var ran = Math.floor(Math.random() * 3000);
  intervals[i] = setInterval(function() {changeRotation(group, i);}, ran);
}

function changeRotation(group, i) {
  counts[i] = counts[i] + 1;
  if(counts[i] % 2 === 0) {
    group.map(function(el) {
      el.style.transform='rotate(1deg)';
    });
  }
  else {
    group.map(function(el) {
      el.style.transform='rotate(-1deg)';
    });
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