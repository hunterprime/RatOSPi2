"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7174],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return r?o.createElement(h,a(a({ref:t},u),{},{components:r})):o.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8059:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var o=r(3117),n=(r(7294),r(3905));const i={sidebar_label:"Octopus Pro 429"},a="BIGTREETECH Octopus Pro STM32F429",s={unversionedId:"boards/btt/octopus-pro-429",id:"boards/btt/octopus-pro-429",title:"BIGTREETECH Octopus Pro STM32F429",description:"This board is currently not recommended, as it cannot be flashed automatically through USB, that means all firmware updates have to be done by manually moving an SD card back and forth. It is recommended to get the Octopus Pro 446 instead. RatOS compiles the firmware binary for you each time klipper is updated (while the Octopus Pro 429 is connected), you can find the most recent firmware in the Mainsail Machine page under the firmware_binaries folder). Automatic flashing may be possible in the future if SDIO support is implemented in klipper. See this thread//github.com/Klipper3d/klipper/pull/4881#issuecomment-962596510 for more info.",source:"@site/docs/boards/btt/octopus-pro-429.md",sourceDirName:"boards/btt",slug:"/boards/btt/octopus-pro-429",permalink:"/docs/boards/btt/octopus-pro-429",draft:!1,editUrl:"https://github.com/Rat-OS/RatOS/edit/v2.x/site/docs/boards/btt/octopus-pro-429.md",tags:[],version:"current",frontMatter:{sidebar_label:"Octopus Pro 429"},sidebar:"docsSidebar",previous:{title:"Octopus Max EZ",permalink:"/docs/boards/btt/octopus-max-ez"},next:{title:"Octopus Pro 446",permalink:"/docs/boards/btt/octopus-pro-446"}},p={},l=[{value:"Wiring",id:"wiring",level:2},{value:"Jumpers",id:"jumpers",level:3},{value:"Firmware installation",id:"firmware-installation",level:2},{value:"I updated klipper and now i get an error!",id:"i-updated-klipper-and-now-i-get-an-error",level:2}],u={toc:l};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bigtreetech-octopus-pro-stm32f429"},"BIGTREETECH Octopus Pro STM32F429"),(0,n.kt)("admonition",{title:"Only Partial support",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This board is currently not recommended, as it cannot be flashed automatically through USB, that means all firmware updates have to be done by manually moving an SD card back and forth. It is recommended to get the Octopus Pro 446 instead. RatOS compiles the firmware binary for you each time klipper is updated (while the Octopus Pro 429 is connected), you can find the most recent firmware in the Mainsail Machine page under the ",(0,n.kt)("inlineCode",{parentName:"p"},"firmware_binaries")," folder). Automatic flashing may be possible in the future if SDIO support is implemented in klipper. See this thread: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Klipper3d/klipper/pull/4881#issuecomment-962596510"},"https://github.com/Klipper3d/klipper/pull/4881#issuecomment-962596510")," for more info.")),(0,n.kt)("h2",{id:"wiring"},"Wiring"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BTT Octopus Pro STM32F429 Wiring Diagram",src:r(5482).Z,width:"2376",height:"1589"}),"\n",(0,n.kt)("a",{target:"_blank",href:r(3811).Z},"Open Full Size Image")),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"if you use the Ratrig endstop switches and cables, do ",(0,n.kt)("strong",{parentName:"mdxAdmonitionTitle"},"not")," blindly plug them in to your Octopus as doing this will short the board's 5V power rail."),(0,n.kt)("p",{parentName:"admonition"},"You will probably have to swap the outer two wires (red and white) on the board end of the cable but double check to make sure your cables match the wiring diagram in both ends.\nOrders shipped after October 2022 should have the correct cables (the connectors on the new cables are white).")),(0,n.kt)("admonition",{title:"Jumpers",type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Jumper Symbol",src:r(3176).Z,width:"40",height:"16"})," A green square with triangles inside is where you would place a jumper,\nremove all jumpers on the board that are not marked by this symbol.")),(0,n.kt)("h3",{id:"jumpers"},"Jumpers"),(0,n.kt)("p",null,"The jumpers above the stepper drivers switches stepper driver input power between V_MOT and VIN (ie, board power terminals and motor power terminals).\nIn the configuration shown in the image above, the MOTOR power isn't connected because the jumpers are set to use the board power (VIN).\nIf you wanted to use 48V for example, you would connect your 48V psu to the motor power terminal and switch those jumpers to the other position to use V_MOT instead. Of course you shouldn't do this unless you use high voltage capable 5160 drivers."),(0,n.kt)("h2",{id:"firmware-installation"},"Firmware installation"),(0,n.kt)("admonition",{title:"Use a proper cable",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Make sure your board is connected to the Pi ",(0,n.kt)("strong",{parentName:"p"},"via the provided USB-C cable")," (USB-C on the Octopus, USB-A on the Pi).")),(0,n.kt)("p",null,"Follow the steps in the RatOS Configurator at ",(0,n.kt)("a",{parentName:"p",href:"http://RatOS.local/configure?step=1"},"http://RatOS.local/configure?step=1"),"."),(0,n.kt)("h2",{id:"i-updated-klipper-and-now-i-get-an-error"},"I updated klipper and now i get an error!"),(0,n.kt)("p",null,"When you update klipper you might see an error that looks like this:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Firmware version mismatch between host and guest",src:r(7933).Z,width:"849",height:"260"})),(0,n.kt)("p",null,"This is because klipper made changes to a part of the MCU firmware that we use, and the Octopus Pro 429 cannot be flashed automatically over USB. Klipper is telling us that the version of klipper running on the Pi is newer than the version running on the MCU. To fix this, we have to flash the board with a new version of the firmware, Follow the steps in the RatOS Configurator at ",(0,n.kt)("a",{parentName:"p",href:"http://RatOS.local/configure?step=1"},"http://RatOS.local/configure?step=1"),"."))}c.isMDXComponent=!0},3811:function(e,t,r){t.Z=r.p+"assets/files/octopus-pro-wiring-full-3d9d989a41707c83aaebfd75f2ed3846.png"},3176:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmx1Y2lkPSJsdWNpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjE2Ij48ZyBzdHJva2U9IiM3YWI2NDgiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0iI2ZmZiIgbHVjaWQ6cGFnZS10YWItaWQ9IjBfMCIgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMiwgLTEyKSI+PHBhdGggZD0iTTQzLjg4IDI3Ljg2aC0yMy43VjIwLjJoMjMuN3Y3LjY2eiIvPjxwYXRoIGQ9Ik00My44OCAyMi4wNmwtMy44NCA0LjItNC4wOC00LjItMy45NCA0LjItMy45OC00LjItNCA0LjItMy44Ny00LjIiLz48L2c+PC9zdmc+"},5482:function(e,t,r){t.Z=r.p+"assets/images/octopus-pro-wiring-85e95969570f598f4bc464231e16d191.png"},7933:function(e,t,r){t.Z=r.p+"assets/images/firmware_version_mismatch-456c9561ecf03b8fc5c498f42ce6a891.png"}}]);