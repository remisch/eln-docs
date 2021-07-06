(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[4864],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return u},kt:function(){return d}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return o?n.createElement(h,i(i({ref:t},u),{},{components:o})):n.createElement(h,i({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},2169:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=o(2122),r=o(9756),a=(o(7294),o(3905)),i={},s="MF from monoisotopic mass",l={unversionedId:"spectra/organic_chemistry/mass/view-and-process-hr-mass/README",id:"spectra/organic_chemistry/mass/view-and-process-hr-mass/README",isDocsHomePage:!1,title:"MF from monoisotopic mass",description:"Molecular formula from monoisotopic mass",source:"@site/docs/30_spectra/10_organic_chemistry/mass/view-and-process-hr-mass/README.md",sourceDirName:"30_spectra/10_organic_chemistry/mass/view-and-process-hr-mass",slug:"/spectra/organic_chemistry/mass/view-and-process-hr-mass/README",permalink:"/docs/eln/spectra/organic_chemistry/mass/view-and-process-hr-mass/README",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_spectra/10_organic_chemistry/mass/view-and-process-hr-mass/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/docs/eln/spectra/organic_chemistry/mass/superimpose/README"},next:{title:"Assign mass spectrum",permalink:"/docs/eln/spectra/organic_chemistry/mass/view-and-process-hr-mass/assignment/index"}},c=[{value:"Molecular formula from monoisotopic mass",id:"molecular-formula-from-monoisotopic-mass",children:[{value:"Options",id:"options",children:[]}]},{value:"Pubchem candidates",id:"pubchem-candidates",children:[]}],u={toc:c};function m(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mf-from-monoisotopic-mass"},"MF from monoisotopic mass"),(0,a.kt)("h2",{id:"molecular-formula-from-monoisotopic-mass"},"Molecular formula from monoisotopic mass"),(0,a.kt)("p",null,"This tool allows finding possible molecular formula for a specific observed monoisotopic mass. When the elements are part of H, C, O, N, F, Cl, Br, I, Si, P and O the monoisotopic mass corresponds to the peak of the isotopic distribution that has the lowest mass."),(0,a.kt)("p",null,"However, by mass we don\u2019t observe a monoisotopic mass directly but always a charged form. The molecule may be charged positively, negatively, multicharged or also modified by the addition of protons or other charged entities."),(0,a.kt)("p",null,"This tool will consider the mass of the electron and the number of charge of the molecule."),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},(0,a.kt)("img",{src:"images/preferences.png"})),(0,a.kt)("th",{style:{textAlign:"left"}},(0,a.kt)("ul",null,(0,a.kt)("li",null,"Monoisotopic mass: the target observed monoisotopic mass"),(0,a.kt)("li",null,"Modification: what was added or remove in order to observe the monoisotopic mass ? For example:",(0,a.kt)("ul",null,(0,a.kt)("li",null,"(H+)2 : adding 2 protons"),(0,a.kt)("li",null,"(NH4+)"),(0,a.kt)("li",null,"(--): adding 2 electrons"))),(0,a.kt)("li",null,"Range: What are the range of atoms that you be explored. All the stable isotopes may be considered and a range is specified as Atomfrom-to. For example:",(0,a.kt)("ul",null,(0,a.kt)("li",null,"C2-20 H2-40 : all moleculear formula having between 2 and 20 carbons and 2 and 40 hydrogens"))),(0,a.kt)("li",null,"Precision (ppm): The precision of the spectrometer. Only the molecular formula that fits in the precision will be displayed."),(0,a.kt)("li",null,"Unsaturation filters for the observed MF",(0,a.kt)("ul",null,(0,a.kt)("li",null,"Use unsaturation: if true we filter the molecular formula based on unsaturation"),(0,a.kt)("li",null,"Min unsaturation: minimal number of unsaturations. Normally an unsaturation should never be negative"),(0,a.kt)("li",null,"Max unsaturation: Maximal number of unsaturation."),(0,a.kt)("li",null,"Integer unsaturation: if the modification is (+) and it is not a radical the unsaturation must be an integer"))),(0,a.kt)("li",null,"Parameters for spectra simulations: by default we calculate the mass spectrum with a peak width of 0.",(0,a.kt)("ul",null,(0,a.kt)("li",null,"Apply gaussian: peaks will be calculate as gaussians"),(0,a.kt)("li",null,"Resolution: resolution of the spectrometer that will allow to calculate the FWHM (Full Width Half Maximum) of the gaussians."))))))),(0,a.kt)("tbody",null)),(0,a.kt)("h2",{id:"pubchem-candidates"},"Pubchem candidates"),(0,a.kt)("p",null,"Using the button \u2018Pubchem candidates\u2019 you are able to list all the possible molecular formula that yields to the desired monoisotopic mass with the defined precision."),(0,a.kt)("p",null,"Couple of points to note:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PubChem does not provide the isotope information in the molecular formula"),(0,a.kt)("li",{parentName:"ul"},"PubChem does not provide the different parts of the molecule in the molecular formula"),(0,a.kt)("li",{parentName:"ul"},"PubChem is not consistent with the monoisotopic mass they list on their website")),(0,a.kt)("p",null,"Therefore we have recalculated the molecular formula, monoisotopic mass, charge and molecular weight from the provided molfile. This allows us to have very accurate monoisotopic mass that also deals with isotopes."),(0,a.kt)("p",null,"Please note that for the calculation of the monoisotopic mass we didn\u2019t consider the charge !"),(0,a.kt)("p",null,"NB: only stable isotopes are considered!"))}m.isMDXComponent=!0}}]);