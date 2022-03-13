// ==UserScript==
// @name Privacy Redirector
// @namespace https://github.com/dybdeskarphet/privacy-redirector
// @downloadURL https://raw.githubusercontent.com/dybdeskarphet/privacy-redirector/main/privacy-redirector.js
// @updateURL https://raw.githubusercontent.com/dybdeskarphet/privacy-redirector/main/privacy-redirector.js
// @license WTFPL
// @version 1.1.3
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

/*
  ___  _   _        ___  _____ _____ 
 / _ \| \ | |      / _ \|  ___|  ___|
| | | |  \| |_____| | | | |_  | |_   
| |_| | |\  |_____| |_| |  _| |  _|  
 \___/|_| \_|      \___/|_|   |_|    

CHANGE THE RELEVANT VALUE TO "false" TO
DISABLE THE REDIRECTION FOR THAT
PARTICULAR SITE */

let redirect_youtube = true;
let redirect_instagram = true;
let redirect_twitter = true;
let redirect_reddit = true;

// // // // // // // // // // // // //

function redirectInstagram() {

    if (redirect_instagram == false) {
        return;
    }

    if (window.location.pathname.indexOf("/p/") == 0) {
        window.stop();
        location.hostname = 'bibliogram.pussthecat.org';
    } else if (window.location.pathname == "/") {
        window.stop();
        location.hostname = 'bibliogram.pussthecat.org';
    } else if (window.location.pathname === "/accounts/login/") {
        window.stop();
        let oldQuery  = window.location.search;
        let newQuery  = oldQuery.replace("?next=/", "/")
        let newURL  = window.location.protocol + "//" + "bibliogram.pussthecat.org" + "/u" + newQuery + window.location.hash;
        window.location.replace(newURL);
    } else {
        window.stop();
        let oldUrlPath  = window.location.pathname;
        let newURL  = window.location.protocol + "//" + "bibliogram.pussthecat.org" + "/u" + oldUrlPath + window.location.search + window.location.hash;
        window.location.replace(newURL);
    }

}
 
function redirectTwitter() {
    if (redirect_twitter == false) {
        return;
    }
  
    window.stop();
    location.hostname = "nitter.42l.fr";
}
 
function redirectReddit() {
    if (redirect_reddit == false) {
        return;
    }
  
    window.stop();
    location.hostname = "libreddit.spike.codes";
}
 
function redirectYoutube() {
    if (redirect_youtube == false) {
        return;
    }
  
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

