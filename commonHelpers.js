import{a as y,S as L,i as u}from"./assets/vendor-09d7c26e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();const h=document.querySelector(".js-gallery"),v=document.querySelector(".js-form"),m=document.querySelector(".js-loader");document.querySelector(".js-search-input");const c=document.querySelector(".js-button-load");async function g(r,s){const e="39798508-185d62676ae5604e87a61a702",i="https://pixabay.com/api",t=new URLSearchParams({key:e,q:r,image_type:"photo",orientation:"portrait",safesearch:!0,page:s,per_page:15});try{return(await y.get(`${i}/?${t}`)).data}catch(a){console.log(a)}}function f(r){function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}return r.map(e=>`<li class="gallery-item">
          <div class="image-container">
            <a class="gallery-link" href="${e.largeImageURL}">
              <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" data-source="${e.largeImageURL}">
            </a>
          </div>

          <div class="gallery-tags">
            <h2 class="gallery-tags-header">${s(e.tags)}</h2>
          </div>

          <div class="desc-container">
            <ul class="list-data">
                <li class="desc-item">
                    <h3 class="gallery-header">Likes</h3>
                    <p class="gallery-text">${e.likes}</p>
                </li>
                <li class="desc-item">
                    <h3 class="gallery-header">Views</h3>
                    <p class="gallery-text">${e.views}</p>
                </li>
                <li class="desc-item">
                    <h3 class="gallery-header">Comments</h3>
                    <p class="gallery-text">${e.comments}</p>
                </li>
                <li class="desc-item">
                    <h3 class="gallery-header">Downloads</h3>
                    <p class="gallery-text">${e.downloads}</p>
                </li>
            </ul>
          </div>
      </li>`).join("")}function b(){m.classList.remove("is-hidden")}function w(){m.classList.add("is-hidden")}const p=new L(".gallery a",{captionsData:"alt",captionDelay:250});let n=1,o=null,l=0;v.addEventListener("submit",S);c.addEventListener("click",$);function S(r){r.preventDefault(),b(),o=r.currentTarget.elements.search.value.trim(),h.innerHTML="",l=0,n=1,g(o,n).then(s=>{if(!o||s.hits.length===0)return u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:300});h.innerHTML=f(s.hits),s.totalHits>l?c.classList.remove("is-hidden"):c.classList.add("is-hidden"),p.refresh()}).catch(s=>{console.log(s)}).finally(()=>{w()}),r.currentTarget.elements.search.value=""}function $(){n+=1,g(o,n).then(r=>{const s=r.totalHits-l,e=Math.min(r.hits.length,s);h.insertAdjacentHTML("beforeend",f(r.hits.slice(0,e))),l+=e;const{height:i}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:i*2.2,behavior:"smooth"}),l>=r.totalHits&&(c.classList.add("is-hidden"),u.warning({message:`You have reached the maximum limit of images (${l}).`,position:"topRight"})),p.refresh()})}
//# sourceMappingURL=commonHelpers.js.map
