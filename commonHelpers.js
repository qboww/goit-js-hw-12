import{a as y,S as m,i as u}from"./assets/vendor-f736e62a.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const h=document.querySelector(".js-gallery"),f=document.querySelector(".js-form"),p=document.querySelector(".js-loader");document.querySelector(".js-search-input");const c=document.querySelector(".js-button-load");async function L(r,a){const e="39798508-185d62676ae5604e87a61a702",o="https://pixabay.com/api",t=new URLSearchParams({key:e,q:r,image_type:"photo",orientation:"portrait",safesearch:!0,page:a,per_page:15});try{return(await y.get(`${o}/?${t}`)).data}catch(s){throw console.log(s),s}}function v(r){function a(e){return e.charAt(0).toUpperCase()+e.slice(1)}return r.map(e=>`<li class="gallery-item">
          <div class="image-container">
            <a class="gallery-link" href="${e.largeImageURL}">
              <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" data-source="${e.largeImageURL}">
            </a>
          </div>

          <div class="gallery-tags">
            <h2 class="gallery-tags-header">${a(e.tags)}</h2>
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
      </li>`).join("")}function w(){p.classList.remove("is-hidden")}function b(){p.classList.add("is-hidden")}const S=new m(".gallery a",{captionsData:"alt",captionDelay:250});let l=1,i=null,d=0;f.addEventListener("submit",$);c.addEventListener("click",x);function $(r){r.preventDefault(),w(),i=r.currentTarget.elements.search.value.trim(),d=0,l=1,h.innerHTML="",g(i,l)}async function g(r,a){try{const e=await L(r,a);if(!i||e.hits.length===0)return u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:300});h.insertAdjacentHTML("beforeend",v(e.hits)),d+=e.hits.length,e.totalHits>d?c.classList.remove("is-hidden"):(c.classList.add("is-hidden"),u.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:300})),S.refresh()}catch(e){console.log(e)}finally{b()}}function x(){l+=1,g(i,l).then(()=>{const{height:r}=document.querySelector(".gallery").lastElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})})}
//# sourceMappingURL=commonHelpers.js.map
