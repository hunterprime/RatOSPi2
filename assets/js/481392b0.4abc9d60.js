"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6891],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(r),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(h,i(i({ref:e},p),{},{components:r})):n.createElement(h,i({ref:e},p))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},686:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var n=r(3117),o=(r(7294),r(3905));const a={sidebar_label:"Octopus v1.1"},i="BIGTREETECH Octopus v1.1",s={unversionedId:"boards/btt/octopus-11",id:"boards/btt/octopus-11",title:"BIGTREETECH Octopus v1.1",description:"Wiring",source:"@site/docs/boards/btt/octopus-11.md",sourceDirName:"boards/btt",slug:"/boards/btt/octopus-11",permalink:"/docs/boards/btt/octopus-11",draft:!1,editUrl:"https://github.com/Rat-OS/RatOS/edit/v2.x/site/docs/boards/btt/octopus-11.md",tags:[],version:"current",frontMatter:{sidebar_label:"Octopus v1.1"},sidebar:"docsSidebar",previous:{title:"Octopus v1.1 F407",permalink:"/docs/boards/btt/octopus-11-407"},next:{title:"Octopus Max EZ",permalink:"/docs/boards/btt/octopus-max-ez"}},c={},l=[{value:"Wiring",id:"wiring",level:2},{value:"Firmware installation",id:"firmware-installation",level:2},{value:"I updated klipper and now i get an error!",id:"i-updated-klipper-and-now-i-get-an-error",level:2}],p={toc:l};function u(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bigtreetech-octopus-v11"},"BIGTREETECH Octopus v1.1"),(0,o.kt)("h2",{id:"wiring"},"Wiring"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"BTT Octopus V1.1 Wiring Diagram",src:r(3532).Z,width:"2348",height:"1560"}),"\n",(0,o.kt)("a",{target:"_blank",href:r(709).Z},"Open Full Size Image")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"if you use the Ratrig endstop switches and cables, do ",(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"not")," blindly plug them in to your Octopus as doing this will short the board's 3.3V power rail."),(0,o.kt)("p",{parentName:"admonition"},"You will probably have to swap the outer two wires (red and white) on the board end of the cable but double check to make sure your cables match the wiring diagram in both ends.\nOrders shipped after October 2022 should have the correct cables (the connectors on the new cables are white).")),(0,o.kt)("admonition",{title:"Jumpers",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"Jumper Symbol",src:r(3176).Z,width:"40",height:"16"})," A green square with triangles inside is where you would place a jumper,\nremove all jumpers on the board that are not marked by this symbol.")),(0,o.kt)("h2",{id:"firmware-installation"},"Firmware installation"),(0,o.kt)("admonition",{title:"Use a proper cable",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure your board is connected to the Pi ",(0,o.kt)("strong",{parentName:"p"},"via the provided USB-C cable")," (USB-C on the Octopus, USB-A on the Pi).")),(0,o.kt)("p",null,"Follow the steps in the RatOS Configurator at ",(0,o.kt)("a",{parentName:"p",href:"http://RatOS.local/configure?step=1"},"http://RatOS.local/configure?step=1"),"."),(0,o.kt)("h2",{id:"i-updated-klipper-and-now-i-get-an-error"},"I updated klipper and now i get an error!"),(0,o.kt)("p",null,"When you update klipper you might see an error that looks like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Firmware version mismatch between host and guest",src:r(7933).Z,width:"849",height:"260"})),(0,o.kt)("p",null,"This is because klipper made changes to a part of the MCU firmware that we use, and something went wrong while automatically flashing your board. Klipper is telling us that the version of klipper running on the Pi is newer than the version running on the MCU. To fix this, we have to flash the board with a new version of the firmware, Follow the steps in the RatOS Configurator at ",(0,o.kt)("a",{parentName:"p",href:"http://RatOS.local/configure?step=1"},"http://RatOS.local/configure?step=1"),"."))}u.isMDXComponent=!0},709:function(t,e,r){e.Z=r.p+"assets/files/octopus-11-wiring-full-6a19a1ea9e006b089a71d756741f989d.png"},3176:function(t,e){e.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmx1Y2lkPSJsdWNpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjE2Ij48ZyBzdHJva2U9IiM3YWI2NDgiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0iI2ZmZiIgbHVjaWQ6cGFnZS10YWItaWQ9IjBfMCIgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMiwgLTEyKSI+PHBhdGggZD0iTTQzLjg4IDI3Ljg2aC0yMy43VjIwLjJoMjMuN3Y3LjY2eiIvPjxwYXRoIGQ9Ik00My44OCAyMi4wNmwtMy44NCA0LjItNC4wOC00LjItMy45NCA0LjItMy45OC00LjItNCA0LjItMy44Ny00LjIiLz48L2c+PC9zdmc+"},3532:function(t,e,r){e.Z=r.p+"assets/images/octopus-11-wiring-19beb1b4b4719f7327a629b125c1dade.png"},7933:function(t,e,r){e.Z=r.p+"assets/images/firmware_version_mismatch-456c9561ecf03b8fc5c498f42ce6a891.png"}}]);