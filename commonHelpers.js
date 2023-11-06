import{a as S,i as d,S as v}from"./assets/vendor-e099cd03.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const E="40477492-fb7a942987769cd06fc4fed72",q="https://pixabay.com/api/",P=40,k=S.create({baseURL:q,params:{key:E,image_type:"photo",orientation:"horizontal",safesearch:!0}}),_=async(e,r=1,s=20)=>{const n=await k.get("",{params:{q:e,page:r,per_page:s}}),{hits:t,totalHits:o}=n.data;return{list:t,total:o}};d.settings({timeout:4e3,position:"topRight",maxWidth:"400px"});const b=e=>{d.warning({title:"Attention!",message:e})},$=e=>{d.error({title:"Error!",message:e})},A=e=>{d.success({title:"Success!",message:e})},c={emptyList:e=>{b(e||"Sorry, there are no images matching your search query. Please try again.")},endCollection:e=>{b(e||"We're sorry, but you've reached the end of search results.")},fetchError:e=>{$(e||"Sorry. Something went wrong while fetching!")},foundTotal:e=>{A(`Hooray! We found ${e} images.`)}};function C(e,{initialPage:r,limit:s,initialQuery:n,initialList:t,loader:o,smoothScroll:a,loadMore:h}){let l=r||1,f=n||"",p=t||[],y=null;async function m(){if(f)try{o&&o.start(),h.hide();const i=await _(f,l,s);console.log("data",i),p.push(...i.list),y=i.total;const g=s*l>=y;i.list.length===0?c.emptyList():g?c.endCollection():l===1&&c.foundTotal(y),e(p),g||h.show(),a&&a()}catch{c.fetchError()}finally{o&&o.stop()}}return{getPage(){return l},increasePage(){l+=1,m()},resetPage(){l=r||1},setQuery(i){this.resetPage(),this.clearList(),f=i,m()},clearList(){p=[]}}}function M(e){return e.map(x).join("")}function x({largeImageURL:e,tags:r,likes:s,views:n,comments:t,downloads:o,webformatURL:a}){return`
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
</div>`}const R=document.querySelector(".search"),L=document.querySelector(".gallery"),u=document.querySelector(".load-more"),H=new v(".gallery a",{showCounter:!1}),w=C(T,{limit:P,loader:B(),smoothScroll:G,loadMore:I()});R.addEventListener("submit",e=>{e.preventDefault();const r=e.target.elements.searchQuery.value.trim();w.setQuery(r)});u.addEventListener("click",()=>{w.increasePage()});function T(e){const r=M(e);L.innerHTML="",L.insertAdjacentHTML("beforeend",r),H.refresh()}function B(){const e=document.querySelector(".loader");return e.style.display="none",{start(){e.style.display="block"},stop(){e.style.display="none"}}}function G(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}function I(){return u.style.display="none",{show(){u.style.display="block"},hide(){u.style.display="none"}}}
//# sourceMappingURL=commonHelpers.js.map
