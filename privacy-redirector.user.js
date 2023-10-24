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
// @version 1.4.9
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
// @match *://*.soundcloud.com/*
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
let soundcloud = [true, true];
let stackoverflow = [true, true];
let tiktok = [true, true];
let twitter = [true, true];
let wikipedia = [true, true];
let youtube = [true, true];
let instagram = [true, true];

// PREFERRED FRONTEND
let youtubeFrontend = "piped"; // accepts "invidious", "piped", "tubo"
let youtubeMusicFrontend = "beatbump"; // accepts "beatbump", "invidious", "piped"
let redditFrontend = "libreddit"; // accepts "libreddit", "teddit"
let googleFrontend = "searxng"; // accepts "searx", "searxng"
let geniusFrontend = "intellectual"; // accepts dumb, intellectual

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

const anonymousoverflowInstances = [
  "code.whatever.social",
  "ao.vern.cc",
  "overflow.smnz.de",
  "overflow.lunar.icu",
];

const beatbumpInstances = ["beatbump.ml", "bb.eu.projectsegfau.lt"];

const proxigramInstances = [
  "proxigram.privacyfrontends.repl.co",
  "proxigram.protokolla.fi",
  "proxigram.kyun.li",
  "proxigram.drgns.space",
  "ig.opnxng.com",
];

const biblioreadsInstances = [
  "biblioreads.ml",
  "biblioreads.ga",
  "biblioreads.netlify.app",
];

const binternetInstances = [
  "binternet.ahwx.org",
  "binternet.revvy.de",
  "binternet.bloatcat.tk",
  "bn.vern.cc",
  "pinterest.foxhaven.cyou",
];

const breezewikiInstances = [
  "breezewiki.com",
  "breezewiki.pussthecat.org",
  "antifandom.com",
  "bw.hamstro.dev",
];

const dumbInstances = [
  "dm.vern.cc",
  "sing.whatever.social",
  "dumb.lunar.icu",
  "dumb.privacydev.net",
];

const intellectualInstances = ["intellectual.insprill.net"];

const invidiousInstances = [
  "yewtu.be",
  "vid.puffyan.us",
  "yt.artemislena.eu",
  "invidious.projectsegfau.lt",
];

const pipedInstances = [
  "pipedapi.video",
  "pipedapi.tokhmi.xyz",
  "piped.projectsegfau.lt",
  "piped.privacydev.net",
];

const libredditInstances = [
  "libreddit.invak.id",
  "libreddit.de",
  "libreddit.kavin.rocks",
  "libreddit.kutay.dev",
];

const libremdbInstances = [
  "libremdb.pussthecat.org",
  "libremdb.iket.me",
  "libremdb.lunar.icu",
  "binge.whatever.social",
];

const lingvaInstances = [
  "lingva.ml",
  "translate.igna.wtf",
  "translate.plausibility.cloud",
  "translate.projectsegfau.lt",
];

const nitterInstances = [
  "nitter.lacontrevoie.fr",
  "nitter.fdn.fr",
  "nitter.1d4.us",
  "nitter.kavin.rocks",
];

const proxitokInstances = [
  "proxitok.pabloferreiro.es",
  "proxitok.privacydev.net",
  "proxitok.pussthecat.org",
];

const quetreInstances = [
  "quetre.iket.me",
  "quora.vern.cc",
  "quetre.pussthecat.org",
  "quetre.tokhmi.xyz",
];

const rimgoInstances = [
  "rimgo.pussthecat.org",
  "rimgo.totaldarkness.net",
  "rimgo.bus-hit.me",
  "imgur.artemislena.eu",
];

const scribeInstances = [
  "scribe.rip",
  "scribe.nixnet.services",
  "scribe.citizen4.eu",
  "scribe.bus-hit.me",
];

const tedditInstances = [
  "teddit.pussthecat.org",
  "teddit.ggc-project.de",
  "teddit.domain.glass",
  "teddit.zaggy.nl",
];

const tentInstances = ["tent.sny.sh", "tent.bloatcat.tk", "tn.vern.cc"];

const tuboInstances = ["tubo.migalmoreno.com"];

const wikilessInstances = [
  "wikiless.org",
  "wikiless.tiekoetter.com",
  "wikiless.funami.tech",
  "wl.vern.cc",
];

const searxInstances = [
  "search.bus-hit.me",
  "search.projectsegfau.lt",
  "northboot.xyz",
  "opnxng.com",
];

const searxngInstances = [
  "baresearch.org",
  "dynabyte.ca",
  "search.bus-hit.me",
  "search.leptons.xyz",
];

let farsideInstance = keepHistory === true ? "farside.link/_" : "farside.link";

// // // // // // // // // // // // //

const hash = window.location.hash, scheme = `${window.location.protocol}//`;

let debug_mode = false;

if (debug_mode === true) {
  alert(
    "\n== DEBUG MODE IS ON ==" +
      "\nIf you're seeing this" +
      "\nset the debug_mode value to" +
      "\nfalse for Privacy Redirector." +
      "\n======================" +
      "\n\nHostname: " +
      window.location.hostname +
      "\nPath: " +
      window.location.pathname +
      "\nQuery: " +
      window.location.search +
      "\nHash: " +
      hash
  );
}

let selectedInstance = "", newURL = "";

const getrandom = async(instances) => instances[Math.floor(Math.random() * instances.length)];

async function redirectInstagram() {
  if (instagram[0] === true) {
    let newPathName = "";
    let newQuery = "";
    let tempURL = "";

    selectedInstance = await getrandom(proxigramInstances);

    if (window.location.pathname.startsWith("/accounts/login/")) {
      newPathName = window.location.pathname.replace("/accounts/login/", "");
      newQuery = window.location.search.replace("?next=", "");
      tempURL = `${scheme}${selectedInstance}${newPathName}${newQuery}${hash}`;
    } else {
      tempURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;
    }

    if (tempURL.includes("/p/")) {
      window.stop();
      newURL = `${tempURL}`;
      window.location.replace(newURL);
    } else if (tempURL.includes("/reels/")) {
      window.stop();
      newURL = tempURL.replace("/reels/", "/p/");
      window.location.replace(newURL);
    } else {
      window.stop();
      newURL = `${tempURL}`;
      window.location.replace(newURL);
    }
  }
}

async function redirectTwitter() {
  if (twitter[0] === true) {
    window.stop();

    let newPathName = "";
    let newQuery = "";

    if (twitter[1] === false) {
      selectedInstance = await getrandom(nitterInstances);
    } else {
      selectedInstance = `${farsideInstance}/nitter`;
    }

    if (window.location.pathname.startsWith("/i/flow/login")) {
      newPathName = window.location.pathname.replace("/i/flow/login", "");
      newQuery = window.location.search.replace(
        "?redirect_after_login=%2F",
        "/"
      );
      newURL = `${scheme}${selectedInstance}${newPathName}${newQuery}${hash}`;
      window.location.replace(newURL);
    } else {
      newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;
      window.location.replace(newURL);
    }
  }
}

async function redirectReddit() {
  if (reddit[0] === true) {
    window.stop();

    if (reddit[1] === false) {
      selectedInstance = await getrandom(eval(redditFrontend + "Instances"));
    } else {
      selectedInstance = `${farsideInstance}/${redditFrontend}`;
    }

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;

    window.location.replace(newURL);
  }
}

async function redirectYoutube() {
  if (youtube[0] === true) {
    window.stop();

    if (youtubeFrontend !== "tubo") {
      if (youtube[1] === false) {
        selectedInstance = await getrandom(eval(youtubeFrontend + "Instances"));
      } else {
        selectedInstance = `${farsideInstance}/${youtubeFrontend}`;
      }

      newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;

      window.location.replace(newURL);
    } else {
      selectedInstance = await getrandom(tuboInstances);

      if (
        window.location.pathname.startsWith("/@") ||
        window.location.pathname.startsWith("/channel")
      ) {
        newURL = `${scheme}${selectedInstance}/channel?url=${window.location.href}`;
        window.location.replace(newURL);
      } else {
        newURL = `${scheme}${selectedInstance}/stream?url=${window.location.href}`;
        window.location.replace(newURL);
      }
    }
  }
}

async function redirectTiktok() {
  if (tiktok[0] === true) {
    window.stop();

    if (tiktok[1] === false) {
      selectedInstance = await getrandom(proxitokInstances);
    } else {
      selectedInstance = `${farsideInstance}/proxitok`;
    }

    if (window.location.pathname.startsWith("/discover")) {
      newURL = `${scheme}${selectedInstance}${window.location.pathname.replace(
        "discover",
        "tag"
      )}${hash}`;

      window.location.replace(newURL);
    } else if (
      window.location.pathname.search(/[a-z][a-z]\-[A-Z][A-Z]/g) !== -1
    ) {
      newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;

      window.location.replace(newURL);
    } else {
      newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;

      window.location.replace(newURL);
    }
  }
}

async function redirectImgur() {
  if (imgur[0] === true) {
    window.stop();

    if (imgur[1] === false) {
      selectedInstance = await getrandom(rimgoInstances);
    } else {
      selectedInstance = `${farsideInstance}/rimgo`;
    }

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;

    window.location.replace(newURL);
  }
}

async function redirectMedium() {
  if (medium[0] === true || window.location.pathname !== "/") {
    window.stop();

    if (medium[1] === false) {
      selectedInstance = await getrandom(scribeInstances);
    } else {
      selectedInstance = `${farsideInstance}/scribe`;
    }

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;

    window.location.replace(newURL);
  }
}

async function redirectYoutubeMusic() {
  if (youtube[0] === true) {
    window.stop();

    let beatbumpInstance = await getrandom(beatbumpInstances);

    if (window.location.pathname.startsWith("/watch")) {
      if (youtube[1] === false) {
        selectedInstance = await getrandom(eval(youtubeFrontend + "Instances"));
      } else {
        selectedInstance = `${farsideInstance}/${youtubeFrontend}`;
      }

      newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;

      window.location.replace(newURL);
    } else {
      newURL = `${scheme}${beatbumpInstance}${window.location.pathname}${window.location.search}${hash}`;
      window.location.replace(newURL);
    }
  }
}

async function redirectHackerNews() {
  if (
    hackernews[0] === true &&
    window.location.pathname !== "/user" &&
    window.location.pathname !== "/item"
  ) {
    window.stop();
    newURL = `${scheme}hn.algolia.com`;
    window.location.replace(newURL);
  }
}

async function redirectGTranslate() {
  if (gtranslate[0] === true) {
    window.stop();

    if (gtranslate[1] === false) {
      selectedInstance = await getrandom(lingvaInstances);
    } else {
      selectedInstance = `${farsideInstance}/lingva`;
    }

    if (window.location.search !== "") {
      newURL =
        scheme +
        selectedInstance +
        window.location.pathname +
        window.location.search
          .replace(/\?hl=tr/, "")
          .replace(/.sl=/, "")
          .replace("&tl=", "/")
          .replace("&text=", "/")
          .replace("&op=translate", "") +
        hash;

      window.location.replace(newURL);
    } else {
      newURL = scheme + selectedInstance;
      window.location.replace(newURL);
    }
  }
}

async function redirectReuters() {
  if (reuters[0] === true) {
    window.stop();
    location.hostname = "neuters.de";
  }
}

async function redirectWikipedia() {
  if (wikipedia[0] === true) {
    window.stop();
    const langCodeIndex = window.location.hostname.search(/^[a-z][a-z]\./);

    if (wikipedia[1] === false) {
      selectedInstance = await getrandom(wikilessInstances);
    } else {
      selectedInstance = `${farsideInstance}/wikiless`;
    }

    if (langCodeIndex !== -1) {
      newURL =
        scheme +
        selectedInstance +
        window.location.pathname +
        "?lang=" +
        window.location.hostname[langCodeIndex] +
        window.location.hostname[langCodeIndex + 1] +
        hash;
      window.location.replace(newURL);
    } else {
      newURL = `${scheme}${selectedInstance}${window.location.pathname}?lang=en${hash}`;
      window.location.replace(newURL);
    }
  }
}

async function redirectImdb() {
  if (imdb[0] === true) {
    window.stop();

    if (imdb[1] === false) {
      selectedInstance = await getrandom(libremdbInstances);
    } else {
      selectedInstance = `${farsideInstance}/libremdb`;
    }

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;

    window.location.replace(newURL);
  }
}

async function redirectQuora() {
  if (quora[0] === true) {
    window.stop();

    if (quora[1] === false) {
      selectedInstance = await getrandom(quetreInstances);
    } else {
      selectedInstance = `${farsideInstance}/quetre`;
    }

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;

    window.location.replace(newURL);
  }
}

async function redirectFandom() {
  if (fandom[0] === true) {
    let randomInstance = await getrandom(breezewikiInstances);
    const fandomName = window.location.hostname.replace(/\..*/, "");
    window.stop();

    if (fandomName !== "www") {
      newURL = `${scheme}${randomInstance}/${fandomName}${window.location.pathname}${window.location.search}${hash}`;
    } else {
      newURL = `${scheme}${randomInstance}`;
    }

    window.location.replace(newURL);
  }
}

async function redirectGoogle() {
  if (
    google[0] === true &&
    window.location.hostname.startsWith("www") &&
    window.location.pathname.startsWith("/search")
  ) {
    window.stop();

    if (google[1] === false) {
      selectedInstance = await getrandom(eval(googleFrontend + "Instances"));
    } else {
      selectedInstance = `${farsideInstance}/${googleFrontend}`;
    }

    if (window.location.pathname.match("/")) {
      newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;
      window.location.replace(newURL);
    } else {
      newURL = `${scheme}${selectedInstance}${
        window.location.pathname
      }${window.location.search.match(/\?q.+?(?=\&)/)}`;
      window.location.replace(newURL);
    }
  }
}

async function redirectGoodreads() {
  if (goodreads[0] === true) {
    window.stop();

    selectedInstance = await getrandom(biblioreadsInstances);

    if (window.location.pathname.startsWith("/search")) {
      newURL =
        `${scheme}${selectedInstance}${window.location.pathname}` +
        window.location.search.replace(/.*.q\=/, "/") +
        `${hash}`;
      window.location.replace(newURL);
    } else {
      newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;
      window.location.replace(newURL);
    }
  }
}

async function redirectStackoverflow() {
  if (
    stackoverflow[0] === true &&
    window.location.pathname.startsWith("/questions")
  ) {
    window.stop();
    if (stackoverflow[1] === false) {
      selectedInstance = await getrandom(anonymousoverflowInstances);
    } else {
      selectedInstance = `${farsideInstance}/anonymousoverflow`;
    }

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;
    window.location.replace(newURL);
  }
}

async function redirectBandcamp() {
  if (bandcamp[0] === true) {
    // thanks to libredirect

    selectedInstance = await getrandom(tentInstances);

    if (
      window.location.hostname === "bandcamp.com" &&
      window.location.pathname === "/search"
    ) {
      const query = window.location.searchParams.get("q");
      newURL = `${scheme}${selectedInstance}/search.php?query=${encodeURIComponent(query)}`;
      window.location.replace(newURL);
    }

    if (window.location.hostname.endsWith("bandcamp.com")) {
      const regex = /^(.*)\.bandcamp\.com/.exec(window.location.hostname);
      const artist = regex[1];
      if (window.location.pathname === "/") {
        newURL = `${scheme}${selectedInstance}/artist.php?name=${artist}`;
        window.location.replace(newURL);
      } else {
        const regex = /^\/(.*)\/(.*)/.exec(window.location.pathname);
        if (regex) {
          const type = regex[1];
          const name = regex[2];
          newURL = `${scheme}${selectedInstance}/release.php?artist=${artist}&type=${type}&name=${name}`;
          window.location.replace(newURL);
        }
      }
    }

    if (window.location.hostname === "f4.bcbits.com") {
      const regex = /\/img\/(.*)/.exec(window.location.pathname);
      const image = regex[1];
      newURL = `${scheme}${selectedInstance}/image.php?file=${image}`;
      window.location.replace(newURL);
    }

    if (window.location.hostname === "t4.bcbits.com") {
      const regex = /\/stream\/(.*)\/(.*)\/(.*)/.exec(window.location.pathname);
      if (regex) {
        const directory = regex[1];
        const format = regex[2];
        const file = regex[3];
        const token = window.location.searchParams.get("token");
        newURL = `${scheme}${selectedInstance}/audio.php/?directory=${directory}&format=${format}&file=${file}&token=${encodeURIComponent(
          token
        )}`;
        window.location.replace(newURL);
      }
    }
  }
}

async function redirectGenius() {
  if (genius[0] === true) {
    switch (geniusFrontend) {
      case "dumb":
        window.stop();
        selectedInstance = await getrandom(dumbInstances);

        newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;
        window.location.replace(newURL);
        break;
      case "intellectual":
        selectedInstance = await getrandom(intellectualInstances);

        if (window.location.pathname.endsWith("-lyrics")) {
          window.stop();
          selectedInstance = selectedInstance + "/lyrics?path=";
          newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;
          window.location.replace(newURL);
        } else if (window.location.pathname.startsWith("/albums")) {
          window.stop();
          newURL =
            `${scheme}${selectedInstance}` +
            `${window.location.pathname}${window.location.search}`.replace(
              "/albums",
              "/album?path=albums"
            ) +
            `${hash}`;
          window.location.replace(newURL);
        } else if (window.location.pathname.startsWith("/artists")) {
          window.stop();
          newURL =
            `${scheme}${selectedInstance}` +
            `${window.location.pathname}${window.location.search}`.replace(
              "/artists",
              "/artist?path=artists"
            ) +
            `${hash}`;
          window.location.replace(newURL);
        }
        break;
    }
  }
}

async function redirectPinterest() {
  if (pinterest[0] === true) {
    window.stop();

    selectedInstance = await getrandom(binternetInstances);

    if (window.location.hostname === "i.pinimg.com") {
      newURL = `${scheme}${selectedInstance}/image_proxy.php?url=${window.location.href}`;
      window.location.replace(newURL);
    } else if (window.location.pathname.startsWith("/search")) {
      newURL =
        `${scheme}${selectedInstance}` +
        window.location.pathname
          .replace("search", "search.php")
          .replace("/pins/", "") +
        `${window.location.search}${hash}`;
      window.location.replace(newURL);
    } else if (window.location.pathname.startsWith("/pin")) {
      return;
    } else {
      newURL = `${scheme}${selectedInstance}/`;
      window.location.replace(newURL);
    }
  }
}

async function redirectSoundcloud() {
  if (soundcloud[0] === true) {
    window.stop();
    selectedInstance = await getrandom(tuboInstances);

    if (window.location.pathname !== "/") {
      newURL = `${scheme}${selectedInstance}/stream?url=${window.location.href}`;
      window.location.replace(newURL);
    } else {
      newURL = `${scheme}${selectedInstance}/kiosk?serviceId=1`;
      window.location.replace(newURL);
    }
  }
}

const urlHostname = window.location.hostname;

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
    if (youtubeMusicFrontend === "beatbump") {
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
  case "m.imdb.com":
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

  case "soundcloud.com":
    redirectSoundcloud();
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
