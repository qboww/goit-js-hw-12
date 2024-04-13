import{S as c,i as u}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const a=document.querySelector(".js-gallery"),d=document.querySelector(".js-form"),l=document.querySelector(".js-loader"),h=document.querySelector(".js-search-input");function f(s){const t="39798508-185d62676ae5604e87a61a702",o="https://pixabay.com/api",i=new URLSearchParams({key:t,q:s,image_type:"photo",orientation:"portrait",safesearch:!0});return fetch(`${o}/?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function m(s){return s.map(t=>`<li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" data-source="${t.largeImageURL}">
          </a>
          <div>
            <ul class="list-data">
                <li>
                    <h3>Likes</h3>
                    <p>${t.likes}</p>
                </li>
                <li>
                    <h3>Views</h3>
                    <p>${t.views}</p>
                </li>
                <li>
                    <h3>Comments</h3>
                    <p>${t.comments}</p>
                </li>
                <li>
                    <h3>Downloads</h3>
                    <p>${t.downloads}</p>
                </li>
            </ul>
          </div>
      </li>`).join("")}function p(){l.classList.remove("is-hidden")}function y(){l.classList.add("is-hidden")}const g=new c(".gallery a",{captionsData:"alt",captionDelay:250});d.addEventListener("submit",L);function L(s){s.preventDefault();const t=s.currentTarget.elements.search.value.trim();p(),a.innerHTML="",console.log(t),f(t).then(o=>{if(!t||o.hits.length===0)return u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:330});a.innerHTML=m(o.hits),g.refresh(),console.log(o.hits)}).catch(o=>{console.log(o)}).finally(()=>{y()}),h.value=""}
//# sourceMappingURL=commonHelpers.js.map
