"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6944],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5759:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var n=a(3117),r=(a(7294),a(3905));const o={slug:"crowsnest-v4-breaking-changes-manual-upgrade",title:"Crowsnest v4 contains breaking changes and requires manual steps to upgrade.",authors:["miklschmidt"],tags:["Crowsnest","Mainsail"]},i=void 0,l={permalink:"/blog/crowsnest-v4-breaking-changes-manual-upgrade",editUrl:"https://github.com/Rat-OS/RatOS/edit/v2.x/site/blog/2023-05-23-breaking-crowsnest-changes.mdx",source:"@site/blog/2023-05-23-breaking-crowsnest-changes.mdx",title:"Crowsnest v4 contains breaking changes and requires manual steps to upgrade.",description:"Crowsnest just recently made huge changes to the way it works. This is great news, because it should be much faster and more reliable. Unfortunately, it also means that there are major breaking changes, and you'll need to do some manual steps to upgrade. When you update to V4 through the machine tab in mainsail, crowsnest will stop working until you execute the following steps.",date:"2023-05-23T00:00:00.000Z",formattedDate:"May 23, 2023",tags:[{label:"Crowsnest",permalink:"/blog/tags/crowsnest"},{label:"Mainsail",permalink:"/blog/tags/mainsail"}],readingTime:3.185,hasTruncateMarker:!1,authors:[{name:"Mikkel Schmidt",title:"Creator of RatOS",url:"https://github.com/miklschmidt",imageURL:"https://github.com/miklschmidt.png",key:"miklschmidt"}],frontMatter:{slug:"crowsnest-v4-breaking-changes-manual-upgrade",title:"Crowsnest v4 contains breaking changes and requires manual steps to upgrade.",authors:["miklschmidt"],tags:["Crowsnest","Mainsail"]},nextItem:{title:"RatOS V2.0.0 Released!",permalink:"/blog/ratos-v2-0-0-released"}},s={authorsImageUrls:[void 0]},p=[{value:"Upgrading",id:"upgrading",level:2},{value:"Uninstall old crowsnest",id:"uninstall-old-crowsnest",level:2},{value:"Reinstall crowsnest",id:"reinstall-crowsnest",level:2},{value:"Making legacy CSI cameras work again (for example the raspberry pi cameras v1 or v2)",id:"making-legacy-csi-cameras-work-again-for-example-the-raspberry-pi-cameras-v1-or-v2",level:2}],m={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Crowsnest just recently made huge changes to the way it works. This is great news, because it should be much faster and more reliable. Unfortunately, it also means that there are major breaking changes, and you'll need to do some manual steps to upgrade. When you update to V4 through the machine tab in mainsail, crowsnest will stop working until you execute the following steps."),(0,r.kt)("p",null,"Make sure to read these instructions carefully before starting the process, so you don't miss anything. Just to be safe, download a copy of your crowsnest.conf."),(0,r.kt)("h2",{id:"upgrading"},"Upgrading"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Update crowsnest in the machine tab in mainsail. If it's no longer there, skip this step."),(0,r.kt)("li",{parentName:"ol"},"Open a terminal window or command prompt (win + r, type cmd, hit enter) and ssh into your printer. The password is ",(0,r.kt)("inlineCode",{parentName:"li"},"raspberry")," unless you changed it.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh pi@<your printer's hostname.local or ip address without the angle brackets>\n")),(0,r.kt)("h2",{id:"uninstall-old-crowsnest"},"Uninstall old crowsnest"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Run the following commands:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd crowsnest\ngit pull\ngit checkout legacy/v3\nmake uninstall\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When asked ",(0,r.kt)("inlineCode",{parentName:"p"},"Do you REALLY want to remove existing 'crowsnest'? (y/N)"),' delete the N and type "y" for "Yes", then hit enter.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When asked ",(0,r.kt)("inlineCode",{parentName:"p"},"do you want to remove crowsnest.conf"),' answer "N" for "No".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ignore the instructions to remove the crowsnest folder.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ignore the instructions to remove ",(0,r.kt)("inlineCode",{parentName:"p"},"[update manager crowsnest]")," from moonraker.conf."))),(0,r.kt)("h2",{id:"reinstall-crowsnest"},"Reinstall crowsnest"),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"This next part will take a while, and you'll have to answer a couple of questions along the way.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git checkout master\nsudo make install\n")),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When asked ",(0,r.kt)("inlineCode",{parentName:"p"},"Do you want to add 'update manager' entry to your moonraker.conf?"),' answer "N" for "No".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ignore the instructions to add the crowsnest update manager entry manually (it's already there).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'When asked to reboot, answer "Y" for "Yes".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After rebooting, go to the Machine tab in mainsail and edit crowsnest.conf. Enter your old settings from the file you downloaded, alternatively crowsnest should have created a backup file called crowsnest.conf.date-of-backup.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Skip if not using a Raspberry Pi) In crowsnest.conf change ",(0,r.kt)("inlineCode",{parentName:"p"},"mode")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"camera-streamer"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'(Skip if not using a Raspberry Pi) Back in mainsail, edit your web camera settings and make sure the "Camera Streamer" option is selected.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Skip if not using a Raspberry Pi) Change ",(0,r.kt)("inlineCode",{parentName:"p"},"URL Stream")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"webcam/webrtc"),"\n",(0,r.kt)("img",{alt:"Camera Stream option enabled",src:a(2034).Z,width:"897",height:"544"})))),(0,r.kt)("p",null,"You're now using Crowsnest v4, which should have much better performance."),(0,r.kt)("p",null,"Thanks to tomlawesome for the image!"),(0,r.kt)("h2",{id:"making-legacy-csi-cameras-work-again-for-example-the-raspberry-pi-cameras-v1-or-v2"},"Making legacy CSI cameras work again (for example the raspberry pi cameras v1 or v2)"),(0,r.kt)("p",null,"If you're using an older raspberry pi camera and it stopped working, you'll need to do some additional steps to make it work again."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Disable legacy camera support by running ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo raspi-config")," and selecting ",(0,r.kt)("inlineCode",{parentName:"li"},"3 Interface Options")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"I1 Legacy Camera")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"No"),". Finally press escape to get out of raspi-config."),(0,r.kt)("li",{parentName:"ol"},"Edit /boot/config.txt by running ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo nano /boot/config.txt"),". Find the ","[all]"," section at the bottom. Depending on which camera you have, you'll need to add a ",(0,r.kt)("inlineCode",{parentName:"li"},"dtoverlay")," set statement at the end of the ","[all]"," section. Here's a list of sensors and the corresponding set statements. Look up your particular camera to find out which sensor it uses.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Model"),(0,r.kt)("th",{parentName:"tr",align:null},"Set Statement"),(0,r.kt)("th",{parentName:"tr",align:null},"Known Cameras with this sensor"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OV5647"),(0,r.kt)("td",{parentName:"tr",align:null},"dtoverlay=ov5647"),(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi Camera Module V1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OV9281"),(0,r.kt)("td",{parentName:"tr",align:null},"dtoverlay=ov9281"),(0,r.kt)("td",{parentName:"tr",align:null},"?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IMX290/IMX327"),(0,r.kt)("td",{parentName:"tr",align:null},"dtoverlay=imx290, clock-frequency=37125000"),(0,r.kt)("td",{parentName:"tr",align:null},"?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IMX378"),(0,r.kt)("td",{parentName:"tr",align:null},"dtoverlay=imx378"),(0,r.kt)("td",{parentName:"tr",align:null},"?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IMX219"),(0,r.kt)("td",{parentName:"tr",align:null},"dtoverlay=imx219"),(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi Camera Module V2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IMX477"),(0,r.kt)("td",{parentName:"tr",align:null},"dtoverlay=imx477"),(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi HQ Camera")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"reboot with ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo reboot")),(0,r.kt)("li",{parentName:"ol"},"reconnect to your printer with ssh"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"libcamera-hello --list-cameras")," should return something like this:\n",(0,r.kt)("img",{alt:"libcamera-hello output",src:a(3881).Z,width:"486",height:"138"})),(0,r.kt)("li",{parentName:"ol"},"in this example ",(0,r.kt)("inlineCode",{parentName:"li"},"/base/soc/i2c0mux/i2c@1/ov5647@36")," is the new device for crowsnest.conf")))}c.isMDXComponent=!0},2034:function(e,t,a){t.Z=a.p+"assets/images/camera-stream-option-3179f878eb54f3fe45301e20cadda450.png"},3881:function(e,t,a){t.Z=a.p+"assets/images/picam-63f1ea4ff68df957ffd085cf4cef38b6.png"}}]);