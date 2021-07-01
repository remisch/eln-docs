(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[454],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},A=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),A=c(r),d=a,h=A["".concat(s,".").concat(d)]||A[d]||p[d]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=A;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}A.displayName="MDXCreateElement"},8831:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={},l="X-Ray Diffraction Patterns",s={unversionedId:"spectra/physical_chemistry/pxrd/README",id:"spectra/physical_chemistry/pxrd/README",isDocsHomePage:!1,title:"X-Ray Diffraction Patterns",description:"This module allows visualizing and processing X-Ray diffraction patterns. You can upload .brml files which are generated by Bruker machines, .xy files generated by PowDLL, and jcamp files.",source:"@site/docs/30_spectra/20_physical_chemistry/pxrd/README.md",sourceDirName:"30_spectra/20_physical_chemistry/pxrd",slug:"/spectra/physical_chemistry/pxrd/README",permalink:"/docs/eln/spectra/physical_chemistry/pxrd/README",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_spectra/20_physical_chemistry/pxrd/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Isotherm analysis",permalink:"/docs/eln/spectra/physical_chemistry/isotherm/README"},next:{title:"Thermogravimetric analysis",permalink:"/docs/eln/spectra/physical_chemistry/tga/README"}},c=[{value:"Upload",id:"upload",children:[]},{value:"Visualization",id:"visualization",children:[]},{value:"Processing",id:"processing",children:[]},{value:"PXRD pattern database lookup",id:"pxrd-pattern-database-lookup",children:[]},{value:"Feature requests and support",id:"feature-requests-and-support",children:[]}],u={toc:c};function p(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"x-ray-diffraction-patterns"},"X-Ray Diffraction Patterns"),(0,o.kt)("p",null,"This module allows visualizing and processing X-Ray diffraction patterns. You can upload ",(0,o.kt)("inlineCode",{parentName:"p"},".brml")," files which are generated by Bruker machines, ",(0,o.kt)("inlineCode",{parentName:"p"},".xy")," files generated by PowDLL, and ",(0,o.kt)("inlineCode",{parentName:"p"},"jcamp")," files."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of the XRD analysis module",src:r(2317).Z})),(0,o.kt)("h2",{id:"upload"},"Upload"),(0,o.kt)("p",null,"Files can be uploaded either by drag-and-drop to the field on the left-hand-side (1 in the image) or automatically from the instrument. The files will appear in field 2. Note that you can only upload files to samples to which you have write access."),(0,o.kt)("h2",{id:"visualization"},"Visualization"),(0,o.kt)("p",null,"To add patterns to the visualizer, click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," in field 2. The sample will then appear in field 3 from which you can control the visualization settings."),(0,o.kt)("p",null,"If you click on the color in a row, you can select any color you which for the line, and you can use the control buttons in the top right corner of field 3 to control which figures you show in a spectrum."),(0,o.kt)("p",null,"In the chart you can draw a rectangle to zoom and double click to reset. You can move the graphs by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"SHIFT \u21e7")," while dragging them."),(0,o.kt)("p",null,"Currently, we only display 2\u0398 vs. the counts on the detector."),(0,o.kt)("h2",{id:"processing"},"Processing"),(0,o.kt)("p",null,"Field 4 gives you some basic processing tools. For example, you can get the derivatives of the patterns or normalize it. To scale the maximum intensity to one, you should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Rescale (x to y)")," option."),(0,o.kt)("h2",{id:"pxrd-pattern-database-lookup"},"PXRD pattern database lookup"),(0,o.kt)("p",null,"In the ELN you can find a text field in which you can enter a ",(0,o.kt)("a",{parentName:"p",href:"http://www.crystallography.net/cod/"},"COD")," or ",(0,o.kt)("a",{parentName:"p",href:"https://zenodo.org/record/3677685#.XzqXbZMzY8M"},"CoRE-MOF")," reference code to obtain the predicted pattern for a structure from those databases."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"database lookup",src:r(1528).Z})),(0,o.kt)("p",null,"For example, if you enter ",(0,o.kt)("a",{parentName:"p",href:"https://www.ccdc.cam.ac.uk/structures/Search?Ccdcid=KAJZIH&DatabaseToSearch=Published"},(0,o.kt)("inlineCode",{parentName:"a"},"KAJZIH"))," you will find the predicted powder pattern for Cu(I/II)-BTC. As in the other views, you can also generate a smoothed version."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"lookup result",src:r(2108).Z})),(0,o.kt)("h2",{id:"feature-requests-and-support"},"Feature requests and support"),(0,o.kt)("p",null,"If you need additional tools and support for this module, ",(0,o.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/managing-your-work-on-github/creating-an-issue"},"Open an issue")," on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cheminfo/xrd-analysis"},"xrd-analysis GitHub repository")," or simply post a question on the ",(0,o.kt)("a",{parentName:"p",href:"https://groups.google.com/forum/#!forum/cheminfo"},"forum"),"."))}p.isMDXComponent=!0},2317:function(e,t,r){"use strict";t.Z=r.p+"assets/images/analysis-8a2efea505af5352cc82fbfdc540517c.png"},1528:function(e,t){"use strict";t.Z="data:image/png;base64,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"},2108:function(e,t,r){"use strict";t.Z=r.p+"assets/images/lookup_result-372a6b8459b2a521998efd351ac8a750.png"}}]);