import{a as y,S as L,i as h}from"./assets/vendor-09d7c26e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d=document.querySelector(".js-gallery"),v=document.querySelector(".js-form"),m=document.querySelector(".js-loader");document.querySelector(".js-search-input");const u=document.querySelector(".js-button-load");async function g(a,s){const e="39798508-185d62676ae5604e87a61a702",l="https://pixabay.com/api",t=new URLSearchParams({key:e,q:a,image_type:"photo",orientation:"portrait",safesearch:!0,page:s,per_page:15});try{return(await y.get(`${l}/?${t}`)).data}catch(r){console.log(r)}}function p(a){function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}return a.map(e=>`<li class="gallery-item">
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
      </li>`).join("")}function b(){m.classList.remove("is-hidden")}function w(){m.classList.add("is-hidden")}const f=new L(".gallery a",{captionsData:"alt",captionDelay:250});let c=1,i=null,o=0;v.addEventListener("submit",S);u.addEventListener("click",$);function S(a){a.preventDefault(),b(),i=a.currentTarget.elements.search.value.trim(),d.innerHTML="",o=0,c=1,g(i,c).then(s=>{if(!i||s.hits.length===0)return h.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:300});d.innerHTML=p(s.hits),s.total>15&&u.classList.remove("is-hidden"),f.refresh()}).catch(s=>{console.log(s)}).finally(()=>{w()}),a.currentTarget.elements.search.value=""}function $(){c+=1,g(i,c).then(a=>{const s=100-o,e=Math.min(a.hits.length,s);d.insertAdjacentHTML("beforeend",p(a.hits.slice(0,e))),o+=e;const{height:l}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:l*2,behavior:"smooth"}),o>=100&&(u.classList.add("is-hidden"),h.warning({message:"You have reached the maximum limit of images (100).",position:"topRight"})),f.refresh()})}
//# sourceMappingURL=commonHelpers.js.map
