// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var chickens = "chicken.png";

function click(e) {
  console.log("We are in popup.js function");
  //document.body.style.backgroundImage = "url('chicken.png')";
  chrome.tabs.executeScript(null,
      {code:"var imgURL = chrome.extension.getURL('chicken.png'); document.body.style.backgroundImage='url(' + imgURL + ')'; var audio = new Audio('duffman.mp3'); audio.play()"}
  );
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('here');
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
