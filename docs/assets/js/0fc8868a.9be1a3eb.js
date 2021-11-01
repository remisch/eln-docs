"use strict";(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[440,9699,8783,5128],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},128:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=t(99103),c=t(13337),s=t(34989),l=["components"],u={slug:"/uuid/123afc6387248096bb2ab8bbd1a0bedf"},p="UMAP dimension reduction",d={unversionedId:"machine_learning/umap/README",id:"machine_learning/umap/README",isDocsHomePage:!1,title:"UMAP dimension reduction",description:"UMAP: Uniform Manifold Approximation and Projection for Dimension Reduction",source:"@site/docs/50_machine_learning/50_umap/README.md",sourceDirName:"50_machine_learning/50_umap",slug:"/uuid/123afc6387248096bb2ab8bbd1a0bedf",permalink:"/docs/eln/uuid/123afc6387248096bb2ab8bbd1a0bedf",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/50_machine_learning/50_umap/README.md",tags:[],version:"current",frontMatter:{slug:"/uuid/123afc6387248096bb2ab8bbd1a0bedf"},sidebar:"tutorialSidebar",previous:{title:"Calculate PCA for spectra",permalink:"/docs/eln/uuid/99e77c27589aa8f3d14f48716e4e6c89"},next:{title:"Deconvolution of spectra",permalink:"/docs/eln/uuid/e62a47d76949b3e2e1eaec845d486d81"}},m=[{value:"Spectra selection, normalization and previsualization",id:"spectra-selection-normalization-and-previsualization",children:[],level:2}],f={toc:m};function h(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"umap-dimension-reduction"},"UMAP dimension reduction"),(0,r.kt)("p",null,"UMAP: Uniform Manifold Approximation and Projection for Dimension Reduction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1802.03426"},"https://arxiv.org/abs/1802.03426")),(0,r.kt)("h2",{id:"spectra-selection-normalization-and-previsualization"},"Spectra selection, normalization and previsualization"),(0,r.kt)(o.default,{mdxType:"SelectSpectra"}),(0,r.kt)(c.default,{mdxType:"SpectraNormalization"}),(0,r.kt)(s.default,{mdxType:"SuperimposeSpectraManipulation"}))}h.isMDXComponent=!0},99103:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],c={},s=void 0,l={unversionedId:"machine_learning/includes/select-spectra",id:"machine_learning/includes/select-spectra",isDocsHomePage:!1,title:"select-spectra",description:"The first step is to select the spectra and you may follow this tutorial",source:"@site/docs/50_machine_learning/includes/select-spectra.md",sourceDirName:"50_machine_learning/includes",slug:"/machine_learning/includes/select-spectra",permalink:"/docs/eln/machine_learning/includes/select-spectra",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/50_machine_learning/includes/select-spectra.md",tags:[],version:"current",frontMatter:{}},u=[],p={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Select spectra")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The first step is to select the spectra and you may follow this ",(0,r.kt)("a",{parentName:"p",href:"/eln/uuid/ml-spectra-selection"},"tutorial")))))}d.isMDXComponent=!0},13337:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],c={},s=void 0,l={unversionedId:"machine_learning/includes/spectra-normalization",id:"machine_learning/includes/spectra-normalization",isDocsHomePage:!1,title:"spectra-normalization",description:"Once spectra have been selected, data normalization filters can be applied and more information is available here.",source:"@site/docs/50_machine_learning/includes/spectra-normalization.md",sourceDirName:"50_machine_learning/includes",slug:"/machine_learning/includes/spectra-normalization",permalink:"/docs/eln/machine_learning/includes/spectra-normalization",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/50_machine_learning/includes/spectra-normalization.md",tags:[],version:"current",frontMatter:{}},u=[],p={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Spectra normalization")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Once spectra have been selected, data normalization filters can be applied and ",(0,r.kt)("a",{parentName:"p",href:"/eln/uuid/ml-spectra-normalization"},"more information is available here"),"."))))}d.isMDXComponent=!0},34989:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],c={},s=void 0,l={unversionedId:"machine_learning/includes/superimposed-spectra-manipulation",id:"machine_learning/includes/superimposed-spectra-manipulation",isDocsHomePage:!1,title:"superimposed-spectra-manipulation",description:"The superimposed spectra can be manipulated without numerous advanced features described here.",source:"@site/docs/50_machine_learning/includes/superimposed-spectra-manipulation.md",sourceDirName:"50_machine_learning/includes",slug:"/machine_learning/includes/superimposed-spectra-manipulation",permalink:"/docs/eln/machine_learning/includes/superimposed-spectra-manipulation",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/50_machine_learning/includes/superimposed-spectra-manipulation.md",tags:[],version:"current",frontMatter:{}},u=[],p={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Superimposed spectra manipulation")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The superimposed spectra can be manipulated without numerous ",(0,r.kt)("a",{parentName:"p",href:"/eln/uuid/ml-spectra-visualization"},"advanced features described here"),"."))))}d.isMDXComponent=!0}}]);