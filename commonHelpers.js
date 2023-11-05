import{a as i,S as c}from"./assets/vendor-7ef20b6d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l="40477492-fb7a942987769cd06fc4fed72",p="https://pixabay.com/api/",u=i.create({baseURL:p,params:{key:l,image_type:"photo",orientation:"horizontal",safesearch:!0}}),f=async s=>(await u.get("",{params:{q:s}})).data;new c(".gallery a",{showCounter:!1});const d=document.querySelector(".search"),m=document.querySelector(".gallery");d.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements.searchQuery.value.trim();f(o).then(r=>{console.log("",r),y(r.hits)}).catch(r=>{console.log(r)})});function y(s){const o=s.map(h).join("");m.insertAdjacentHTML("afterbegin",o)}function h({largeImageURL:s,tags:o,likes:r,views:a,comments:e,downloads:t,webformatURL:n}){return`
  <div class="photo-card">
    <a class="photo-card__link" href="${s}">
        <img class="photo-card__img" src="${n}" alt="${o}" loading="lazy" />
    </a>
    
    <div class="info">
        <p class="info-item">
            <b>Likes <span>${r}</span></b>
        </p>
            <p class="info-item">
        <b>Views <span>${a}</span></b>
        </p>
        <p class="info-item">
            <b>Comments <span>${e}</span></b>
        </p>
        <p class="info-item">
            <b>Downloads <span>${t}</span></b>
        </p>
    </div>
</div>`}
//# sourceMappingURL=commonHelpers.js.map
