// ==UserScript==
// @name Privacy Redirector
// @name:tr Gizlilik Yönlendiricisi
// @namespace https://github.com/dybdeskarphet/privacy-redirector
// @license GPLv3
// @version 1.1.9
// @description	Redirect social media platforms to their privacy respecting frontends
// @description:tr Sosyal medya platformlarını, gizliliğe saygı duyan önyüzlerine yönlendirir
// @updateURL https://raw.githubusercontent.com/dybdeskarphet/privacy-redirector/main/privacy-redirector.js
// @downloadURL https://raw.githubusercontent.com/dybdeskarphet/privacy-redirector/main/privacy-redirector.js
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
// @match *://translate.google.com/*
// @match *://news.ycombinator.com/*
// @match *://*.reuters.com/*
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
var redirect_youtube = true;
var redirect_instagram = true;
var redirect_twitter = true;
var redirect_reddit = true;
var redirect_tiktok = true;
var redirect_imgur = true;
var redirect_medium = true;
var redirect_hackernews = true;
var redirect_gtranslate = true;
var redirect_reuters = true;

// // // // // // // // // // // // //

function redirectInstagram() {
	if (redirect_instagram == false) {
		return;
	}

	window.stop();

	if (window.location.pathname.indexOf("/accounts/login/") != -1) {
		if (window.location.href.indexOf("/p/") == -1) {
			let newQuery = window.location.search.replace("?next=", "u")
			let newPath = window.location.pathname.replace("/accounts/login/", "/")
			let newURL = window.location.protocol + "//" + "bibliogram.pussthecat.org" + newPath + newQuery + window.location.hash;
			window.location.replace(newURL);
		} else {
			let newQuery = window.location.search.replace("?next=", "")
			let newPath = window.location.pathname.replace("/accounts/login/", "")
			let newURL = window.location.protocol + "//" + "bibliogram.pussthecat.org" + newPath + newQuery + window.location.hash;
			window.location.replace(newURL);
		}
	} else {
		if (window.location.pathname == "/") {
			location.hostname = "bibliogram.pussthecat.org"
		} else if (window.location.href.indexOf("/p/") == -1) {
			let newURL = window.location.protocol + "//" + "bibliogram.pussthecat.org" + "/u" + window.location.pathname + window.location.search + window.location.hash;
			window.location.replace(newURL);
		} else {
			location.hostname = "bibliogram.pussthecat.org"
		}
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

	if (window.location.hostname == "old.reddit.com") {
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

	if (window.location.pathname.indexOf("/discover") != -1) {
		let newPath = window.location.pathname.replace("discover", "tag")
		let newURL = window.location.protocol + "//" + "proxitok.herokuapp.com" + newPath + window.location.hash;
		window.location.replace(newURL);
	} else if (langcodeIndex != -1) {
		let newURL = window.location.protocol + "//" + "proxitok.pussthecat.org";
		window.location.replace(newURL);
	} else {
		location.hostname = "proxitok.pussthecat.org";
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

	window.stop();

	if (window.location.pathname == "/") {
		alert("Disable the script for viewing this Medium account")
		return;
	} else {
		location.hostname = "scribe.rip";
	}
}

function redirectYoutubeMusic() {
	if (redirect_youtube == false) {
		return;
	}

	window.stop();

	if (window.location.pathname.indexOf("/playlist") != -1) {
		let newQuery = window.location.search.replace("?list=", "/VL")
		let newURL = window.location.protocol + "//" + "beatbump.ml" + window.location.pathname + newQuery + window.location.hash;
		window.location.replace(newURL);
	} else if (window.location.pathname.indexOf("/channel") != -1) {
		let newPath = window.location.pathname.replace("/channel", "/artist")
		let newURL = window.location.protocol + "//" + "beatbump.ml" + newPath + window.location.search + window.location.hash;
		window.location.replace(newURL);
	} else if (window.location.pathname.indexOf("/explore") != -1) {
		let newPath = window.location.pathname.replace("/explore", "/trending")
		let newURL = window.location.protocol + "//" + "beatbump.ml" + newPath + window.location.search + window.location.hash;
		window.location.replace(newURL);
	} else if (window.location.pathname.indexOf("/moods_and_genres") != -1) {
		let newPath = window.location.pathname.replace("/moods_and_genres", "/explore")
		let newURL = window.location.protocol + "//" + "beatbump.ml" + newPath + window.location.search + window.location.hash;
		window.location.replace(newURL);
	} else {
		location.hostname = "beatbump.ml";
	}

}

function redirectHackerNews() {
	if (redirect_hackernews == false) {
		return;
	}

	window.stop();
	let newURL = window.location.protocol + "//" + "hn.algolia.com"
	window.location.replace(newURL);
}

function redirectGTranslate() {
	if (redirect_gtranslate == false) {
		return;
	}

	window.stop();

	if (window.location.search != "") {
		let newQuery = window.location.search.replace("?sl=", "").replace("&tl=", "/").replace("&text=", "/").replace("&op=translate", "")
		let newURL = window.location.protocol + "//" + "lingva.ml" + window.location.pathname + newQuery + window.location.hash;
		window.location.replace(newURL);
	} else {
		let newURL = window.location.protocol + "//" + "lingva.ml";
		window.location.replace(newURL);
	}
}

function redirectReuters() {
	if (redirect_reuters == false) {
		return;
	}

	window.stop();
	location.hostname = "neuters.de";
}

var urlHostname = window.location.hostname;

switch (urlHostname) {

	case "www.instagram.com":
		redirectInstagram();
		break;

	case "twitter.com":
	case "mobile.twitter.com":
		redirectTwitter();
		break;

	case "www.reddit.com":
	case "old.reddit.com":
		redirectReddit();
		break;

	case "www.youtube.com":
	case "m.youtube.com":
		redirectYoutube();
		break;

	case "www.tiktok.com":
		redirectTiktok();
		break;

	case "music.youtube.com":
		redirectYoutubeMusic();
		break;

	case "news.ycombinator.com":
		redirectHackerNews();
		break;

	case "translate.google.com":
		redirectGTranslate();
		break;

	case "www.reuters.com":
		redirectReuters();
		break;
}

if (urlHostname.includes("medium.com")) {
	redirectMedium();
} else if (urlHostname.includes("imgur.com")) {
	redirectImgur();
}
