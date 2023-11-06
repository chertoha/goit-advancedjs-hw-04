import{a as i,S as c}from"./assets/vendor-7ef20b6d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l="40477492-fb7a942987769cd06fc4fed72",p="https://pixabay.com/api/",u=20,f=i.create({baseURL:p,params:{key:l,image_type:"photo",orientation:"horizontal",safesearch:!0}}),d=async(o,t=1,s=20)=>(await f.get("",{params:{q:o,page:t,per_page:s}})).data;function m(o){return o.map(g).join("")}function g({largeImageURL:o,tags:t,likes:s,views:n,comments:e,downloads:r,webformatURL:a}){return`
  <div class="photo-card">
    <a class="photo-card__link" href="${o}">
        <img class="photo-card__img" src="${a}" alt="${t}" loading="lazy" />
    </a>    
    <div class="info">
        <p class="info-item">
            <b>Likes</b><span>${s}</span>
        </p>
        <p class="info-item">
            <b>Views</b><span>${n}</span>
        </p>
        <p class="info-item">
            <b>Comments</b><span>${e}</span>
        </p>
        <p class="info-item">
            <b>Downloads</b><span>${r}</span>
        </p>
    </div>
</div>`}const h=document.querySelector(".search"),y=document.querySelector(".gallery"),b=new c(".gallery a",{showCounter:!1}),L=P();h.addEventListener("submit",o=>{o.preventDefault(),o.target.elements.searchQuery.value.trim(),d("cat",L.getPage(),u).then(t=>{console.log("",t);const s=m(t.hits);y.insertAdjacentHTML("afterbegin",s),b.refresh()}).catch(t=>{console.log(t)})});function P(o=1){let t=o;return{getPage(){return t},increasePage(){t+=1},resetPage(){t=1}}}
//# sourceMappingURL=commonHelpers.js.map
