(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[4411],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,h=m["".concat(s,".").concat(d)]||m[d]||l[d]||o;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1178:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return s},default:function(){return u}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),c={description:"Predict 1D proton NMR spectra"},a={unversionedId:"spectra/organic_chemistry/nmr/predictions/1h/README",id:"spectra/organic_chemistry/nmr/predictions/1h/README",isDocsHomePage:!1,title:"1H prediction",description:"Predict 1D proton NMR spectra",source:"@site/docs/30_spectra/10_organic_chemistry/nmr/predictions/1h/README.md",sourceDirName:"30_spectra/10_organic_chemistry/nmr/predictions/1h",slug:"/spectra/organic_chemistry/nmr/predictions/1h/README",permalink:"/docs/spectra/organic_chemistry/nmr/predictions/1h/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/30_spectra/10_organic_chemistry/nmr/predictions/1h/README.md",version:"current",frontMatter:{description:"Predict 1D proton NMR spectra"},sidebar:"tutorialSidebar",previous:{title:"13C prediction",permalink:"/docs/spectra/organic_chemistry/nmr/predictions/13c/README"},next:{title:"Predictions",permalink:"/docs/spectra/organic_chemistry/nmr/predictions/README"}},s=[],p={toc:s};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Draw a chemical structure to predict and click Calculate spectrum to calculate and display the simulated 1H NMR spectra. Originally the structure of the currently selected sample will be already drawn so that you may go ahead and simulate its spectrum right away."),(0,o.kt)("p",null,"The simulated spectrum is shown in the lower module; the upper modules display the chemical structure with hydrogen exploded and the List of signals. These three modules are linked, so that hovering over a peak in the spectrum will highlight the corresponding row in the chemical shift list and the corresponding atoms in the structure, hovering over an atom will highlight the corresponding peak and chemical shift, etc."),(0,o.kt)("p",null,"You may adjust some parameters of the simulation: Frequency ","(","400 MHz by default",")",", ppm interval ","(","From 0 To 11 ppm by default",")"," and the Number of points to be calculated ","(","8000 by default",")",". You may also superimpose an experimental spectrum from the database over the prediction, or Drop or paste a JCamp to superimpose a locally stored experimental spectrum."),(0,o.kt)("p",null,"Structure drawing is powered by ",(0,o.kt)("a",{parentName:"p",href:"http://peter-ertl.com/jsme/"},"JSME"),". 1H chemical shifts and coupling constants are predicted using ",(0,o.kt)("a",{parentName:"p",href:"http://www2.chemie.uni-erlangen.de/services/spinus/"},"Spinus"),". Simulation from predicted parameters uses the method described in ",(0,o.kt)("a",{parentName:"p",href:"http://www.sciencedirect.com/science/article/pii/S1090780710004003"},"DOI:10.1016/j.jmr.2010.12.008"),"."))}u.isMDXComponent=!0}}]);