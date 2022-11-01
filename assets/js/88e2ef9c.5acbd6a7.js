"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1171:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:1},o="Prerequisites",l={unversionedId:"Eligibility API/pre-requisites",id:"Eligibility API/pre-requisites",title:"Prerequisites",description:"- Complete the Intro to lambda section",source:"@site/docs/Eligibility API/pre-requisites.md",sourceDirName:"Eligibility API",slug:"/Eligibility API/pre-requisites",permalink:"/documentation/docs/Eligibility API/pre-requisites",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Lambda - Eligibility API",permalink:"/documentation/docs/category/lambda---eligibility-api"},next:{title:"Create Eligibility API",permalink:"/documentation/docs/Eligibility API/create-eligibility-api"}},c={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Complete the ",(0,i.kt)("a",{parentName:"li",href:"/documentation/docs/Intro%20to%20Lambdas/create-a-lambda"},"Intro to lambda")," section"),(0,i.kt)("li",{parentName:"ul"},"Setup DynamoDB Credentials in aws configurations"),(0,i.kt)("li",{parentName:"ul"},"Optionally run DynamoDB Locally - and set it up in aws configurations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"By Setting it up with ",(0,i.kt)("a",{parentName:"li",href:"https://www.serverless.com/plugins/serverless-dynamodb-local"},"Serverless")),(0,i.kt)("li",{parentName:"ul"},"Run it in Docker ",(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/amazon/dynamodb-local/"},"DynamoDb Docker"))))))}u.isMDXComponent=!0}}]);