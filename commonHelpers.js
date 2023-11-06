import{a as E,i as u,S as q}from"./assets/vendor-e099cd03.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const P="40477492-fb7a942987769cd06fc4fed72",_="https://pixabay.com/api/",x=40,C=E.create({baseURL:_,params:{key:P,image_type:"photo",orientation:"horizontal",safesearch:!0}}),$=async(e,o=1,s=20)=>{const n=await C.get("",{params:{q:e,page:o,per_page:s}}),{hits:t,totalHits:r}=n.data;return{list:t,total:r}};u.settings({timeout:4e3,position:"topRight",maxWidth:"400px",titleSize:"16px",messageSize:"16px"});const b=e=>{u.warning({title:"Attention!",message:e})},k=e=>{u.error({title:"Error!",message:e})},A=e=>{u.success({title:"Success!",message:e})},l={emptyList:e=>{b(e||"Sorry, there are no images matching your search query. Please try again.")},endCollection:e=>{b(e||"We're sorry, but you've reached the end of search results.")},fetchError:e=>{k(e||"Sorry. Something went wrong while fetching!")},foundTotal:e=>{A(`Hooray! We found ${e} images.`)}};function H(e,{initialPage:o,limit:s,initialQuery:n,initialList:t,loader:r,smoothScroll:i,loadMore:h}){let c=o||1,d=n||"",f=t||[],p=null;async function m(){if(d)try{r&&r.show(),h.hide();const a=await $(d,c,s);f.push(...a.list),p=a.total;const y=s*c>=p,g=a.list.length===0;g?l.emptyList():y?l.endCollection():c===1&&l.foundTotal(p),e(f),y||h.show(),i&&!g&&i()}catch(a){console.log("err",a),l.fetchError()}finally{r&&r.hide()}}return{getPage(){return c},increasePage(){c+=1,m()},resetPage(){c=o||1},setQuery(a){this.resetPage(),this.clearList(),d=a,m()},clearList(){f=[]}}}function M(e){return e.map(R).join("")}function R({largeImageURL:e,tags:o,likes:s,views:n,comments:t,downloads:r,webformatURL:i}){return`
  <div class="photo-card">
    <a class="photo-card__link" href="${e}">
        <img class="photo-card__img" src="${i}" alt="${o}" loading="lazy" />
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
            <b>Downloads</b><span>${r}</span>
        </p>
    </div>
</div>`}const z=document.querySelector(".search"),L=document.querySelector(".gallery"),v=document.querySelector(".load-more"),T=document.querySelector(".loader"),B=new q(".gallery a",{showCounter:!1}),S=H(G,{limit:x,loader:w(T),smoothScroll:I,loadMore:w(v)});z.addEventListener("submit",e=>{e.preventDefault();const o=e.target.elements.searchQuery.value.trim();S.setQuery(o)});v.addEventListener("click",()=>{S.increasePage()});function G(e){const o=M(e);L.innerHTML="",L.insertAdjacentHTML("beforeend",o),B.refresh()}function I(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}function w(e){return{show(){e.classList.add("visible")},hide(){e.classList.remove("visible")}}}
//# sourceMappingURL=commonHelpers.js.map
