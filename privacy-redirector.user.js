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
// @version 1.6.2
// @downloadURL
// https://raw.githubusercontent.com/dybdeskarphet/privacy-redirector/main/privacy-redirector.user.js
// @supportURL https://github.com/dybdeskarphet/privacy-redirector
// @updateURL
// https://raw.githubusercontent.com/dybdeskarphet/privacy-redirector/main/privacy-redirector.user.js
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
// @match *://*.quora.com/*
// @match *://*.reddit.com/*
// @match *://*.reuters.com/*
// @match *://*.soundcloud.com/*
// @match *://*.tiktok.com/*
// @match *://*.twitch.tv/*
// @match *://*.deepl.com/*
// @match *://*.deviantart.com/*
// @match *://twitch.tv/*
// @match *://*.twitter.com/*
// @match *://*.x.com/*
// @match *://*.tumblr.com/*
// @match *://x.com/*
// @match *://*.wikipedia.org/*
// @match *://*.youtube-nocookie.com/*
// @match *://*.youtube.com/*
// @match *://f4.bcbits.com/*
// @match *://genius.com/*
// @match *://i.pinimg.com/*
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
// @match *://www.pixiv.net/*
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
let deepl = [false, true]; // Mozhi Deepl engine doesn't work
let deviantart = [true, false];
let fandom = [true, true];
let genius = [true, true];
let goodreads = [true, false];
let google = [true, true];
let gtranslate = [true, true];
let hackernews = [true, true];
let imdb = [true, true];
let imgur = [true, false];
let instagram = [true, true];
let medium = [true, true];
let pinterest = [true, true];
let pixiv = [true, true];
let quora = [true, false];
let reddit = [true, false];
let reuters = [true, true];
let soundcloud = [true, true];
let stackoverflow = [true, true];
let tiktok = [true, false];
let tumblr = [true, false];
let twitch = [true, true];
let twitter = [true, true];
let wikipedia = [true, false];
let youtube = [true, false];

// PREFERRED FRONTEND
let youtubeFrontend = "freetube"; // accepts "invidious", "piped", "tubo", "freetube"
let youtubeMusicFrontend = "hyperpipe"; // accepts "hyperpipe", "invidious", "piped"
let redditFrontend = "libreddit"; // accepts "libreddit", "teddit"
let googleFrontend = "librey"; // accepts "librey", "searx", "searxng"
let googleTranslateFrontend = "mozhi"; // accepts "lingva" (farside available), "mozhi" (no farside)
let geniusFrontend = "intellectual"; // accepts dumb, intellectual
let mediumFrontend = "scribe"; // accepts libmedium, scribe, mediumrip
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
    "ao.vern.cc",
    "overflow.smnz.de",
    "overflow.lunar.icu",
    "overflow.adminforge.de",
    "overflow.projectsegfau.lt",
    "ao.bloat.cat",
    "overflow.ducks.party",
    "ao.owo.si",
    "overflow.freedit.eu",
    "ao.rootdo.org",
    "a.opnxng.com",
    "overflow.einfachzocken.eu",
    "exchange.seitan-ayoub.lol",
    "overflow.r4fo.com",
  ],
  hyperpipe: [
    "hyperpipe.surge.sh",
    "hyperpipe.onrender.com",
    "music.adminforge.de",
    "music.pfcd.me",
    "hyperpipe.projectsegfau.lt",
    "hp.ggtyler.dev",
    "hyperpipe.lunar.icu",
    "music.seitan-ayoub.lol",
  ],
  proxigram: [
    "proxigram.protokolla.fi",
    "proxigram.kyun.li",
    "proxigram.lunar.icu",
    "ig.opnxng.com",
  ],
  biblioreads: [
    "biblioreads.eu.org",
    "biblioreads.vercel.app",
    "biblioreads.mooo.com",
    "bl.vern.cc",
    "biblioreads.lunar.icu",
    "read.seitan-ayoub.lol",
  ],
  binternet: [
    "binternet.ahwx.org",
    "bn.bloat.cat",
    "bn.opnxng.com",
    "bn.vern.cc",
  ],
  breezewiki: [
    "breezewiki.com",
    "antifandom.com",
    "breezewiki.pussthecat.org",
    "bw.hamstro.dev",
    "bw.projectsegfau.lt",
    "breeze.hostux.net",
    "bw.artemislena.eu",
    "breezewiki.woodland.cafe",
    "breeze.nohost.network",
    "z.opnxng.com",
    "breezewiki.catsarch.com",
    "breeze.mint.lgbt",
    "breezewiki.lunar.icu",
    "fandom.adminforge.de",
  ],
  dumb: [
    "dumb.privacydev.net",
    "db.vern.cc",
    "sing.whatever.social",
    "dumb.lunar.icu",
  ],
  intellectual: [
    "intellectual.insprill.net",
    "in.bloat.cat",
    "in2.bloat.cat",
    "intellectual.lumaeris.com",
  ],
  invidious: [
    "yewtu.be",
    "vid.puffyan.us",
    "yt.artemislena.eu",
    "invidious.flokinet.to",
    "invidious.projectsegfau.lt",
    "invidious.privacydev.net",
    "iv.ggtyler.dev",
    "invidious.lunar.icu",
    "inv.tux.pizza",
    "invidious.protokolla.fi",
    "proxied.invidious.fi",
    "onion.tube",
    "invidious.no-logs.com",
    "invidious.io.lol",
    "iv.nboeck.de",
    "invidious.private.coffee",
    "invidious.asir.dev",
    "iv.datura.network",
    "invidious.perennialte.ch",
    "yt.cdaut.de",
    "invidious.einfachzocken.eu",
    "yt.drgnz.club",
  ],
  piped: [
    "piped.video",
    "cf.piped.video",
    "fl.piped.video",
    "do.piped.video",
    "az.piped.video",
    "piped.mha.fi",
    "watch.leptons.xyz",
    "piped.lunar.icu",
    "piped.r4fo.com",
    "piped.privacydev.net",
    "piped.smnz.de",
    "piped.adminforge.de",
    "piped.astartes.nl",
    "piped.osphost.fi",
    "pi.ggtyler.dev",
    "piped.seitan-ayoub.lol",
    "yt.owo.si",
    "piped.minionflo.net",
  ],
  libmedium: [
    "libmedium.batsense.net",
    "md.vern.cc",
    "medium.hostux.net",
    "libmedium.ducks.party",
  ],
  libreddit: [
    "redditor.fly.dev",
    "libreddit.kavin.rocks",
    "libreddit.northboot.xyz",
    "libreddit.kylrth.com",
    "libreddit.tiekoetter.com",
    "l.opnxng.com",
    "libreddit.projectsegfau.lt",
    "libreddit.privacydev.net",
    "libreddit.freedit.eu",
    "libreddit.mha.fi",
    "lr.artemislena.eu",
    "libreddit.nohost.network",
    "libreddit.lunar.icu",
    "snoo.habedieeh.re",
    "libreddit.tux.pizza",
    "libreddit.perennialte.ch",
    "libreddit.private.coffee",
    "lr.seitan-ayoub.lol",
    "l.bloat.cat",
  ],
  libremdb: [
    "libremdb.iket.me",
    "libremdb.pussthecat.org",
    "ld.vern.cc",
    "binge.whatever.social",
    "libremdb.lunar.icu",
    "libremdb.jeikobu.net",
    "libremdb.nerdyfam.tech",
    "libremdb.tux.pizza",
    "d.opnxng.com",
    "libremdb.catsarch.com",
  ],
  librey: [
    "search.ahwx.org",
    "ly.owo.si",
    "librey.danyaal.xyz",
    "librey.org",
    "search.davidovski.xyz",
    "search.funami.tech",
    "librex.nohost.network",
    "search.pabloferreiro.es",
    "librey.baczek.me",
    "search.seitan-ayoub.lol",
  ],
  lingva: [
    "lingva.ml",
    "lingva.thedaviddelta.com",
    "lingva.retiolus.net",
    "translate.plausibility.cloud",
    "lingva.lunar.icu",
    "lingva.garudalinux.org",
    "lingva.seitan-ayoub.lol",
  ],
  mediumrip: ["medium.rip"],
  neuters: ["neuters.de", "nu.vern.cc"],
  nitter: [
    "nitter.net",
    "nitter.unixfox.eu",
    "nitter.poast.org",
    "nitter.privacydev.net",
    "nitter.projectsegfau.lt",
    "nitter.soopy.moe",
    "nitter.rawbit.ninja",
    "nitter.freedit.eu",
    "nitter.nohost.network",
    "nitter.io.lol",
    "nitter.woodland.cafe",
    "nitter.perennialte.ch",
    "nitter.salastil.com",
    "n.opnxng.com",
    "nitter.ktachibana.party",
  ],
  pixivfe: [
    "pixivfe.drgns.space",
    "pixivfe.ducks.party",
    "pixiv.perennialte.ch",
  ],
  proxitok: [
    "proxitok.pabloferreiro.es",
    "proxitok.pussthecat.org",
    "tok.habedieeh.re",
    "proxitok.privacydev.net",
    "tok.artemislena.eu",
    "tok.adminforge.de",
    "cringe.whatever.social",
    "proxitok.lunar.icu",
    "proxitok.privacy.com.de",
    "cringe.seitan-ayoub.lol",
    "tt.opnxng.com",
    "tiktok.wpme.pl",
  ],
  quetre: [
    "quetre.iket.me",
    "qr.vern.cc",
    "quetre.pussthecat.org",
    "quetre.privacydev.net",
    "ask.habedieeh.re",
    "quetre.blackdrgn.nl",
    "quetre.lunar.icu",
    "q.opnxng.com",
    "quetre.rootdo.org",
    "quora.seitan-ayoub.lol",
    "ask.sudovanilla.org",
    "quetre.smnz.de",
  ],
  rimgo: [
    "rimgo.totaldarkness.net",
    "imgur.artemislena.eu",
    "rimgo.lunar.icu",
    "imgur.010032.xyz",
    "rimgo.kling.gg",
    "rimgo.projectsegfau.lt",
    "rimgo.nohost.network",
    "rimgo.catsarch.com",
    "rimgo.quantenzitrone.eu",
  ],
  scribe: [
    "scribe.rip",
    "scribe.citizen4.eu",
    "scribe.nixnet.services",
    "scribe.privacyredirect.com",
    "scribe.projectsegfau.lt",
    "scribe.rawbit.ninja",
    "m.opnxng.com",
  ],
  teddit: [
    "i.opnxng.com",
    "teddit.net",
    "teddit.rawbit.ninja",
    "teddit.pussthecat.org",
    "teddit.zaggy.nl",
    "t.sneed.network",
    "td.vern.cc",
  ],
  tent: ["tent.sny.sh", "tent.bloat.cat", "tn.vern.cc"],
  tubo: ["tubo.media", "tubo.reallyaweso.me", "tubo.ducks.party"],
  wikiless: [
    "wikiless.tiekoetter.com",
    "wikiless.funami.tech",
    "wl.vern.cc",
    "wiki.froth.zone",
    "wikiless.northboot.xyz",
    "wikiless.rawbit.ninja",
    "wiki.adminforge.de",
    "wikiless.rootdo.org",
    "w.sneed.network",
    "wikiless.r4fo.com",
    "wiki.seitan-ayoub.lol",
    "wikiless.ditatompel.com",
  ],
  safetwitch: [
    "safetwitch.drgns.space",
    "safetwitch.projectsegfau.lt",
    "safetwitch.datura.network",
    "ttv.vern.cc",
    "twitch.seitan-ayoub.lol",
    "st.ggtyler.dev",
    "safetwitch.lunar.icu",
    "safetwitch.r4fo.com",
    "safetwitch.ducks.party",
    "safetwitch.nogafam.fr",
    "safetwitch.privacyredirect.com",
  ],
  searx: [
    "searx.gnu.style",
    "searx.nixnet.services",
    "search.projectsegfau.lt",
    "searx.roflcopter.fr",
    "northboot.xyz",
    "opnxng.com",
  ],
  searxng: [
    "search.sapti.me",
    "priv.au",
    "search.demoniak.ch",
    "www.gruble.de",
    "searx.divided-by-zero.eu",
    "xo.wtf",
    "freesearch.club",
    "baresearch.org",
    "searx.perennialte.ch",
    "searx.techsaviours.org",
    "search.mdosch.de",
    "searx.si",
    "searx.namejeff.xyz",
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
  mozhi: [
    "mozhi.aryak.me",
    "nyc1.mz.ggtyler.dev",
    "translate.projectsegfau.lt",
    "translate.nerdvpn.de",
    "mozhi.ducks.party",
    "mozhi.pussthecat.org",
    "mozhi.adminforge.de",
    "translate.privacyredirect.com",
    "mozhi.canine.tools",
    "mozhi.gitro.xyz",
  ],
  skunkyart: [
    "art.bloat.cat",
    "skunky.bloat.cat",
    "lost-skunk.cc/skunkyart",
    "skunkyart.lumaeris.com",
  ],
  priviblur: [
    "pb.bloat.cat",
    "tb.opnxng.com",
    "priviblur.pussthecat.org",
    "priviblur.thebunny.zone",
    "priviblur.gitro.xyz",
    "priviblur.canine.tools",
  ],
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
      hash,
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

    if (pathname === "/i/flow/login")
      searchpath = searchpath.replace(
        "/i/flow/login?redirect_after_login=",
        "",
      );

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
    if (window.location.pathname.startsWith("/embed")) {
      selectedInstance = youtube[1]
        ? `${farsideInstance}/invidious`
        : await getrandom(Instances["invidious"]);
      newURL = `${scheme}${selectedInstance}${window.location.pathname}${
        window.location.search
      }${hash}`;
      window.location.replace(newURL);
    } else {
      if (frontend === "tubo") {
        selectedInstance = await getrandom(Instances.tubo);

        searchpath = `/stream?url=${window.location.href}`;
        if (
          window.location.pathname.startsWith("/@") ||
          window.location.pathname.startsWith("/channel")
        )
          searchpath = `/channel?url=${window.location.href}`;
      } else if (frontend === "freetube") {
        let youtube_link = window.location.href;
        window.location.replace(`freetube://${youtube_link}`);
        return;
      } else {
        selectedInstance =
          youtube[1] && frontend !== "hyperpipe"
            ? `${farsideInstance}/${frontend}`
            : await getrandom(Instances[frontend]);
      }

      newURL = `${scheme}${selectedInstance}${searchpath}${hash}`;
      window.location.replace(newURL);
    }
  }
}

async function redirectTiktok() {
  if (tiktok[0]) {
    window.stop();
    let pathname = window.location.pathname;
    selectedInstance = tiktok[1]
      ? `${farsideInstance}/proxitok`
      : await getrandom(Instances.proxitok);

    await Promise.any(
      [
        ["/@/", "/@placeholder/"],
        ["/discover/", "/tag/"],
        ["/foryou", "/trending"],
      ].map(async ([key, value]) => {
        if (pathname.startsWith(key)) pathname = pathname.replace(key, value);
      }),
    );

    newURL = `${scheme}${selectedInstance}${pathname}${window.location.search}${
      hash
    }`;
    window.location.replace(newURL);
  }
}

async function redirectImgur() {
  if (imgur[0]) {
    window.stop();

    selectedInstance = imgur[1]
      ? `${farsideInstance}/rimgo`
      : await getrandom(Instances.rimgo);

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${
      window.location.search
    }${hash}`;

    window.location.replace(newURL);
  }
}

async function redirectMedium(frontend) {
  if (medium[0]) {
    let pathname = window.location.pathname;
    const host_path = `${window.location.hostname}${pathname}`;

    if (
      (/^.+?\.medium\.com\/.+/.test(host_path) ||
        /^\/@?[^\/]+?\//.test(pathname) ||
        host_path === "medium.com/") &&
      !(
        /^\/(tag|m|hc)\//.test(pathname) ||
        /\/(about|followers|following)/.test(pathname)
      )
    ) {
      window.stop();
      selectedInstance =
        medium[1] && frontend === "scribe"
          ? `${farsideInstance}/scribe`
          : await getrandom(Instances[frontend]);
      const username = window.location.hostname.replace(/\.?medium\.com/, "");
      if (username) pathname = `/${username}${pathname}`;
      newURL = `${scheme}${selectedInstance}${pathname}${
        window.location.search
      }${hash}`;
      window.location.replace(newURL);
    }
  }
}

async function redirectHackerNews() {
  if (hackernews[0]) {
    let pathname = window.location.pathname;
    if (
      ["/newest", "/item", "/user", "/ask", "/show", "/jobs", "/"].includes(
        pathname,
      )
    ) {
      if (
        hackernewsFrontend === "better" &&
        window.location.pathname === "/newest"
      )
        pathname = "/new";
      selectedInstance = Instances.hackernews[hackernewsFrontend];
    } else if (
      ["/best", "/news", "/submitted", "/threads", "/classic"].includes(
        pathname,
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
    let pathname = window.location.pathname;

    switch (googleTranslateFrontend) {
      case "lingva":
        selectedInstance = gtranslate[1]
          ? `${farsideInstance}/lingva`
          : await getrandom(Instances.lingva);

        if (window.location.search) {
          const params = new URLSearchParams(window.location.search);
          pathname = `/${params.get("sl")}/${params.get("tl")}/${params.get(
            "text",
          )}`;
        } else if (/^\/\w+?\/\w+?\/.*/.test(pathname)) {
          pathname = pathname.replace(/\+/g, " ");
        }
        newURL = `${scheme}${selectedInstance}${pathname}`;
        break;

      case "mozhi":
        selectedInstance = await getrandom(Instances.mozhi);

        if (window.location.search) {
          const params = new URLSearchParams(window.location.search);
          pathname = `?text=${params.get(
            "text",
          )}&from=${params.get("sl")}&to=${params.get("tl")}&engine=google`;
          newURL = `${scheme}${selectedInstance}${pathname}`;
        } else {
          newURL = `${scheme}${selectedInstance}`;
        }
        break;

      default:
        break;
    }

    window.location.replace(newURL);
  }
}

async function redirectDeviantart() {
  window.stop();
  let pathname = window.location.pathname;
  let query = window.location.search;
  let parts = pathname.split("/").filter((n) => n);
  let pathnameMatch = "";
  selectedInstance = await getrandom(Instances.skunkyart);

  let patterns = {
    post: /\/art\/\S+/,
    tag: /\/tag\/\S+/,
    search: /(?<=\?q=)[^&]+/,
    gallery: /\/\w+\/gallery$/,
    gallery_folder: /\/\w+\/gallery\/\d+/,
    favorites: /\/(\w+)\/favourites/,
    profile: /^\/(\w+)$/,
  };

  if (deviantart[0]) {
    if (patterns.post.test(pathname)) {
      pathnameMatch = `/post/${parts[0].toLowerCase()}/${parts[2]}`;
    } else if (patterns.tag.test(pathname)) {
      pathnameMatch = `/search?q=${parts[1]}&type=tag`;
    } else if (pathname.startsWith("/search")) {
      query = query.match(patterns.search)[0];
      pathnameMatch = `/search?q=${query}&type=all`;
    } else if (patterns.gallery.test(pathname)) {
      pathnameMatch = `/group_user?type=gallery&q=${parts[0]}`;
    } else if (patterns.gallery_folder.test(pathname)) {
      pathnameMatch = `/group_user?folder=${parts[2]}&q=${parts[0]}&type=g`;
    } else if (patterns.favorites.test(pathname)) {
      pathnameMatch = `/group_user?q=${pathname.match(patterns.favorites)[1]}&type=favorites`;
    } else if (patterns.profile.test(pathname)) {
      pathnameMatch = `/group_user?type=about&q=${pathname.match(patterns.profile)[1]}`;
    }
  }

  newURL = `${scheme}${selectedInstance}${pathnameMatch}`;
  window.location.replace(newURL);
}

async function redirectDeepl() {
  if (deepl[0]) {
    window.stop();
    selectedInstance = await getrandom(Instances.mozhi);
    if (window.location.hash) {
      let hash_parts = window.location.hash.substring(1).split("/");
      let pathname = `?text=${hash_parts[2]}&from=${hash_parts[0]}&to=${
        hash_parts[1]
      }&engine=deepl`;
      newURL = `${scheme}${selectedInstance}${pathname}`;
    }

    window.location.replace(newURL);
  }
}

async function redirectTumblr() {
  if (tumblr[0]) {
    window.stop();
    selectedInstance = await getrandom(Instances.priviblur);
    newURL = `${scheme}${selectedInstance}${window.location.pathname}${
      window.location.search
    }${hash}`;
    window.location.replace(newURL);
  }
}

async function redirectReuters() {
  if (reuters[0]) {
    window.stop();
    selectedInstance = await getrandom(Instances.neuters);
    newURL = `${scheme}${selectedInstance}${window.location.pathname}${
      window.location.search
    }${hash}`;
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
    newURL = `${scheme}${selectedInstance}${window.location.pathname}?lang=${
      langCode
    }${hash}`;
    window.location.replace(newURL);
  }
}

async function redirectImdb() {
  if (imdb[0]) {
    window.stop();

    selectedInstance = imdb[1]
      ? `${farsideInstance}/libremdb`
      : await getrandom(Instances.libremdb);

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${
      window.location.search
    }${hash}`;

    window.location.replace(newURL);
  }
}

async function redirectQuora() {
  if (quora[0]) {
    window.stop();

    selectedInstance = quora[1]
      ? `${farsideInstance}/quetre`
      : await getrandom(Instances.quetre);

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${
      window.location.search
    }${hash}`;

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
    newURL = `${scheme}${selectedInstance}${pathname}${window.location.search}${
      hash
    }`;

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
    newURL = `${scheme}${selectedInstance}${window.location.pathname}${search}${
      hash
    }`;
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

    newURL = `${scheme}${selectedInstance}${window.location.pathname}${
      window.location.search
    }${hash}`;
    window.location.replace(newURL);
  }
}

async function redirectBandcamp() {
  if (bandcamp[0]) {
    // thanks to libredirect

    selectedInstance = await getrandom(Instances.tent);
    const params = new URLSearchParams(window.location.search);
    const artist = window.location.hostname.replace(/\..+/, "");
    const regex = /^\/([^\/]+?)\/(.+)/.exec(window.location.pathname);
    const audio = /^\/stream\/([a-f0-9]+?)\/([^\/]+?)\/([0-9]+)/.exec(
      window.location.pathname,
    );
    const image = /^\/img\/(.+)/.exec(window.location.pathname);
    let searchpath = "";

    switch (true) {
      case window.location.pathname === "/search":
        searchpath = `/search.php?query=${params.get("q")}`;
        break;
      case window.location.hostname.search(/(daily)?\.bandcamp\.com/) > 0:
        if (window.location.pathname === "/") {
          searchpath = `/artist.php?name=${artist}`;
        } else if (regex.length > 2) {
          searchpath = `/release.php?artist=${artist}&type=${regex[1]}&name=${regex[2]}`;
        }
        break;
      case window.location.hostname === "f4.bcbits.com":
        if (image.length > 1) searchpath = `/image.php?file=${image[1]}`;
        break;
      case window.location.hostname === "t4.bcbits.com":
        if (audio.length > 3)
          searchpath = `/audio.php?directory=${audio[1]}&format=${
            audio[2]
          }&file=${audio[3]}&token=${params.get("token")}`;
        break;
      default:
        return;
    }
    window.stop();
    newURL = `${scheme}${selectedInstance}${searchpath}`;
    window.location.replace(newURL);
  }
}

async function redirectGenius() {
  if (genius[0]) {
    const pathname = window.location.pathname;
    selectedInstance = await getrandom(Instances[geniusFrontend]);

    await Promise.any(
      [
        ["lyrics", pathname.endsWith("-lyrics")],
        ["album", pathname.startsWith("/albums/")],
        ["artist", pathname.startsWith("/artists/")],
        [, ["/", "/search"].includes(pathname)],
      ].map(async ([key, value]) => {
        if (value) {
          const searchpath =
            geniusFrontend === "intellectual" && key
              ? `/${key}?path=${pathname.slice(1)}`
              : `${pathname}${window.location.search}`;
          window.stop();
          newURL = `${scheme}${selectedInstance}${searchpath}${hash}`;
          window.location.replace(newURL);
        }
      }),
    );
  }
}

async function redirectPinterest() {
  if (pinterest[0]) {
    selectedInstance = await getrandom(Instances.binternet);

    let searchpath = "";
    if (window.location.hostname === "i.pinimg.com") {
      searchpath = `/image_proxy.php?url=${window.location.href}`;
    } else if (window.location.pathname.startsWith("/search")) {
      searchpath = `${window.location.pathname
        .replace("search", "search.php")
        .replace("/pins/", "")}${window.location.search}`;
    } else if (window.location.pathname !== "/") return;

    window.stop();
    newURL = `${scheme}${selectedInstance}${searchpath}`;
    window.location.replace(newURL);
  }
}

async function redirectSoundcloud() {
  if (soundcloud[0]) {
    window.stop();
    selectedInstance = await getrandom(Instances.tubo);

    let searchpath = "/kiosk?serviceId=1";
    if (window.location.pathname !== "/")
      searchpath = `/stream?url=${window.location.href}`;
    newURL = `${scheme}${selectedInstance}${searchpath}`;
    window.location.replace(newURL);
  }
}

async function redirectPixiv() {
  if (pixiv[0]) {
    window.stop();
    selectedInstance = await getrandom(Instances.pixivfe);

    const pathname = window.location.pathname.replace(/^\/\w{2}\//, "/");
    newURL = `${scheme}${selectedInstance}${pathname}${window.location.search}`;
    window.location.replace(newURL);
  }
}

async function redirectTwitch() {
  if (twitch[0]) {
    window.stop();
    selectedInstance = await getrandom(Instances.safetwitch);

    const pathname =
      window.location.pathname == "/search"
        ? window.location.pathname + "/"
        : window.location.pathname;

    let searchpath =
      window.location.pathname == "/search"
        ? window.location.search.replace("term", "query")
        : window.location.search;

    newURL = `${scheme}${selectedInstance}${pathname}${searchpath}`;
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
  case "x.com":
  case "mobile.x.com":
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

  case "www.deviantart.com":
    redirectDeviantart();
    break;

  case "i.pinimg.com":
    redirectPinterest();
    break;

  case "soundcloud.com":
  case "m.soundcloud.com":
    redirectSoundcloud();
    break;

  case "www.pixiv.net":
    redirectPixiv();
    break;

  case "www.deepl.com":
    redirectDeepl();
    break;

  case "twitch.tv":
  case "www.twitch.tv":
    redirectTwitch();
    break;

  case urlHostname.includes("reddit.com") ? urlHostname : 0:
    redirectReddit();
    break;

  case urlHostname.includes("medium.com") ? urlHostname : 0:
    redirectMedium(mediumFrontend);
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

  case urlHostname.includes("tumblr.com") ? urlHostname : 0:
    redirectTumblr();
    break;
}

// export module for the test in github action
typeof module !== "undefined"
  ? (module.exports = { Instances: Instances })
  : true;
