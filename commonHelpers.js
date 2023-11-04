import{a as i,S as l}from"./assets/vendor-7ef20b6d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c="40477492-fb7a942987769cd06fc4fed72",p="https://pixabay.com/api/",u=i.create({baseURL:p,params:{key:c,image_type:"photo",orientation:"horizontal",safesearch:!0}}),f=async o=>(await u.get("",{params:{q:o}})).data;new l(".gallery a",{showCounter:!1});const d=document.querySelector(".search"),m=document.querySelector(".gallery");d.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements.searchQuery.value.trim();f(s).then(r=>{console.log("",r),y(r.hits)}).catch(r=>{console.log(r)})});function y(o){const s=o.map(g).join("");m.insertAdjacentHTML("afterbegin",s)}function g({largeImageURL:o,tags:s,previewURL:r,likes:a,views:e,comments:t,downloads:n}){return`
  <div class="photo-card">
    <a class="gallery__link" href="${o}">
        <img clasas="gallery__img" src="${r}" alt="${s}" loading="lazy" />
    </a>
    
    <div class="info">
        <p class="info-item">
            <b>Likes <span>${a}</span></b>
        </p>
            <p class="info-item">
        <b>Views <span>${e}</span></b>
        </p>
        <p class="info-item">
            <b>Comments <span>${t}</span></b>
        </p>
        <p class="info-item">
            <b>Downloads <span>${n}</span></b>
        </p>
    </div>
</div`}
//# sourceMappingURL=commonHelpers.js.map
