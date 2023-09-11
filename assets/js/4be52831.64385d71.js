"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[255],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var a=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),u=o,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||n;return t?a.createElement(m,i(i({ref:r},d),{},{components:t})):a.createElement(m,i({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5687:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const n={sidebar_position:4,title:"\ud83d\udc65 Teams",description:"Working with a team of developers"},i="Teams",s={unversionedId:"teams",id:"teams",title:"\ud83d\udc65 Teams",description:"Working with a team of developers",source:"@site/docs/teams.md",sourceDirName:".",slug:"/teams",permalink:"/teams",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/teams.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\ud83d\udc65 Teams",description:"Working with a team of developers"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc26 Flutter Version",permalink:"/flutter-version"},next:{title:"\u2b06\ufe0f Update Strategies",permalink:"/update-strategies"}},l={},p=[{value:"Permissions",id:"permissions",level:2},{value:"Adding a Collaborator",id:"adding-a-collaborator",level:2},{value:"Removing a Collaborator",id:"removing-a-collaborator",level:2},{value:"Sharing Multiple Apps",id:"sharing-multiple-apps",level:2},{value:"Transferring Ownership",id:"transferring-ownership",level:2}],d={toc:p},c="wrapper";function h(e){let{components:r,...t}=e;return(0,o.kt)(c,(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"teams"},"Teams"),(0,o.kt)("p",null,'Shorebird Teams tier and higher allows adding an unlimited number of\ncollaborators to an app. Shorebire free "Hobby" users can upgrade\nto the Teams tier to add collaborators via a link in the\n',(0,o.kt)("a",{parentName:"p",href:"https://console.shorebird.dev"},"Shorebird console"),"."),(0,o.kt)("h2",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"Each app has an owner, who is the person who created the app. The owner can\ninvite collaborators to the app, and can remove collaborators from the app."),(0,o.kt)("p",null,"Collaborators can publish patches. They cannot delete the app, or add or\nremove collaborators."),(0,o.kt)("h2",{id:"adding-a-collaborator"},"Adding a Collaborator"),(0,o.kt)("p",null,"Currently collaborators must be added and removed using the Shorebird\ncommand line tool. We intend to add support for adding and removing\ncollaborators via the Shorebird console in the future.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues/1221"},"https://github.com/shorebirdtech/shorebird/issues/1221")),(0,o.kt)("p",null,"To add a collaborator, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"shorebird collaborators add --email <email>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--app-id")," is optional if you are in a directory with a Shorebird app it\nwill infer the app ID from ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird.yaml"),". Otherwise you can specify\n",(0,o.kt)("inlineCode",{parentName:"p"},"--app-id <app-id>"),"."),(0,o.kt)("p",null,'Collaborators must already have created a Shorebird account with the email\naddress you are adding. They can do so by loading the Shorebird console\nand clicking "Continue with Google".'),(0,o.kt)("p",null,"We intend to add the ability to invite collaborators via email in the future.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues/1221"},"https://github.com/shorebirdtech/shorebird/issues/1221")),(0,o.kt)("h2",{id:"removing-a-collaborator"},"Removing a Collaborator"),(0,o.kt)("p",null,"To remove a collaborator, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"shorebird collaborators remove --email <email>\n")),(0,o.kt)("h2",{id:"sharing-multiple-apps"},"Sharing Multiple Apps"),(0,o.kt)("p",null,"Each app maintains a separate list of collaborators. If you need to share\nmultiple apps with a team, you will need to add each app separately. If this\nisn't working for you, please let us know and we're happy to look at adding\nsupport for sharing groups of apps:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues/739"},"https://github.com/shorebirdtech/shorebird/issues/739")),(0,o.kt)("h2",{id:"transferring-ownership"},"Transferring Ownership"),(0,o.kt)("p",null,"We do not currently have an automated way to transfer ownership of an app.\nHowever you're welcome to ",(0,o.kt)("a",{parentName:"p",href:"mailto:contact@shorebird.dev"},"contact us")," and we\nwill be happy to help you transfer ownership of an app."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues/1225"},"https://github.com/shorebirdtech/shorebird/issues/1225")))}h.isMDXComponent=!0}}]);