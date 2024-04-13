import{S as n,i as d}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const i=document.querySelector(".js-gallery"),u=document.querySelector(".js-form"),c=document.querySelector(".js-loader"),h=document.querySelector(".js-search-input");function f(a){const r="39798508-185d62676ae5604e87a61a702",e="https://pixabay.com/api",l=new URLSearchParams({key:r,q:a,image_type:"photo",orientation:"portrait",safesearch:!0});return fetch(`${e}/?${l}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function m(a){function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}return a.map(e=>`<li class="gallery-item">
          <div class="image-container">
            <a class="gallery-link" href="${e.largeImageURL}">
              <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" data-source="${e.largeImageURL}">
            </a>
          </div>
          <div class="gallery-tags">
            <h2 class="gallery-tags-header">${r(e.tags)}</h2>
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
      </li>`).join("")}function y(){c.classList.remove("is-hidden")}function p(){c.classList.add("is-hidden")}const g=new n(".gallery a",{captionsData:"alt",captionDelay:250});u.addEventListener("submit",L);function L(a){a.preventDefault();const r=a.currentTarget.elements.search.value.trim();y(),i.innerHTML="",console.log(r),f(r).then(e=>{if(!r||e.hits.length===0)return d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:330});i.innerHTML=m(e.hits),g.refresh(),console.log(e.hits)}).catch(e=>{console.log(e)}).finally(()=>{p()}),h.value=""}
//# sourceMappingURL=commonHelpers.js.map
