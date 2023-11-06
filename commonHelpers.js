import{a as i,S as c}from"./assets/vendor-7ef20b6d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l="40477492-fb7a942987769cd06fc4fed72",p="https://pixabay.com/api/",f=i.create({baseURL:p,params:{key:l,image_type:"photo",orientation:"horizontal",safesearch:!0}}),u=async r=>(await f.get("",{params:{q:r}})).data;function d(r){return r.map(m).join("")}function m({largeImageURL:r,tags:o,likes:s,views:a,comments:e,downloads:t,webformatURL:n}){return`
  <div class="photo-card">
    <a class="photo-card__link" href="${r}">
        <img class="photo-card__img" src="${n}" alt="${o}" loading="lazy" />
    </a>    
    <div class="info">
        <p class="info-item">
            <b>Likes</b><span>${s}</span>
        </p>
        <p class="info-item">
            <b>Views</b><span>${a}</span>
        </p>
        <p class="info-item">
            <b>Comments</b><span>${e}</span>
        </p>
        <p class="info-item">
            <b>Downloads</b><span>${t}</span>
        </p>
    </div>
</div>`}const h=document.querySelector(".search"),y=document.querySelector(".gallery"),g=new c(".gallery a",{showCounter:!1});h.addEventListener("submit",r=>{r.preventDefault(),r.target.elements.searchQuery.value.trim(),u("cat").then(o=>{console.log("",o);const s=d(o.hits);y.insertAdjacentHTML("afterbegin",s),g.refresh()}).catch(o=>{console.log(o)})});
//# sourceMappingURL=commonHelpers.js.map
