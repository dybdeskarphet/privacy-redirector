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
// @match *://*.imgur.io/*
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
// @exclude *://*.youtube.com/redirect*
// @exclude *://youtube.com/redirect*
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
let google = [true, false];
let gtranslate = [true, true];
let hackernews = [true, true];
let imdb = [true, true];
let imgur = [true, false];
let medium = [true, true];
let pinterest = [true, true];
let quora = [true, false];
let reddit = [true, false];
let reuters = [true, true];
let soundcloud = [true, true];
let stackoverflow = [true, true];
let tiktok = [true, false];
let twitter = [true, true];
let wikipedia = [true, false];
let youtube = [true, false];
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

const Instances = {
  anonymousoverflow: [
    "code.whatever.social",
    "overflow.smnz.de",
    "overflow.lunar.icu",
    "overflow.adminforge.de",
    "overflow.hostux.net",
    "overflow.projectsegfau.lt",
    "code.whateveritworks.org",
    "ao.bloatcat.tk",
    "anonoverflow.frontendfriendly.xyz",
    "ao.owo.si",
    "overflow.datura.network",
    "ao.ftw.lol",
    "anonoverflow.hyperreal.coffee",
    "overflow.sudovanilla.com",
  ],
  beatbump: ["beatbump.ml", "bb.eu.projectsegfau.lt"],
  proxigram: [
    "proxigram.privacyfrontends.repl.co",
    "proxigram.protokolla.fi",
    "proxigram.kyun.li",
    "proxigram.drgns.space",
    "ig.opnxng.com",
  ],
  biblioreads: [
    "biblioreads.eu.org",
    "biblioreads.vercel.app",
    "biblioreads.lunar.icu",
    "read.whateveritworks.org",
    "biblioreads.privacyfucking.rocks",
    "read.seitan-ayoub.lol",
  ],
  binternet: [
    "binternet.ahwx.org",
    "binternet.revvy.de",
    "binternet.bloatcat.tk",
    "bn.opnxng.com",
  ],
  breezewiki: [
    "breezewiki.com",
    "antifandom.com",
    "breezewiki.pussthecat.org",
    "bw.hamstro.dev",
    "bw.projectsegfau.lt",
    "breeze.hostux.net",
    "bw.artemislena.eu",
    "nerd.whatever.social",
    "breezewiki.frontendfriendly.xyz",
    "breeze.nohost.network",
    "breeze.whateveritworks.org",
    "z.opnxng.com",
    "breezewiki.hyperreal.coffee",
    "breezewiki.catsarch.com",
    "breeze.mint.lgbt",
    "breezewiki.woodland.cafe",
  ],
  dumb: [
    "sing.whatever.social",
    "dumb.lunar.icu",
    "dumb.privacydev.net",
  ],
  intellectual: [
    "intellectual.insprill.net",
    "in.bloatcat.tk",
    "intellectual.privacyfucking.rocks",
  ],
  invidious: [
    "yewtu.be",
    "vid.puffyan.us",
    "yt.artemislena.eu",
    "invidious.flokinet.to",
    "invidious.projectsegfau.lt",
    "invidious.slipfox.xyz",
    "invidious.privacydev.net",
    "vid.priv.au",
    "iv.ggtyler.dev",
    "invidious.lunar.icu",
    "inv.zzls.xyz",
    "inv.tux.pizza",
    "invidious.protokolla.fi",
    "proxied.invidious.fi",
    "onion.tube",
    "inv.citw.lgbt",
    "yt.oelrichsgarcia.de",
    "invidious.no-logs.com",
    "invidious.io.lol",
    "iv.nboeck.de",
    "invidious.asir.dev",
    "iv.datura.network",
    "invidious.fdn.fr",
    "anontube.lvkaszus.pl",
    "invidious.perennialte.ch",
    "yt.cdaut.de",
    "invidious.drgns.space",
  ],
  piped: [
    "piped.video",
    "cf.piped.video",
    "fl.piped.video",
    "do.piped.video",
    "az.piped.video",
    "piped.syncpundit.io",
    "piped.mha.fi",
    "piped.lunar.icu",
    "piped.rafo.tech",
    "il.ax",
    "piped.projectsegfau.lt",
    "watch.whatever.social",
    "piped.privacydev.net",
    "piped.smnz.de",
    "piped.adminforge.de",
    "piped.hostux.net",
    "piped.yt",
    "piped.astartes.nl",
    "piped.osphost.fi",
    "piped.drgns.space",
    "pi.ggtyler.dev",
    "piped.seitan-ayoub.lol",
    "piped.12a.app",
  ],
  libreddit: [
    "libreddit.kavin.rocks",
    "libreddit.strongthany.cc",
    "libreddit.northboot.xyz",
    "libreddit.hu",
    "libreddit.kylrth.com",
    "libreddit.tiekoetter.com",
    "l.opnxng.com",
    "libreddit.privacydev.net",
    "libreddit.oxymagnesium.com",
    "libreddit.freedit.eu",
    "libreddit.mha.fi",
    "lr.artemislena.eu",
    "lr.aeong.one",
    "libreddit.lunar.icu",
    "snoo.habedieeh.re",
    "libreddit.kutay.dev",
    "libreddit.tux.pizza",
  ],
  libremdb: [
    "libremdb.iket.me",
    "libremdb.pussthecat.org",
    "binge.whatever.social",
    "libremdb.lunar.icu",
    "libremdb.jeikobu.net",
    "binge.whateveritworks.org",
    "libremdb.nerdyfam.tech",
    "libremdb.tux.pizza",
    "libremdb.frontendfriendly.xyz",
    "d.opnxng.com",
  ],
  lingva: [
    "lingva.frontendfriendly.xyz",
    "lingva.retiolus.net",
    "translate.plausibility.cloud",
    "lingva.lunar.icu",
  ],
  nitter: [
    "nitter.net",
    "nitter:nitter@nitter.nixnet.services",
    "nitter.unixfox.eu",
    "nitter.mint.lgbt",
    "nitter.esmailelbob.xyz",
    "nitter.poast.org",
    "nitter.cz",
    "nitter.projectsegfau.lt",
    "nitter.soopy.moe",
    "nitter.d420.de",
    "nitter.nohost.network",
    "nitter.x86-64-unknown-linux-gnu.zip",
    "nitter.woodland.cafe",
    "nitter.dafriser.be",
    "nitter.perennialte.ch",
    "nitter.salastil.com",
    "n.populas.no",
    "nitter.uni-sonia.com",
    "n.opnxng.com",
    "nitter.ktachibana.party",
  ],
  proxitok: [
    "proxitok.pabloferreiro.es",
    "proxitok.pussthecat.org",
    "tok.habedieeh.re",
    "tok.adminforge.de",
    "tik.hostux.net",
    "cringe.whatever.social",
    "cringe.whateveritworks.org",
    "cringe.datura.network",
    "tt.opnxng.com",
    "proxitok.tinfoil-hat.net",
    "tiktok.wpme.pl",
  ],
  quetre: [
    "quetre.iket.me",
    "quetre.privacydev.net",
    "questions.whateveritworks.org",
    "quetre.frontendfriendly.xyz",
    "q.opnxng.com",
    "quetre.ftw.lol",
    "quora.seitan-ayoub.lol",
    "ask.sudovanilla.com",
    "quetre.drgns.space",
  ],
  rimgo: [
    "imgur.artemislena.eu",
    "ri.zzls.xyz",
    "rimgo.lunar.icu",
    "rimgo.kling.gg",
    "rimgo.projectsegfau.lt",
    "rimgo.nohost.network",
    "rimgo.drgns.space",
    "rimgo.quantenzitrone.eu",
  ],
  scribe: [
    "scribe.rip",
    "scribe.citizen4.eu",
    "scribe.bus-hit.me",
    "scribe.rawbit.ninja",
    "m.opnxng.com",
  ],
  teddit: [
    "i.opnxng.com",
    "reddit.lol",
    "teddit.bus-hit.me",
    "teddit.hostux.net",
    "teddit.net",
    "teddit.no-logs.com",
    "teddit.projectsegfau.lt",
    "teddit.pussthecat.org",
    "teddit.zaggy.nl",
  ],
  tent: ["tent.sny.sh", "tent.bloatcat.tk"],
  tubo: ["tubo.migalmoreno.com"],
  wikiless: [
    "wikiless.tiekoetter.com",
    "wikiless.funami.tech",
    "wikiless.rawbit.ninja",
    "wiki.adminforge.de",
    "wikiless.rafo.tech",
    "wiki.seitan-ayoub.lol",
    "wikiless.ftw.lol",
    "wl.ftw.lol",
  ],
  searx: [
    "search.bus-hit.me",
    "search.projectsegfau.lt",
    "northboot.xyz",
    "opnxng.com",
  ],
  searxng: [
    "search.sapti.me",
    "priv.au",
    "www.gruble.de",
    "search.lvkaszus.pl",
    "searx.divided-by-zero.eu",
    "searx.perennialte.ch",
    "search.mdosch.de",
    "searx.kutay.dev",
    "searx.si",
    "searx.namejeff.xyz",
    "search.whateveritworks.org",
    "searx.work",
    "search.smnz.de",
    "searx.prvcy.eu",
    "searx.headpat.exchange",
  ],
};

let farsideInstance = keepHistory === true ? "farside.link/_" : "farside.link";

// // // // // // // // // // // // //

const hash = window.location.hash, scheme = `${window.location.protocol}//`;

let debug_mode = false;

if (debug_mode) {
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
  if (instagram[0]) {
    window.stop();
    let pathname = window.location.pathname;
    let search = window.location.search;
    let params = new URLSearchParams(search);

    selectedInstance = await getrandom(Instances.proxigram);

    switch (true) {
      case pathname.startsWith("/accounts/login/"):
      case pathname.startsWith("/accounts/signup/"):
        pathname = pathname.replace(/^\/accounts\/(login|signup)\/[a-z]*/, "");
        params.delete("next");
        search = params.size ? `?${params}` : "";
        break;
      case pathname.startsWith("/reel/"):
      case pathname.startsWith("/tv/"):
        pathname = pathname.replace(/^\/(reel|tv)\//, "/p/");
        break;
      case pathname.endsWith("/reels/"):
        pathname = pathname.replace("/reels", "");
        break;
    }
    newURL = `${scheme}${selectedInstance}${pathname}${search}${hash}`;
    window.location.replace(newURL);
  }
}

async function redirectTwitter() {
  if (twitter[0]) {
    window.stop();

    let newPathName = "";
    let newQuery = "";

    selectedInstance = twitter[1] ? `${farsideInstance}/nitter` : await getrandom(Instances.nitter);

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;
    if (window.location.pathname.startsWith("/i/flow/login")) {
      newPathName = window.location.pathname.replace("/i/flow/login", "");
      newQuery = window.location.search.replace(
        "?redirect_after_login=%2F",
        "/"
      );
      newURL = `${scheme}${selectedInstance}${newPathName}${newQuery}${hash}`;
    }
    window.location.replace(newURL);
  }
}

async function redirectReddit() {
  if (reddit[0] && !window.location.pathname.startsWith("/domain")) {
    window.stop();

    selectedInstance = reddit[1] ? `${farsideInstance}/${redditFrontend}` : await getrandom(Instances[redditFrontend]);

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;

    window.location.replace(newURL);
  }
}

async function redirectYoutube() {
  if (youtube[0]) {
    window.stop();

    if (youtubeFrontend !== "tubo") {
      selectedInstance = youtube[1] ?
        `${farsideInstance}/${youtubeFrontend}` :
        await getrandom(Instances[youtubeFrontend]);

      newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;

      window.location.replace(newURL);
    } else {
      selectedInstance = await getrandom(Instances.tubo);

      newURL = `${scheme}${selectedInstance}/stream?url=${window.location.href}`;
      if (
        window.location.pathname.startsWith("/@") ||
        window.location.pathname.startsWith("/channel")
      ) {
        newURL = `${scheme}${selectedInstance}/channel?url=${window.location.href}`;
      }
      window.location.replace(newURL);
    }
  }
}

async function redirectTiktok() {
  if (tiktok[0]) {
    window.stop();
    let pathname = window.location.pathname;
    selectedInstance = tiktok[1] ? `${farsideInstance}/proxitok` : await getrandom(Instances.proxitok);

    if (pathname.startsWith("/foryou")) {
      pathname = pathname.replace("/foryou", "/trending");
    } else if (pathname.startsWith("/discover/")) {
      pathname = pathname.replace("discover", "tag");
    }
    newURL = `${scheme}${selectedInstance}${pathname}${window.location.search}${hash}`;
    window.location.replace(newURL);
  }
}

async function redirectImgur() {
  if (imgur[0]) {
    window.stop();

    selectedInstance = imgur[1] ? `${farsideInstance}/rimgo` : await getrandom(Instances.rimgo);

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;

    window.location.replace(newURL);
  }
}

async function redirectMedium() {
  if (medium[0]) {
    window.stop();

    selectedInstance = medium[1] ? `${farsideInstance}/scribe` : await getrandom(Instances.scribe);

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;

    window.location.replace(newURL);
  }
}

async function redirectYoutubeMusic() {
  if (youtube[0]) {
    window.stop();

    let beatbumpInstance = await getrandom(Instances.beatbump);
    newURL = `${scheme}${beatbumpInstance}${window.location.pathname}${window.location.search}${hash}`;

    if (window.location.pathname.startsWith("/watch")) {
      selectedInstance = youtube[1] ? `${farsideInstance}/${youtubeFrontend}` : await getrandom(Instances[youtubeFrontend]);

      newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;
    }
    window.location.replace(newURL);
  }
}

async function redirectHackerNews() {
  if (
    hackernews[0] &&
    window.location.pathname !== "/user" &&
    window.location.pathname !== "/item"
  ) {
    window.stop();
    newURL = `${scheme}hn.algolia.com`;
    window.location.replace(newURL);
  }
}

async function redirectGTranslate() {
  if (gtranslate[0]) {
    window.stop();

    selectedInstance = gtranslate[1] ? `${farsideInstance}/lingva` : await getrandom(Instances.lingva);

    newURL = `${scheme}${selectedInstance}`;
    if (window.location.search) {
      const params = new URLSearchParams(window.location.search);
      newURL += `/${params.get("sl")}/${params.get("tl")}/${params.get("text")}`;
    } else if (/^\/\w+\/\w+\/.*/.test(window.location.pathname)) {
      newURL += window.location.pathname.replace(/\+/g, " ");
    }
    window.location.replace(newURL);
  }
}

async function redirectReuters() {
  if (reuters[0]) {
    window.stop();
    location.hostname = "neuters.de";
  }
}

async function redirectWikipedia() {
  if (wikipedia[0]) {
    window.stop();
    let langCode = /^([a-z\-]+)\./.exec(window.location.hostname)[1];

    selectedInstance = wikipedia[1] ? `${farsideInstance}/wikiless` : await getrandom(Instances.wikiless);

    if (langCode === "www") langCode = "en";
    newURL = `${scheme}${selectedInstance}${window.location.pathname}?lang=${langCode}${hash}`;
    window.location.replace(newURL);
  }
}

async function redirectImdb() {
  if (imdb[0]) {
    window.stop();

    selectedInstance = imdb[1] ? `${farsideInstance}/libremdb` : await getrandom(Instances.libremdb);

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;

    window.location.replace(newURL);
  }
}

async function redirectQuora() {
  if (quora[0]) {
    window.stop();

    selectedInstance = quora[1] ? `${farsideInstance}/quetre` : await getrandom(Instances.quetre);

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;

    window.location.replace(newURL);
  }
}

async function redirectFandom() {
  if (fandom[0]) {
    selectedInstance = await getrandom(Instances.breezewiki);
    const fandomName = window.location.hostname.replace(/\..*/, "");
    window.stop();

    newURL = `${scheme}${selectedInstance}`;
    if (fandomName !== "www") {
      newURL = `${scheme}${selectedInstance}/${fandomName}${window.location.pathname}${window.location.search}${hash}`;
    }

    window.location.replace(newURL);
  }
}

async function redirectGoogle() {
  if (
    google[0] &&
    window.location.hostname.startsWith("www") &&
    window.location.pathname.startsWith("/search")
  ) {
    window.stop();

    selectedInstance = google[1] ? `${farsideInstance}/${googleFrontend}` : selectedInstance = await getrandom(Instances[googleFrontend]);

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
  if (goodreads[0]) {
    window.stop();

    selectedInstance = await getrandom(Instances.biblioreads);

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;
    if (window.location.pathname.startsWith("/search")) {
      newURL =
        `${scheme}${selectedInstance}${window.location.pathname}` +
        window.location.search.replace(/.*.q\=/, "/") +
        `${hash}`;
    }
    window.location.replace(newURL);
  }
}

async function redirectStackoverflow() {
  if (
    stackoverflow[0] &&
    window.location.pathname.startsWith("/questions")
  ) {
    window.stop();
    selectedInstance = stackoverflow[1] ? `${farsideInstance}/anonymousoverflow` : await getrandom(Instances.anonymousoverflow);

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;
    window.location.replace(newURL);
  }
}

async function redirectBandcamp() {
  if (bandcamp[0]) {
    // thanks to libredirect

    selectedInstance = await getrandom(Instances.tent);

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
  if (genius[0]) {
    selectedInstance = await getrandom(Instances[geniusFrontend]);
    switch (geniusFrontend) {
      case "dumb":
        window.stop();

        newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;
        window.location.replace(newURL);
        break;
      case "intellectual":

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
  if (pinterest[0]) {
    window.stop();

    selectedInstance = await getrandom(Instances.binternet);

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
  if (soundcloud[0]) {
    window.stop();
    selectedInstance = await getrandom(Instances.tubo);

    newURL = `${scheme}${selectedInstance}/kiosk?serviceId=1`;
    if (window.location.pathname !== "/") {
      newURL = `${scheme}${selectedInstance}/stream?url=${window.location.href}`;
    }
    window.location.replace(newURL);
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

  case urlHostname.includes("reddit.com") ? urlHostname : 0:
    redirectReddit();
    break;

  case urlHostname.includes("medium.com") ? urlHostname : 0:
    redirectMedium();
    break;

  case urlHostname.includes("imgur.com") ? urlHostname : 0:
  case urlHostname.includes("imgur.io") ? urlHostname : 0:
    redirectImgur();
    break;

  case urlHostname.includes("wikipedia.org") ? urlHostname : 0:
    redirectWikipedia();
    break;

  case urlHostname.includes("fandom.com") ? urlHostname : 0:
    redirectFandom();
    break;

  case urlHostname.includes("bandcamp.com") ? urlHostname : 0:
    redirectBandcamp();
    break;

  case urlHostname.includes("pinterest.com") ? urlHostname : 0:
    redirectPinterest();
    break;
}
