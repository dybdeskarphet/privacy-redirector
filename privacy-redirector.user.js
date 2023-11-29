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
// @version 1.5.3
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
let google = [true, true];
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
let youtubeMusicFrontend = "hyperpipe"; // accepts "hyperpipe", "invidious", "piped"
let redditFrontend = "libreddit"; // accepts "libreddit", "teddit"
let googleFrontend = "librey"; // accepts "librey", "searx", "searxng"
let geniusFrontend = "intellectual"; // accepts dumb, intellectual
let mediumFrontend = "scribe"; // accepts libmedium, scribe
let hackernewsFrontend = "better"; // accepts better, worker

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
    "overflow.r4fo.com",
    "overflow.hostux.net",
    "overflow.projectsegfau.lt",
    "ao.bloatcat.tk",
    "anonoverflow.frontendfriendly.xyz",
    "ao.owo.si",
    "overflow.datura.network",
    "ao.ftw.lol",
    "anonoverflow.hyperreal.coffee",
    "overflow.sudovanilla.com",
  ],
  hyperpipe: [
    "hyperpipe.surge.sh",
    "hyperpipe.esmailelbob.xyz",
    "music.adminforge.de",
    "music.pfcd.me",
    "hyperpipe.drgns.space",
    "hyperpipe.projectsegfau.lt",
    "hp.ggtyler.dev",
    "hyperpipe.lunar.icu",
  ],
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
    "biblioreads.mooo.com",
    "biblioreads.lunar.icu",
    "biblioreads.privacyfucking.rocks",
    "read.seitan-ayoub.lol",
  ],
  binternet: [
    "binternet.ahwx.org",
    "binternet.revvy.de",
    "binternet.bloatcat.tk",
    "bn.opnxng.com",
    "binternet.privacyfucking.rocks",
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
    "z.opnxng.com",
    "breezewiki.hyperreal.coffee",
    "breezewiki.catsarch.com",
    "breeze.mint.lgbt",
    "breezewiki.woodland.cafe",
  ],
  dumb: ["sing.whatever.social", "dumb.lunar.icu", "dumb.privacydev.net"],
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
    "invidious.private.coffee",
    "invidious.asir.dev",
    "iv.datura.network",
    "invidious.fdn.fr",
    "anontube.lvkaszus.pl",
    "invidious.perennialte.ch",
    "yt.cdaut.de",
    "invidious.drgns.space",
    "invidious.einfachzocken.eu",
  ],
  piped: [
    "piped.video",
    "cf.piped.video",
    "fl.piped.video",
    "do.piped.video",
    "piped.syncpundit.io",
    "piped.mha.fi",
    "watch.leptons.xyz",
    "piped.lunar.icu",
    "piped.r4fo.com",
    "piped.game.yt",
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
  libmedium: [
    "libmedium.batsense.net",
    "medium.hostux.net",
    "libmedium.privacyfucking.rocks",
    "libmedium.frontendfriendly.xyz",
    "libmedium.esmailelbob.xyz",
  ],
  libreddit: [
    "redditor.fly.dev",
    "libreddit.kavin.rocks",
    "libreddit.strongthany.cc",
    "libreddit.northboot.xyz",
    "libreddit.hu",
    "libreddit.kylrth.com",
    "libreddit.tiekoetter.com",
    "l.opnxng.com",
    "libreddit.projectsegfau.lt",
    "libreddit.privacydev.net",
    "discuss.whatever.social",
    "libreddit.frontendfriendly.xyz",
    "libreddit.oxymagnesium.com",
    "libreddit.freedit.eu",
    "libreddit.mha.fi",
    "lr.artemislena.eu",
    "libreddit.nohost.network",
    "lr.aeong.one",
    "libreddit.lunar.icu",
    "libreddit.r4fo.com",
    "snoo.habedieeh.re",
    "libreddit.kutay.dev",
    "libreddit.tux.pizza",
    "libreddit.nerdyfam.tech",
    "libreddit.perennialte.ch",
    "libreddit.baczek.me",
  ],
  libremdb: [
    "libremdb.iket.me",
    "libremdb.pussthecat.org",
    "binge.whatever.social",
    "libremdb.lunar.icu",
    "libremdb.jeikobu.net",
    "libremdb.nerdyfam.tech",
    "libremdb.tux.pizza",
    "libremdb.frontendfriendly.xyz",
    "d.opnxng.com",
    "libremdb.catsarch.com",
  ],
  librey: [
    "search.ahwx.org",
    "search2.ahwx.org",
    "librex.zzls.xyz",
    "ly.owo.si",
    "librey.org",
    "librex.supernets.org",
    "search.davidovski.xyz",
    "librey.bloatcat.tk",
    "search.funami.tech",
    "librex.retro-hax.net",
    "librex.nohost.network",
    "search.pabloferreiro.es",
    "librex.yogeshlamichhane.com.np",
    "librey.baczek.me",
    "lx.benike.me",
    "search.seitan-ayoub.lol",
  ],
  lingva: [
    "lingva.ml",
    "lingva.frontendfriendly.xyz",
    "lingva.retiolus.net",
    "translate.plausibility.cloud",
    "lingva.lunar.icu",
    "lingva.garudalinux.org",
  ],
  neuters: [
    "neuters.de",
    "news.whateveritworks.org",
    "neuters.hyperreal.coffee",
    "neuters.privacyfucking.rocks",
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
    "nitter.rawbit.ninja",
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
    "proxitok.privacydev.net",
    "tok.artemislena.eu",
    "tok.adminforge.de",
    "tik.hostux.net",
    "cringe.whatever.social",
    "proxitok.lunar.icu",
    "proxitok.r4fo.com",
    "cringe.datura.network",
    "tt.opnxng.com",
    "proxitok.tinfoil-hat.net",
    "tiktok.wpme.pl",
  ],
  quetre: [
    "quetre.iket.me",
    "quetre.pussthecat.org",
    "quetre.privacydev.net",
    "ask.habedieeh.re",
    "quetre.blackdrgn.nl",
    "quetre.lunar.icu",
    "quetre.frontendfriendly.xyz",
    "q.opnxng.com",
    "quetre.ftw.lol",
    "quora.seitan-ayoub.lol",
    "quetre.catsarch.com",
    "quetre.drgns.space",
  ],
  rimgo: [
    "rimgo.totaldarkness.net",
    "imgur.artemislena.eu",
    "ri.zzls.xyz",
    "rimgo.lunar.icu",
    "rimgo.kling.gg",
    "rimgo.projectsegfau.lt",
    "rimgo.nohost.network",
    "rimgo.catsarch.com",
    "rimgo.drgns.space",
    "rimgo.quantenzitrone.eu",
    "rimgo.frylo.net",
  ],
  scribe: [
    "scribe.rip",
    "scribe.citizen4.eu",
    "scribe.rawbit.ninja",
    "m.opnxng.com",
  ],
  teddit: [
    "i.opnxng.com",
    "teddit.bus-hit.me",
    "teddit.hostux.net",
    "teddit.net",
    "teddit.rawbit.ninja",
    "teddit.projectsegfau.lt",
    "teddit.pussthecat.org",
    "teddit.zaggy.nl",
    "t.sneed.network",
  ],
  tent: ["tent.sny.sh", "tent.bloatcat.tk"],
  tubo: ["tubo.migalmoreno.com"],
  wikiless: [
    "wikiless.tiekoetter.com",
    "wikiless.funami.tech",
    "wikiless.rawbit.ninja",
    "wiki.adminforge.de",
    "wikiless.r4fo.com",
    "wiki.seitan-ayoub.lol",
    "wikiless.ftw.lol",
    "wl.ftw.lol",
    "w.sneed.network",
    "wikiless.ditatompel.com",
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
    "search.demoniak.ch",
    "www.gruble.de",
    "search.lvkaszus.pl",
    "searx.divided-by-zero.eu",
    "xo.wtf",
    "freesearch.club",
    "search.ovh",
    "baresearch.org",
    "searx.perennialte.ch",
    "searx.techsaviours.org",
    "search.mdosch.de",
    "searx.kutay.dev",
    "searx.si",
    "searx.namejeff.xyz",
    "search.whateveritworks.org",
    "search.ononoki.org",
    "etsi.me",
    "searx.work",
    "search.smnz.de",
    "searx.prvcy.eu",
    "searx.headpat.exchange",
  ],
  hackernews: {
    better: "better-hackernews.vercel.app",
    worker: "news.workers.tools",
  },
};

let farsideInstance = keepHistory ? "farside.link/_" : "farside.link";

// // // // // // // // // // // // //

const hash = window.location.hash,
  scheme = `${window.location.protocol}//`;

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

let selectedInstance = "",
  newURL = "";

const getrandom = async (instances) =>
  instances[Math.floor(Math.random() * instances.length)];

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

    const pathname = window.location.pathname;
    let searchpath = `${pathname}${window.location.search}`;

    selectedInstance = twitter[1]
      ? `${farsideInstance}/nitter`
      : await getrandom(Instances.nitter);

    if (pathname === "/i/flow/login") searchpath = searchpath
      .replace("/i/flow/login?redirect_after_login=", "");

    if (searchpath.includes("%")) searchpath = decodeURIComponent(searchpath);

    newURL = `${scheme}${selectedInstance}${searchpath}${hash}`;
    window.location.replace(newURL);
  }
}

async function redirectReddit() {
  if (reddit[0] && !window.location.pathname.startsWith("/domain")) {
    window.stop();
    let pathname = window.location.pathname;
    let search = window.location.search;

    selectedInstance = reddit[1]
      ? `${farsideInstance}/${redditFrontend}`
      : await getrandom(Instances[redditFrontend]);

    if (pathname === "/media" && search) {
      const params = new URLSearchParams(search);
      const mediaURL = new URL(params.get("url"));
      if (["i.redd.it", "preview.redd.it"].includes(mediaURL.hostname)) {
        pathname = `/img${mediaURL.pathname}`;
        search = mediaURL.search;
      }
    }
    newURL = `${scheme}${selectedInstance}${pathname}${search}${hash}`;

    window.location.replace(newURL);
  }
}

async function redirectYoutube(frontend) {
  if (youtube[0]) {
    window.stop();
    let searchpath = `${window.location.pathname}${window.location.search}`;
    if (frontend !== "tubo") {
      selectedInstance =
        youtube[1] && frontend !== "hyperpipe"
          ? `${farsideInstance}/${frontend}`
          : await getrandom(Instances[frontend]);
    } else {
      selectedInstance = await getrandom(Instances.tubo);

      searchpath = `/stream?url=${window.location.href}`;
      if (
        window.location.pathname.startsWith("/@") ||
        window.location.pathname.startsWith("/channel")
      ) searchpath = `/channel?url=${window.location.href}`;
    }
    newURL = `${scheme}${selectedInstance}${searchpath}${hash}`;
    window.location.replace(newURL);
}

async function redirectTiktok() {
  if (tiktok[0]) {
    window.stop();
    let pathname = window.location.pathname;
    selectedInstance = tiktok[1]
      ? `${farsideInstance}/proxitok`
      : await getrandom(Instances.proxitok);

    await Promise.any([
      ["/@/", "/@placeholder/"],
      ["/discover/", "/tag/"],
      ["/foryou", "/trending"],
    ].map(async([key, value]) => {
      if (pathname.startsWith(key)) pathname = pathname.replace(key, value);
    }));

    newURL = `${scheme}${selectedInstance}${pathname}${window.location.search}${hash}`;
    window.location.replace(newURL);
  }
}

async function redirectImgur() {
  if (imgur[0]) {
    window.stop();

    selectedInstance = imgur[1]
      ? `${farsideInstance}/rimgo`
      : await getrandom(Instances.rimgo);

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;

    window.location.replace(newURL);
  }
}

async function redirectMedium() {
  if (medium[0]) {
    let pathname = window.location.pathname;
    const host_path = `${window.location.hostname}${pathname}`;

    if (
      (/^.+?\.medium\.com\/.+/.test(host_path) ||
        /^\/@?[a-z0-9\-\_]+\//.test(pathname) ||
        host_path === "medium.com/") &&
      !(
        /^\/(tag|m|hc)\//.test(pathname) ||
        /\/(about|followers|following)/.test(pathname)
      )
    ) {
      window.stop();
      selectedInstance = medium[1] && mediumFrontend === "scribe"
        ? `${farsideInstance}/scribe`
        : await getrandom(Instances[mediumFrontend]);
      const username = window.location.hostname.replace(/\.?medium\.com/, "");
      if (username) pathname = `/${username}${pathname}`;
      newURL = `${scheme}${selectedInstance}${pathname}${window.location.search}${hash}`;
      window.location.replace(newURL);
    }
  }
}

async function redirectHackerNews() {
  if (hackernews[0]) {
    let pathname = window.location.pathname;
    if (
      ["/newest", "/item", "/user", "/ask", "/show", "/jobs", "/"].includes(
        pathname
      )
    ) {
      if (
        hackernewsFrontend === "better" &&
        window.location.pathname === "/newest"
      ) {
        pathname = "/new";
      }
      selectedInstance = Instances.hackernews[hackernewsFrontend];
    } else if (
      ["/best", "/news", "/submitted", "/threads", "/classic"].includes(
        pathname
      )
    ) {
      selectedInstance = Instances.hackernews.worker;
    }
    if (selectedInstance) {
      window.stop();
      newURL = `${scheme}${selectedInstance}${pathname}${window.location.search}`;
      window.location.replace(newURL);
    }
  }
}

async function redirectGTranslate() {
  if (gtranslate[0]) {
    window.stop();

    selectedInstance = gtranslate[1]
      ? `${farsideInstance}/lingva`
      : await getrandom(Instances.lingva);

    let pathname = window.location.pathname;
    if (window.location.search) {
      const params = new URLSearchParams(window.location.search);
      pathname = `/${params.get("sl")}/${params.get("tl")}/${params.get("text")}`;
    } else if (/^\/\w+\/\w+\/.*/.test(pathname)) {
      pathname = pathname.replace(/\+/g, " ");
    }
    newURL = `${scheme}${selectedInstance}${pathname}`;
    window.location.replace(newURL);
  }
}

async function redirectReuters() {
  if (reuters[0]) {
    window.stop();
    selectedInstance = await getrandom(Instances.neuters);
    newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;
    window.location.replace(newURL);
  }
}

async function redirectWikipedia() {
  if (wikipedia[0]) {
    window.stop();
    let langCode = /^([a-z\-]+)\./.exec(window.location.hostname)[1];

    selectedInstance = wikipedia[1]
      ? `${farsideInstance}/wikiless`
      : await getrandom(Instances.wikiless);

    if (langCode === "www") langCode = "en";
    newURL = `${scheme}${selectedInstance}${window.location.pathname}?lang=${langCode}${hash}`;
    window.location.replace(newURL);
  }
}

async function redirectImdb() {
  if (imdb[0]) {
    window.stop();

    selectedInstance = imdb[1]
      ? `${farsideInstance}/libremdb`
      : await getrandom(Instances.libremdb);

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;

    window.location.replace(newURL);
  }
}

async function redirectQuora() {
  if (quora[0]) {
    window.stop();

    selectedInstance = quora[1]
      ? `${farsideInstance}/quetre`
      : await getrandom(Instances.quetre);

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;

    window.location.replace(newURL);
  }
}

async function redirectFandom() {
  if (fandom[0]) {
    window.stop();
    const fandomName = window.location.hostname.replace(/\..+/, "");
    selectedInstance = await getrandom(Instances.breezewiki);

    let pathname = window.location.pathname;
    if (fandomName !== "www") pathname = `/${fandomName}${pathname}`;
    newURL = `${scheme}${selectedInstance}${pathname}${window.location.search}${hash}`;

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

    selectedInstance = google[1]
      ? `${farsideInstance}/${googleFrontend}`
      : (selectedInstance = await getrandom(Instances[googleFrontend]));

    let pathname = window.location.pathname;
    if (googleFrontend === "librey" && pathname === "/search")
      pathname += ".php";
    const params = new URLSearchParams(window.location.search);
    const query = params.entries().q;
    const search = query ? `?q=${query}` : window.location.search;
    newURL = `${scheme}${selectedInstance}${pathname}${search}${hash}`;
    window.location.replace(newURL);
  }
}

async function redirectGoodreads() {
  if (goodreads[0]) {
    window.stop();

    selectedInstance = await getrandom(Instances.biblioreads);

    if (window.location.pathname.startsWith("/search")) {
      const params = new URLSearchParams(search);
      search = `/${params.get("q")}`;
    }
    newURL = `${scheme}${selectedInstance}${window.location.pathname}${search}${hash}`;
    window.location.replace(newURL);
  }
}

async function redirectStackoverflow() {
  if (
    stackoverflow[0] &&
    (window.location.pathname.startsWith("/questions/") ||
      window.location.pathname === "/")
  ) {
    window.stop();
    selectedInstance = stackoverflow[1]
      ? `${farsideInstance}/anonymousoverflow`
      : await getrandom(Instances.anonymousoverflow);

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${window.location.search}${hash}`;
    window.location.replace(newURL);
  }
}

async function redirectBandcamp() {
  if (bandcamp[0]) {
    // thanks to libredirect

    selectedInstance = await getrandom(Instances.tent);
    const params = new URLSearchParams(window.location.search);

    if (
      `${window.location.hostname}${window.location.pathname}` ===
      "bandcamp.com/search"
    ) {
      newURL = `${scheme}${selectedInstance}/search.php?query=${params.get(
        "q"
      )}`;
    }

    if (window.location.hostname.search(/(daily)?\.bandcamp\.com/) > 0) {
      const artist = window.location.hostname.replace(/\..+/, "");
      if (window.location.pathname === "/") {
        newURL = `${scheme}${selectedInstance}/artist.php?name=${artist}`;
      } else {
        const regex = /^\/(.+?)\/(.+)/.exec(window.location.pathname);
        if (regex) {
          const type = regex[1];
          const name = regex[2];
          newURL = `${scheme}${selectedInstance}/release.php?artist=${artist}&type=${type}&name=${name}`;
        }
      }
    }

    if (window.location.hostname === "f4.bcbits.com") {
      const image = /^\/img\/(.+)/.exec(window.location.pathname)[1];
      newURL = `${scheme}${selectedInstance}/image.php?file=${image}`;
    }

    if (window.location.hostname === "t4.bcbits.com") {
      const regex = /^\/stream\/([a-f0-9]+)\/(.+)\/([0-9]+)/.exec(
        window.location.pathname
      );
      if (regex) {
        const directory = regex[1];
        const format = regex[2];
        const file = regex[3];
        const token = params.get("token");
        newURL = `${scheme}${selectedInstance}/audio.php?directory=${directory}&format=${format}&file=${file}&token=${token}`;
      }
    }

    if (newURL) window[(stop(), location.replace(newURL))];
  }
}

async function redirectGenius() {
  if (genius[0]) {
    const searchpath = `${window.location.pathname}${window.location.search}`;

    selectedInstance = await getrandom(Instances[geniusFrontend]);
    switch (geniusFrontend) {
      case "dumb":
        newURL = `${scheme}${selectedInstance}${searchpath}${hash}`;
        break;
      case "intellectual":
        if (window.location.pathname.endsWith("-lyrics")) {
          newURL = `${scheme}${selectedInstance}/lyrics?path=${searchpath.slice(
            1
          )}${hash}`;
        } else if (window.location.pathname.startsWith("/albums/")) {
          newURL = `${scheme}${selectedInstance}${searchpath.replace(
            "/albums",
            "/album?path=albums"
          )}${hash}`;
        } else if (window.location.pathname.startsWith("/artists/")) {
          newURL = `${scheme}${selectedInstance}${searchpath.replace(
            "/artists",
            "/artist?path=artists"
          )}${hash}`;
        }
        break;
    }

    if (newURL) window[(stop(), location.replace(newURL))];
  }
}

async function redirectPinterest() {
  if (pinterest[0]) {
    selectedInstance = await getrandom(Instances.binternet);

    if (window.location.hostname === "i.pinimg.com") {
      newURL = `${scheme}${selectedInstance}/image_proxy.php?url=${window.location.href}`;
    } else if (window.location.pathname.startsWith("/search")) {
      newURL = `${scheme}${selectedInstance}${window.location.pathname
        .replace("search", "search.php")
        .replace("/pins/", "")}${window.location.search}${hash}`;
    } else if (window.location.pathname === "/") {
      newURL = `${scheme}${selectedInstance}`;
    }

    if (newURL) window[(stop(), location.replace(newURL))];
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
    redirectYoutube(youtubeFrontend);
    break;

  case "www.tiktok.com":
    redirectTiktok();
    break;

  case "music.youtube.com":
    redirectYoutube(youtubeMusicFrontend);
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
  case "m.soundcloud.com":
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
