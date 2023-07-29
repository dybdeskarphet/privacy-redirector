// ==UserScript==
// @name Privacy Redirector
// @name:bg Пренасочване на поверителността
// @name:br Rediretor de privacidade
// @name:cs Přesměrování soukromí
// @name:de Datenschutz Umleiter
// @name:da Omdirigeringsenhed for privatlivets fred
// @name:et Privaatsuse ümbersuunaja
// @name:es Redirección de privacidad
// @name:fi Yksityisyydensuojan uudelleenohjaus
// @name:fr Redirecteur de confidentialité
// @name:el Επανακατευθυντής απορρήτου
// @name:hu Adatvédelmi átirányító
// @name:id Pengarah Privasi
// @name:it Reindirizzatore di privacy
// @name:ja プライバシーリダイレクト
// @name:lt Privatumo nukreipiklis
// @name:lv Konfidencialitātes pāradresētājs
// @name:nl Privacy-omleiding
// @name:pl Przekierownik prywatności
// @name:pt Redirector de Privacidade
// @name:ro Redirector de confidențialitate
// @name:ru Перенаправление конфиденциальности
// @name:sv Omdirigering av sekretess
// @name:sl Preusmerjevalnik zasebnosti
// @name:sk Presmerovanie súkromia
// @name:tr Gizlilik Yönlendiricisi
// @name:uk Редиректор конфіденційності
// @name:zh 隐私重定向器
// @name:zh-CN 隐私重定向器
// @description	Redirect social media platforms to their privacy respecting frontends
// @description:bg Пренасочване на платформите за социални медии към заглавните им страници, съобразени с поверителността
// @description:br Redirecionando as plataformas de mídia social para suas primeiras páginas de privacidade
// @description:cs Přesměrování platforem sociálních médií na jejich titulní stránky šetrné k soukromí
// @description:de Leitet von Social-Media-Plattformen auf deren jeweilige datenschutzfreundlicheren Frontends
// @description:da Omdirigering af sociale medieplatforme til deres privatlivsvenlige forsider
// @description:et Sotsiaalmeediaplatvormide ümbersuunamine nende privaatsussõbralikele esilehtedele
// @description:es Redirigir las plataformas de medios sociales a sus portadas respetuosas con la privacidad
// @description:fi Sosiaalisen median alustojen ohjaaminen yksityisyyden suojaa edistäville etusivuille.
// @description:fr Rediriger les plateformes de médias sociaux vers leurs pages d'accueil respectueuses de la vie privée
// @description:el Αναπροσανατολισμός των πλατφορμών κοινωνικής δικτύωσης στις μπροστινές σελίδες τους που είναι φιλικές προς το απόρρητο
// @description:hu A közösségi médiaplatformok átirányítása az adatvédelem-barát kezdőlapokra
// @description:id Mengarahkan platform media sosial ke halaman depan yang ramah privasi
// @description:it Reindirizzare le piattaforme di social media verso le loro pagine frontali che rispettano la privacy
// @description:ja ソーシャルメディアプラットフォームをプライバシーに配慮したフロントページにリダイレクトする
// @description:lt Socialinės žiniasklaidos platformų nukreipimas į privatumą užtikrinančius pirmuosius puslapius
// @description:lv Sociālo plašsaziņas līdzekļu platformu pāradresēšana uz to privātumam draudzīgajām pirmajām lapām.
// @description:nl Sociale-mediaplatforms omleiden naar hun privacyvriendelijke voorpagina's
// @description:pl Przekierowanie platform mediów społecznościowych na ich przyjazne dla prywatności strony tytułowe
// @description:pt Redireccionar as plataformas de redes sociais para as suas primeiras páginas amigas da privacidade
// @description:ro Redirecționarea platformelor de socializare către paginile lor de început care respectă viața privată
// @description:ru Перенаправление платформ социальных сетей на их главные страницы, дружественные к конфиденциальности
// @description:sv Omdirigera sociala medieplattformar till deras integritetsvänliga förstasidor.
// @description:sl preusmeritev platform družabnih medijev na njihove naslovne strani, ki so prijazne do zasebnosti.
// @description:sk Presmerovanie platforiem sociálnych médií na ich úvodné stránky, ktoré chránia súkromie
// @description:tr Sosyal medya platformlarını, gizliliğe saygı duyan önyüzlerine yönlendirir
// @description:uk Перенаправлення соціальних медіа-платформ на їхні головні сторінки, дружні до приватності
// @description:zh 将社交媒体平台重定向到其隐私友好的首页
// @description:zh-CN 将社交媒体平台重定向到其隐私友好的首页
// @namespace https://github.com/dybdeskarphet/privacy-redirector
// @author Ahmet Arda Kavakcı
// @license GPLv3
// @version 1.4.5
// @downloadURL https://raw.githubusercontent.com/dybdeskarphet/privacy-redirector/main/privacy-redirector.user.js
// @supportURL https://github.com/dybdeskarphet/privacy-redirector
// @updateURL https://raw.githubusercontent.com/dybdeskarphet/privacy-redirector/main/privacy-redirector.user.js
// @run-at document-start
// @match *://*.bandcamp.com/*
// @match *://*.fandom.com/*
// @match *://*.genius.com/*
// @match *://*.google.com/*
// @match *://*.imdb.com/*
// @match *://*.imgur.com/*
// @match *://*.instagram.com/*
// @match *://*.medium.com/*
// @match *://*.pinterest.com/*
// @match *://i.pinimg.com/*
// @match *://*.quora.com/*
// @match *://*.reddit.com/*
// @match *://*.reuters.com/*
// @match *://*.tiktok.com/*
// @match *://*.twitter.com/*
// @match *://*.wikipedia.org/*
// @match *://*.youtube-nocookie.com/*
// @match *://*.youtube.com/*
// @match *://f4.bcbits.com/*
// @match *://genius.com/*
// @match *://imgur.com/*
// @match *://instagram.com/*
// @match *://medium.com/*
// @match *://news.ycombinator.com/*
// @match *://reddit.com/*
// @match *://stackoverflow.com/*
// @match *://t4.bcbits.com/*
// @match *://translate.google.com/*
// @match *://twitter.com/*
// @match *://www.goodreads.com/*
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

//           REDIRECTON / FARSIDE
let bandcamp = [true, true];
let fandom = [true, true];
let genius = [true, true];
let goodreads = [true, false];
let google = [true, true];
let gtranslate = [true, true];
let hackernews = [true, true];
let imdb = [true, true];
let imgur = [true, true];
let medium = [true, true];
let pinterest = [true, true];
let quora = [true, true];
let reddit = [true, true];
let reuters = [true, true];
let stackoverflow = [true, true];
let tiktok = [true, true];
let twitter = [true, true];
let wikipedia = [true, true];
let youtube = [true, true];

//       REDIRECTON / FARSIDE / WARNING
let instagram = [true, false, true];

// PREFERRED FRONTEND
let youtubeFrontend = "piped"; // accepts "invidious", "piped"
let youtubeMusicFrontend = "beatbump"; // accepts "beatbump", "invidious", "piped"
let redditFrontend = "libreddit"; // accepts "libreddit", "teddit"
let googleFrontend = "searxng"; // accepts "searx", "searxng"
let geniusFrontend = "intellectual"; // accept dumb, intellectual

// OTHER SETTINGS
let keepHistory = false; // keeps farside.link in the browser history

// // // // // // // // // // // // //

/*
 ___           _                            
|_ _|_ __  ___| |_ __ _ _ __   ___ ___  ___ 
 | || '_ \/ __| __/ _` | '_ \ / __/ _ \/ __|
 | || | | \__ \ || (_| | | | | (_|  __/\__ \
|___|_| |_|___/\__\__,_|_| |_|\___\___||___/

LIST OF INSTANCES TO USE IF FARSIDE IS NOT ENABLED
*/

let anonymousoverflowInstances = [
  "code.whatever.social",
  "ao.vern.cc",
  "overflow.smnz.de",
  "overflow.lunar.icu",
];

let beatbumpInstances = ["beatbump.ml", "bb.eu.projectsegfau.lt"];

let bibliogramInstances = ["ig.tokhmi.xyz", "bibliogram.froth.zone"];

let biblioreadsInstances = [
  "biblioreads.ml",
  "biblioreads.ga",
  "biblioreads.netlify.app",
];

let binternetInstances = [
  "binternet.ahwx.org",
  "binternet.revvy.de",
  "binternet.bloatcat.tk",
  "bn.vern.cc",
  "pinterest.foxhaven.cyou",
];

let breezewikiInstances = [
  "breezewiki.com",
  "breezewiki.pussthecat.org",
  "antifandom.com",
  "bw.hamstro.dev",
];

let dumbInstances = [
  "dm.vern.cc",
  "sing.whatever.social",
  "dumb.lunar.icu",
  "dumb.privacydev.net",
];

let intellectualInstances = ["intellectual.insprill.net"];

let invidiousInstances = [
  "yewtu.be",
  "vid.puffyan.us",
  "yt.artemislena.eu",
  "invidious.projectsegfau.lt",
];

let pipedInstances = [
  "pipedapi.video",
  "pipedapi.tokhmi.xyz",
  "piped.projectsegfau.lt",
  "piped.privacydev.net",
];

let libredditInstances = [
  "libreddit.invak.id",
  "libreddit.de",
  "libreddit.kavin.rocks",
  "libreddit.kutay.dev",
];

let libremdbInstances = [
  "libremdb.pussthecat.org",
  "libremdb.iket.me",
  "libremdb.lunar.icu",
  "binge.whatever.social",
];

let lingvaInstances = [
  "lingva.ml",
  "translate.igna.wtf",
  "translate.plausibility.cloud",
  "translate.projectsegfau.lt",
];

let nitterInstances = [
  "nitter.lacontrevoie.fr",
  "nitter.fdn.fr",
  "nitter.1d4.us",
  "nitter.kavin.rocks",
];

let proxitokInstances = [
  "proxitok.pabloferreiro.es",
  "proxitok.privacydev.net",
  "proxitok.pussthecat.org",
];

let quetreInstances = [
  "quetre.iket.me",
  "quora.vern.cc",
  "quetre.pussthecat.org",
  "quetre.tokhmi.xyz",
];

let rimgoInstances = [
  "rimgo.pussthecat.org",
  "rimgo.totaldarkness.net",
  "rimgo.bus-hit.me",
  "imgur.artemislena.eu",
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

let tentInstances = ["tent.sny.sh", "tent.bloatcat.tk", "tn.vern.cc"];

let wikilessInstances = [
  "wikiless.org",
  "wikiless.tiekoetter.com",
  "wikiless.funami.tech",
  "wl.vern.cc",
];

let searxInstances = [
  "search.bus-hit.me",
  "search.projectsegfau.lt",
  "northboot.xyz",
  "opnxng.com",
];

let searxngInstances = [
  "baresearch.org",
  "dynabyte.ca",
  "search.bus-hit.me",
  "search.leptons.xyz",
];

let farsideInstance = "farside.link";

// // // // // // // // // // // // //

let debug_mode = false;

if (debug_mode == true) {
  alert(
    "\n== DEBUG MODE IS ON ==" +
      "\nIf you're seeing this" +
      "\nset the debug_mode value to" +
      "\nfalse for Privacy Redirctor." +
      "\n======================" +
      "\n\nHostname: " +
      window.location.hostname +
      "\nPath: " +
      window.location.pathname +
      "\nQuery: " +
      window.location.search +
      "\nHash: " +
      window.location.hash
  );
}

if (keepHistory == true) farsideInstance = farsideInstance + "/_";

function redirectInstagram() {
  if (instagram[0] == true) {
    var selectedInstance = "";
    var newPathName = "";
    var newQuery = "";
    var tempURL = "";

    function displayWarning() {
      if (instagram[2] == true) {
        alert(
          "Bibliogram is discontinued, you may want to disable the redirection." +
            "\n\nIf you don't want to see this warning, set Instagram's 'WARNING' to 'false' or set 'REDIRETON' to 'false' to turn off the Instagram redirect completely."
        );
      }
    }

    if (instagram[1] == false) {
      selectedInstance =
        bibliogramInstances[
          Math.floor(Math.random() * bibliogramInstances.length)
        ];
    } else {
      selectedInstance = `${farsideInstance}/bibliogram`;
    }

    if (window.location.pathname.startsWith("/accounts/login/")) {
      newPathName = window.location.pathname.replace("/accounts/login/", "");
      newQuery = window.location.search.replace("?next=", "");
      tempURL = `${window.location.protocol}//${selectedInstance}${newPathName}${newQuery}${window.location.hash}`;
    } else {
      tempURL = `${window.location.protocol}//${selectedInstance}${window.location.pathname}${window.location.search}${window.location.hash}`;
    }

    if (tempURL.includes("/p/")) {
      displayWarning();
      window.stop();
      let newURL = `${tempURL}`;
      window.location.replace(newURL);
    } else if (tempURL.includes("/reels/")) {
      displayWarning();
      window.stop();
      let newURL = tempURL.replace("/reels/", "/p/");
      window.location.replace(newURL);
    }
  }
}

function redirectTwitter() {
  if (twitter[0] == true) {
    window.stop();

    var selectedInstance = "";
    var newPathName = "";
    var newQuery = "";

    if (twitter[1] == false) {
      selectedInstance =
        nitterInstances[Math.floor(Math.random() * nitterInstances.length)];
    } else {
      selectedInstance = `${farsideInstance}/nitter`;
    }

    if (window.location.pathname.startsWith("/i/flow/login")) {
      newPathName = window.location.pathname.replace("/i/flow/login", "");
      newQuery = window.location.search.replace(
        "?redirect_after_login=%2F",
        "/"
      );
      let newURL = `${window.location.protocol}//${selectedInstance}${newPathName}${newQuery}${window.location.hash}`;
      window.location.replace(newURL);
    } else {
      let newURL = `${window.location.protocol}//${selectedInstance}${window.location.pathname}${window.location.search}${window.location.hash}`;
      window.location.replace(newURL);
    }
  }
}

function redirectReddit() {
  if (reddit[0] == true) {
    window.stop();
    var selectedInstance = "";

    if (reddit[1] == false) {
      selectedInstance = eval(redditFrontend + "Instances")[
        Math.floor(Math.random() * eval(redditFrontend + "Instances.length"))
      ];
    } else {
      selectedInstance = `${farsideInstance}/${redditFrontend}`;
    }

    let newURL = `${window.location.protocol}//${selectedInstance}${window.location.pathname}${window.location.search}${window.location.hash}`;

    window.location.replace(newURL);
  }
}

function redirectYoutube() {
  if (youtube[0] == true) {
    window.stop();
    var selectedInstance = "";

    if (youtube[1] == false) {
      selectedInstance = eval(youtubeFrontend + "Instances")[
        Math.floor(Math.random() * eval(youtubeFrontend + "Instances.length"))
      ];
    } else {
      selectedInstance = `${farsideInstance}/${youtubeFrontend}`;
    }

    let newURL = `${window.location.protocol}//${selectedInstance}${window.location.pathname}${window.location.search}${window.location.hash}`;

    window.location.replace(newURL);
  }
}

function redirectTiktok() {
  if (tiktok[0] == true) {
    window.stop();
    var selectedInstance = "";

    if (tiktok[1] == false) {
      selectedInstance =
        proxitokInstances[Math.floor(Math.random() * proxitokInstances.length)];
    } else {
      selectedInstance = `${farsideInstance}/proxitok`;
    }

    if (window.location.pathname.startsWith("/discover")) {
      let newURL = `${
        window.location.protocol
      }//${selectedInstance}${window.location.pathname.replace(
        "discover",
        "tag"
      )}${window.location.hash}`;

      window.location.replace(newURL);
    } else if (
      window.location.pathname.search(/[a-z][a-z]\-[A-Z][A-Z]/g) != -1
    ) {
      let newURL = `${window.location.protocol}//${selectedInstance}${window.location.pathname}${window.location.search}${window.location.hash}`;

      window.location.replace(newURL);
    } else {
      let newURL = `${window.location.protocol}//${selectedInstance}${window.location.pathname}${window.location.search}${window.location.hash}`;

      window.location.replace(newURL);
    }
  }
}

function redirectImgur() {
  if (imgur[0] == true) {
    window.stop();

    var selectedInstance = "";

    if (imgur[1] == false) {
      selectedInstance =
        rimgoInstances[Math.floor(Math.random() * rimgoInstances.length)];
    } else {
      selectedInstance = `${farsideInstance}/rimgo`;
    }

    let newURL = `${window.location.protocol}//${selectedInstance}${window.location.pathname}${window.location.search}${window.location.hash}`;

    window.location.replace(newURL);
  }
}

function redirectMedium() {
  if (medium[0] == true || window.location.pathname != "/") {
    window.stop();
    var selectedInstance = "";

    if (medium[1] == false) {
      selectedInstance =
        scribeInstances[Math.floor(Math.random() * scribeInstances.length)];
    } else {
      selectedInstance = `${farsideInstance}/scribe`;
    }

    let newURL = `${window.location.protocol}//${selectedInstance}${window.location.pathname}${window.location.search}${window.location.hash}`;

    window.location.replace(newURL);
  }
}

function redirectYoutubeMusic() {
  if (youtube[0] == true) {
    window.stop();

    var beatbumpInstance =
      beatbumpInstances[Math.floor(Math.random() * beatbumpInstances.length)];

    if (window.location.pathname.startsWith("/watch")) {
      if (youtube[1] == false) {
        selectedInstance = eval(youtubeFrontend + "Instances")[
          Math.floor(Math.random() * eval(youtubeFrontend + "Instances.length"))
        ];
      } else {
        selectedInstance = `${farsideInstance}/${youtubeFrontend}`;
      }

      let newURL = `${window.location.protocol}//${selectedInstance}${window.location.pathname}${window.location.search}${window.location.hash}`;

      window.location.replace(newURL);
    } else {
      let newURL = `${window.location.protocol}//${beatbumpInstance}${window.location.pathname}${window.location.search}${window.location.hash}`;
      window.location.replace(newURL);
    }
  }
}

function redirectHackerNews() {
  if (
    hackernews[0] == true &&
    window.location.pathname != "/user" &&
    window.location.pathname != "/item"
  ) {
    window.stop();
    let newURL = `${window.location.protocol}//hn.algolia.com`;
    window.location.replace(newURL);
  }
}

function redirectGTranslate() {
  if (gtranslate[0] == true) {
    window.stop();
    var selectedInstance = "";

    if (gtranslate[1] == false) {
      selectedInstance =
        lingvaInstances[Math.floor(Math.random() * lingvaInstances.length)];
    } else {
      selectedInstance = `${farsideInstance}/lingva`;
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
}

function redirectReuters() {
  if (reuters[0] == true) {
    window.stop();
    location.hostname = "neuters.de";
  }
}

function redirectWikipedia() {
  if (wikipedia[0] == true) {
    window.stop();
    let langCodeIndex = window.location.hostname.search(/^[a-z][a-z]\./);
    var selectedInstance = "";

    if (wikipedia[1] == false) {
      selectedInstance =
        wikilessInstances[Math.floor(Math.random() * wikilessInstances.length)];
    } else {
      selectedInstance = `${farsideInstance}/wikiless`;
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
      let newURL = `${window.location.protocol}//${selectedInstance}${window.location.pathname}?lang=en${window.location.hash}`;
      window.location.replace(newURL);
    }
  }
}

function redirectImdb() {
  if (imdb[0] == true) {
    window.stop();
    var selectedInstance = "";

    if (imdb[1] == false) {
      selectedInstance =
        libremdbInstances[Math.floor(Math.random() * libremdbInstances.length)];
    } else {
      selectedInstance = `${farsideInstance}/libremdb`;
    }

    let newURL = `${window.location.protocol}//${selectedInstance}${window.location.pathname}${window.location.search}${window.location.hash}`;

    window.location.replace(newURL);
  }
}

function redirectQuora() {
  if (quora[0] == true) {
    window.stop();
    var selectedInstance = "";

    if (quora[1] == false) {
      selectedInstance =
        quetreInstances[Math.floor(Math.random() * quetreInstances.length)];
    } else {
      selectedInstance = `${farsideInstance}/quetre`;
    }

    let newURL = `${window.location.protocol}//${selectedInstance}${window.location.pathname}${window.location.search}${window.location.hash}`;

    window.location.replace(newURL);
  }
}

function redirectFandom() {
  if (fandom[0] == true) {
    let randomInstance =
      breezewikiInstances[
        Math.floor(Math.random() * breezewikiInstances.length)
      ];
    let fandomName = window.location.hostname.replace(/\..*/, "");
    let newURL = "";
    window.stop();

    if (fandomName !== "www") {
      newURL = `${window.location.protocol}//${randomInstance}/${fandomName}${window.location.pathname}${window.location.search}${window.location.hash}`;
    } else {
      newURL = `${window.location.protocol}//${randomInstance}`;
    }

    window.location.replace(newURL);
  }
}

function redirectGoogle() {
  if (
    google[0] == true &&
    window.location.hostname.startsWith("www") &&
    window.location.pathname.startsWith("/search")
  ) {
    window.stop();
    var selectedInstance = "";

    if (google[1] == false) {
      selectedInstance = eval(googleFrontend + "Instances")[
        Math.floor(Math.random() * eval(googleFrontend + "Instances.length"))
      ];
    } else {
      selectedInstance = `${farsideInstance}/${googleFrontend}`;
    }

    if (window.location.pathname.match("/")) {
      let newURL = `${window.location.protocol}//${selectedInstance}${window.location.pathname}${window.location.search}${window.location.hash}`;
      window.location.replace(newURL);
    } else {
      let newURL = `${window.location.protocol}//${selectedInstance}${
        window.location.pathname
      }${window.location.search.match(/\?q.+?(?=\&)/)}`;
      window.location.replace(newURL);
    }
  }
}

function redirectGoodreads() {
  if (goodreads[0] == true) {
    window.stop();

    var selectedInstance =
      biblioreadsInstances[
        Math.floor(Math.random() * biblioreadsInstances.length)
      ];

    if (window.location.pathname.startsWith("/search")) {
      let newURL =
        `${window.location.protocol}//${selectedInstance}${window.location.pathname}` +
        window.location.search.replace(/.*.q\=/, "/") +
        `${window.location.hash}`;
      window.location.replace(newURL);
    } else {
      let newURL = `${window.location.protocol}//${selectedInstance}${window.location.pathname}${window.location.search}${window.location.hash}`;
      window.location.replace(newURL);
    }
  }
}

function redirectStackoverflow() {
  if (
    stackoverflow[0] == true &&
    window.location.pathname.startsWith("/questions") &&
    window.location.pathname == "/questions"
  ) {
    window.stop();
    if (stackoverflow[1] == false) {
      selectedInstance =
        anonymousoverflowInstances[
          Math.floor(Math.random() * anonymousoverflowInstances.length)
        ];
    } else {
      selectedInstance = `${farsideInstance}/anonymousoverflow`;
    }

    let newURL = `${window.location.protocol}//${selectedInstance}${window.location.pathname}${window.location.search}${window.location.hash}`;
    window.location.replace(newURL);
  }
}

function redirectBandcamp() {
  if (bandcamp[0] == true) {
    // thanks to libredirect

    var selectedInstance =
      tentInstances[Math.floor(Math.random() * tentInstances.length)];

    if (
      window.location.hostname == "bandcamp.com" &&
      window.location.pathname == "/search"
    ) {
      const query = window.location.searchParams.get("q");
      let newURL = `${
        window.location.protocol
      }//${selectedInstance}/search.php?query=${encodeURIComponent(query)}`;
      window.location.replace(newURL);
    }

    if (window.location.hostname.endsWith("bandcamp.com")) {
      const regex = /^(.*)\.bandcamp\.com/.exec(window.location.hostname);
      const artist = regex[1];
      if (window.location.pathname == "/") {
        let newURL = `${window.location.protocol}//${selectedInstance}/artist.php?name=${artist}`;
        window.location.replace(newURL);
      } else {
        const regex = /^\/(.*)\/(.*)/.exec(window.location.pathname);
        if (regex) {
          const type = regex[1];
          const name = regex[2];
          let newURL = `${window.location.protocol}//${selectedInstance}/release.php?artist=${artist}&type=${type}&name=${name}`;
          window.location.replace(newURL);
        }
      }
    }

    if (window.location.hostname == "f4.bcbits.com") {
      const regex = /\/img\/(.*)/.exec(window.location.pathname);
      const image = regex[1];
      let newURL = `${window.location.protocol}//${selectedInstance}/image.php?file=${image}`;
      window.location.replace(newURL);
    }

    if (window.location.hostname == "t4.bcbits.com") {
      const regex = /\/stream\/(.*)\/(.*)\/(.*)/.exec(window.location.pathname);
      if (regex) {
        const directory = regex[1];
        const format = regex[2];
        const file = regex[3];
        const token = window.location.searchParams.get("token");
        let newURL = `${
          window.location.protocol
        }//${selectedInstance}/audio.php/?directory=${directory}&format=${format}&file=${file}&token=${encodeURIComponent(
          token
        )}`;
        window.location.replace(newURL);
      }
    }
  }
}

function redirectGenius() {
  if (genius[0] == true) {
    switch (geniusFrontend) {
      case "dumb":
        window.stop();
        var selectedInstance =
          dumbInstances[Math.floor(Math.random() * dumbInstances.length)];

        let newURL = `${window.location.protocol}//${selectedInstance}${window.location.pathname}${window.location.search}${window.location.hash}`;
        window.location.replace(newURL);
        break;
      case "intellectual":
        var selectedInstance =
          intellectualInstances[
            Math.floor(Math.random() * intellectualInstances.length)
          ];

        if (window.location.pathname.endsWith("-lyrics")) {
          window.stop();
          selectedInstance = selectedInstance + "/lyrics?path=";
          let newURL = `${window.location.protocol}//${selectedInstance}${window.location.pathname}${window.location.search}${window.location.hash}`;
          window.location.replace(newURL);
        } else if (window.location.pathname.startsWith("/albums")) {
          window.stop();
          let newURL =
            `${window.location.protocol}//${selectedInstance}` +
            `${window.location.pathname}${window.location.search}`.replace(
              "/albums",
              "/album?path=albums"
            ) +
            `${window.location.hash}`;
          window.location.replace(newURL);
        } else if (window.location.pathname.startsWith("/artists")) {
          window.stop();
          let newURL =
            `${window.location.protocol}//${selectedInstance}` +
            `${window.location.pathname}${window.location.search}`.replace(
              "/artists",
              "/artist?path=artists"
            ) +
            `${window.location.hash}`;
          window.location.replace(newURL);
        }
        break;
    }
  }
}

function redirectPinterest() {
  if (pinterest[0] == true) {
    window.stop();

    var selectedInstance =
      binternetInstances[Math.floor(Math.random() * binternetInstances.length)];

    if (window.location.hostname == "i.pinimg.com") {
      let newURL = `${window.location.protocol}//${selectedInstance}/image_proxy.php?url=${window.location.href}`;
      window.location.replace(newURL);
    } else if (window.location.pathname.startsWith("/search")) {
      let newURL =
        `${window.location.protocol}//${selectedInstance}` +
        window.location.pathname
          .replace("search", "search.php")
          .replace("/pins/", "") +
        `${window.location.search}${window.location.hash}`;
      window.location.replace(newURL);
    } else if (window.location.pathname.startsWith("/pin")) {
      return;
    } else {
      let newURL = `${window.location.protocol}//${selectedInstance}/`;
      window.location.replace(newURL);
    }
  }
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
  case "www.youtube-nocookie.com":
    redirectYoutube();
    break;

  case "www.tiktok.com":
    redirectTiktok();
    break;

  case "music.youtube.com":
    if (youtubeMusicFrontend == "beatbump") {
      redirectYoutubeMusic();
    } else {
      redirectYoutube();
    }
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

  case "www.google.com":
    redirectGoogle();
    break;

  case "www.goodreads.com":
    redirectGoodreads();
    break;

  case "genius.com":
    redirectGenius();
    break;

  case "stackoverflow.com":
    redirectStackoverflow();
    break;

  case "f4.bcbits.com":
  case "t4.bcbits.com":
    redirectBandcamp();
    break;

  case "i.pinimg.com":
    redirectPinterest();
    break;

  default:
    if (urlHostname.includes("medium.com")) {
      redirectMedium();
    } else if (urlHostname.includes("imgur.com")) {
      redirectImgur();
    } else if (urlHostname.includes("wikipedia.org")) {
      redirectWikipedia();
    } else if (urlHostname.includes("fandom.com")) {
      redirectFandom();
    } else if (urlHostname.includes("bandcamp.com")) {
      redirectBandcamp();
    } else if (urlHostname.includes("pinterest.com")) {
      redirectPinterest();
    }

    break;
}