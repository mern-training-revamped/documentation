"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(g,l(l({ref:t},m),{},{components:n})):r.createElement(g,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},l="Create Eligibility API",s={unversionedId:"Eligibility API/create-eligibility-api",id:"Eligibility API/create-eligibility-api",title:"Create Eligibility API",description:"Access request params",source:"@site/docs/Eligibility API/create-eligibility-api.md",sourceDirName:"Eligibility API",slug:"/Eligibility API/create-eligibility-api",permalink:"/documentation/docs/Eligibility API/create-eligibility-api",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/documentation/docs/Eligibility API/pre-requisites"},next:{title:"Congratulations!",permalink:"/documentation/docs/Eligibility API/congratulations"}},o={},c=[],m={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-eligibility-api"},"Create Eligibility API"),(0,a.kt)("p",null,"Access request params"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="handler.js"',title:'"handler.js"'},"const { firstName, lastName, email } = JSON.parse(event?.body) || {};\n")),(0,a.kt)("p",null,"Handle Bad Requests"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="handler.js"',title:'"handler.js"'},'if (!firstName || !lastName || !email) {\n  logger.debug("***BadRequest***", { firstName, lastName, email });\n\n  return lambdaResponse(\n    new BadRequest("Bad Request", [\n      { name: "firstName", type: "body" },\n      { name: "lastName", type: "body" },\n      { name: "email", type: "body" },\n    ])\n  );\n}\n')),(0,a.kt)("p",null,"Get data from DynamoDb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="handler.js"',title:'"handler.js"'},'const record = await getItem("Employee", { EmailId: email });\n')),(0,a.kt)("p",null,"Check if data exists in DB and update"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="handler.js"',title:'"handler.js"'},'if (record.Item) {\n  await putItem("Employee", {\n    ...record.Item,\n    FirstName: firstName,\n    LastName: lastName,\n  });\n} else {\n  return lambdaResponse(new NotFound("User Not Found"));\n}\n')),(0,a.kt)("p",null,"Return success response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="handler.js"',title:'"handler.js"'},'return lambdaResponse({\n  statusCode: 200,\n  body: {\n    message: "User record updated successfully!",\n  },\n});\n')),(0,a.kt)("p",null,"Complete code with Exception handling"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="handler.js"',title:'"handler.js"'},'"use strict";\nconst {\n  InternalServerError,\n  BadRequest,\n  NotFound,\n  lambdaResponse,\n} = require("mern-common-layer");\nconst { getLogger } = require("mern-logging-layer");\nconst { getItem, putItem } = require("mern-database-layer");\n\nlet logger = getLogger();\n\nmodule.exports.checkExisting = async (event) => {\n  const { firstName, lastName, email } = JSON.parse(event?.body) || {};\n\n  logger.info("***Lambda Started***");\n\n  try {\n    if (!firstName || !lastName || !email) {\n      logger.debug("***BadRequest***", { firstName, lastName, email });\n\n      return lambdaResponse(\n        new BadRequest("Bad Request", [\n          { name: "firstName", type: "body" },\n          { name: "lastName", type: "body" },\n          { name: "email", type: "body" },\n        ])\n      );\n    }\n\n    const record = await getItem("Employee", { EmailId: email });\n\n    if (record.Item) {\n      await putItem("Employee", {\n        ...record.Item,\n        FirstName: firstName,\n        LastName: lastName,\n      });\n    } else {\n      return lambdaResponse(new NotFound("User Not Found"));\n    }\n\n    return lambdaResponse({\n      statusCode: 200,\n      body: {\n        message: "User record updated successfully!",\n      },\n    });\n  } catch (err) {\n    logger.error("***Internal Server Error***", err);\n\n    return lambdaResponse(new InternalServerError());\n  }\n};\n')))}p.isMDXComponent=!0}}]);