// ==UserScript==
// @name Privacy Redirector
// @namespace https://github.com/dybdeskarphet/privacy-redirector
// @downloadURL https://raw.githubusercontent.com/dybdeskarphet/privacy-redirector/main/privacy-redirector.js
// @updateURL https://raw.githubusercontent.com/dybdeskarphet/privacy-redirector/main/privacy-redirector.js
// @license WTFPL
// @version 1.1.4
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
// @match *://*.tiktok.com/*
// @match *://imgur.com/*
// @match *://*.imgur.com/*
// @match *://medium.com/*
// @match *://*.medium.com/*
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
let redirect_tiktok = true;
let redirect_imgur = true;
let redirect_medium = true;

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

    if (window.location.hostname == "old.reddit.com"){
	location.hostname = "reddit.lol";
    } else {
        location.hostname = "libreddit.spike.codes";
    }
}
 
function redirectYoutube() {
    if (redirect_youtube == false) {
        return;
    }

    window.stop();
    location.hostname = "vid.puffyan.us";
}

function redirectTiktok() {
    if (redirect_tiktok == false) {
        return;
    }
  
    window.stop();

    let langcodeIndex = window.location.pathname.search(/[a-z][a-z]\-[A-Z][A-Z]/g);

    if (window.location.pathname.includes("/discover") == true) {
      let oldPath  = window.location.pathname;
      let newPath  = oldPath.replace("discover", "tag")
      let newURL  = window.location.protocol + "//" + "proxitok.herokuapp.com" + newPath + window.location.hash;
      window.location.replace(newURL);
    } else if(langcodeIndex != -1) {
      let newURL  = window.location.protocol + "//" + "proxitok.herokuapp.com";
      window.location.replace(newURL);
    } else {
      location.hostname = "proxitok.herokuapp.com";
    }

// Add this if language query strings start to break proxitok in the future
//    if (window.location.search.includes("?lang") == true) {
//      let newURL  = window.location.protocol + "//" + "proxitok.herokuapp.com" + window.location.pathname + window.location.hash;
//      window.location.replace(newURL);
//    }

}

function redirectImgur() {
    if (redirect_imgur == false) {
        return;
    }

    window.stop();
    location.hostname = "rimgo.pussthecat.org";
}

function redirectMedium() {
    if (redirect_medium == false) {
      window.stop();
    }
  
    if (window.location.pathname == "/") {
      window.stop();
      alert("Disable the script for viewing this Medium account")
      return;
    } else {
      window.stop();
      location.hostname = "scribe.rip";
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
     
    case "old.reddit.com":
        redirectReddit();
        break;
     
    case "www.youtube.com":
        redirectYoutube();
        break;
     
    case "m.youtube.com":
        redirectYoutube();
        break;

    case "www.tiktok.com":
        redirectTiktok();
        break;
}

if (urlHostname.includes("medium.com")) {
  redirectMedium();
} else if (urlHostname.includes("imgur.com")) {
  redirectImgur();
}
