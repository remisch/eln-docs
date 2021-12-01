"use strict";(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[3374],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return n?o.createElement(m,c(c({ref:t},p),{},{components:n})):o.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46355:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),c=["components"],a={},l="Writing documentation",u={unversionedId:"for_developers/documentation/README",id:"for_developers/documentation/README",isDocsHomePage:!1,title:"Writing documentation",description:"The documentation of the ELN is hosted on GitHub and the simplest way to correct or improve the text is to directly edit the file on GitHub.",source:"@site/docs/90_for_developers/documentation/README.md",sourceDirName:"90_for_developers/documentation",slug:"/for_developers/documentation/README",permalink:"/docs/eln/for_developers/documentation/README",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/90_for_developers/documentation/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Making our development environment ready for contributions to cheminfo",permalink:"/docs/eln/for_developers/contributing/developmentSetup"},next:{title:"Admonitions",permalink:"/docs/eln/for_developers/documentation/admonitions"}},p=[{value:"Spellcheck",id:"spellcheck",children:[],level:2}],s={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"writing-documentation"},"Writing documentation"),(0,i.kt)("p",null,"The documentation of the ELN is hosted on GitHub and the simplest way to correct or improve the text is to directly edit the file on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cheminfo/eln-docs"},"GitHub"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"edit a file on GitHub",src:n(56963).Z})),(0,i.kt)("p",null,"If you want to get involved more deeply in the update of the documentation it is better to have a local copy of the repository on your computer."),(0,i.kt)("h2",{id:"spellcheck"},"Spellcheck"),(0,i.kt)("p",null,"We use a GitHub action that automatically checks the spelling in all Markdown files.\nUnder the hood it uses ",(0,i.kt)("a",{parentName:"p",href:"https://facelessuser.github.io/pyspelling/configuration/#spell-checker-options"},"PySpelling"),", which you can run with ",(0,i.kt)("inlineCode",{parentName:"p"},"pyspelling -c spellcheck.yaml"),".\nIt might be that the dictionaries ",(0,i.kt)("inlineCode",{parentName:"p"},"PySpelling")," uses do not know some words. Add them to ",(0,i.kt)("inlineCode",{parentName:"p"},"wordlist.txt")," in this case."))}d.isMDXComponent=!0},56963:function(e,t,n){t.Z=n.p+"assets/images/editFile-7d774d8c7f7b9e5cdf047b04ab923ebd.gif"}}]);