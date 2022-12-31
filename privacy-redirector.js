// ==UserScript==
// @name Privacy Redirector
// @name:bg Пренасочване на поверителността
// @name:br Rediretor de privacidade
// @name:cn 隐私重定向器
// @name:cz Přesměrování soukromí
// @name:de Datenschutz Umleiter
// @name:dk Omdirigeringsenhed for privatlivets fred
// @name:ee Privaatsuse ümbersuunaja
// @name:es Redirección de privacidad
// @name:fi Yksityisyydensuojan uudelleenohjaus
// @name:fr Redirecteur de confidentialité
// @name:gr Επανακατευθυντής απορρήτου
// @name:hu Adatvédelmi átirányító
// @name:id Pengarah Privasi
// @name:it Reindirizzatore di privacy
// @name:jp プライバシーリダイレクト
// @name:lt Privatumo nukreipiklis
// @name:lv Konfidencialitātes pāradresētājs
// @name:nl Privacy-omleiding
// @name:pl Przekierownik prywatności
// @name:pt Redirector de Privacidade
// @name:ro Redirector de confidențialitate
// @name:ru Перенаправление конфиденциальности
// @name:se Omdirigering av sekretess
// @name:si Preusmerjevalnik zasebnosti
// @name:sk Presmerovanie súkromia
// @name:tr Gizlilik Yönlendiricisi
// @name:ua Редиректор конфіденційності
// @description	Redirect social media platforms to their privacy respecting frontends
// @description:bg Пренасочване на платформите за социални медии към заглавните им страници, съобразени с поверителността
// @description:br Redirecionando as plataformas de mídia social para suas primeiras páginas de privacidade
// @description:cn 将社交媒体平台重定向到其隐私友好的首页
// @description:cz Přesměrování platforem sociálních médií na jejich titulní stránky šetrné k soukromí
// @description:de Leitet von Social-Media-Plattformen auf deren jeweilige datenschutzfreundlicheren Frontends
// @description:dk Omdirigering af sociale medieplatforme til deres privatlivsvenlige forsider
// @description:ee Sotsiaalmeediaplatvormide ümbersuunamine nende privaatsussõbralikele esilehtedele
// @description:es Redirigir las plataformas de medios sociales a sus portadas respetuosas con la privacidad
// @description:fi Sosiaalisen median alustojen ohjaaminen yksityisyyden suojaa edistäville etusivuille.
// @description:fr Rediriger les plateformes de médias sociaux vers leurs pages d'accueil respectueuses de la vie privée
// @description:gr Αναπροσανατολισμός των πλατφορμών κοινωνικής δικτύωσης στις μπροστινές σελίδες τους που είναι φιλικές προς το απόρρητο
// @description:hu A közösségi médiaplatformok átirányítása az adatvédelem-barát kezdőlapokra
// @description:id Mengarahkan platform media sosial ke halaman depan yang ramah privasi
// @description:it Reindirizzare le piattaforme di social media verso le loro pagine frontali che rispettano la privacy
// @description:jp ソーシャルメディアプラットフォームをプライバシーに配慮したフロントページにリダイレクトする
// @description:lt Socialinės žiniasklaidos platformų nukreipimas į privatumą užtikrinančius pirmuosius puslapius
// @description:lv Sociālo plašsaziņas līdzekļu platformu pāradresēšana uz to privātumam draudzīgajām pirmajām lapām.
// @description:nl Sociale-mediaplatforms omleiden naar hun privacyvriendelijke voorpagina's
// @description:pl Przekierowanie platform mediów społecznościowych na ich przyjazne dla prywatności strony tytułowe
// @description:pt Redireccionar as plataformas de redes sociais para as suas primeiras páginas amigas da privacidade
// @description:ro Redirecționarea platformelor de socializare către paginile lor de început care respectă viața privată
// @description:ru Перенаправление платформ социальных сетей на их главные страницы, дружественные к конфиденциальности
// @description:se Omdirigera sociala medieplattformar till deras integritetsvänliga förstasidor.
// @description:si preusmeritev platform družabnih medijev na njihove naslovne strani, ki so prijazne do zasebnosti.
// @description:sk Presmerovanie platforiem sociálnych médií na ich úvodné stránky, ktoré chránia súkromie
// @description:tr Sosyal medya platformlarını, gizliliğe saygı duyan önyüzlerine yönlendirir
// @description:ua Перенаправлення соціальних медіа-платформ на їхні головні сторінки, дружні до приватності
// @namespace https://github.com/dybdeskarphet/privacy-redirector
// @author Ahmet Arda Kavakcı
// @license GPLv3
// @version 1.3.3
// @downloadURL https://raw.githubusercontent.com/dybdeskarphet/privacy-redirector/main/privacy-redirector.js
// @supportURL https://github.com/dybdeskarphet/privacy-redirector
// @updateURL https://raw.githubusercontent.com/dybdeskarphet/privacy-redirector/main/privacy-redirector.js
// @run-at document-start
// @match *://*.fandom.com/*
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
// @match *://imgur.com/*
// @match *://instagram.com/*
// @match *://medium.com/*
// @match *://news.ycombinator.com/*
// @match *://reddit.com/*
// @match *://translate.google.com/*
// @match *://twitter.com/*
// @match *://youtube.com/*
// ==/UserScript==

/*
  ___  _   _        ___  _____ _____ 
 / _ \| \ | |      / _ \|  ___|  ___|
| | | |  \| |_____| | | | |_  | |_   
| |_| | |\  |_____| |_| |  _| |  _|  
 \___/|_| \_|      \___/|_|   |_|    

CHANGE THE RELEVANT VALUE TO "false" TO
DISABLE THE REDIRECTION/FARSIDE FOR THAT
PARTICULAR PLATFORM */

//                REDIRECTON / FARSIDE
let fandom =      [true, true];
let gtranslate =  [true, true];
let hackernews =  [true, true];
let imdb =        [true, true];
let imgur =       [true, true];
let instagram =   [false, true];
let medium =      [true, true];
let quora =       [true, true];
let reddit =      [true, true];
let reuters =     [true, true];
let tiktok =      [true, true];
let twitter =     [true, true];
let wikipedia =   [true, true];
let youtube =     [true, true];

// // // // // // // // // // // // //

/*
 ___           _                            
|_ _|_ __  ___| |_ __ _ _ __   ___ ___  ___ 
 | || '_ \/ __| __/ _` | '_ \ / __/ _ \/ __|
 | || | | \__ \ || (_| | | | | (_|  __/\__ \
|___|_| |_|___/\__\__,_|_| |_|\___\___||___/

LIST OF INSTANCES TO USE IF FARSIDE IS NOT ENABLED
*/

let bibliogramInstances = [
  "bibliogram.1d4.us",
  "ig.tokhmi.xyz"
];

let breezewikiInstances = [
  "breezewiki.com",
  "breezewiki.pussthecat.org",
  "breezewiki.esmailelbob.xyz",
  "bw.vern.cc",
];

let invidiousInstances = [
  "invidious.snopyta.org",
  "yewtu.be",
  "vid.puffyan.us",
  "invidious.namazso.eu",
];

let libredditInstances = [
  "libreddit.spike.codes",
  "libreddit.org",
  "libreddit.kavin.rocks",
  "reddit.invak.id",
];

let libremdbInstances = [
  "libremdb.iket.me",
  "libremdb.pussthecat.org",
  "libremdbeu.herokuapp.com",
  "lmdb.tokhmi.xyz",
];

let lingvaInstances = [
  "lingva.ml",
  "translate.igna.wtf",
  "translate.plausibility.cloud",
  "translate.projectsegfau.lt",
];

let nitterInstances = [
  "nitter.net",
  "nitter.pussthecat.org",
  "nitter.fdn.fr",
  "nitter.1d4.us",
];

let proxitokInstances = [
  "proxitok.pabloferreiro.es",
  "proxitok.pussthecat.org",
  "tok.habedieeh.re",
  "proxitok.esmailelbob.xyz",
];

let quetreInstances = [
  "quetre.iket.me",
  "quora.vern.cc",
  "quetre.pussthecat.org",
  "quetre.tokhmi.xyz",
];

let rimgoInstances = [
  "i.bcow.xyz",
  "rimgo.pussthecat.org",
  "rimgo.totaldarkness.net",
  "rimgo.bus-hit.me",
];

let scribeInstances = [
  "scribe.rip",
  "scribe.nixnet.services",
  "scribe.citizen4.eu",
  "scribe.bus-hit.me",
];

let tedditInstances = [
  "teddit.pussthecat.org",
  "teddit.ggc-project.de",
  "teddit.domain.glass",
  "teddit.zaggy.nl",
];

let wikilessInstances = [
  "wikiless.org",
  "wikiless.sethforprivacy.com",
  "wiki.604kph.xyz",
  "wikiless.lunar.icu",
];

let farsideInstance = "farside.link";

// // // // // // // // // // // // //

var debug_mode = false;

if (debug_mode == true) {
  alert(
    "Hostname: " +
      window.location.hostname +
      "\nPath: " +
      window.location.pathname +
      "\nQuery: " +
      window.location.search +
      "\nHash: " +
      window.location.hash
  );
}

function redirectInstagram() {
  if (instagram[0] == false) {
    return;
  }

  window.stop();

  alert("Bibliogram is discontinued, you may want to disable the redirection.");

  var selectedInstance = "";

  if (instagram[1] == false) {
    selectedInstance =
      bibliogramInstances[
        Math.floor(Math.random() * bibliogramInstances.length)
      ];
  } else {
    selectedInstance = farsideInstance + "/bibliogram";
  }

  if (window.location.pathname.startsWith("/accounts/login/")) {
    if (window.location.search.indexOf("/reel/") != -1) {
      // reels
      let newURL =
        window.location.protocol +
        "//" +
        selectedInstance +
        window.location.pathname.replace("/accounts/login/", "/") +
        window.location.search.replace("?next=/reel", "p") +
        window.location.hash;

      window.location.replace(newURL);
    } else if (window.location.search.indexOf("/p/") == -1) {
      // user pages - it will crash if it's not the second last block
      let newURL =
        window.location.protocol +
        "//" +
        selectedInstance +
        window.location.pathname.replace("/accounts/login/", "/") +
        window.location.search.replace("?next=", "u") +
        window.location.hash;

      window.location.replace(newURL);
    } else {
      // probably a post
      let newURL =
        window.location.protocol +
        "//" +
        selectedInstance +
        window.location.pathname.replace("/accounts/login/", "") +
        window.location.search.replace("?next=", "") +
        window.location.hash;

      window.location.replace(newURL);
    }
  } else {
    if (window.location.pathname == "/") {
      // home page
      location.hostname = selectedInstance;
    } else if (window.location.pathname.startsWith("/reel/")) {
      // reel
      let newURL =
        window.location.protocol +
        "//" +
        selectedInstance +
        window.location.pathname.replace("/reel", "/p") +
        window.location.hash;

      window.location.replace(newURL);
    } else if (!window.location.pathname.startsWith("/p/")) {
      // user page - it will crash if it's not the second last block
      let newURL =
        window.location.protocol +
        "//" +
        selectedInstance +
        "/u" +
        window.location.pathname +
        window.location.search +
        indow.location.hash;

      window.location.replace(newURL);
    } else {
      // probably a post
      location.hostname = selectedInstance;
    }
  }
}

function redirectTwitter() {
  if (twitter[0] == false) {
    return;
  }

  window.stop();

  var selectedInstance = "";

  if (twitter[1] == false) {
    selectedInstance =
      nitterInstances[Math.floor(Math.random() * nitterInstances.length)];
  } else {
    selectedInstance = farsideInstance + "/nitter";
  }

  let newURL =
    window.location.protocol +
    "//" +
    selectedInstance +
    window.location.pathname +
    window.location.search +
    window.location.hash;

  window.location.replace(newURL);
}

function redirectReddit() {
  if (reddit[0] == false) {
    return;
  }

  window.stop();

  var selectedTeddit = "";
  var selectedLibreddit = "";

  if (reddit[1] == false) {
    selectedTeddit =
      tedditInstances[Math.floor(Math.random() * tedditInstances.length)];
    selectedLibreddit =
      libredditInstances[Math.floor(Math.random() * libredditInstances.length)];
  } else {
    selectedTeddit = farsideInstance + "/teddit";
    selectedLibreddit = farsideInstance + "/libreddit";
  }

  if (window.location.hostname == "old.reddit.com") {
    let newURL =
      window.location.protocol +
      "//" +
      selectedTeddit +
      window.location.pathname +
      window.location.search +
      window.location.hash;

    window.location.replace(newURL);
  } else {
    let newURL =
      window.location.protocol +
      "//" +
      selectedLibreddit +
      window.location.pathname +
      window.location.search +
      window.location.hash;

    window.location.replace(newURL);
  }
}

function redirectYoutube() {
  if (youtube[0] == false) {
    return;
  }

  window.stop();

  var selectedInstance = "";

  if (youtube[1] == false) {
    selectedInstance =
      invidiousInstances[Math.floor(Math.random() * invidiousInstances.length)];
  } else {
    selectedInstance = farsideInstance + "/invidious";
  }

  let newURL =
    window.location.protocol +
    "//" +
    selectedInstance +
    window.location.pathname +
    window.location.search +
    window.location.hash;

  window.location.replace(newURL);
}

function redirectTiktok() {
  if (tiktok[0] == false) {
    return;
  }

  window.stop();

  var selectedInstance = "";

  if (tiktok[1] == false) {
    selectedInstance =
      proxitokInstances[Math.floor(Math.random() * proxitokInstances.length)];
  } else {
    selectedInstance = farsideInstance + "/proxitok";
  }

  if (window.location.pathname.startsWith("/discover")) {
    let newURL =
      window.location.protocol +
      "//" +
      selectedInstance +
      window.location.pathname.replace("discover", "tag") +
      window.location.hash;

    window.location.replace(newURL);
  } else if (window.location.pathname.search(/[a-z][a-z]\-[A-Z][A-Z]/g) != -1) {
    let newURL =
      window.location.protocol +
      "//" +
      selectedInstance +
      window.location.pathname +
      window.location.search +
      window.location.hash;

    window.location.replace(newURL);
  } else {
    let newURL =
      window.location.protocol +
      "//" +
      selectedInstance +
      window.location.pathname +
      window.location.search +
      window.location.hash;

    window.location.replace(newURL);
  }
}

function redirectImgur() {
  if (imgur[0] == false) {
    return;
  }

  window.stop();

  var selectedInstance = "";

  if (imgur[1] == false) {
    selectedInstance =
      rimgoInstances[Math.floor(Math.random() * rimgoInstances.length)];
  } else {
    selectedInstance = farsideInstance + "/rimgo";
  }

  let newURL =
    window.location.protocol +
    "//" +
    selectedInstance +
    window.location.pathname +
    window.location.search +
    window.location.hash;

  window.location.replace(newURL);
}

function redirectMedium() {
  if (medium[0] == false || window.location.pathname == "/") {
    return;
  }

  window.stop();

  var selectedInstance = "";

  if (medium[1] == false) {
    selectedInstance =
      scribeInstances[Math.floor(Math.random() * scribeInstances.length)];
  } else {
    selectedInstance = farsideInstance + "/scribe";
  }

  let newURL =
    window.location.protocol +
    "//" +
    selectedInstance +
    window.location.pathname +
    window.location.search +
    window.location.hash;

  window.location.replace(newURL);
}

function redirectYoutubeMusic() {
  if (youtube[0] == false) {
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
  if (hackernews[0] == false) {
    return;
  }

  window.stop();
  let newURL = window.location.protocol + "//" + "hn.algolia.com";
  window.location.replace(newURL);
}

function redirectGTranslate() {
  if (gtranslate[0] == false) {
    return;
  }

  window.stop();

  var selectedInstance = "";

  if (gtranslate[1] == false) {
    selectedInstance =
      lingvaInstances[Math.floor(Math.random() * lingvaInstances.length)];
  } else {
    selectedInstance = farsideInstance + "/lingva";
  }

  if (window.location.search != "") {
    let newURL =
      window.location.protocol +
      "//" +
      selectedInstance +
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
    let newURL = window.location.protocol + "//" + selectedInstance;
    window.location.replace(newURL);
  }
}

function redirectReuters() {
  if (reuters[0] == false) {
    return;
  }

  window.stop();
  location.hostname = "neuters.de";
}

function redirectWikipedia() {
  if (wikipedia[0] == false) {
    return;
  }

  window.stop();

  let langCodeIndex = window.location.hostname.search(/^[a-z][a-z]\./);
  var selectedInstance = "";

  if (wikipedia[1] == false) {
    selectedInstance =
      wikilessInstances[Math.floor(Math.random() * wikilessInstances.length)];
  } else {
    selectedInstance = farsideInstance + "/wikiless";
  }

  if (langCodeIndex != -1) {
    let newURL =
      window.location.protocol +
      "//" +
      selectedInstance +
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
      selectedInstance +
      window.location.pathname +
      "?lang=en" +
      window.location.hash;
    window.location.replace(newURL);
  }
}

function redirectImdb() {
  if (imdb[0] == false) {
    return;
  }

  if (window.location.pathname.startsWith("/title/")) {
    window.stop();

    var selectedInstance = "";

    if (imdb[1] == false) {
      selectedInstance =
        libremdbInstances[Math.floor(Math.random() * libremdbInstances.length)];
    } else {
      selectedInstance = farsideInstance + "/libremdb";
    }

    let newURL =
      window.location.protocol +
      "//" +
      selectedInstance +
      window.location.pathname +
      window.location.search +
      window.location.hash;
    window.location.replace(newURL);
  }
}

function redirectQuora() {
  if (quora[0] == false) {
    return;
  }

  window.stop();

  var selectedInstance = "";

  if (quora[1] == false) {
    selectedInstance =
      quetreInstances[Math.floor(Math.random() * quetreInstances.length)];
  } else {
    selectedInstance = farsideInstance + "/quetre";
  }

  let newURL =
    window.location.protocol +
    "//" +
    selectedInstance +
    window.location.pathname +
    window.location.search +
    window.location.hash;

  window.location.replace(newURL);
}

function redirectFandom() {
  if (fandom[0] == false) {
    return;
  }

  let randomInstance =
    breezewikiInstances[Math.floor(Math.random() * breezewikiInstances.length)];
  let fandomName = window.location.hostname.replace(/\..*/, "");
  let newURL = "";

  window.stop();

  if (fandomName !== "www") {
    newURL =
      window.location.protocol +
      "//" +
      randomInstance +
      `/${fandomName}` +
      window.location.pathname +
      window.location.search +
      window.location.hash;
  } else {
    newURL = window.location.protocol + "//" + randomInstance;
  }

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
