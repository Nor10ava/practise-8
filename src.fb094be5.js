parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Ef3P":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.galleryItems=void 0;const p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.galleryItems=p;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./gallery");console.log(e.galleryItems);const l={gallery:document.querySelector(".js-gallery"),lightbox:document.querySelector(".lightbox"),lightboxImg:document.querySelector(".lightbox__image")};let t=null;function r(e){return e.map(({preview:e,original:l,description:t})=>`<li class="gallery__item">\n  <a\n    class="gallery__link"\n    href=${l}\n  >\n    <img\n      class="gallery__image"\n      src=${e}\n      data-source=${l}\n      alt=${t}\n    />\n  </a>\n</li>`)}function n(n){n.preventDefault(),"IMG"===n.target.nodeName&&(l.lightbox.classList.add("is-open"),l.lightboxImg.src=n.target.dataset.source,r(e.galleryItems).forEach((e,l)=>{e.includes(n.target.src)&&(t=l)}),window.addEventListener("keydown",o),window.addEventListener("keydown",g))}function i(e){"IMG"!==e.target.nodeName&&(l.lightbox.classList.remove("is-open"),l.lightboxImg.src=" ",window.removeEventListener("keydown",o),window.removeEventListener("keydown",g))}function o(e){"Escape"===e.key&&(i(e),console.log("hello"))}function g(r){if("ArrowRight"===r.key&&t<e.galleryItems.length-1)l.lightboxImg.src=e.galleryItems[t+=1].original;else{if(!("ArrowLeft"===r.key&&t>0))return"ArrowRight"===r.key&&t===e.galleryItems.length-1?(t=0,void(l.lightboxImg.src=e.galleryItems[t].original)):"ArrowLeft"===r.key&&0===t?(t=e.galleryItems.length-1,void(l.lightboxImg.src=e.galleryItems[t].original)):void 0;l.lightboxImg.src=e.galleryItems[t-=1].original}}l.gallery.insertAdjacentHTML("beforeend",r(e.galleryItems).join("")),l.gallery.addEventListener("click",n),l.lightbox.addEventListener("click",i);
},{"./gallery":"Ef3P"}]},{},["Focm"], null)
//# sourceMappingURL=/practise-8/src.fb094be5.js.map