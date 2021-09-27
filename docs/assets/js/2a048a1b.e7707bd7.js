(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[7939],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return u},kt:function(){return d}});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(o),d=n,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return o?a.createElement(f,s(s({ref:t},u),{},{components:o})):a.createElement(f,s({ref:t},u))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,s[1]=r;for(var c=2;c<i;c++)s[c]=o[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},99455:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return r},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var a=o(22122),n=o(19756),i=(o(67294),o(3905)),s={slug:"/uuid/2294a250c8c1da87ca6753a6eb93c166"},r="MF from monoisotopic mass",l={unversionedId:"structural_analysis/mass/mf-from-monoisotopic-mass/README",id:"structural_analysis/mass/mf-from-monoisotopic-mass/README",isDocsHomePage:!1,title:"MF from monoisotopic mass",description:"Preferences",source:"@site/docs/30_structural_analysis/mass/30_mf-from-monoisotopic-mass/README.md",sourceDirName:"30_structural_analysis/mass/30_mf-from-monoisotopic-mass",slug:"/uuid/2294a250c8c1da87ca6753a6eb93c166",permalink:"/docs/eln/uuid/2294a250c8c1da87ca6753a6eb93c166",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/mass/30_mf-from-monoisotopic-mass/README.md",version:"current",frontMatter:{slug:"/uuid/2294a250c8c1da87ca6753a6eb93c166"},sidebar:"tutorialSidebar",previous:{title:"Mass fragmentation",permalink:"/docs/eln/uuid/0e35f561fff36fef6c9e7341a9eec858"},next:{title:"Mass overlay user guide",permalink:"/docs/eln/uuid/4cf732cabaf4941a66d2f19cbc5875f2"}},c=[{value:"Preferences",id:"preferences",children:[{value:"Entering a monoisotopic mass",id:"entering-a-monoisotopic-mass",children:[]},{value:"Molecular formula from monoisotopic mass",id:"molecular-formula-from-monoisotopic-mass",children:[]},{value:"Ionizations",id:"ionizations",children:[]},{value:"Filter by degree of unsaturation",id:"filter-by-degree-of-unsaturation",children:[]},{value:"Relative mass and MF determination",id:"relative-mass-and-mf-determination",children:[]}]},{value:"Results table",id:"results-table",children:[]},{value:"Pubchem candidates",id:"pubchem-candidates",children:[]}],u={toc:c};function m(e){var t=e.components,s=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mf-from-monoisotopic-mass"},"MF from monoisotopic mass"),(0,i.kt)("h2",{id:"preferences"},"Preferences"),(0,i.kt)("h3",{id:"entering-a-monoisotopic-mass"},"Entering a monoisotopic mass"),(0,i.kt)("p",null,"When loading an experimental spectrum the tool will automatically make a peak picking (centroid) that will be displayed on the spectrum."),(0,i.kt)("p",null,"Zooming in the spectrum will progressively add more and more detailed peaks."),(0,i.kt)("p",null,"If you are searching the molecular formula of an unknown product you should click on the label corresponding to the monoisotopic experimental mass."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Peak picking",src:o(10786).Z})),(0,i.kt)("h3",{id:"molecular-formula-from-monoisotopic-mass"},"Molecular formula from monoisotopic mass"),(0,i.kt)("p",null,"This tool allows finding possible molecular formula for a specific observed monoisotopic mass. When the elements are part of H, C, O, N, F, Cl, Br, I, Si, P and O the monoisotopic mass corresponds to the peak of the isotopic distribution that has the lowest mass."),(0,i.kt)("p",null,"However, by mass we don\u2019t observe a monoisotopic mass directly but always a charged form. The molecule may be charged positively, negatively, multicharged or also modified by the addition of protons or other charged entities."),(0,i.kt)("p",null,"This tool will consider the mass of the electron and the number of charge of the molecule."),(0,i.kt)("h3",{id:"ionizations"},"Ionizations"),(0,i.kt)("p",null,"In order to observe a neutral molecule the mass spectrometer will charge it using different techniques. This may involve adding protons, remove electrons, etc."),(0,i.kt)("p",null,"You can also observe charged molecules resulting of the addition of Na",(0,i.kt)("sup",null,"+"),", K",(0,i.kt)("sup",null,"+"),", etc."),(0,i.kt)("p",null,"In order to evaluate all the possibilities you must enter in the 'ionizations' field a comma separated list of all the allowed ionizations."),(0,i.kt)("p",null,"You may as well specify multiple charges. Here are some examples of allowed patterns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"H+ (addition a proton)"),(0,i.kt)("li",{parentName:"ul"},"H+, Na+, K+ (either a proton, sodium cation or potassium cation)"),(0,i.kt)("li",{parentName:"ul"},"H+, (H+)2, (H+)3 (addition of one, two or three protons)"),(0,i.kt)("li",{parentName:"ul"},"(H+)-1, (H+)-2, (H+)-3 (removal of one, two or three protons)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ionization",src:o(76961).Z})),(0,i.kt)("h3",{id:"filter-by-degree-of-unsaturation"},"Filter by degree of unsaturation"),(0,i.kt)("p",null,"The result can be further filtered by the ",(0,i.kt)("a",{href:"https://en.wikipedia.org/wiki/Degree_of_unsaturation",target:"_blank"},"degree of unsaturation"),"."),(0,i.kt)("p",null,"For stable molecules the unsaturation degree is expected to be greater or equal to zero.\nMoreover, if it is non-radical molecule the unsaturation degree is integer."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unsaturation",src:o(26739).Z})),(0,i.kt)("p",null,"Please note that those filters apply on the molecular formula without the ionization."),(0,i.kt)("h3",{id:"relative-mass-and-mf-determination"},"Relative mass and MF determination"),(0,i.kt)("p",null,"This view displays normally the mass of the peaks, but it is also possible to display relative mass to a specific peak."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on a peak to change the ",(0,i.kt)("inlineCode",{parentName:"li"},"Monoisotopic mass")," value"),(0,i.kt)("li",{parentName:"ol"},"Click on the checkbox ",(0,i.kt)("inlineCode",{parentName:"li"},"Relative mass")," on the top right")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"preferences",src:o(51195).Z})),(0,i.kt)("p",null,"It is also possible to display possible molecular formulas for the relative mass. Those are calculating using the following criteria:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"allowed atoms are based on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ranges")),(0,i.kt)("li",{parentName:"ul"},"only neutral loss are considered"),(0,i.kt)("li",{parentName:"ul"},"the charge of the entity loosing this neutral fragment is defined in ",(0,i.kt)("inlineCode",{parentName:"li"},"Charge"),", by default 1"),(0,i.kt)("li",{parentName:"ul"},"you should select ",(0,i.kt)("inlineCode",{parentName:"li"},"Show MF")," in order to annotate the peaks with the corresponding MF")),(0,i.kt)("p",null,"It is also possible to define the color of the MF annotation depending on the precision. By default, if no MF is found under a precision of 20ppm no MF is displayed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mass",src:o(95057).Z})),(0,i.kt)("h2",{id:"results-table"},"Results table"),(0,i.kt)("p",null,"This tool calculates on-the-fly the possible molecular formula based on a monoisotoipc mass and possible ionizations."),(0,i.kt)("p",null,"The resulting table will contain green background lines if this molecular formula exists in PubChem. This is an excellent way to find plausible molecular formula of unknown products."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"results",src:o(65375).Z})),(0,i.kt)("p",null,"The results contain various columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the NON-IONIZED molecular formula"),(0,i.kt)("li",{parentName:"ul"},"the monoisotopic mass of the NON-IONIZED molecule"),(0,i.kt)("li",{parentName:"ul"},"the unsaturation degree"),(0,i.kt)("li",{parentName:"ul"},"the ionization"),(0,i.kt)("li",{parentName:"ul"},"the observed mass"),(0,i.kt)("li",{parentName:"ul"},"the total charge (with ionization)"),(0,i.kt)("li",{parentName:"ul"},"the error in mDa"),(0,i.kt)("li",{parentName:"ul"},"the absolute value of the error in ppm")),(0,i.kt)("h2",{id:"pubchem-candidates"},"Pubchem candidates"),(0,i.kt)("p",null,"Using the button \u2018Pubchem candidates\u2019 you are able to list all the possible molecular formula that yields to the desired monoisotopic mass with the defined precision."),(0,i.kt)("p",null,"Couple of points to note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PubChem does not provide the isotope information in the molecular formula"),(0,i.kt)("li",{parentName:"ul"},"PubChem does not provide the different parts of the molecule in the molecular formula"),(0,i.kt)("li",{parentName:"ul"},"PubChem is not consistent with the monoisotopic mass they list on their website")),(0,i.kt)("p",null,"Therefore we have recalculated the molecular formula, monoisotopic mass, charge and molecular weight from the provided molfile. This allows us to have very accurate monoisotopic mass that also deals with isotopes."),(0,i.kt)("p",null,"Please note that for the calculation of the monoisotopic mass we didn\u2019t consider the charge !"),(0,i.kt)("p",null,"NB: only stable isotopes are considered!"),(0,i.kt)("p",null,"##Tips"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Assignment")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is possible to assign the different fragments. More information can be ",(0,i.kt)("a",{parentName:"p",href:"/docs/eln/structural_analysis/mass/mf-from-monoisotopic-mass/includes/assignment/README"},"found here"),"."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Similarity")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In order to improve the MF determination it is possible to compare the full isotopic distribution. More information can be ",(0,i.kt)("a",{parentName:"p",href:"/docs/eln/structural_analysis/mass/mf-from-monoisotopic-mass/includes/similarity/README"},"found here"),"."))))}m.isMDXComponent=!0},76961:function(e,t,o){"use strict";t.Z=o.p+"assets/images/ionization-558606b62d383069f149fbdf37ca9383.png"},95057:function(e,t,o){"use strict";t.Z=o.p+"assets/images/mass-6fa10e5add53fa93e02d94456e3a1353.png"},10786:function(e,t,o){"use strict";t.Z=o.p+"assets/images/peakPicking-45beb1338d3a136cd7eb56095adda2db.gif"},51195:function(e,t,o){"use strict";t.Z=o.p+"assets/images/prefs-71d715ec1bede5207a3f9479b8d0c0c9.png"},65375:function(e,t,o){"use strict";t.Z=o.p+"assets/images/results-715050ed0751125210e6ee83717aa6e2.png"},26739:function(e,t,o){"use strict";t.Z=o.p+"assets/images/unsaturation-680865294b9c58265113828a35876d87.png"}}]);