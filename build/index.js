!function(){"use strict";var e=window.React,t=window.wp.element,n=window.wp.components,r=window.wp.i18n,l=window.wp.primitives,i=(0,e.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(l.Path,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}));(0,e.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(l.Path,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}));var a=window.wp.data,o=(window.wp.apiFetch,window.wp.plugins);const d=()=>{var l;const o=document.getElementsByClassName("edit-post-header__settings")[0],[d,w]=(0,t.useState)(!1),[s,c]=(0,t.useState)(!1);if(!o)return(0,e.createElement)(e.Fragment,null);const m="blockify-pattern-editor",p=document.getElementById(m);let u=null;p?u=p:(u=document.createElement("div"),u.id=m,o.insertBefore(u,o.firstChild));const g=null!==(l=(0,a.select)("core/editor").getEditedPostSlug())&&void 0!==l?l:"",v=o.getElementsByClassName("editor-post-publish-button")[0],h="blockify-pattern-export",E=document.getElementById(h);let f=null;return E?f=E:(f=document.createElement("div"),f.id=h,o.insertBefore(f,v)),(0,t.render)((0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.Button,{href:window.blockify.siteUrl+"?page_id=9999&pattern_name="+g,target:"_blank",icon:i,label:(0,r.__)("Preview pattern","pattern-editor")})),u),(0,e.createElement)(e.Fragment,null)};(0,o.registerPlugin)("blockify-pattern-editor",{render:()=>(0,e.createElement)(d,null)})}();