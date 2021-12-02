// ==UserScript==
// @name Privacy Redirector
// @namespace https://github.com/dybdeskarphet/privacy-redirector
// @downloadURL https://raw.githubusercontent.com/dybdeskarphet/privacy-redirector/main/privacy-redirector.js
// @updateURL https://raw.githubusercontent.com/dybdeskarphet/privacy-redirector/main/privacy-redirector.js
// @license AGPLv3
// @version 1.0.8
// @description	Redirect social media platforms to their privacy respecting frontends
// @description:tr Sosyal medya platformlarını, gizliliğe saygı duyan önyüzlerine yönlendirir
// @run-at document-start
// @match *://instagram.com/*
// @match *://*.instagram.com/*
// @match *://twitter.com/*
// @match *://*.twitter.com/*
// @match *://reddit.com/*
// @match *://*.reddit.com/*
// @match *://youtube.com/*
// @match *://*.youtube.com/*
// ==/UserScript==
 
function redirectInstagram() {
  if (window.location.pathname.indexOf("/p/") == 0) {
    window.stop();
    location.hostname = 'bibliogram.art';
  } else if (window.location.pathname == "/") {
    window.stop();
    location.hostname = 'bibliogram.art';
  } else {
    let oldUrlPath  = window.location.pathname;
    let newURL  = window.location.protocol + "//" + "bibliogram.art" + "/u" + oldUrlPath + window.location.search + window.location.hash;
    
    window.location.replace (newURL);
  }
}
 
function redirectTwitter() {
	window.stop();
	location.hostname = "nitter.42l.fr";
}
 
function redirectReddit() {
	window.stop();
	location.hostname = "teddit.net";
}
 
function redirectYoutube() {
  if (window.location.pathname.indexOf("results?search_query") == 1) {
    window.stop();
    location.hostname = "vid.puffyan.us";
    window.location.replace("results?search_query", "search?q");
  } else {
    window.stop();
    location.hostname = "vid.puffyan.us";
  }
 
}
 
var urlHostname = window.location.hostname;
 
switch (urlHostname) {
	case "www.instagram.com":
	  redirectInstagram();
	  break;
	
	case "twitter.com":
	  redirectTwitter();
	  break;
 
	case "mobile.twitter.com":
	  redirectTwitter();
	  break;
 
	case "www.reddit.com":
	  redirectReddit();
	  break;
 
	case "www.youtube.com":
	  redirectYoutube();
	  break;
 
	case "m.youtube.com":
	  redirectYoutube();
	  break;
}
