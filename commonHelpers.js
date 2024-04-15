import{a as y,S as L,i as u}from"./assets/vendor-09d7c26e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const h=document.querySelector(".js-gallery"),v=document.querySelector(".js-form"),m=document.querySelector(".js-loader");document.querySelector(".js-search-input");const n=document.querySelector(".js-button-load");async function g(a,s){const e="39798508-185d62676ae5604e87a61a702",i="https://pixabay.com/api",t=new URLSearchParams({key:e,q:a,image_type:"photo",orientation:"portrait",safesearch:!0,page:s,per_page:15});try{return(await y.get(`${i}/?${t}`)).data}catch(r){console.log(r)}}function f(a){function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}return a.map(e=>`<li class="gallery-item">
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
      </li>`).join("")}function b(){m.classList.remove("is-hidden")}function w(){m.classList.add("is-hidden")}const p=new L(".gallery a",{captionsData:"alt",captionDelay:250});let l=1,o=null,c=0;v.addEventListener("submit",S);n.addEventListener("click",$);function S(a){a.preventDefault(),b(),o=a.currentTarget.elements.search.value.trim(),h.innerHTML="",c=0,l=1,g(o,l).then(s=>{if(!o||s.hits.length===0)return u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:300});h.innerHTML=f(s.hits),l===1&&n.classList.add("is-hidden"),s.total>15&&n.classList.remove("is-hidden"),p.refresh()}).catch(s=>{console.log(s)}).finally(()=>{w()}),a.currentTarget.elements.search.value=""}function $(){l+=1,g(o,l).then(a=>{const s=100-c,e=Math.min(a.hits.length,s);h.insertAdjacentHTML("beforeend",f(a.hits.slice(0,e))),c+=e;const{height:i}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:i*2.2,behavior:"smooth"}),c>=100&&(n.classList.add("is-hidden"),u.warning({message:"You have reached the maximum limit of images (100).",position:"topRight"})),p.refresh()})}
//# sourceMappingURL=commonHelpers.js.map
