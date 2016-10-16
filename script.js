// counts to keep track of what step the group is on for transformations
var counts = []
// 7 intervals that each group transforms together on
var intervals = []
// groups of elements that transform together
var groups = [[], [], [], [], [], [], []]
// stuff for the background's interval
var bgCount = 0;
// links do shit also.

var imgURL = chrome.extension.getURL('chicken.png'); 
document.body.style.backgroundImage="url(' + imgURL + ')"; 

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

// Make the background cycle through many colours
document.body.style.transition='all 0.8s';
document.body.style.backgroundColor='red';
setInterval(function() {
    bgColourCycle();
    bgCount = bgCount + 1
  }, 1000);

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
  var ran = Math.floor(Math.random() * 5000);
  intervals[i] = setInterval(function() {changeRotation(group, i);}, ran);
}

function changeRotation(group, i) {
  counts[i] = counts[i] + 1;
  if(counts[i] % 2 === 0) {
    group.map(function(el) {
      el.style.transform='rotate(1.5deg)';
    });
  }
  else {
    group.map(function(el) {
      el.style.transform='rotate(-1.5deg)';
    });
  }
}

var links = Array.from(document.querySelectorAll('a'));
for (var i = 0; i < links.length; i++) {
  links[i].style.transition='all 0.3s';
  setInterval(function() {
      for (var j = 0; j < links.length; j++) {
          links[j].style.transform='rotate(360deg)';
      }
      setTimeout(function() {
          for (var j = 0; j < links.length; j++) {
              links[j].style.transform='rotate(0deg)';
          };}, 1000);
  }, 1000)
}

function bgColourCycle() {
  if (bgCount % 10 === 0) { document.body.style.backgroundColor='#F08'; }
  if (bgCount % 10 === 1) { document.body.style.backgroundColor='#8F8'; }
  if (bgCount % 10 === 2) { document.body.style.backgroundColor='#3AF'; }
  if (bgCount % 10 === 3) { document.body.style.backgroundColor='#7F0'; }
  if (bgCount % 10 === 4) { document.body.style.backgroundColor='#C08'; }
  if (bgCount % 10 === 5) { document.body.style.backgroundColor='#7C8'; }
  if (bgCount % 10 === 6) { document.body.style.backgroundColor='#F7C'; }
  if (bgCount % 10 === 7) { document.body.style.backgroundColor='#902'; }
  if (bgCount % 10 === 8) { document.body.style.backgroundColor='#A5F'; } 
  if (bgCount % 10 === 9) { document.body.style.backgroundColor='#50D'; }
}

// Lists
var lists = document.querySelectorAll('li');
for (var i = 0; i < lists; i++) {
    lists[i].style.color="red";
    console.log(lists[i].style.color);
}

/* AUDIO
document.addEventListener("DOMContentLoaded", function(event) {
  var audio = document.getElementsByTagName("audio")[0];
  console.log(audio);
  audio.load();
  audio.play();
});
*/
