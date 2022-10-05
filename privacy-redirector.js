// ==UserScript==
// @name Privacy Redirector
// @name:tr Gizlilik Yönlendiricisi
// @name:de Datenschutz Umleiter
// @namespace https://github.com/dybdeskarphet/privacy-redirector
// @license GPLv3
// @version 1.4.0
// @description	Redirect social media platforms to their privacy respecting frontends
// @description:tr Sosyal medya platformlarını, gizliliğe saygı duyan önyüzlerine yönlendirir
// @description:de Leitet von Social-Media-Plattformen auf deren jeweilige datenschutzfreundlicheren Frontends
// @updateURL https://raw.githubusercontent.com/dybdeskarphet/privacy-redirector/main/privacy-redirector.js
// @downloadURL https://raw.githubusercontent.com/dybdeskarphet/privacy-redirector/main/privacy-redirector.js
// @supportURL https://github.com/dybdeskarphet/privacy-redirector
// @run-at document-start
// @match *://*.imdb.com/*
// @match *://*.imgur.com/*
// @match *://*.instagram.com/*
// @match *://*.medium.com/*
// @match *://*.quora.com/*
// @match *://*.reddit.com/*
// @match *://*.reuters.com/*
// @match *://*.tiktok.com/*
// @match *://*.twitter.com/*
// @match *://*.wikipedia.org/*
// @match *://*.youtube.com/*
// @match *://*.fandom.com/*
// @match *://imgur.com/*
// @match *://instagram.com/*
// @match *://medium.com/*
// @match *://news.ycombinator.com/*
// @match *://reddit.com/*
// @match *://translate.google.com/*
// @match *://twitter.com/*
// @match *://youtube.com/*
// @match *://fandom.com/*
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
var redirect_gtranslate = true;
var redirect_hackernews = true;
var redirect_imdb = true;
var redirect_imgur = true;
var redirect_instagram = false;
var redirect_medium = true;
var redirect_quora = false;
var redirect_reddit = true;
var redirect_reuters = true;
var redirect_tiktok = true;
var redirect_twitter = true;
var redirect_wikipedia = true;
var redirect_youtube = true;
var redirect_fandom = true;

// // // // // // // // // // // // //

var farsideInstance = "farside.link";
var debug_mode = false;

if (debug_mode == true) {
  alert(
    "Path: " +
      window.location.pathname +
      "\nQuery: " +
      window.location.search +
      "\nHash: " +
      window.location.hash
  );
}

function redirectInstagram() {
  if (redirect_instagram == false) {
    return;
  }

  window.stop();

  alert(
    "Bibliogram Instances are broken, you may want to disable the redirection for Instagram"
  );

  let bibliogramInstances = [
    "bibliogram.art",
    "bibliogram.pussthecat.org",
    "bibliogram.1d4.us",
    "bibliogram.froth.zone",
  ];

  let randomInstance =
    bibliogramInstances[Math.floor(Math.random() * bibliogramInstances.length)];

  if (window.location.pathname.startsWith("/accounts/login/")) {
    if (window.location.search.indexOf("/reel/") != -1) {
      // reels
      let newURL =
        window.location.protocol +
        "//" +
        randomInstance +
        window.location.pathname.replace("/accounts/login/", "/") +
        window.location.search.replace("?next=/reel", "p") +
        window.location.hash;

      window.location.replace(newURL);
    } else if (window.location.search.indexOf("/p/") == -1) {
      // user pages - it will break if it's not the second last block
      let newURL =
        window.location.protocol +
        "//" +
        randomInstance +
        window.location.pathname.replace("/accounts/login/", "/") +
        window.location.search.replace("?next=", "u") +
        window.location.hash;

      window.location.replace(newURL);
    } else {
      // probably a post
      let newURL =
        window.location.protocol +
        "//" +
        randomInstance +
        window.location.pathname.replace("/accounts/login/", "") +
        window.location.search.replace("?next=", "") +
        window.location.hash;

      window.location.replace(newURL);
    }
  } else {
    if (window.location.pathname == "/") {
      // home page
      location.hostname = randomInstance;
    } else if (window.location.pathname.startsWith("/reel/")) {
      // reel
      let newURL =
        window.location.protocol +
        "//" +
        randomInstance +
        window.location.pathname.replace("/reel", "/p") +
        window.location.hash;

      window.location.replace(newURL);
    } else if (!window.location.pathname.startsWith("/p/")) {
      // user page - it will break if it's not the second last block
      let newURL =
        window.location.protocol +
        "//" +
        randomInstance +
        "/u" +
        window.location.pathname +
        window.location.search +
        indow.location.hash;

      window.location.replace(newURL);
    } else {
      // probably a post
      location.hostname = randomInstance;
    }
  }
}

function redirectTwitter() {
  if (redirect_twitter == false) {
    return;
  }

  window.stop();

  let newURL =
    window.location.protocol +
    "//" +
    farsideInstance +
    "/nitter" +
    window.location.pathname +
    window.location.search +
    window.location.hash;

  window.location.replace(newURL);
}

function redirectReddit() {
  if (redirect_reddit == false) {
    return;
  }

  window.stop();

  let farsideLibreddit = farsideInstance + "/libreddit";
  let farsideTeddit = farsideInstance + "/teddit";

  if (window.location.hostname == "old.reddit.com") {
    let newURL =
      window.location.protocol +
      "//" +
      farsideTeddit +
      window.location.pathname +
      window.location.search +
      window.location.hash;

    window.location.replace(newURL);
  } else {
    let newURL =
      window.location.protocol +
      "//" +
      farsideLibreddit +
      window.location.pathname +
      window.location.search +
      window.location.hash;

    window.location.replace(newURL);
  }
}

function redirectYoutube() {
  if (redirect_youtube == false) {
    return;
  }

  window.stop();

  let newURL =
    window.location.protocol +
    "//" +
    farsideInstance +
    "/invidious" +
    window.location.pathname +
    window.location.search +
    window.location.hash;

  window.location.replace(newURL);
}

function redirectTiktok() {
  if (redirect_tiktok == false) {
    return;
  }

  let proxitokInstances = [
    "proxitok.herokuapp.com",
    "proxitok.pussthecat.org",
    "tok.habedieeh.re",
    "proxitok.esmailelbob.xyz",
  ];

  let randomInstance =
    proxitokInstances[Math.floor(Math.random() * proxitokInstances.length)];

  window.stop();

  if (window.location.pathname.startsWith("/discover")) {
    let newURL =
      window.location.protocol +
      "//" +
      randomInstance +
      window.location.pathname.replace("discover", "tag") +
      window.location.hash;

    window.location.replace(newURL);
  } else if (window.location.pathname.search(/[a-z][a-z]\-[A-Z][A-Z]/g) != -1) {
    let newURL =
      window.location.protocol +
      "//" +
      randomInstance +
      window.location.pathname +
      window.location.search +
      window.location.hash;

    window.location.replace(newURL);
  } else {
    let newURL =
      window.location.protocol +
      "//" +
      randomInstance +
      window.location.pathname +
      window.location.search +
      window.location.hash;

    window.location.replace(newURL);
  }
}

function redirectImgur() {
  if (redirect_imgur == false) {
    return;
  }

  window.stop();

  let newURL =
    window.location.protocol +
    "//" +
    farsideInstance +
    "/rimgo" +
    window.location.pathname +
    window.location.search +
    window.location.hash;

  window.location.replace(newURL);
}

function redirectMedium() {
  if (redirect_medium == false || window.location.pathname == "/") {
    return;
  }

  window.stop();

  let newURL =
    window.location.protocol +
    "//" +
    farsideInstance +
    "/scribe" +
    window.location.pathname +
    window.location.search +
    window.location.hash;

  window.location.replace(newURL);
}

function redirectYoutubeMusic() {
  if (redirect_youtube == false) {
    return;
  }

  window.stop();

  if (window.location.pathname.startsWith("/playlist")) {
    let newURL =
      window.location.protocol +
      "//" +
      "beatbump.ml" +
      window.location.pathname +
      window.location.search.replace("?list=", "/VL") +
      window.location.hash;

    window.location.replace(newURL);
  } else if (window.location.pathname.startsWith("/channel")) {
    let newURL =
      window.location.protocol +
      "//" +
      "beatbump.ml" +
      window.location.pathname.replace("/channel", "/artist") +
      window.location.search +
      window.location.hash;

    window.location.replace(newURL);
  } else if (window.location.pathname.startsWith("/explore")) {
    let newURL =
      window.location.protocol +
      "//" +
      "beatbump.ml" +
      window.location.pathname.replace("/explore", "/trending") +
      window.location.search +
      window.location.hash;

    window.location.replace(newURL);
  } else if (window.location.pathname.startsWith("/moods_and_genres")) {
    let newURL =
      window.location.protocol +
      "//" +
      "beatbump.ml" +
      window.location.pathname.replace("/moods_and_genres", "/explore") +
      window.location.search +
      window.location.hash;

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
  let newURL = window.location.protocol + "//" + "hn.algolia.com";
  window.location.replace(newURL);
}

function redirectGTranslate() {
  if (redirect_gtranslate == false) {
    return;
  }

  window.stop();

  if (window.location.search != "") {
    let newURL =
      window.location.protocol +
      "//" +
      farsideInstance +
      "/lingva" +
      window.location.pathname +
      window.location.search
        .replace(/\?hl=tr/, "")
        .replace(/.sl=/, "")
        .replace("&tl=", "/")
        .replace("&text=", "/")
        .replace("&op=translate", "") +
      window.location.hash;

    window.location.replace(newURL);
  } else {
    let newURL = window.location.protocol + "//" + farsideInstance + "/lingva";

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

function redirectWikipedia() {
  if (redirect_wikipedia == false) {
    return;
  }

  let langCodeIndex = window.location.hostname.search(/^[a-z][a-z]\./);

  window.stop();

  if (langCodeIndex != -1) {
    let newURL =
      window.location.protocol +
      "//" +
      farsideInstance +
      "/wikiless" +
      window.location.pathname +
      "?lang=" +
      window.location.hostname[langCodeIndex] +
      window.location.hostname[langCodeIndex + 1] +
      window.location.hash;
    window.location.replace(newURL);
  } else {
    let newURL =
      window.location.protocol +
      "//" +
      farsideInstance +
      "/wikiless" +
      window.location.pathname +
      "?lang=en" +
      window.location.hash;
    window.location.replace(newURL);
  }
}

function redirectImdb() {
  if (redirect_imdb == false) {
    return;
  }

  if (window.location.pathname.startsWith("/title/")) {
    window.stop();
    let newURL =
      window.location.protocol +
      "//" +
      farsideInstance +
      "/libremdb" +
      window.location.pathname +
      window.location.search +
      window.location.hash;
    window.location.replace(newURL);
  }
}

function redirectQuora() {
  if (redirect_quora == false) {
    return;
  }

  window.stop();

  let newURL =
    window.location.protocol +
    "//" +
    farsideInstance +
    "/querte" +
    window.location.pathname +
    window.location.search +
    window.location.hash;

  window.location.replace(newURL);
}

function redirectFandom() {
  if (redirect_fandom == false) {
    return;
  }

  window.stop();

  let breezewikiInstances = [
    "breezewiki.com",
    "breezewiki.pussthecat.org",
    "bw.odyssey346.dev",
    "https://bw.vern.cc",
    "breezewiki.esmailelbob.xyz",
  ];

  let randomInstance =
    breezewikiInstances[Math.floor(Math.random() * breezewikiInstances.length)];

  let subdomain = window.location.hostname.split(".");
  subdomain[0] == "fandom" || subdomain[0] == "www"
    ? (subdomain[0] = "")
    : (subdomain[0] = "/" + subdomain[0]);

  let newURL =
    window.location.protocol +
    "//" +
    "breezewiki" +
    randomInstance +
    subdomain[0] +
    window.location.pathname +
    window.location.search +
    window.location.hash;

  window.location.replace(newURL);
}

let urlHostname = window.location.hostname;

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

  case "www.imdb.com":
    redirectImdb();
    break;

  case "www.quora.com":
    redirectQuora();
    break;
}

if (urlHostname.includes("medium.com")) {
  redirectMedium();
} else if (urlHostname.includes("imgur.com")) {
  redirectImgur();
} else if (urlHostname.includes("wikipedia.org")) {
  redirectWikipedia();
} else if (urlHostname.includes("fandom.com")) {
  redirectFandom();
}
