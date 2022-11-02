"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3841],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=l(a),g=r,b=m["".concat(c,".").concat(g)]||m[g]||u[g]||i;return a?n.createElement(b,p(p({ref:t},s),{},{components:a})):n.createElement(b,p({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var l=2;l<i;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7220:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},p="Steps tp setup an API Gateway",o={unversionedId:"AWS API Gateway/setup-api-gateway",id:"AWS API Gateway/setup-api-gateway",title:"Steps tp setup an API Gateway",description:"- Search for API Gateway in AWS Console",source:"@site/docs/AWS API Gateway/setup-api-gateway.md",sourceDirName:"AWS API Gateway",slug:"/AWS API Gateway/setup-api-gateway",permalink:"/documentation/docs/AWS API Gateway/setup-api-gateway",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/documentation/docs/AWS API Gateway/pre-requisites"},next:{title:"Congratulations!",permalink:"/documentation/docs/AWS API Gateway/congratulations"}},c={},l=[],s={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"steps-tp-setup-an-api-gateway"},"Steps tp setup an API Gateway"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Search for API Gateway in AWS Console\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7286649/199388733-cdcbe9e9-9609-4bc0-9463-3bad3130a2d8.png",alt:"image"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on API Gateway\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7286649/199388842-881fc162-6578-4c51-a078-1c6c3863627a.png",alt:"image"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on Create API\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7286649/199388915-af0608e4-051b-448e-9064-063ebb9dab81.png",alt:"image"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select HTTP API > Click on Build\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7286649/199389041-1f80b6dc-3361-4b9d-9f5c-042b93ba78e4.png",alt:"image"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Provide and API Name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on Add integration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select Lambda as Integration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Choose the lambda to integrate\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7286649/199389147-e5a219c5-d782-4895-993b-63f184aaf0bc.png",alt:"image"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click Next")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select Method as GET")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set Resource path to /localization/api\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7286649/199389261-c5e23503-b7bd-4fa6-a8e9-611b5a74f895.png",alt:"image"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click Next")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Leave stage to default\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7286649/199389395-2e6b2929-c05d-47cc-a175-3013c7cee0fc.png",alt:"image"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click Next\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7286649/199389476-1b2d755e-92eb-4ed8-a33f-3bbc3531e073.png",alt:"image"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click Create")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select Routes link from left pane\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7286649/199389625-a6644ac0-e923-46a2-ad9a-2dc6d085808b.png",alt:"image"})))))}u.isMDXComponent=!0}}]);