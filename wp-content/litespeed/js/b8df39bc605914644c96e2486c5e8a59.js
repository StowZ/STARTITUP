window._wpemojiSettings={"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.1.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.1.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/startitup.tn\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.9.3"}};
/*! This file is auto-generated */
!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode;p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0);e=i.toDataURL();return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(!p||!p.fillText)return!1;switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([10084,65039,8205,55357,56613],[10084,65039,8203,55357,56613])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLiteSpeedLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(n=t.source||{}).concatemoji?c(n.concatemoji):n.wpemoji&&n.twemoji&&(c(n.twemoji),c(n.wpemoji)))}(window,document,window._wpemojiSettings)
;(function(url){if(/(?:Chrome\/26\.0\.1410\.63 Safari\/537\.31|WordfenceTestMonBot)/.test(navigator.userAgent)){return}
var addEvent=function(evt,handler){if(window.addEventListener){document.addEventListener(evt,handler,!1)}else if(window.attachEvent){document.attachEvent('on'+evt,handler)}};var removeEvent=function(evt,handler){if(window.removeEventListener){document.removeEventListener(evt,handler,!1)}else if(window.detachEvent){document.detachEvent('on'+evt,handler)}};var evts='contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop keydown keypress keyup mousedown mousemove mouseout mouseover mouseup mousewheel scroll'.split(' ');var logHuman=function(){if(window.wfLogHumanRan){return}
window.wfLogHumanRan=!0;var wfscr=document.createElement('script');wfscr.type='text/javascript';wfscr.async=!0;wfscr.src=url+'&r='+Math.random();(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(wfscr);for(var i=0;i<evts.length;i++){removeEvent(evts[i],logHuman)}};for(var i=0;i<evts.length;i++){addEvent(evts[i],logHuman)}})('//startitup.tn/?wordfence_lh=1&hid=881B655B87F2080B060C4F3104257DB7')
;var NeveProperties={"ajaxurl":"https:\/\/startitup.tn\/wp-admin\/admin-ajax.php","nonce":"5f266a386f","isRTL":"","isCustomize":""}
;!function(){"use strict";const e=(e,t,n)=>{(e instanceof NodeList?e:[e]).forEach(e=>e.addEventListener(t,t=>n(t,e)))},t=(e,t)=>{r(e,t,"toggle")},n=(e,t)=>{r(e,t,"add")},o=(e,t)=>{r(e,t,"remove")},r=(e,t,n)=>{const o=t.split(" ");(e instanceof NodeList?e:[e]).forEach(e=>e.classList[n].apply(e.classList,o))};let i=null,c=2;const s=()=>{const{masonryStatus:e,masonryColumns:t,blogLayout:n}=NeveProperties;"enabled"!==e||t<2||(i=document.querySelector(".nv-index-posts .posts-wrapper"),null!==i&&imagesLoaded(i,()=>{window.nvMasonry=new Masonry(i,{itemSelector:"article.layout-"+n,columnWidth:"article.layout-"+n,percentPosition:!0})}))},u=()=>{"enabled"===NeveProperties.infScroll&&null!==document.querySelector(".nv-index-posts .posts-wrapper")&&((e,t,n=.5)=>{if(!e)return;new IntersectionObserver(o=>{if(o[0].intersectionRatio<=n)return;t();const r=setInterval(()=>{const n=e.getBoundingClientRect(),{top:o,left:i,right:c,bottom:s}=n,{innerWidth:u,innerHeight:a}=window;o>=0&&i>=0&&c<=u&&s<=a?t():clearInterval(r)},750)}).observe(e)})(document.querySelector(".infinite-scroll-trigger"),()=>{if(parent&&parent.wp&&parent.wp.customize)return parent.wp.customize.requestChangesetUpdate().then(()=>{a()}),!1;a()})},a=()=>{const e=document.querySelector(".infinite-scroll-trigger");if(null===e)return;if(document.querySelector(".nv-loader").style.display="block",c>NeveProperties.maxPages)return e.parentNode.removeChild(e),void(document.querySelector(".nv-loader").style.display="none");const t=document.querySelector(".nv-index-posts .posts-wrapper"),n=NeveProperties.lang,o=NeveProperties.endpoint+c,r=l(n?o+"/"+n:o);c++,((e,t,n)=>{const o=new XMLHttpRequest;o.onload=()=>{4===o.readyState&&200===o.status&&t(o.response)},o.onerror=()=>{},o.open("POST",e,!0),o.setRequestHeader("Content-Type","application/json; charset=UTF-8"),o.send(n)})(r,e=>{if(t.innerHTML+=JSON.parse(e),"enabled"!==NeveProperties.masonryStatus)return!1;window.nvMasonry.reloadItems(),window.nvMasonry.layout()},NeveProperties.query)},l=e=>"undefined"==typeof wp||void 0===wp.customize?e:(e+="?customize_changeset_uuid="+wp.customize.settings.changeset.uuid+"&customize_autosaved=on","undefined"==typeof _wpCustomizeSettings?e:e+="&customize_preview_nonce="+_wpCustomizeSettings.nonce.preview),d=["dropdown-open","active","nav-clickaway-overlay"],m=()=>{p(),document.addEventListener("click",(function(e){e.target.hash&&e.target.hash.includes("#")&&window.HFG.toggleMenuSidebar(!1)})),v(),g(),w(),window.HFG.initSearch=function(){g(),v()}},p=()=>{const{isRTL:e}=NeveProperties,t=document.querySelectorAll(".sub-menu, .minimal .nv-nav-search")||[];if(0===t.length)return;const n=window.innerWidth;t.forEach(t=>{const o=t.getBoundingClientRect(),r=o.left;r<0&&(t.style.right=e?"-100%":"auto",t.style.left=e?"auto":0),r+o.width>=n&&(t.style.right=e?0:"100%",t.style.left="auto")}),"undefined"!=typeof menuCalcEvent&&window.dispatchEvent(menuCalcEvent)};function v(){const t=document.querySelectorAll(".caret-wrap");e(t,"click",y),e(t,"keyup",y)}function y(e,n){if(e.preventDefault(),e.stopPropagation(),e.keyCode&&![9,13].includes(e.keyCode))return;const o=n.parentNode.parentNode.querySelector(".sub-menu");t(n,d[0]),t(o,d[0]),b(document.querySelectorAll("."+d[0]),d[0])}let f={};function h(e){const t=f.elements||function(e=document){return f.elements=[...e.querySelectorAll('a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])')].filter(e=>!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")),f.elements}(f.container),n=9===e.keyCode,o=e.shiftKey,r=27===e.keyCode,i=document.activeElement,c=t[t.length-1],s=t[0];r&&(e.preventDefault(),f.container.querySelector(f.close).click(),f.backFocus.focus(),document.dispatchEvent(new CustomEvent("nv-focus-trap-end"))),!o&&n&&c===i&&(e.preventDefault(),s.focus()),o&&n&&s===i&&(e.preventDefault(),c.focus()),n&&s===c&&e.preventDefault()}function g(){const n=document.querySelectorAll(".nv-nav-search")||[],r=document.querySelectorAll(".menu-item-nav-search")||[],i=document.querySelectorAll(".close-responsive-search")||[];e(r,"click",(e,n)=>{e.preventDefault(),e.stopPropagation(),t(n,d[1]),b(n,d[1]),document.dispatchEvent(new CustomEvent("nv-focus-trap-start",{detail:{container:n.querySelector(".nv-nav-search"),close:".close-responsive-search",firstFocus:".search-field",backFocus:n}}))}),e(n,"click",e=>{e.stopPropagation()}),e(i,"click",e=>{e.preventDefault(),o(r,d[1]);const t=document.querySelector("."+d[2]);null!==t&&t.parentNode.removeChild(t)})}function w(){const e=document.querySelector(".header--row .menu-item-nav-cart");if(null===e)return;const t=e.querySelector(".nv-nav-cart:not(.cart-off-canvas)");null!==t&&(t.style.left=e.getBoundingClientRect().left<350?0:null)}function b(e,t){let r=document.querySelector("."+d[2]);null!==r&&r.parentNode.removeChild(r),r=document.createElement("div"),n(r,d[2]);const i=document.querySelector("header.header");i.parentNode.insertBefore(r,i),r.addEventListener("click",()=>{o(e,t),r.parentNode.removeChild(r)})}document.addEventListener("nv-focus-trap-start",(function(e){f=e.detail,setTimeout(()=>{f.container.querySelector(f.firstFocus).focus()},100),document.addEventListener("keydown",h)})),document.addEventListener("nv-focus-trap-end",(function(){f={},document.removeEventListener("keydown",h)})),window.addEventListener("resize",w);const S=".close-sidebar-panel .navbar-toggle",q=function(){this.options={menuToggleDuration:300},this.init()};function E(){window.HFG=new q,(()=>{if(null===document.querySelector(".blog.nv-index-posts"))return!1;s(),u()})(),m()}function k(){p()}let C;q.prototype.init=function(t=!1){if(!1===t){const t=document.querySelectorAll(S);e(t,"click",()=>{this.toggleMenuSidebar(!1)})}const n=document.querySelectorAll(".menu-mobile-toggle");e(n,"click",e=>{this.toggleMenuSidebar(!0,e.target)});const o=document.querySelector(".header-menu-sidebar-overlay");o&&e(o,"click",function(){this.toggleMenuSidebar(!1)}.bind(this))},q.prototype.toggleMenuSidebar=function(e,t=null){const r=document.querySelectorAll(".menu-mobile-toggle");if(o(document.body,"hiding-header-menu-sidebar"),!NeveProperties.isCustomize&&document.body.classList.contains("is-menu-sidebar")||!1===e){const e=document.querySelector(".nav-clickaway-overlay");null!==e&&e.parentNode.removeChild(e),n(document.body,"hiding-header-menu-sidebar"),o(document.body,"is-menu-sidebar"),o(r,"is-active"),setTimeout(function(){o(document.body,"hiding-header-menu-sidebar")}.bind(this),1e3)}else n(document.body,"is-menu-sidebar"),n(r,"is-active"),t&&document.dispatchEvent(new CustomEvent("nv-focus-trap-start",{detail:{container:document.getElementById("header-menu-sidebar"),close:S,firstFocus:S,backFocus:t}}))},window.addEventListener("load",()=>{E()}),window.addEventListener("resize",()=>{clearTimeout(C),C=setTimeout(k,500)})}()
;var html=document.documentElement;var theme=html.getAttribute('data-neve-theme')||'light';var variants={"logo":{"light":{"src":"https:\/\/startitup.tn\/wp-content\/uploads\/2022\/04\/cropped-STARTITUP-1.png","srcset":"https:\/\/startitup.tn\/wp-content\/uploads\/2022\/04\/cropped-STARTITUP-1.png 200w, https:\/\/startitup.tn\/wp-content\/uploads\/2022\/04\/cropped-STARTITUP-1-24x5.png 24w, https:\/\/startitup.tn\/wp-content\/uploads\/2022\/04\/cropped-STARTITUP-1-36x8.png 36w, https:\/\/startitup.tn\/wp-content\/uploads\/2022\/04\/cropped-STARTITUP-1-48x11.png 48w","sizes":"(max-width: 200px) 100vw, 200px"},"dark":{"src":"https:\/\/startitup.tn\/wp-content\/uploads\/2022\/04\/cropped-STARTITUP-1.png","srcset":"https:\/\/startitup.tn\/wp-content\/uploads\/2022\/04\/cropped-STARTITUP-1.png 200w, https:\/\/startitup.tn\/wp-content\/uploads\/2022\/04\/cropped-STARTITUP-1-24x5.png 24w, https:\/\/startitup.tn\/wp-content\/uploads\/2022\/04\/cropped-STARTITUP-1-36x8.png 36w, https:\/\/startitup.tn\/wp-content\/uploads\/2022\/04\/cropped-STARTITUP-1-48x11.png 48w","sizes":"(max-width: 200px) 100vw, 200px"},"same":!0}};function setCurrentTheme(theme){var pictures=document.getElementsByClassName('neve-site-logo');for(var i=0;i<pictures.length;i++){var picture=pictures.item(i);if(!picture){continue};var fileExt=picture.src.slice((Math.max(0,picture.src.lastIndexOf("."))||Infinity)+1);if(fileExt==='svg'){picture.removeAttribute('width');picture.removeAttribute('height');picture.style='width: var(--maxwidth)'}
var compId=picture.getAttribute('data-variant');if(compId&&variants[compId]){var isConditional=variants[compId].same;if(theme==='light'||isConditional||variants[compId].dark.src===!1){picture.src=variants[compId].light.src;picture.srcset=variants[compId].light.srcset||'';picture.sizes=variants[compId].light.sizes;continue};picture.src=variants[compId].dark.src;picture.srcset=variants[compId].dark.srcset||'';picture.sizes=variants[compId].dark.sizes}}};var observer=new MutationObserver(function(mutations){mutations.forEach(function(mutation){if(mutation.type=='attributes'){theme=html.getAttribute('data-neve-theme');setCurrentTheme(theme)}})});observer.observe(html,{attributes:!0})
;