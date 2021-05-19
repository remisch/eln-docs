(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[7125],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4248:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={},c={unversionedId:"spectra/organic_chemistry/mass/polycalc/filteringFunction/index",id:"spectra/organic_chemistry/mass/polycalc/filteringFunction/index",isDocsHomePage:!1,title:"Advanced filtering",description:"Results may be filtered using a javascript syntax. The following variables are",source:"@site/docs/30_spectra/10_organic_chemistry/mass/polycalc/filteringFunction/index.md",sourceDirName:"30_spectra/10_organic_chemistry/mass/polycalc/filteringFunction",slug:"/spectra/organic_chemistry/mass/polycalc/filteringFunction/index",permalink:"/docs/docs/spectra/organic_chemistry/mass/polycalc/filteringFunction/index",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/30_spectra/10_organic_chemistry/mass/polycalc/filteringFunction/index.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/docs/docs/spectra/organic_chemistry/mass/polycalc/README"},next:{title:"MF supported syntax",permalink:"/docs/docs/spectra/organic_chemistry/mass/polycalc/mf/index"}},l=[],s={toc:l};function u(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Results may be filtered using a ",(0,a.kt)("inlineCode",{parentName:"p"},"javascript")," syntax. The following variables are\navailable:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A, B, C ... the number of monomers"),(0,a.kt)("li",{parentName:"ul"},"mm: theoretical monoisotopic mass"),(0,a.kt)("li",{parentName:"ul"},"mz: theoretical m/z (taking into account ionzation)"),(0,a.kt)("li",{parentName:"ul"},"unsaturation: degree of unsaturation"),(0,a.kt)("li",{parentName:"ul"},"charge: total charge"),(0,a.kt)("li",{parentName:"ul"},"atoms.C, atoms.O, ...: number of corresponding atoms")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"filter function",src:n(4653).Z})),(0,a.kt)("p",null,"Based on those variables it is possible to write complex conditions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(A+B)%2===0"),": the sum of the number of A monomer and B monomer should be even"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"A<B"),": the number of monomer A should be smaller than the number of monomer B"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(A+B)>10 && atoms.N<5"),": there should be at least 10 monomers and less than 5 nitrogens")))}u.isMDXComponent=!0},4653:function(e,t,n){"use strict";t.Z=n.p+"assets/images/filterFct-5514ad9625a2193b93cbdcac049c606b.png"}}]);