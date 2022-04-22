<p align="center">
<a href="https://github.com/dybdeskarphet/privacy-redirector/blob/main/README_tr.md">🇹🇷 Türkçe</a> <b>/</b> <a href="https://github.com/dybdeskarphet/privacy-redirector/blob/main/README.md">🇬🇧 English</a>
</p>

# Privacy Redirector
This userscript redirects popular social media platforms to their privacy respecting frontends.

You can add the script from [![GreasyFork](https://img.shields.io/static/v1?label=%20&message=GreasyFork&style=flat-square&labelColor=7B0000&color=960000&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=)](https://greasyfork.org/scripts/436359-privacy-redirector) or you can clone this repo and add it [manually](https://violentmonkey.github.io/guide/creating-a-userscript/).

## FAQ
~~__Why does Instagram open multiple tabs?__~~
> ~~I have no idea, I spent hours just to find the cause but I'm still not sure what's causing it.~~
>
> Looks like it's fixed, I'm not sure why it's fixed though. Create an issue if the problem persist for your browser

__Why scribe.rip doesn't redirect to user pages?__
> "It's intentional that there is no way to browse content from a user, see popular posts, consume via an RSS feed, or further engage with an article via comments or "claps". I want to spend my time encouraging writers to move to worthy platforms, not making a bad platform worthy."
> ~ [edwardloveall](https://sr.ht/~edwardloveall/scribe/#project-goals)

__Why Bibliogram doesn't load the full profile?__
> [Future of Bibliogram by Cadence Ember](https://proxy.vulpes.one/gemini/cadence.moe/gemlog/2020-12-17-future-of-bibliogram.bliz)

## To-do
- [x] Redirect Medium user pages to Medium itself without giving an error
- [x] Delete `?hl=<langcode>` query when redirecting to Lingva. 
- [x] Use random instances for Nitter, Reddit, Invidious, Rimgo and Lingva
- [x] Add [Beatbump](https://github.com/snuffyDev/Beatbump), [hn-search](https://github.com/algolia/hn-search), [Lingva](https://github.com/TheDavidDelta/lingva-translate) and [Neuters](https://github.com/HookedBehemoth/neuters)
- [x] Add [ProxiTok](https://github.com/pablouser1/ProxiTok), [Rimgo](https://codeberg.org/video-prize-ranch/rimgo#instances), [Scribe](https://sr.ht/~edwardloveall/scribe/) redirections
- [x] Redirect old.reddit to teddit.net

### Not possible (?)
- [ ] ~~Make the previous site after redirecting is the original previous site and not the platform itself.~~
- [ ] ~~Find a way to redirect to the up instances without releasing a whole new verison.~~
