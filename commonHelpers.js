import{a as L,i as d,S as w}from"./assets/vendor-e099cd03.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const S="40477492-fb7a942987769cd06fc4fed72",v="https://pixabay.com/api/",E=40,q=L.create({baseURL:v,params:{key:S,image_type:"photo",orientation:"horizontal",safesearch:!0}}),P=async(e,r=1,s=20)=>{const n=await q.get("",{params:{q:e,page:r,per_page:s}}),{hits:t,totalHits:o}=n.data;return{list:t,total:o}};d.settings({timeout:4e3,position:"topRight",maxWidth:"400px"});const g=e=>{d.warning({title:"Attention!",message:e})},_=e=>{d.error({title:"Error!",message:e})},k=e=>{d.success({title:"Success!",message:e})},u={emptyList:e=>{g(e||"Sorry, there are no images matching your search query. Please try again.")},endCollection:e=>{g(e||"We're sorry, but you've reached the end of search results.")},fetchError:e=>{_(e||"Sorry. Something went wrong while fetching!")},foundTotal:e=>{k(`Hooray! We found ${e} images.`)}};function $(e,{initialPage:r,limit:s,initialQuery:n,initialList:t,loader:o,smoothScroll:a}){let l=r||1,f=n||"",p=t||[],y=null;const c=o||null;async function m(){if(f)try{c&&c.start();const i=await P(f,l,s);console.log("data",i),p.push(...i.list),y=i.total,console.log("page",l),i.list.length===0?u.emptyList():s*l>=y?u.endCollection():u.foundTotal(y),e(p),a&&a()}catch(i){console.log("error",i),u.fetchError()}finally{c&&c.stop()}}return{getPage(){return l},increasePage(){l+=1,m()},resetPage(){l=r||1},setQuery(i){this.resetPage(),this.clearList(),f=i,m()},clearList(){p=[]}}}function A(e){return e.map(x).join("")}function x({largeImageURL:e,tags:r,likes:s,views:n,comments:t,downloads:o,webformatURL:a}){return`
  <div class="photo-card">
    <a class="photo-card__link" href="${e}">
        <img class="photo-card__img" src="${a}" alt="${r}" loading="lazy" />
    </a>    
    <div class="info">
        <p class="info-item">
            <b>Likes</b><span>${s}</span>
        </p>
        <p class="info-item">
            <b>Views</b><span>${n}</span>
        </p>
        <p class="info-item">
            <b>Comments</b><span>${t}</span>
        </p>
        <p class="info-item">
            <b>Downloads</b><span>${o}</span>
        </p>
    </div>
</div>`}const C=document.querySelector(".search"),h=document.querySelector(".gallery"),M=document.querySelector(".load-more"),R=new w(".gallery a",{showCounter:!1}),b=$(H,{limit:E,loader:I(),smoothScroll:T});C.addEventListener("submit",e=>{e.preventDefault();const r=e.target.elements.searchQuery.value.trim();b.setQuery(r)});M.addEventListener("click",()=>{b.increasePage()});function H(e){const r=A(e);h.innerHTML="",h.insertAdjacentHTML("beforeend",r),R.refresh()}function I(){const e=document.querySelector(".loader");return e.style.display="none",{start(){e.style.display="block"},stop(){e.style.display="none"}}}function T(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
