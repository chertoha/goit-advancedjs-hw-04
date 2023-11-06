import{a as f,S as d}from"./assets/vendor-7ef20b6d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m="40477492-fb7a942987769cd06fc4fed72",y="https://pixabay.com/api/",g=20,h=f.create({baseURL:y,params:{key:m,image_type:"photo",orientation:"horizontal",safesearch:!0}}),b=async(o,r=1,n=20)=>(await h.get("",{params:{q:o,page:r,per_page:n}})).data;function L(o,{initialPage:r,limit:n,initialQuery:a,initialList:e}){let t=r||1,s=a||"",c=e||[];async function l(){if(s)try{const i=await b(s,t,n);console.log("DATA",i),c.push(...i.hits),o(c)}catch(i){console.log("error",i)}}return{getPage(){return t},increasePage(){t+=1,l()},resetPage(){t=r||1},setQuery(i){s!==i&&(this.resetPage(),this.clearList()),s=i,l()},clearList(){c=[]}}}function v(o){return o.map(P).join("")}function P({largeImageURL:o,tags:r,likes:n,views:a,comments:e,downloads:t,webformatURL:s}){return`
  <div class="photo-card">
    <a class="photo-card__link" href="${o}">
        <img class="photo-card__img" src="${s}" alt="${r}" loading="lazy" />
    </a>    
    <div class="info">
        <p class="info-item">
            <b>Likes</b><span>${n}</span>
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
</div>`}const _=document.querySelector(".search"),u=document.querySelector(".gallery"),A=document.querySelector(".load-more"),S=new d(".gallery a",{showCounter:!1}),p=L(k,{limit:g});_.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements.searchQuery.value.trim();p.setQuery(r)});A.addEventListener("click",()=>{p.increasePage()});function k(o){const r=v(o);u.innerHTML="",u.insertAdjacentHTML("beforeend",r),S.refresh()}
//# sourceMappingURL=commonHelpers.js.map
