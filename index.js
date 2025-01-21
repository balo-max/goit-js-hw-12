import{i as n,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p=t=>{const i=new URLSearchParams({key:"48247708-2116833e6be306042b2a4a912",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,maxWidth:500});return fetch(`https://pixabay.com/api/?${i}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},g=t=>`
    <li class="gallery-card">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags.split(",").slice(0,3)}" width="360" height="250" /></a>
        <ul class="img-text-list">
          <li class="img-text-item">Likes
            <p class="img-text">${t.likes}</p>
          </li>
          <li class="img-text-item">Views
            <p class="img-text">${t.views}</p>
          </li>
          <li class="img-text-item">Comments
            <p class="img-text">${t.comments}</p>
          </li>
          <li class="img-text-item">Downloads
            <p class="img-text">${t.downloads}</p>
          </li>
        </ul>
    </li>`,m=document.querySelector(".js-search-img-form"),d=document.querySelector(".js-search-img-input"),l=document.querySelector(".js-gallery-list"),c=document.querySelector(".loader");n.settings({position:"topRight",messageSize:"20",messageColor:"white",backgroundColor:"#EF4040",messageLineHeight:"25"});let h=new u(".js-gallery-list a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,captionHTML:!0,enableKeyboard:!0});const y=t=>{t.preventDefault();const i=d.value.trim();if(i===""){n.warning({message:"The field must be filled in."}),m.reset(),l.innerHTML="";return}c.style.display="block",l.innerHTML="",p(i).then(s=>{if(c.style.display="none",s.total===0){n.warning({message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:"432px",class:"toast-custom"});return}const o=s.hits.map(e=>g(e)).join("");l.innerHTML=o,h.refresh()}).catch(s=>{console.log(s)})};m.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
