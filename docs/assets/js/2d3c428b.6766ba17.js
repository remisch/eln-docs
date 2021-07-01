(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[5370,4689,4225,9801],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(f,c(c({ref:t},p),{},{components:n})):a.createElement(f,c({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,c[1]=s;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8155:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return f}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),c=n(7081),s=n(7642),o=n(3900),l={slug:"/uuid/739379c6183ec9beb757025314c40f8e"},p="Compare multiple of spectra",u={unversionedId:"spectra/machine_learning/compare/README",id:"spectra/machine_learning/compare/README",isDocsHomePage:!1,title:"Compare multiple of spectra",description:"Multiple spectra analysis allows to quickly extract information about a set of spectra.",source:"@site/docs/30_spectra/30_machine_learning/10_compare/README.md",sourceDirName:"30_spectra/30_machine_learning/10_compare",slug:"/uuid/739379c6183ec9beb757025314c40f8e",permalink:"/docs/eln/uuid/739379c6183ec9beb757025314c40f8e",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_spectra/30_machine_learning/10_compare/README.md",version:"current",frontMatter:{slug:"/uuid/739379c6183ec9beb757025314c40f8e"},sidebar:"tutorialSidebar",previous:{title:"XPS",permalink:"/docs/eln/spectra/physical_chemistry/xps/README"},next:{title:"Using distinct colors",permalink:"/docs/eln/uuid/02d6bbc6c04edd24ce90b146348573f1/tip/1"}},m=[{value:"Spectra selection, normalization and previsualization",id:"spectra-selection-normalization-and-previsualization",children:[]},{value:"Comparing spectra",id:"comparing-spectra",children:[]},{value:"Relative spectra",id:"relative-spectra",children:[]},{value:"Scaling spectra",id:"scaling-spectra",children:[]}],d={toc:m};function f(e){var t=e.components,l=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"compare-multiple-of-spectra"},"Compare multiple of spectra"),(0,r.kt)("p",null,"Multiple spectra analysis allows to quickly extract information about a set of spectra."),(0,r.kt)("h2",{id:"spectra-selection-normalization-and-previsualization"},"Spectra selection, normalization and previsualization"),(0,r.kt)(c.default,{mdxType:"SelectSpectra"}),(0,r.kt)(s.default,{mdxType:"SpectraNormalization"}),(0,r.kt)(o.default,{mdxType:"SuperimposeSpectraManipulation"}),(0,r.kt)("h2",{id:"comparing-spectra"},"Comparing spectra"),(0,r.kt)("p",null,"Once you have superimposed spectra you can define ranges by maintaining alt pressed and click once left and right of the range you want to define."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"add ranges",src:n(2700).Z})),(0,r.kt)("p",null,"A column will be added in the dataset table that contains the integration of the selected area. It is also possible to define more than one range by repeating this procedure."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Define ranges")," tab it is possible to rename the variables as well as to define custom formulae based on the ranges integration."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"custom calculations",src:n(4648).Z})),(0,r.kt)("p",null,"All the ranges and custom calculations will be automatically added in the table. From the table it is also possible to export all the data to a spreadsheet by clicking the export icon in the table toolbar."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"integrations",src:n(154).Z})),(0,r.kt)("h2",{id:"relative-spectra"},"Relative spectra"),(0,r.kt)("p",null,"It is possible to select a reference spectrum (target spectrum) so that all the other spectra are represented as the relative value to the target. To select the target spectrum click on the icon in the last column. The line will become green."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"target",src:n(5895).Z})),(0,r.kt)("p",null,"The target spectrum will now be a horizontal line."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"relative",src:n(5559).Z})),(0,r.kt)("p",null,"In the preferences you can uncheck ",(0,r.kt)("inlineCode",{parentName:"p"},"Relative")," to come back to the original view."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preferences",src:n(7894).Z})),(0,r.kt)("h2",{id:"scaling-spectra"},"Scaling spectra"),(0,r.kt)("p",null,"Spectra can be rescaled based on the full spectrum or a specific range. Rescale can be based either on the integral, the minimal peak height or maximal peak height."))}f.isMDXComponent=!0},7081:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return l},default:function(){return u}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),c={},s=void 0,o={unversionedId:"spectra/machine_learning/includes/select-spectra",id:"spectra/machine_learning/includes/select-spectra",isDocsHomePage:!1,title:"select-spectra",description:"The first step is to select the spectra and you may follow this tutorial",source:"@site/docs/30_spectra/30_machine_learning/includes/select-spectra.md",sourceDirName:"30_spectra/30_machine_learning/includes",slug:"/spectra/machine_learning/includes/select-spectra",permalink:"/docs/eln/spectra/machine_learning/includes/select-spectra",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_spectra/30_machine_learning/includes/select-spectra.md",version:"current",frontMatter:{}},l=[],p={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Select spectra")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The first step is to select the spectra and you may follow this ",(0,r.kt)("a",{parentName:"p",href:"/eln/uuid/ml-spectra-selection"},"tutorial")))))}u.isMDXComponent=!0},7642:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return l},default:function(){return u}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),c={},s=void 0,o={unversionedId:"spectra/machine_learning/includes/spectra-normalization",id:"spectra/machine_learning/includes/spectra-normalization",isDocsHomePage:!1,title:"spectra-normalization",description:"Once spectra have been selected, data normalization filters can be applied and more information is available here.",source:"@site/docs/30_spectra/30_machine_learning/includes/spectra-normalization.md",sourceDirName:"30_spectra/30_machine_learning/includes",slug:"/spectra/machine_learning/includes/spectra-normalization",permalink:"/docs/eln/spectra/machine_learning/includes/spectra-normalization",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_spectra/30_machine_learning/includes/spectra-normalization.md",version:"current",frontMatter:{}},l=[],p={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Spectra normalization")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Once spectra have been selected, data normalization filters can be applied and ",(0,r.kt)("a",{parentName:"p",href:"/eln/uuid/ml-spectra-normalization"},"more information is available here"),"."))))}u.isMDXComponent=!0},3900:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return l},default:function(){return u}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),c={},s=void 0,o={unversionedId:"spectra/machine_learning/includes/superimposed-spectra-manipulation",id:"spectra/machine_learning/includes/superimposed-spectra-manipulation",isDocsHomePage:!1,title:"superimposed-spectra-manipulation",description:"The superimposed spectra can be manipulated without numerous advanced features described here.",source:"@site/docs/30_spectra/30_machine_learning/includes/superimposed-spectra-manipulation.md",sourceDirName:"30_spectra/30_machine_learning/includes",slug:"/spectra/machine_learning/includes/superimposed-spectra-manipulation",permalink:"/docs/eln/spectra/machine_learning/includes/superimposed-spectra-manipulation",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_spectra/30_machine_learning/includes/superimposed-spectra-manipulation.md",version:"current",frontMatter:{}},l=[],p={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Superimposed spectra manipulation")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The superimposed spectra can be manipulated without numerous ",(0,r.kt)("a",{parentName:"p",href:"/eln/uuid/ml-spectra-visualization"},"advanced features described here"),"."))))}u.isMDXComponent=!0},2700:function(e,t,n){"use strict";t.Z=n.p+"assets/images/addRanges-4550cd3e85f323510369acbdab6275f9.gif"},4648:function(e,t,n){"use strict";t.Z=n.p+"assets/images/customCalculations-88c8ab1e3424ef3e8771a8d5c63ce188.png"},154:function(e,t,n){"use strict";t.Z=n.p+"assets/images/integrations-922a17d9ed2f3a5be7ad0255a172d5b0.png"},7894:function(e,t,n){"use strict";t.Z=n.p+"assets/images/preferences-31b694358d21f506174088d1dfd13996.png"},5559:function(e,t,n){"use strict";t.Z=n.p+"assets/images/relative-cb78db7c73aabd1fe5fa20090dcf5ba4.png"},5895:function(e,t,n){"use strict";t.Z=n.p+"assets/images/target-302c5318f8a5b604aeef319129968cdd.png"}}]);