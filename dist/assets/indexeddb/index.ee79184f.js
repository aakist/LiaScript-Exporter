function e(e,o,m,i){Object.defineProperty(e,o,{get:m,set:i,enumerable:!0,configurable:!0})}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},m={},i={},a=o.parcelRequire55a5;null==a&&((a=function(e){if(e in m)return m[e].exports;if(e in i){var o=i[e];delete i[e];var a={id:e,exports:{}};return m[e]=a,o.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,o){i[e]=o},o.parcelRequire55a5=a),a.register("jIE8R",(function(o,m){e(o.exports,"extract",(function(){return n}));var i=a("50Mg9"),c=a("iMD9J"),t=Object();async function r(e){const o=e.replace("https://","").replace("http://",""),m=i.endpoints.find((e=>{const[m,i]=e;return i&&i.length?i.some((e=>o.match(new RegExp(e.replace(/\*/g,"(?:.*)"),"i")))):m.includes(o)}));return m?"https://"+m[0]:s(e)}async function s(e,o=!0){try{const o=await fetch(e),m=(await o.text()).match(/<link.+?type="(application\/)?json\+oembed".+?(\/?[ \\n\\t]*>)/gi);if(null==m?void 0:m[0]){const e=m[0].match(/.*?href="(.*?)"/i);return null==e?void 0:e[1]}}catch(m){if(o)return s(c.PROXY+e,!1)}}async function d(e,o,m,i){let a,c,t=`${o=o.replace(/\{format\}/g,"json")}?format=json&url=${encodeURIComponent(e)}`;return t=m.maxwidth?`${t}&maxwidth=${m.maxwidth}`:t,t=m.maxheight?`${t}&maxheight=${m.maxheight}`:t,i?(t=i+encodeURIComponent(t),a=await fetch(t),c=JSON.parse(await a.text()),c=JSON.parse(c.contents)):(a=await fetch(t),c=await a.json()),c}async function n(e,o){if(e.endsWith("/")&&(e=e.slice(0,-1)),t[e]&&t[e][JSON.stringify(o)])return t[e][JSON.stringify(o)];const m=await r(e);if(!m)throw new Error(`No provider found with given url "${e}"`);let i;try{i=await d(e,m,o)}catch(a){i=await d(e,m,o,c.PROXY)}const a=JSON.stringify(o);if(t[e])t[e][a]=i;else{let o={};o[a]=i,t[e]=o}return i}function w(e){e.target instanceof HTMLElement&&(e.target.style.width="100%")}customElements.define("lia-embed",class extends HTMLElement{connectedCallback(){this.attachShadow({mode:"closed"}).appendChild(this.div_);const e=this.parentElement;let o=parseFloat(this.getAttribute("scale")||"0.674");if(e){const m=parseInt(window.getComputedStyle(e).getPropertyValue("padding-left").replace("px",""));this.maxwidth_=null!=this.maxwidth_?this.maxwidth_:e.clientWidth-m-30,this.maxheight_=null!=this.maxheight_?this.maxheight_:Math.floor(this.maxwidth_*(o||.674)),this.maxheight_>screen.availHeight&&(this.maxheight_=Math.floor(screen.availHeight*(o||.76)))}this.render()}render(){if(this.paramCount>2){let e=this.div_,o={maxwidth:this.maxwidth_,maxheight:this.maxheight_};if(this.url_){let m=this.url_,i=this.thumbnail_;n(m,o).then((o=>{try{i&&o.thumbnail_url?e.innerHTML=`<img style="width: inherit; height: inherit; object-fit: cover" src="${o.thumbnail_url}"></img>`:e.innerHTML=o.html}catch(o){e.innerHTML=`<iframe src="${m}" style="width: 100%; height: inherit" allowfullscreen loading="lazy"></iframe>`}const a=e.children[0];a&&("IFRAME"===a.nodeName?a.addEventListener("load",w):1===a.childElementCount&&"IFRAME"===a.children[0].nodeName?a.children[0].addEventListener("load",w):a instanceof HTMLElement&&(a.style.width="100%"))})).catch((i=>{e.innerHTML=`<iframe src="${m}" style="width: 100%; height: ${o.maxheight?o.maxheight+"px":"inherit"};" allowfullscreen loading="lazy""></iframe>`}))}}}get url(){return this.url_}set url(e){this.url_!==e&&(this.url_=e,this.paramCount++,this.render())}get maxheight(){return this.maxheight_}set maxheight(e){this.maxheight_!==e&&(this.paramCount++,0!=e&&(this.maxheight_=e))}get maxwidth(){return this.maxwidth_}set maxwidth(e){this.maxwidth_!==e&&(this.paramCount++,0!=e&&(this.maxwidth_=e))}get thumbnail(){return this.thumbnail_}set thumbnail(e){this.thumbnail_=e}constructor(){super(),this.url_=null,this.div_=document.createElement("div"),this.div_.style.width="inherit",this.div_.style.height="inherit",this.div_.style.display="inline-block",this.thumbnail_=!1,this.paramCount=0}})})),a.register("50Mg9",(function(o,m){e(o.exports,"endpoints",(function(){return i}));const i=JSON.parse('[["www.23hq.com/23/oembed",["www.23hq.com/*/photo/*"]],["api.abraia.me/oembed",["store.abraia.me/*"]],["oembed.acast.com/v1/embed-player",["play.acast.com/s/*"]],["secure.actblue.com/cf/oembed",["secure.actblue.com/donate/*"]],["adilo.bigcommand.com/web/oembed",["adilo.bigcommand.com/watch/*"]],["openapi.afreecatv.com/oembed/embedinfo",["v.afree.ca/ST/","vod.afreecatv.com/ST/","vod.afreecatv.com/PLAYER/STATION/","play.afreecatv.com/"]],["viewer.altium.com/shell/oembed",["altium.com/viewer/*"]],["api.altrulabs.com/api/v1/social/oembed",["app.altrulabs.com/*/*?answer_id=*","app.altrulabs.com/player/*"]],["live.amcharts.com/oembed",["live.amcharts.com/*","live.amcharts.com/*"]],["api.amtraker.com/v2/oembed",["amtraker.com/trains/*","beta.amtraker.com/trains/*"]],["animatron.com/oembed/json",["www.animatron.com/project/*","animatron.com/project/*"]],["animoto.com/oembeds/create",["animoto.com/play/*"]],["api.anniemusic.app/api/v1/oembed",["anniemusic.app/t/*","anniemusic.app/p/*"]],["storymaps.arcgis.com/oembed",["storymaps.arcgis.com/stories/*"]],["app.archivos.digital/oembed/",["app.archivos.digital/app/view/*"]],["audioboom.com/publishing/oembed.{format}",["audioboom.com/channels/*","audioboom.com/channel/*","audioboom.com/playlists/*","audioboom.com/podcasts/*","audioboom.com/podcast/*","audioboom.com/posts/*","audioboom.com/episodes/*"]],["audioclip.naver.com/oembed",["audioclip.naver.com/channels/*/clips/*","audioclip.naver.com/audiobooks/*"]],["audiomack.com/oembed",["audiomack.com/*/song/*","audiomack.com/*/album/*","audiomack.com/*/playlist/*"]],["podcasts.audiomeans.fr/services/oembed",["podcasts.audiomeans.fr/*"]],["stage-embed.avocode.com/api/oembed",["app.avocode.com/view/*"]],["backtracks.fm/oembed",["backtracks.fm/*/*/e/*","backtracks.fm/*/s/*/*","backtracks.fm/*/*/*/*/e/*/*","backtracks.fm/*","backtracks.fm/*"]],["api.beams.fm/oEmbed",["beams.fm/*"]],["www.beautiful.ai/api/oembed",[]],["blackfire.io/oembed",["blackfire.io/profiles/*/graph","blackfire.io/profiles/compare/*/graph"]],["blogcast.host/oembed",["blogcast.host/embed/*","blogcast.host/embedly/*"]],["bookingmood.com/api/oembed",["www.bookingmood.com/embed/*/*"]],["boxofficebuz.com/oembed",[]],["www.bumper.com/oembed/bumper",["www.bumper.com/oembed/bumper","www.bumper.com/oembed-s/bumper"]],["buttondown.email/embed",["buttondown.email/*"]],["cmc.byzart.eu/oembed/",["cmc.byzart.eu/files/*"]],["cacoo.com/oembed.{format}",["cacoo.com/diagrams/*"]],["minesweeper.today/api/oembed",["minesweeper.today/*","minesweeper.today/*"]],["img.catbo.at/oembed.json",["img.catbo.at/*"]],["view.ceros.com/oembed",["view.ceros.com/*","view.ceros.com/*"]],["www.chainflix.net/video/oembed",["chainflix.net/video/*","chainflix.net/video/embed/*","*.chainflix.net/video/*","*.chainflix.net/video/embed/*"]],["embed.chartblocks.com/1.0/oembed",["public.chartblocks.com/c/*"]],["chirb.it/oembed.{format}",["chirb.it/*"]],["chroco.ooo/embed",["chroco.ooo/mypage/*","chroco.ooo/story/*"]],["www.circuitlab.com/circuit/oembed/",["www.circuitlab.com/circuit/*"]],["www.clipland.com/api/oembed",["www.clipland.com/v/*","www.clipland.com/v/*"]],["api.clyp.it/oembed/",["clyp.it/*","clyp.it/playlist/*"]],["app.ilovecoco.video/api/oembed.{format}",["app.ilovecoco.video/*/embed"]],["codehs.com/api/sharedprogram/1/oembed/",["codehs.com/editor/share_abacus/*"]],["codepen.io/api/oembed",["codepen.io/*","codepen.io/*"]],["codepoints.net/api/v1/oembed",["codepoints.net/*","codepoints.net/*","www.codepoints.net/*","www.codepoints.net/*"]],["codesandbox.io/oembed",["codesandbox.io/s/*","codesandbox.io/embed/*"]],["www.collegehumor.com/oembed.{format}",["www.collegehumor.com/video/*"]],["commaful.com/api/oembed/",["commaful.com/play/*"]],["coub.com/api/oembed.{format}",["coub.com/view/*","coub.com/embed/*"]],["crowdranking.com/api/oembed.{format}",["crowdranking.com/*/*"]],["crumb.sh/oembed/",["crumb.sh/*"]],["gql.cueup.io/oembed",["cueup.io/user/*/sounds/*"]],["api.curated.co/oembed",["*.curated.co/*"]],["app.customerdb.com/embed",["app.customerdb.com/share/*"]],["app.dadan.io/api/video/oembed",["app.dadan.io/*","stage.dadan.io/*"]],["www.dailymotion.com/services/oembed",["www.dailymotion.com/video/*"]],["dalexni.com/oembed/",["dalexni.com/i/*"]],["api.datawrapper.de/v3/oembed/",["datawrapper.dwcdn.net/*"]],["embed.deseret.com/",["*.deseret.com/*"]],["backend.deviantart.com/oembed",["*.deviantart.com/art/*","*.deviantart.com/*#/d*","fav.me/*","sta.sh/*","*.deviantart.com/art/*","*.deviantart.com/*/art/*"]],["www.ultimedia.com/api/search/oembed",["www.ultimedia.com/central/video/edit/id/*/topic_id/*/","www.ultimedia.com/default/index/videogeneric/id/*/showtitle/1/viewnc/1","www.ultimedia.com/default/index/videogeneric/id/*"]],["www.docdroid.net/api/oembed",["*.docdroid.net/*","*.docdroid.net/*","docdro.id/*","docdro.id/*","*.docdroid.com/*","*.docdroid.com/*"]],["www.docswell.com/service/oembed",["docswell.com/*/*","docswell.com/*/*","www.docswell.com/*/*","www.docswell.com/*/*"]],["dotsub.com/services/oembed",["dotsub.com/view/*"]],["dreambroker.com/channel/oembed",["www.dreambroker.com/channel/*/*"]],["api.d.tube/oembed",["d.tube/v/*"]],["www.edumedia-sciences.com/oembed.json",[]],["www.edumedia-sciences.com/oembed.xml",[]],["egliseinfo.catholique.fr/api/oembed",["egliseinfo.catholique.fr/*"]],["embedery.com/api/oembed",["embedery.com/widget/*"]],["music.enystre.com/oembed",["music.enystre.com/lyrics/*"]],["ethfiddle.com/services/oembed/",["ethfiddle.com/*"]],["evt.live/api/oembed",["evt.live/*","evt.live/*/*","live.eventlive.pro/*","live.eventlive.pro/*/*"]],["api.everviz.com/oembed",["app.everviz.com/embed/*","app.everviz.com/embed/*"]],["eyrie.io/v1/oembed",["eyrie.io/board/*","eyrie.io/sparkfun/*"]],["graph.facebook.com/v10.0/oembed_post",["www.facebook.com/*/posts/*","www.facebook.com/*/activity/*","www.facebook.com/*/photos/*","www.facebook.com/photo.php?fbid=*","www.facebook.com/photos/*","www.facebook.com/permalink.php?story_fbid=*","www.facebook.com/media/set?set=*","www.facebook.com/questions/*","www.facebook.com/notes/*/*/*"]],["graph.facebook.com/v10.0/oembed_video",["www.facebook.com/*/videos/*","www.facebook.com/video.php?id=*","www.facebook.com/video.php?v=*"]],["graph.facebook.com/v10.0/oembed_page",["www.facebook.com/*"]],["app.getfader.com/api/oembed",["app.getfader.com/projects/*/publish"]],["faithlifetv.com/api/oembed",["faithlifetv.com/items/*","faithlifetv.com/items/resource/*/*","faithlifetv.com/media/*","faithlifetv.com/media/assets/*","faithlifetv.com/media/resource/*/*"]],["www.fite.tv/oembed",["www.fite.tv/watch/*"]],["flat.io/services/oembed",["flat.io/score/*","*.flat.io/score/*"]],["www.flickr.com/services/oembed/",["*.flickr.com/photos/*","flic.kr/p/*","*.flickr.com/photos/*","flic.kr/p/*","*.*.flickr.com/*/*","*.*.flickr.com/*/*"]],["app.flourish.studio/api/v1/oembed",["public.flourish.studio/visualisation/*","public.flourish.studio/story/*"]],["fiso.foxsports.com.au/oembed",["fiso.foxsports.com.au/isomorphic-widget/*","fiso.foxsports.com.au/isomorphic-widget/*"]],["api.framer.com/web/oembed",["framer.com/share/*","framer.com/embed/*"]],["api.geograph.org.uk/api/oembed",["*.geograph.org.uk/*","*.geograph.co.uk/*","*.geograph.ie/*","*.wikimedia.org/*_geograph.org.uk_*"]],["www.geograph.org.gg/api/oembed",["*.geograph.org.gg/*","*.geograph.org.je/*","channel-islands.geograph.org/*","channel-islands.geographs.org/*","*.channel.geographs.org/*"]],["geo.hlipp.de/restapi.php/api/oembed",["geo-en.hlipp.de/*","geo.hlipp.de/*","germany.geograph.org/*"]],["embed.gettyimages.com/oembed",["gty.im/*"]],["api.gfycat.com/v1/oembed",["gfycat.com/*","www.gfycat.com/*","gfycat.com/*","www.gfycat.com/*"]],["giphy.com/services/oembed",["giphy.com/gifs/*","giphy.com/clips/*","gph.is/*","media.giphy.com/media/*/giphy.gif"]],["gloria.tv/oembed/",[]],["embed.gmetri.com/oembed/",["view.gmetri.com/*","*.gmetri.com/*"]],["app.gong.io/oembed",["app.gong.io/call?id=*"]],["api.grain.com/_/api/oembed",["grain.co/highlight/*","grain.co/share/*","grain.com/share/*"]],["api.luminery.com/oembed",["gtchannel.com/watch/*"]],["api.gyazo.com/api/oembed",["gyazo.com/*"]],["api.hash.ai/oembed",["core.hash.ai/@*"]],["hearthis.at/oembed/?format=json",["hearthis.at/*/*/","hearthis.at/*/set/*/"]],["heyzine.com/api1/oembed",["heyzine.com/flip-book/*","*.hflip.co/*","*.aflip.in/*"]],["player.hihaho.com/services/oembed",["player.hihaho.com/*"]],["www.hippovideo.io/services/oembed",["*.hippovideo.io/*","*.hippovideo.io/*"]],["homey.app/api/oembed/flow",["homey.app/f/*","homey.app/*/flow/*"]],["huffduffer.com/oembed",["huffduffer.com/*/*"]],["www.hulu.com/api/oembed.{format}",["www.hulu.com/watch/*"]],["www.ifixit.com/Embed",["www.ifixit.com/Guide/View/*"]],["www.ifttt.com/oembed/",["ifttt.com/recipes/*"]],["www.iheart.com/oembed",["www.iheart.com/podcast/*/*"]],["qr.imenupro.com/api/oembed",["qr.imenupro.com/*","qr.imenupro.com/*"]],["player.indacolive.com/services/oembed",["player.indacolive.com/player/jwp/clients/*"]],["infogram.com/oembed",["infogram.com/*"]],["infoveave.net/services/oembed/",["*.infoveave.net/E/*","*.infoveave.net/P/*"]],["www.injurymap.com/services/oembed",["www.injurymap.com/exercises/*"]],["www.inoreader.com/oembed/api/",["www.inoreader.com/oembed/"]],["api.inphood.com/oembed",["*.inphood.com/*"]],["graph.facebook.com/v10.0/instagram_oembed",["instagram.com/*/p/*,","www.instagram.com/*/p/*,","instagram.com/*/p/*,","www.instagram.com/*/p/*,","instagram.com/p/*","instagr.am/p/*","www.instagram.com/p/*","www.instagr.am/p/*","instagram.com/p/*","instagr.am/p/*","www.instagram.com/p/*","www.instagr.am/p/*","instagram.com/tv/*","instagr.am/tv/*","www.instagram.com/tv/*","www.instagr.am/tv/*","instagram.com/tv/*","instagr.am/tv/*","www.instagram.com/tv/*","www.instagr.am/tv/*","www.instagram.com/reel/*","www.instagram.com/reel/*","instagram.com/reel/*","instagram.com/reel/*","instagr.am/reel/*","instagr.am/reel/*"]],["www.insticator.com/oembed",["ppa.insticator.com/embed-unit/*"]],["issuu.com/oembed",["issuu.com/*/docs/*"]],["api.jovian.com/oembed.json",["jovian.ml/*","jovian.ml/viewer*","*.jovian.ml/*","jovian.ai/*","jovian.ai/viewer*","*.jovian.ai/*","jovian.com/*","jovian.com/viewer*","*.jovian.com/*"]],["tv.kakao.com/oembed",["tv.kakao.com/channel/*/cliplink/*","tv.kakao.com/m/channel/*/cliplink/*","tv.kakao.com/channel/v/*","tv.kakao.com/channel/*/livelink/*","tv.kakao.com/m/channel/*/livelink/*","tv.kakao.com/channel/l/*"]],["www.kickstarter.com/services/oembed",["www.kickstarter.com/projects/*"]],["halaman.email/service/oembed",["halaman.email/form/*","aplikasi.kirim.email/form/*"]],["embed.kit.co/oembed",["kit.co/*/*","kit.co/*/*"]],["www.kitchenbowl.com/oembed",["www.kitchenbowl.com/recipe/*"]],["api.kmdr.sh/services/oembed",["app.kmdr.sh/h/*","app.kmdr.sh/history/*"]],["jdr.knacki.info/oembed",["jdr.knacki.info/meuh/*","jdr.knacki.info/meuh/*"]],["api.spoonacular.com/knowledge/oembed",["knowledgepad.co/#/knowledge/*"]],["embed.kooapp.com/services/oembed",["*.kooapp.com/koo/*","*.kooapp.com/koo/*"]],["kurozora.app/oembed",["kurozora.app/episodes*","kurozora.app/songs*"]],["learningapps.org/oembed.php",["learningapps.org/*"]],["pod.univ-lille.fr/video/oembed",["pod.univ-lille.fr/video/*"]],["place.line.me/oembed",["place.line.me/businesses/*"]],["livestream.com/oembed",["livestream.com/accounts/*/events/*","livestream.com/accounts/*/events/*/videos/*","livestream.com/*/events/*","livestream.com/*/events/*/videos/*","livestream.com/*/*","livestream.com/*/*/videos/*"]],["embed.lottiefiles.com/oembed",["lottiefiles.com/*","*.lottiefiles.com/*"]],["app.ludus.one/oembed",["app.ludus.one/*"]],["admin.lumiere.is/api/services/oembed",["*.lumiere.is/v/*"]],["mathembed.com/oembed",["mathembed.com/latex?inputText=*","mathembed.com/latex?inputText=*"]],["my.matterport.com/api/v1/models/oembed/",[]],["me.me/oembed",["me.me/i/*"]],["mdstrm.com/oembed",["mdstrm.com/embed/*","mdstrm.com/live-stream/*","mdstrm.com/image/*"]],["medienarchiv.zhdk.ch/oembed.{format}",["medienarchiv.zhdk.ch/entries/*"]],["mermaid.ink/services/oembed",["mermaid.ink/img/*","mermaid.ink/svg/*"]],["web.microsoftstream.com/oembed",["*.microsoftstream.com/video/*","*.microsoftstream.com/channel/*"]],["oembed.minervaknows.com",["www.minervaknows.com/featured-recipes/*","www.minervaknows.com/themes/*","www.minervaknows.com/themes/*/recipes/*","app.minervaknows.com/recipes/*","app.minervaknows.com/recipes/*/follow"]],["miro.com/api/v1/oembed",["miro.com/app/board/*"]],["www.mixcloud.com/oembed/",["www.mixcloud.com/*/*/","www.mixcloud.com/*/*/"]],["api.mobypicture.com/oEmbed",["www.mobypicture.com/user/*/view/*","moby.to/*"]],["musicboxmaniacs.com/embed/",["musicboxmaniacs.com/explore/melody/*"]],["mybeweeg.com/services/oembed",["mybeweeg.com/w/*"]],["namchey.com/api/oembed",["namchey.com/embeds/*"]],["www.nanoo.tv/services/oembed",["*.nanoo.tv/link/*","nanoo.tv/link/*","*.nanoo.pro/link/*","nanoo.pro/link/*","*.nanoo.tv/link/*","nanoo.tv/link/*","*.nanoo.pro/link/*","nanoo.pro/link/*","media.zhdk.ch/signatur/*","new.media.zhdk.ch/signatur/*","media.zhdk.ch/signatur/*","new.media.zhdk.ch/signatur/*"]],["api.nb.no/catalog/v1/oembed",["www.nb.no/items/*"]],["naturalatlas.com/oembed.{format}",["naturalatlas.com/*","naturalatlas.com/*/*","naturalatlas.com/*/*/*","naturalatlas.com/*/*/*/*"]],["ndla.no/oembed",["ndla.no/*"]],["liste.ndla.no/oembed",["liste.ndla.no/*"]],["www.nfb.ca/remote/services/oembed/",["*.nfb.ca/film/*"]],["oembed.nopaste.ml",["nopaste.ml/*"]],["api.observablehq.com/oembed",["observablehq.com/@*/*","observablehq.com/d/*","observablehq.com/embed/*"]],["www.odds.com.au/api/oembed/",["www.odds.com.au/*","odds.com.au/*"]],["song.link/oembed",["song.link/*","album.link/*","artist.link/*","playlist.link/*","pods.link/*","mylink.page/*","odesli.co/*"]],["odysee.com/$/oembed",["odysee.com/*/*","odysee.com/*"]],["official.fm/services/oembed.{format}",["official.fm/tracks/*","official.fm/playlists/*"]],["omniscope.me/_global_/oembed/json",["omniscope.me/*"]],["omny.fm/oembed",["omny.fm/shows/*"]],["orbitvu.co/service/oembed",["orbitvu.co/001/*/ov3601/view","orbitvu.co/001/*/ov3601/*/view","orbitvu.co/001/*/ov3602/*/view","orbitvu.co/001/*/2/orbittour/*/view","orbitvu.co/001/*/1/2/orbittour/*/view","orbitvu.co/001/*/ov3601/view","orbitvu.co/001/*/ov3601/*/view","orbitvu.co/001/*/ov3602/*/view","orbitvu.co/001/*/2/orbittour/*/view","orbitvu.co/001/*/1/2/orbittour/*/view"]],["outplayed.tv/oembed",["outplayed.tv/media/*"]],["overflow.io/services/oembed",["overflow.io/s/*","overflow.io/embed/*"]],["core.oz.com/oembed",["www.oz.com/*/video/*"]],["padlet.com/oembed/",["padlet.com/*"]],["api-v2.pandavideo.com.br/oembed",["*.tv.pandavideo.com.br/embed/?v=*","*.tv.pandavideo.com.br/*/playlist.m3u8","dashboard.pandavideo.com.br/#/videos/*"]],["www.pastery.net/oembed",["pastery.net/*","pastery.net/*","www.pastery.net/*","www.pastery.net/*"]],["api.picturelfy.com/service/oembed/",["www.picturelfy.com/p/*","www.picturelfy.com/p/*"]],["builder.pikasso.xyz/api/oembed",["*.builder.pikasso.xyz/embed/*"]],["beta.pingvp.com.kpnis.nl/p/oembed.php",[]],["tools.pinpoll.com/oembed",["tools.pinpoll.com/embed/*"]],["www.pinterest.com/oembed.json",["www.pinterest.com/*"]],["player.pitchhub.com/en/public/oembed",["player.pitchhub.com/en/public/player/*"]],["store.pixdor.com/oembed",["store.pixdor.com/place-marker-widget/*/show","store.pixdor.com/map/*/show"]],["app.plusdocs.com/oembed",["app.plusdocs.com/*/snapshots/*","app.plusdocs.com/*/pages/edit/*","app.plusdocs.com/*/pages/share/*"]],["api.podbean.com/v1/oembed",["*.podbean.com/e/*","*.podbean.com/e/*"]],["polldaddy.com/oembed/",["*.polldaddy.com/s/*","*.polldaddy.com/poll/*","*.polldaddy.com/ratings/*"]],["api.portfolium.com/oembed",["portfolium.com/entry/*"]],["gateway.cobalt.run/present/decks/oembed",["present.do/decks/*"]],["prezi.com/v/oembed",["prezi.com/v/*","*.prezi.com/v/*"]],["qtpi.gg/fashion/oembed",["qtpi.gg/fashion/*"]],["www.quiz.biz/api/oembed",["www.quiz.biz/quizz-*.html"]],["www.quizz.biz/api/oembed",["www.quizz.biz/quizz-*.html"]],["oembed.radiopublic.com/oembed",["play.radiopublic.com/*","radiopublic.com/*","www.radiopublic.com/*","play.radiopublic.com/*","radiopublic.com/*","www.radiopublic.com/*","*.radiopublic.com/*"]],["pub.raindrop.io/api/oembed",["raindrop.io/*","raindrop.io/*/*","raindrop.io/*/*/*","raindrop.io/*/*/*/*"]],["animatron.com/oembed",["www.rcvis.com/v/*","www.rcvis.com/visualize=*","www.rcvis.com/ve/*","www.rcvis.com/visualizeEmbedded=*"]],["www.reddit.com/oembed",["reddit.com/r/*/comments/*/*","www.reddit.com/r/*/comments/*/*"]],["publisher.releasewire.com/oembed/",["rwire.com/*"]],["replit.com/data/oembed",["repl.it/@*/*","replit.com/@*/*"]],["www.reverbnation.com/oembed",["www.reverbnation.com/*","www.reverbnation.com/*/songs/*"]],["roomshare.jp/en/oembed.{format}",["roomshare.jp/post/*","roomshare.jp/en/post/*"]],["roosterteeth.com/oembed",["roosterteeth.com/*"]],["embed.runkit.com/oembed",["embed.runkit.com/*,","embed.runkit.com/*,"]],["octopus.saooti.com/oembed",["octopus.saooti.com/main/pub/podcast/*"]],["videos.sapo.pt/oembed",["videos.sapo.pt/*"]],["api.screen9.com/oembed",["console.screen9.com/*","*.screen9.tv/*"]],["api.screencast.com/external/oembed",["www.screencast.com/*"]],["www.screenr.com/api/oembed.{format}",["www.screenr.com/*/"]],["scribblemaps.com/api/services/oembed.{format}",["www.scribblemaps.com/maps/view/*","www.scribblemaps.com/maps/view/*","scribblemaps.com/maps/view/*","scribblemaps.com/maps/view/*"]],["www.scribd.com/services/oembed/",["www.scribd.com/doc/*"]],["embed.sendtonews.com/services/oembed",["embed.sendtonews.com/oembed/*"]],["shoudio.com/api/oembed",["shoudio.com/*","shoud.io/*"]],["api.getshow.io/oembed.{format}",["app.getshow.io/iframe/*","*.getshow.io/share/*"]],["showtheway.io/oembed",["showtheway.io/to/*"]],["simplecast.com/oembed",["simplecast.com/s/*"]],["onsizzle.com/oembed",["onsizzle.com/i/*"]],["sketchfab.com/oembed",["sketchfab.com/*models/*","sketchfab.com/*models/*","sketchfab.com/*/folders/*"]],["www.slideshare.net/api/oembed/2",["www.slideshare.net/*/*","www.slideshare.net/*/*","fr.slideshare.net/*/*","fr.slideshare.net/*/*","de.slideshare.net/*/*","de.slideshare.net/*/*","es.slideshare.net/*/*","es.slideshare.net/*/*","pt.slideshare.net/*/*","pt.slideshare.net/*/*"]],["smashnotes.com/services/oembed",["smashnotes.com/p/*","smashnotes.com/p/*/e/*-smashnotes.com/p/*/e/*/s/*"]],["open.smeme.com/api/oembed",["open.smeme.com/*"]],["www.smrthi.com/api/oembed",["www.smrthi.com/book/*"]],["api.smugmug.com/services/oembed/",["*.smugmug.com/*","*.smugmug.com/*"]],["www.socialexplorer.com/services/oembed/",["www.socialexplorer.com/*/explore","www.socialexplorer.com/*/view","www.socialexplorer.com/*/edit","www.socialexplorer.com/*/embed"]],["soundcloud.com/oembed",["soundcloud.com/*","soundcloud.com/*","on.soundcloud.com/*","soundcloud.app.goog.gl/*"]],["speakerdeck.com/oembed.json",["speakerdeck.com/*/*","speakerdeck.com/*/*"]],["open.spotify.com/oembed",["open.spotify.com/*","spotify:*"]],["api.spotlightr.com/getOEmbed",["*.spotlightr.com/watch/*","*.spotlightr.com/publish/*","*.cdn.spotlightr.com/watch/*","*.cdn.spotlightr.com/publish/*"]],["api.spreaker.com/oembed",["*.spreaker.com/*","*.spreaker.com/*"]],["sproutvideo.com/oembed.{format}",["sproutvideo.com/videos/*","*.vids.io/videos/*"]],["purl.stanford.edu/embed.{format}",["purl.stanford.edu/*"]],["api.streamable.com/oembed.json",["streamable.com/*","streamable.com/*"]],["streamio.com/api/v1/oembed",["s3m.io/*","23m.io/*"]],["subscribi.io/api/oembed",["subscribi.io/api/oembed*"]],["www.sudomemo.net/oembed",["www.sudomemo.net/watch/*","www.sudomemo.net/watch/*","flipnot.es/*","flipnot.es/*"]],["www.sutori.com/api/oembed",["www.sutori.com/story/*"]],["sway.com/api/v1.0/oembed",["sway.com/*","www.sway.com/*"]],["sway.office.com/api/v1.0/oembed",["sway.office.com/*"]],["69jr5v75rc.execute-api.eu-west-1.amazonaws.com/prod/v2/oembed",["share.synthesia.io/*"]],["www.ted.com/services/v1/oembed.{format}",["ted.com/talks/*","ted.com/talks/*","www.ted.com/talks/*"]],["www.nytimes.com/svc/oembed/json/",["www.nytimes.com/svc/oembed","nytimes.com/*","*.nytimes.com/*"]],["theysaidso.com/extensions/oembed/",["theysaidso.com/image/*"]],["www.tickcounter.com/oembed",["www.tickcounter.com/countdown/*","www.tickcounter.com/countup/*","www.tickcounter.com/ticker/*","www.tickcounter.com/worldclock/*","www.tickcounter.com/countdown/*","www.tickcounter.com/countup/*","www.tickcounter.com/ticker/*","www.tickcounter.com/worldclock/*"]],["www.tiktok.com/oembed",["www.tiktok.com/*","www.tiktok.com/*/video/*"]],["widget.toornament.com/oembed",["www.toornament.com/tournaments/*/information","www.toornament.com/tournaments/*/registration/","www.toornament.com/tournaments/*/matches/schedule","www.toornament.com/tournaments/*/stages/*/"]],["www.topy.se/oembed/",["www.topy.se/image/*"]],["app-test.totango.com/oembed",["app-test.totango.com/*"]],["trinitymedia.ai/player/trinity-oembed",["trinitymedia.ai/player/*","trinitymedia.ai/player/*"]],["www.tumblr.com/oembed/1.0",["*.tumblr.com/post/*"]],["www.tuxx.be/services/oembed",["www.tuxx.be/*"]],["play.tvcf.co.kr/rest/oembed",["play.tvcf.co.kr/*","*.tvcf.co.kr/*"]],["twinmotion.unrealengine.com/oembed",["twinmotion.unrealengine.com/presentation/*","twinmotion.unrealengine.com/panorama/*"]],["publish.twitter.com/oembed",["twitter.com/*","twitter.com/*/status/*","*.twitter.com/*/status/*"]],["play.typecast.ai/oembed",["play.typecast.ai/s/*","play.typecast.ai/e/*","play.typecast.ai/*"]],["typlog.com/oembed",[]],["uapod.univ-antilles.fr/oembed",["uapod.univ-antilles.fr/video/*"]],["map.cam.ac.uk/oembed/",["map.cam.ac.uk/*"]],["mediatheque.univ-paris1.fr/oembed",["mediatheque.univ-paris1.fr/video/*"]],["pod.u-pec.fr/oembed",["pod.u-pec.fr/video/*"]],["www.ustream.tv/oembed",["*.ustream.tv/*","*.ustream.com/*"]],["api.veer.tv/oembed",["veer.tv/videos/*"]],["api.veervr.tv/oembed",["veervr.tv/videos/*"]],["www.vevo.com/oembed",["www.vevo.com/*","www.vevo.com/*"]],["videfit.com/oembed",["videfit.com/videos/*"]],["api.vidyard.com/dashboard/v1.1/oembed",["*.vidyard.com/*","*.vidyard.com/*","*.hubs.vidyard.com/*","*.hubs.vidyard.com/*"]],["vimeo.com/api/oembed.{format}",["vimeo.com/*","vimeo.com/album/*/video/*","vimeo.com/channels/*/*","vimeo.com/groups/*/videos/*","vimeo.com/ondemand/*/*","player.vimeo.com/video/*"]],["www.viously.com/oembed",["www.viously.com/*/*"]],["vizydrop.com/oembed",["vizydrop.com/shared/*"]],["vlipsy.com/oembed",["vlipsy.com/*"]],["www.vlive.tv/oembed",["www.vlive.tv/video/*"]],["embed.vouchfor.com/v1/oembed",["*.vouchfor.com/*"]],["data.voxsnap.com/oembed",["article.voxsnap.com/*/*"]],["embed.wave.video/oembed",["watch.wave.video/*","embed.wave.video/*"]],["play.wecandeo.com/oembed/",["play.wecandeo.com/video/v/*"]],["whimsical.com/api/oembed",["whimsical.com/*"]],["fast.wistia.com/oembed.{format}",["fast.wistia.com/embed/iframe/*","fast.wistia.com/embed/playlists/*","*.wistia.com/medias/*"]],["app.wizer.me/api/oembed.{format}",["*.wizer.me/learn/*","*.wizer.me/preview/*"]],["wokwi.com/api/oembed",["wokwi.com/share/*"]],["www.wolframcloud.com/oembed",["*.wolframcloud.com/*"]],["public-api.wordpress.com/oembed/",["wordpress.com/*","wordpress.com/*","*.wordpress.com/*","*.wordpress.com/*","*.*.wordpress.com/*","*.*.wordpress.com/*","wp.me/*","wp.me/*"]],["www.youtube.com/oembed",["*.youtube.com/watch*","*.youtube.com/v/*","youtu.be/*","*.youtube.com/playlist?list=*","youtube.com/playlist?list=*","*.youtube.com/shorts*"]],["app.zeplin.io/embed",["app.zeplin.io/project/*/screen/*","app.zeplin.io/project/*/screen/*/version/*","app.zeplin.io/project/*/styleguide/components?coid=*","app.zeplin.io/styleguide/*/components?coid=*"]],["app.zingsoft.com/oembed",["app.zingsoft.com/embed/*","app.zingsoft.com/view/*"]],["api.znipe.tv/v3/oembed/",["*.znipe.tv/*"]],["srv2.zoomable.ca/oembed",["srv2.zoomable.ca/viewer.php*"]]]')})),a("jIE8R");