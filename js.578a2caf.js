parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QvaY":[function(require,module,exports) {
var e={apiKey:"AIzaSyBe6Pw_F6hr2kywHS_FJXa5JrNZVYCyijU",authDomain:"portfoliocontactform-beb39.firebaseapp.com",databaseURL:"https://portfoliocontactform-beb39.firebaseio.com",projectId:"portfoliocontactform-beb39",storageBucket:"portfoliocontactform-beb39.appspot.com",messagingSenderId:"87529637836",appId:"1:87529637836:web:68b29936dab1e3e474ff69"};firebase.initializeApp(e);var t=document.querySelector("#body"),s=document.querySelector(".menu-btn"),o=document.querySelector(".menu"),n=document.querySelector(".menu-nav"),i=document.querySelectorAll(".nav-item"),r=!1,a=function(){r?(s.classList.remove("close"),o.classList.remove("show"),n.classList.remove("show"),o.classList.remove("show"),i.forEach(function(e){return e.classList.remove("show")}),r=!1):(s.classList.add("close"),o.classList.add("show"),n.classList.add("show"),o.classList.add("show"),i.forEach(function(e){return e.classList.add("show")}),r=!0)};s.addEventListener("click",a),i.forEach(function(e){return e.firstElementChild.addEventListener("click",a)});var c=function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3;this.txtElement=e,this.words=t,this.txt="",this.wordIndex=0,this.wait=parseInt(s,10),this.type(),this.isDeleting=!1};function d(){var e=document.querySelector(".txt-type"),t=JSON.parse(e.getAttribute("data-words")),s=e.getAttribute("data-wait");new c(e,t,s)}function u(e){return document.getElementById(e).value}function l(e){e.preventDefault(),h(u("userName"),u("userEmail"),u("userMessage")),f("Message Sent","alert"),document.getElementById("contactform").reset()}c.prototype.type=function(){var e=this,t=this.wordIndex%this.words.length,s=this.words[t];this.isDeleting?this.txt=s.substring(0,this.txt.length-1):this.txt=s.substring(0,this.txt.length+1),this.txtElement.innerHTML='<span class="txt"> '.concat(this.txt,"</span>");var o=300;this.isDeleting&&(o=100),this.isDeleting||this.txt!==s?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.wordIndex++,o=100):(o=this.wait,this.isDeleting=!0),setTimeout(function(){return e.type()},o)},document.addEventListener("DOMContentLoaded",d),document.getElementById("contactform").addEventListener("submit",l);var m=firebase.database().ref("messages");function h(e,t,s){m.push().set({name:e,email:t,message:s})}function f(e,t){if(document.querySelector(".alert"));else{var s=document.createElement("div");s.className="alert ".concat(t),s.appendChild(document.createTextNode(e));var o=document.querySelector(".con-section-b"),n=document.querySelector("#contactform");o.insertBefore(s,n),setTimeout(function(){s.className="remove"},2e3),setTimeout(function(){return document.querySelector(".remove").remove()},3500)}}
},{}]},{},["QvaY"], null)
//# sourceMappingURL=js.578a2caf.js.map