(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[5631,8753],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,f=d["".concat(l,".").concat(h)]||d[h]||m[h]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3695:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=n(5038),s={slug:"/uuid/0e35f561fff36fef6c9e7341a9eec858"},l="Mass fragmentation",c={unversionedId:"spectra/organic_chemistry/mass/fragmentation/README",id:"spectra/organic_chemistry/mass/fragmentation/README",isDocsHomePage:!1,title:"Mass fragmentation",description:"Simulation of mass fragmentation",source:"@site/docs/30_spectra/10_organic_chemistry/mass/fragmentation/README.md",sourceDirName:"30_spectra/10_organic_chemistry/mass/fragmentation",slug:"/uuid/0e35f561fff36fef6c9e7341a9eec858",permalink:"/docs/eln/uuid/0e35f561fff36fef6c9e7341a9eec858",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_spectra/10_organic_chemistry/mass/fragmentation/README.md",version:"current",frontMatter:{slug:"/uuid/0e35f561fff36fef6c9e7341a9eec858"},sidebar:"tutorialSidebar",previous:{title:"Mass spectra deconvolution",permalink:"/docs/eln/uuid/f8b2a67c144b612f89580e05f8c02509"},next:{title:"Isotopic distribution from MF or chemical structure",permalink:"/docs/eln/spectra/organic_chemistry/mass/isotopic-distribution/README"}},u=[{value:"Simulation of mass fragmentation",id:"simulation-of-mass-fragmentation",children:[{value:"Select the ionization method",id:"select-the-ionization-method",children:[]},{value:"Draw / edit the molecule",id:"draw--edit-the-molecule",children:[]},{value:"Define the cleavable bonds",id:"define-the-cleavable-bonds",children:[]},{value:"Analyze the results",id:"analyze-the-results",children:[]}]},{value:"Assign fragments",id:"assign-fragments",children:[]}],m={toc:u};function d(e){var t=e.components,s=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mass-fragmentation"},"Mass fragmentation"),(0,r.kt)("h2",{id:"simulation-of-mass-fragmentation"},"Simulation of mass fragmentation"),(0,r.kt)("p",null,"Analysis of mass fragments of small molecules obtained for example by electronic impact may be cumbersome."),(0,r.kt)("p",null,"In order to facilitate the process, this tool allow to draw a molecule and select the breakable bonds. The system will then generate all the possible fragments and will recombine them."),(0,r.kt)("h3",{id:"select-the-ionization-method"},"Select the ionization method"),(0,r.kt)("p",null,"In order to observe a mass spectrum the molecule has to be charged and this ionization has an impact on the mass. You may enter a list of ionizations that was applied to the molecule in the following box:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ionizations",src:n(3362).Z})),(0,r.kt)("p",null,"For instance for electronic impact you would enter a simple \u2018+\u2019. Meaning that we have removed an electron to charge the molecule."),(0,r.kt)("h3",{id:"draw--edit-the-molecule"},"Draw / edit the molecule"),(0,r.kt)("p",null,"You may either draw a molecule directly in the editor or paste a molfile coming from another software. For instance if you have a molecule in ChemDraw\u2122 you may select the molecule and \u2018Edit -",">"," Copy as \u2026 -",">"," MOL Text\u2019. Then you may put the mouse over the drawing applet and press \u2018",(0,r.kt)("inlineCode",{parentName:"p"},"CTRL")," + V\u2019 ","(","on windows",")"," or \u2318 + V\u2019 on mac."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jsme-help",src:n(9626).Z})),(0,r.kt)(o.default,{mdxType:"JSMETip"}),(0,r.kt)("h3",{id:"define-the-cleavable-bonds"},"Define the cleavable bonds"),(0,r.kt)("p",null,"In the drawing applet you should select the blue bullet icon and click on the bonds that are breakable."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"break",src:n(9417).Z})),(0,r.kt)("p",null,"The fragments with their corresponding mass will be calculated on the fly as well all the possible recombinations of those fragments. This may be useful to determine unknown side products of a reaction."),(0,r.kt)("h3",{id:"analyze-the-results"},"Analyze the results"),(0,r.kt)("p",null,"A virtual spectrum will all the possibility is generated and a mouse over the annotation over the peak will highlight the required parts of the molecules to reach the mass."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"analyze",src:n(4636).Z})),(0,r.kt)("p",null,"If you have a XY text file or jcamp containing an experimental spectrum you may directly drag and drop or paste on the drop zone."),(0,r.kt)("p",null,"You may also have mass spectra saved in the database and one click on the name will superimpose the spectrum to the predicted one."),(0,r.kt)("h2",{id:"assign-fragments"},"Assign fragments"),(0,r.kt)("p",null,"The list of possible recomposed molecules also contains the intensity if there is an experimental spectrum."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fragment and intensitities",src:n(7445).Z})),(0,r.kt)("p",null,"For this list clicking to the '+' on a line will add this fragment in the list of peaks."),(0,r.kt)("p",null,"The same result can be achieved by pressing ALT + click on an annotation in the spectrum."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"annotations",src:n(9764).Z})),(0,r.kt)("p",null,"The list of assigned peaks can the be saved in the database by clicking on ",(0,r.kt)("inlineCode",{parentName:"p"},"Save data"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"list of fragments",src:n(2995).Z})))}d.isMDXComponent=!0},5038:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o={},s=void 0,l={unversionedId:"includes/jsme-tip",id:"includes/jsme-tip",isDocsHomePage:!1,title:"jsme-tip",description:"If you would like to draw efficiently the molecules directly in the editor click on the little question mark and try to learn all the shortcuts. You may also check the userguide here.",source:"@site/docs/includes/jsme-tip.md",sourceDirName:"includes",slug:"/includes/jsme-tip",permalink:"/docs/eln/includes/jsme-tip",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/includes/jsme-tip.md",version:"current",frontMatter:{}},c=[],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"JSME editor")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you would like to draw efficiently the molecules directly in the editor click on the little question mark and try to learn all the shortcuts. You may also check the ",(0,r.kt)("a",{parentName:"p",href:"/eln/uuid/jsme"},"userguide here"),"."))))}m.isMDXComponent=!0},4636:function(e,t,n){"use strict";t.Z=n.p+"assets/images/analyze-9cc4c9dd44e7fcaf70251f2c452d664e.png"},9764:function(e,t,n){"use strict";t.Z=n.p+"assets/images/annotations-45ea8e0a87d882d5618c2ae03ecc5b08.png"},9417:function(e,t,n){"use strict";t.Z=n.p+"assets/images/break-4cf22b491e8d5277abaf5c7b4606309a.png"},7445:function(e,t,n){"use strict";t.Z=n.p+"assets/images/fragmentAndIntensities-843c5bfaa5b53ac60298474833b8a774.png"},3362:function(e,t){"use strict";t.Z="data:image/png;base64,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"},9626:function(e,t){"use strict";t.Z="data:image/png;base64,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"},2995:function(e,t,n){"use strict";t.Z=n.p+"assets/images/listOfFragments-092ba6013488bfe1f1ef2da8891e1f3f.png"}}]);