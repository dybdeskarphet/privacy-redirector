# 🔀 Privacy Redirector

[![Greasy Fork](https://img.shields.io/greasyfork/v/436359-privacy-redirector?style=flat-square)](https://greasyfork.org/scripts/436359-privacy-redirector)
[![Greasy Fork](https://img.shields.io/greasyfork/dt/436359-privacy-redirector?style=flat-square)](https://greasyfork.org/scripts/436359-privacy-redirector)
[![GitHub](https://img.shields.io/github/license/dybdeskarphet/privacy-redirector?style=flat-square)](./LICENSE)

## 📖 Description

The Privacy Redirector userscript redirects popular social media platforms to their privacy-respecting frontends, such as Nitter for Twitter and Piped for YouTube. This helps you enjoy the content while avoiding unnecessary tracking.

Bu belgeyi Türkçe okumak için
<a href="https://github.com/dybdeskarphet/privacy-redirector/blob/main/doc/README_tr.md">tıklayın</a>.

## ⚙️ Installation

### Greasyfork

You can install the userscript directly from [Greasyfork](https://greasyfork.org/scripts/436359-privacy-redirector).

### Manual Installation

By [clicking this URL](https://raw.githubusercontent.com/dybdeskarphet/privacy-redirector/main/privacy-redirector.user.js), your userscript manager should detect the script automatically. If it doesn't:

1. **Copy the Script**

   Copy the contents of [privacy-redirector.user.js](https://raw.githubusercontent.com/dybdeskarphet/privacy-redirector/main/privacy-redirector.user.js).

2. **Userscript Manager**

   Add the copied script to your userscript manager. If you don't have a userscript manager, you can use one of the following:

   - [Violentmonkey](https://violentmonkey.github.io/) (Opera, Chrome, Firefox, Safari)
   - [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Safari, Edge)
   - [Greasemonkey](https://www.greasespot.net/) (Firefox)

## 🔍 Usage

Once the userscript is installed, visit your favorite social media platforms, and you will be automatically redirected to the privacy-respecting frontend.

## 🔥 Supported Platforms

- Bandcamp → [Tent](https://forgejo.sny.sh/sun/Tent)
- Fandom → [Breezewiki](https://breezewiki.com/)
- Genius → [dumb](https://github.com/rramiachraf/dumb), [Intellectual](https://github.com/Insprill/intellectual)
- Goodreads → [BiblioReads](https://github.com/nesaku/BiblioReads)
- Google Translate → [Lingva Translate](https://github.com/rsmt/lingva-translate)
- Google → [Librey](https://github.com/Ahwxorg/librey/), [SearX](https://github.com/searx/searx), [SearXNG](https://github.com/searxng/searxng)
- Hacker News → [Worker](https://github.com/worker-tools/worker-news), [Better](https://github.com/vedantnn71/better-hackernews)
- IMDb → [libremdb](https://github.com/zyachel/libremdb)
- Imgur → [rimgo](https://codeberg.org/rimgo/rimgo)
- Instagram → [Proxigram](https://codeberg.org/ThePenguinDev/Proxigram)
- Medium → [Scibe](https://sr.ht/~edwardloveall/Scribe/)
- Pinterest → [Binternet](https://github.com/Ahwxorg/Binternet)
- Quora → [Quetre](https://github.com/zyachel/quetre)
- Reddit → [Libreddit](https://github.com/libreddit/libreddit), [Teddit](https://codeberg.org/teddit/teddit)
- Reuters → [Neuters](https://github.com/HookedBehemoth/neuters)
- SoundCloud → [Tubo](https://github.com/migalmoreno/tubo)
- Stack Overflow → [AnonymousOverflow](https://github.com/httpjamesm/AnonymousOverflow)
- TikTok → [ProxiTok](https://github.com/pablouser1/ProxiTok)
- Twitter → [Nitter](https://github.com/zedeus/nitter)
- Wikipedia → [Wikiless](https://codeberg.org/orenom/wikiless)
- YouTube Music → [Piped](https://github.com/TeamPiped/Piped), [Invidious](https://github.com/iv-org/invidious), [Hyperpipe](https://codeberg.org/Hyperpipe/Hyperpipe)
- YouTube → [Piped](https://github.com/TeamPiped/Piped), [Invidious](https://github.com/iv-org/invidious), [Tubo](https://github.com/migalmoreno/tubo)

Feel free to contribute and add support for more platforms!

## ❓ FAQ

**How can I disable some redirections?**

> You have to edit the values of the userscript. Change the `REDIRECTION` value to
> `false` for the redirections you want. You can also disable [farside.link](https://github.com/benbusby/farside)
> and add your custom instances. A little familiarity with JavaScript syntax should
> be enough.

**Why scribe.rip doesn't redirect to user pages?**

> "It's intentional that there is no way to browse content from a user, see popular
> posts, consume via an RSS feed, or further engage with an article via comments or
> "claps".I want to spend my time encouraging writers to move to worthy platforms,
> not making a bad platform worthy."
> ~ [edwardloveall](https://sr.ht/~edwardloveall/Scribe/#project-goals)

## ❤️ Contributing

Contributions are welcome! Feel free to open issues and pull requests to enhance the functionality or add support for additional platforms.

## 🫂 Credits

- [joshcangit](https://github.com/joshcangit)
- [Farside.link](https://github.com/benbusby/farside)
- [Libredirect](https://github.com/libredirect/browser_extension) for
  Bandcamp redirection

## 📜 License

This project is licensed under the GPL-3.0 license - see the [LICENSE](LICENSE) file for details.
