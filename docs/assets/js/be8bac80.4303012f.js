(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[7931],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9498:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r={slug:"/uuid/f8b2a67c144b612f89580e05f8c02509"},s={unversionedId:"spectra/organic_chemistry/mass/deconvolution/README",id:"spectra/organic_chemistry/mass/deconvolution/README",isDocsHomePage:!1,title:"Mass spectra deconvolution",description:"This tool allows to determine the exact composition based on a mass spectrum even if there are overlaps.",source:"@site/docs/30_spectra/10_organic_chemistry/mass/deconvolution/README.md",sourceDirName:"30_spectra/10_organic_chemistry/mass/deconvolution",slug:"/uuid/f8b2a67c144b612f89580e05f8c02509",permalink:"/docs/docs/uuid/f8b2a67c144b612f89580e05f8c02509",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/30_spectra/10_organic_chemistry/mass/deconvolution/README.md",version:"current",frontMatter:{slug:"/uuid/f8b2a67c144b612f89580e05f8c02509"},sidebar:"tutorialSidebar",previous:{title:"View and process infrared spectra",permalink:"/docs/docs/uuid/3fc7caa33b9b3eb50bb48920f4788725"},next:{title:"Mass fragmentation",permalink:"/docs/docs/spectra/organic_chemistry/mass/fragmentation/README"}},l=[{value:"Peak picking",id:"peak-picking",children:[]},{value:"Define possible MFs",id:"define-possible-mfs",children:[]},{value:"Mass spectrum parameters",id:"mass-spectrum-parameters",children:[]}],c={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tool allows to determine the exact composition based on a mass spectrum even if there are overlaps."),(0,i.kt)("p",null,"The workflow is the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"make a peak picking (centroids) of the mass spectrum"),(0,i.kt)("li",{parentName:"ul"},"generate all the theoretical isotopic distribution of all entities to look for"),(0,i.kt)("li",{parentName:"ul"},"align the theoretical isotopic distribution to the centroids"),(0,i.kt)("li",{parentName:"ul"},"calculate a non-negative matrix factorization"),(0,i.kt)("li",{parentName:"ul"},"create a report")),(0,i.kt)("h2",{id:"peak-picking"},"Peak picking"),(0,i.kt)("p",null,"When loading the spectrum a peak picking is done that determine the position and width of all the peaks based on global spectrum deconvolution algorithm that was implemented in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mljs/global-spectral-deconvolution"},"javascript"),"."),(0,i.kt)("p",null,"The result of the peak picking appears in the spectrum as yellow vertical lines. Note that the top of the peak is determined based on the 3 highest point and does not have to match an experimental point."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"centroids",src:n(2461).Z})),(0,i.kt)("h2",{id:"define-possible-mfs"},"Define possible MFs"),(0,i.kt)("p",null,"When trying to deconvolute a mass spectrum it is required to define all the possible molecular formula. It is important to limit as much as possible the number of molecular formula to consider."),(0,i.kt)("p",null,"The molecular formula is defined based on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Base MF : atoms that are common and present in all the molecular formula"),(0,i.kt)("li",{parentName:"ul"},"Modifications: list of modifications that can be applied on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Base MF"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"if you want to search for isotopic enrichment you can enter as MF: ",(0,i.kt)("inlineCode",{parentName:"li"},"C-1[13C]"),", a modification in which we remove a ",(0,i.kt)("inlineCode",{parentName:"li"},"C")," of natural abundance and add a ",(0,i.kt)("sup",null,"13"),"C"))),(0,i.kt)("li",{parentName:"ul"},"Ionizations: define the list of ways to ionize the molecule. If the molecule is naturally charted this field may stay empty. It can also contain an unlimited comma separated list of ionizations like ",(0,i.kt)("inlineCode",{parentName:"li"},"Na+, K+, NH4+, H+,"),". Note this comma at the end that allows also to have no ionizatioon."),(0,i.kt)("li",{parentName:"ul"},"MF Filters: possible MFs can be filtered based on DBE (double bond equivalent, unsaturation), charge and molecular weight. It is also possible to add more advanced filtering option by entering a javascript code that can use the following variables:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"mm: monoisotopic mass of the non ionized molecule"),(0,i.kt)("li",{parentName:"ul"},"mz: observed mass (m/z)"),(0,i.kt)("li",{parentName:"ul"},"charge: charge of the non ionized molecule"),(0,i.kt)("li",{parentName:"ul"},"unsaturation: unsaturation of the non ionized molecule"),(0,i.kt)("li",{parentName:"ul"},"atoms.O, atoms.C, atoms.N, ... number of atoms of the non ionized molecule"),(0,i.kt)("li",{parentName:"ul"},"examples:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"atoms.O < atoms.C"),(0,i.kt)("li",{parentName:"ul"},"mm < 500 && atoms.C > 10")))))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"preferences mf",src:n(2978).Z})),(0,i.kt)("h2",{id:"mass-spectrum-parameters"},"Mass spectrum parameters"),(0,i.kt)("p",null,"Peak width calculation is done automatically and allows to predict the peak width based on the mass."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"preferences mass",src:n(6109).Z})))}u.isMDXComponent=!0},2461:function(e,t,n){"use strict";t.Z=n.p+"assets/images/centroids-174c9cdecb7e8e1ea3105c5de858de26.png"},6109:function(e,t,n){"use strict";t.Z=n.p+"assets/images/prefs-mass-a54ce6c2d980c86ecf5799b1a66f79a2.png"},2978:function(e,t,n){"use strict";t.Z=n.p+"assets/images/prefs-mf-16042b3f7dd6d696c3edde01b7cab550.png"}}]);