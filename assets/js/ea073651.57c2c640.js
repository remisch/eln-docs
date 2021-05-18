(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[2190],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(h,a(a({ref:t},l),{},{components:r})):n.createElement(h,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2945:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a={description:"Predict 2D COSY NMR spectra"},c={unversionedId:"spectra/organic_chemistry/nmr/predictions/cosy/README",id:"spectra/organic_chemistry/nmr/predictions/cosy/README",isDocsHomePage:!1,title:"COSY prediction",description:"Predict 2D COSY NMR spectra",source:"@site/docs/30_spectra/10_organic_chemistry/nmr/predictions/cosy/README.md",sourceDirName:"30_spectra/10_organic_chemistry/nmr/predictions/cosy",slug:"/spectra/organic_chemistry/nmr/predictions/cosy/README",permalink:"/docs/spectra/organic_chemistry/nmr/predictions/cosy/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/30_spectra/10_organic_chemistry/nmr/predictions/cosy/README.md",version:"current",frontMatter:{description:"Predict 2D COSY NMR spectra"},sidebar:"tutorialSidebar",previous:{title:"Predictions",permalink:"/docs/spectra/organic_chemistry/nmr/predictions/README"},next:{title:"HSQC / HMBC prediction",permalink:"/docs/spectra/organic_chemistry/nmr/predictions/hmbc/README"}},s=[],p={toc:s};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Draw a chemical structure to predict and click Calculate to calculate and display its COSY. Originally the structure of the currently selected sample will be already drawn so that you may go ahead and simulate its spectrum right away."),(0,i.kt)("p",null,"The simulated COSY and the 1H projection are shown to the right, while the upper-mid module displays the chemical structure with hydrogen exploded. These two modules are linked, so that hovering over a peak in the spectrum will highlight the corresponding corresponding atoms in the structure and hovering over an atom will highlight the corresponding peaks in the spectrum."),(0,i.kt)("p",null,"You may also Paste or drop a molfile or SMILES to simulate a spectrum from local data and Drop or paste a JCamp to superimpose an experimental spectrum over the prediction."),(0,i.kt)("p",null,"Structure drawing is powered by ",(0,i.kt)("a",{parentName:"p",href:"http://peter-ertl.com/jsme/"},"JSME"),". 1H chemical shifts and coupling constants are predicted using ",(0,i.kt)("a",{parentName:"p",href:"http://www2.chemie.uni-erlangen.de/services/spinus/"},"Spinus"),". Simulation from predicted parameters uses the method described in ",(0,i.kt)("a",{parentName:"p",href:"http://www.sciencedirect.com/science/article/pii/S1090780710004003"},"DOI:10.1016/j.jmr.2010.12.008"),". COSY correlations are calculated based on atom-to-atom paths in the molecule: a correlation is shown in the COSY whenever two hydrogens are joined by a path traversing no less than Minimal number of bonds and no more than Maximal number of bonds. You may adjust these Simulation parameters in the module right next to the Calculate button."))}l.isMDXComponent=!0}}]);