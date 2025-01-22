import{a as y,i as c,S as x}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();y.defaults.baseURL="https://pixabay.com";const h=(e,t)=>y.get("/api/",{params:{key:"48247708-2116833e6be306042b2a4a912",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,maxWidth:500,page:t,per_page:15}}),f=e=>`
    <li class="gallery-card">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags.split(",").slice(0,3)}" width="360" height="250" /></a>
        <ul class="img-text-list">
          <li class="img-text-item">Likes
            <p class="img-text">${e.likes}</p>
          </li>
          <li class="img-text-item">Views
            <p class="img-text">${e.views}</p>
          </li>
          <li class="img-text-item">Comments
            <p class="img-text">${e.comments}</p>
          </li>
          <li class="img-text-item">Downloads
            <p class="img-text">${e.downloads}</p>
          </li>
        </ul>
    </li>`,b=document.querySelector(".js-search-img-form"),w=document.querySelector(".js-search-img-input"),a=document.querySelector(".js-gallery-list"),g=document.querySelector(".loader"),p=document.querySelector(".more-loader"),i=document.querySelector(".js-more-img-btn");c.settings({position:"topRight",messageSize:"20",messageColor:"white",backgroundColor:"#EF4040",messageLineHeight:"25"});let L=new x(".js-gallery-list a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,captionHTML:!0,enableKeyboard:!0}),m=1,d=15,n="";const S=async e=>{try{if(e.preventDefault(),i.style.display="none",m=1,d=15,n=w.value.trim(),n===""){c.warning({message:"The field must be filled in."}),b.reset(),a.innerHTML="";return}g.style.display="block",a.innerHTML="";const{data:t}=await h(n,m);if(g.style.display="none",t.total===0){c.warning({message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:"432px",class:"toast-custom"});return}const o=t.hits.map(l=>f(l)).join("");a.innerHTML=o,t.totalHits>d&&(i.style.display="block"),L.refresh();return}catch(t){console.log(t)}},T=async()=>{try{i.style.display="none",p.style.display="block",m+=1,d+=15;const{data:e}=await h(n,m),t=e.hits.map(o=>f(o)).join("");if(p.style.display="none",a.insertAdjacentHTML("beforeend",t),q(),L.refresh(),d>=e.totalHits){c.warning({message:"We're sorry, but you've reached the end of search results."});return}i.style.display="block"}catch(e){console.log(e)}};b.addEventListener("submit",S);i.addEventListener("click",T);const q=()=>{const e=a.firstElementChild;if(e){const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}};
//# sourceMappingURL=index.js.map
