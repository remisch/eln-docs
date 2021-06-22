(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[8348],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,a(a({ref:t},l),{},{components:r})):n.createElement(h,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5489:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a={description:"Predict 2D HSQC and HMBC NMR spectra"},c={unversionedId:"spectra/organic_chemistry/nmr/predictions/hmbc/README",id:"spectra/organic_chemistry/nmr/predictions/hmbc/README",isDocsHomePage:!1,title:"HSQC / HMBC prediction",description:"Predict 2D HSQC and HMBC NMR spectra",source:"@site/docs/30_spectra/10_organic_chemistry/nmr/predictions/hmbc/README.md",sourceDirName:"30_spectra/10_organic_chemistry/nmr/predictions/hmbc",slug:"/spectra/organic_chemistry/nmr/predictions/hmbc/README",permalink:"/docs/eln/spectra/organic_chemistry/nmr/predictions/hmbc/README",editUrl:"https://github.com/cheminfo/eln-docs/edit/master/website/docs/30_spectra/10_organic_chemistry/nmr/predictions/hmbc/README.md",version:"current",frontMatter:{description:"Predict 2D HSQC and HMBC NMR spectra"},sidebar:"tutorialSidebar",previous:{title:"COSY prediction",permalink:"/docs/eln/spectra/organic_chemistry/nmr/predictions/cosy/README"},next:{title:"Search by NMR chemical shifts",permalink:"/docs/eln/spectra/organic_chemistry/nmr/search/README"}},s=[],p={toc:s};function l(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Draw a chemical structure to predict and click Calculate to calculate and display its HMBC spectrum. Originally the structure of the currently selected sample will be already drawn so that you may go ahead and simulate its spectrum right away."),(0,o.kt)("p",null,"The simulated HMBC and the 1H projection are shown to the right, while the upper-mid module displays the chemical structure with hydrogen exploded. These two modules are linked, so that hovering over a peak in the spectrum will highlight the corresponding corresponding atoms in the structure and hovering over an atom will highlight the corresponding peaks in the spectrum."),(0,o.kt)("p",null,"You may also Paste or drop a molfile or SMILES to simulate a spectrum from local data and Drop or paste a JCamp to superimpose an experimental spectrum over the prediction."),(0,o.kt)("p",null,"Structure drawing is powered by ",(0,o.kt)("a",{parentName:"p",href:"http://peter-ertl.com/jsme/"},"JSME"),". 1H chemical shifts and coupling constants are predicted using ",(0,o.kt)("a",{parentName:"p",href:"http://www2.chemie.uni-erlangen.de/services/spinus/"},"Spinus"),". Simulation from predicted parameters uses the method described in ",(0,o.kt)("a",{parentName:"p",href:"http://www.sciencedirect.com/science/article/pii/S1090780710004003"},"DOI:10.1016/j.jmr.2010.12.008"),". HMBC correlations are calculated based on atom-to-atom paths in the molecule: a correlation is shown in the HMBC whenever a hydrogen is joined by a path traversing no less than Minimal number of bonds and no more than Maximal number of bonds to the carbon atom. You may adjust these Simulation parameters in the module right next to the Calculate button. A HSQC spectrum can be obtained by setting Maximal number of bonds and Minimal number of bonds to 1."))}l.isMDXComponent=!0}}]);