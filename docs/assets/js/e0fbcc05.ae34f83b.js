"use strict";(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[3177],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2084:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={description:"Predict 2D COSY NMR spectra",slug:"/uuid/b50564ac9d207212f8e5ae8167a607ed"},s="COSY prediction",l={unversionedId:"structural_analysis/nmr/predictions/cosy/README",id:"structural_analysis/nmr/predictions/cosy/README",isDocsHomePage:!1,title:"COSY prediction",description:"Predict 2D COSY NMR spectra",source:"@site/docs/30_structural_analysis/nmr/predictions/cosy/README.md",sourceDirName:"30_structural_analysis/nmr/predictions/cosy",slug:"/uuid/b50564ac9d207212f8e5ae8167a607ed",permalink:"/docs/eln/uuid/b50564ac9d207212f8e5ae8167a607ed",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/nmr/predictions/cosy/README.md",tags:[],version:"current",frontMatter:{description:"Predict 2D COSY NMR spectra",slug:"/uuid/b50564ac9d207212f8e5ae8167a607ed"},sidebar:"tutorialSidebar",previous:{title:"<sup>1</sup>H prediction",permalink:"/docs/eln/uuid/eea0ba081ea2cc99da5c1aed2f29a0a8"},next:{title:"HSQC / HMBC prediction",permalink:"/docs/eln/uuid/b50564ac9d207212f8e5ae8167a68433"}},u=[{value:"Introduction",id:"introduction",children:[],level:2}],p={toc:u};function d(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cosy-prediction"},"COSY prediction"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This tool allows you to predict the COSY spectrum of your sample or any other molecule. ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Two-dimensional_nuclear_magnetic_resonance_spectroscopy"},"COSY (homonuclear correlation spectroscopy)")," is a two-dimentional nuclear magnetic resonance spectroscopic technique. It gives data plotted in a space defined by two frequency axes rather than one.  It is used to identify spins which are coupled to each other. 2-bond and 3-bond H-H coupling are visible by COSY, as well as long range coupling with long acquisition time. The cross-peaks (not on the diagonal) show scalar J-coupling correlations. This method is very useful when the multiplets overlap or when the second order coupling complicates the 1D spectrum. You can see below an example of COSY spectrum of ethylbenzene. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"spectrum",src:n(42985).Z})),(0,a.kt)("p",null,"The structure of the currently selected sample will be already drawn so that you may go ahead and click Calculate to calculate and simulate its COSY spectrum right away. If you wish to simulate the spectrum of another molecule, you can draw it or you can paste the structure in the form of a molfile or a SMILES string. Structure drawing is powered by ",(0,a.kt)("a",{parentName:"p",href:"https://peter-ertl.com/jsme/"},"JSME"),". You may also drop or paste a ",(0,a.kt)("a",{parentName:"p",href:"/docs/eln/structural_analysis/includes/jcamp/README"},"JCAMP file")," to superimpose an experimental spectrum over prediction."),(0,a.kt)("p",null,"The simulated COSY spectrum, the 1H projection and the chemical structure with explicit hydrogens are linked, hovering over a peak in the spectrum will highlight the corresponding atoms in the structure and hovering over an atom will highlight the corresponding peaks in the spectrum."),(0,a.kt)("p",null,"1H chemical shifts and coupling constants are predicted using ",(0,a.kt)("a",{parentName:"p",href:"http://www2.chemie.uni-erlangen.de/services/spinus/"},"Spinus"),". Simulation from predicted parameters uses the method described in ",(0,a.kt)("a",{parentName:"p",href:"http://www.sciencedirect.com/science/article/pii/S1090780710004003"},"DOI:10.1016/j.jmr.2010.12.008"),". COSY correlations are calculated based on atom-to-atom paths in the molecule: a correlation is shown in the COSY whenever two hydrogens are joined by a path traversing no less than ",(0,a.kt)("inlineCode",{parentName:"p"},"Minimal number of bonds")," and no more than ",(0,a.kt)("inlineCode",{parentName:"p"},"Maximal number of bonds"),". You may adjust these Simulation parameters in the module right next to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Calculate")," button."))}d.isMDXComponent=!0},42985:function(e,t,n){t.Z=n.p+"assets/images/cosy_spectrum-ef32dc42dbca6db3bec608f34d97e4ed.gif"}}]);