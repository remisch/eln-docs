(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[4390],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return m},kt:function(){return u}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),h=s(i),u=n,d=h["".concat(l,".").concat(u)]||h[u]||p[u]||a;return i?r.createElement(d,o(o({ref:t},m),{},{components:i})):r.createElement(d,o({ref:t},m))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<a;s++)o[s]=i[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},1900:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=i(2122),n=i(9756),a=(i(7294),i(3905)),o={},c="Search by NMR chemical shifts",l={unversionedId:"spectra/organic_chemistry/nmr/search/README",id:"spectra/organic_chemistry/nmr/search/README",isDocsHomePage:!1,title:"Search by NMR chemical shifts",description:"This tool is designed to search by NMR chemical shifts that may be practical to find similar pure products or identify products in complex mixture like in the case of metabolomics. In order to select the chemical shifts you may either enter directly the values in the table Ranges to search or ALT + CLICK directly on the spectrum.",source:"@site/docs/30_spectra/10_organic_chemistry/nmr/search/README.md",sourceDirName:"30_spectra/10_organic_chemistry/nmr/search",slug:"/spectra/organic_chemistry/nmr/search/README",permalink:"/docs/eln/spectra/organic_chemistry/nmr/search/README",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_spectra/10_organic_chemistry/nmr/search/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HSQC / HMBC prediction",permalink:"/docs/eln/spectra/organic_chemistry/nmr/predictions/hmbc/README"},next:{title:"README",permalink:"/docs/eln/spectra/organic_chemistry/nmr/superimpose/README"}},s=[{value:"Adding an experimental spectrum",id:"adding-an-experimental-spectrum",children:[]},{value:"Specify the allowed error and display the result",id:"specify-the-allowed-error-and-display-the-result",children:[]},{value:"Interactive results ...",id:"interactive-results-",children:[]},{value:"Quick search",id:"quick-search",children:[]},{value:"The spectra displayer",id:"the-spectra-displayer",children:[]}],m={toc:s};function p(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"search-by-nmr-chemical-shifts"},"Search by NMR chemical shifts"),(0,a.kt)("p",null,"This tool is designed to search by NMR chemical shifts that may be practical to find similar pure products or identify products in complex mixture like in the case of metabolomics. In order to select the chemical shifts you may either enter directly the values in the table ",(0,a.kt)("inlineCode",{parentName:"p"},"Ranges to search")," or ALT + CLICK directly on the spectrum."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image9",src:i(3043).Z})),(0,a.kt)("p",null,"You may at any time either delete one of the lines by clicking on the trash icon in front of the row, or you may delete all the chemical shifts by clicking on the trash in the top right of the table. You may as well specify the multiplicity. The score will receive some bonus if the multiplicity match (and can therefore have a score over one)."),(0,a.kt)("h2",{id:"adding-an-experimental-spectrum"},"Adding an experimental spectrum"),(0,a.kt)("p",null,"Experimental spectrum can be added either by click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Load demo"),", by drag & drop a Jcamp file or by clicking on an existing spectrum from the database. Those spectra will be filtered based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Exclusion zones"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(3834).Z})),(0,a.kt)("p",null,"The exclusion zones will be indicated on the spectrum by a red line."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(7082).Z})),(0,a.kt)("h2",{id:"specify-the-allowed-error-and-display-the-result"},"Specify the allowed error and display the result"),(0,a.kt)("p",null,"While searching for similar spectra the program will allow an error on the chemical SHIFT \u21e7. This error is specified in:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(4686).Z})),(0,a.kt)("p",null,"Each peak will be represented as an allowed zone by a blue rectangle."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(7434).Z})),(0,a.kt)("p",null,"And the signals of the 10 best matches will be represented as 10 different lines. The color will represent the score:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"light green: > 0.8"),(0,a.kt)("li",{parentName:"ul"},"orange : 0.6 < score <= 0.8"),(0,a.kt)("li",{parentName:"ul"},"pink : score 0.4 < score <= 0.6")),(0,a.kt)("p",null,"Mouse over the annotations will highlight the corresponding molecule. If you click on the annotation you will get the detailed information."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(4275).Z})),(0,a.kt)("h2",{id:"interactive-results-"},"Interactive results ..."),(0,a.kt)("p",null,"Mouse over in the list of reference products will highlight the region where peaks are expected"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(9048).Z})),(0,a.kt)("p",null,"This allows to quickly browse through the list of the reference spectra. If one of the reference looks promising, just click on it to display the reference corresponding NMR spectrum."),(0,a.kt)("h2",{id:"quick-search"},"Quick search"),(0,a.kt)("p",null,"You may enter complex query in order to search for reference products. This includes research on molecular formula, chemical SHIFT \u21e7 and reference."),(0,a.kt)("p",null,"You may for example search for products that have a chemical SHIFT \u21e7 between 10 and 11:"),(0,a.kt)("p",null,"delta:10..11"),(0,a.kt)("p",null,"Or combine queries for the chemical shifts as well as the molecular formula containing 10 carbons:"),(0,a.kt)("p",null,"delta:2..2.1 delta:3..3.4 mf:C10"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(9641).Z})),(0,a.kt)("h2",{id:"the-spectra-displayer"},"The spectra displayer"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(4219).Z})),(0,a.kt)("p",null,"The following options are available in the spectra displayer :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"click + drag + release : zoom in the spectrum"),(0,a.kt)("li",{parentName:"ul"},"double click: zoom out = display the full spectra"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SHIFT \u21e7")," + double click : zoom out progressively"),(0,a.kt)("li",{parentName:"ul"},"scroll wheel : vertical scale"),(0,a.kt)("li",{parentName:"ul"},"select a series (click on the corresponding line in the legend) + scroll wheel : vertical scale of a specific series"),(0,a.kt)("li",{parentName:"ul"},"hide a series by clicking on the corresponding eye in the legend")))}p.isMDXComponent=!0},4219:function(e,t,i){"use strict";t.Z=i.p+"assets/images/image1-9f253ebaf2ac3172c0e39c9b9dc49ff4.png"},9048:function(e,t,i){"use strict";t.Z=i.p+"assets/images/image2-fcda74b33ffe952305d805f913701286.png"},3834:function(e,t,i){"use strict";t.Z=i.p+"assets/images/image3-9a84b9bb2025e30e263b616a8294212e.png"},4275:function(e,t,i){"use strict";t.Z=i.p+"assets/images/image4-5ff479e6cf906033f0ce3bc222907c02.png"},7082:function(e,t,i){"use strict";t.Z=i.p+"assets/images/image5-2c66efcc0c8806d6c80c7c3daf02da74.png"},9641:function(e,t,i){"use strict";t.Z=i.p+"assets/images/image6-beb61b58a2836621254bcc0e2952ecaf.png"},4686:function(e,t){"use strict";t.Z="data:image/png;base64,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"},7434:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAB8CAYAAADpXacpAAAFOklEQVR4Ae2dz2tcVRTHv28mk8y0KXFSk2hKVCzRJrWNxuIPEFQEFREUSykU/wBX2kJFXLoQqRt/Iv5aqIi6dtGdBoKCC+1CJElJY2rbpGlL43RiMkwnM1dm6pt5d3zOu/juPePIdzbvnnPvPefM556cx8mbZDyllAJfzgkknHuggxoBghZKBIImaCECQm6Y0QQtREDIDTOaoIUICLlhRhO0EAEhN102/MzMAIUCsNH1O6ZuflMzObA+intWnkUmA4yPa1PWhOXyMj5e+0Czt7d7Ak9veUbTVYWV8nl8uPa+ph/Z2IOeYhanstOafnLlIHpL2zE98p6m3526A/u3HtB0UQJLRxQhS/MEbQlklBmCjiJkaZ6gLYGMMuPZ+H20fzNs5czlzbCVX5M5ifiZ0SYnYWENQVuAaGKCoE0oWVhD0BYgmpiw0hn+k6Pvd3yEXPpcYzoHvNT3Mnq8dENnMDq1OY8v/vhcW3lfz/14NPN4Tfdu/m2sVi5r80Ghuq66vtXrZP83oZ3hjet22llmdCv6FucI2iLMVqYIuhUdi3MEbRFmK1PsDAGwM2yVIh02x9IhdGAETdBCBITcWOsMj9/6CpRXqYe9pZTFw2cO12VXgxKu4rXcq5r54eRwrftc3PxV0x/pO4pt3ra67kolh7fybwDDdRX8Z5wNjZ0RS4cdjpFWCDoSkZ0FBG2HY6QVgo5EZGcBO0N2hnYy6b9ihaVD6CQImqCFCAi5idUZqoXngOJpjFWDzVyL+EThOID2/6Co2acAVWxgTA3CG/2sIQdGXVjFZOZQQAOsVSYwXzym6eII7ScSJ/oO2kvQQodF0AQtREDIDTtDdoZCqSbkhjWaoIUICLlhRguBjtUZ+jFej68wkPnEF2vX01dfxGr5EU1nQ1BLx4ArU7opLwmosqbzRj8FUkNA4STU4gvanC9449Fd7ER6P5Leem2LmgHQlYV325e+CeMrM9oYVbyFBB2Pn/FugjZGFW8hQcfjZ7ybnSE7Q+Nk6YiFLB1Cx0TQBC1EQMhN/M5w4xeM4Wj9mWE17kubT+Bs6XmhtxDPjVp6HWP4Vot/rvgONiqj8Qw37WbpaALiSiRoV2Sb7BJ0ExBXIkG7Ittkl50hO8OmlOhwkaVD6AAJmqCFCAi5idcZKoXK19PYFQi2kNqKuaF9uHNpGl7gm0dKqTQwfm9gJaB+nodaXNZ0VcG76QZ4d93+N307FHuXvkPyr+eRlXkA6W4kHmv932zC4mTpCKPiQEfQDqCGmSToMCoOdATtAGqYSXaG7AzD8qJzdSwdQmdH0AQtREDITbzO0CDI3ed/QHf52t/71TqrZBKJJx8w2Nn+JUP5MxjOL9YDqcbvTe6CNzJU15kOWDpMScVcR9AxAZpuJ2hTUjHXEXRMgKbb2RmyMzTNlc5Yx9IhdE4ETdBCBITcOO8Mhd5HLDeDlxbQnwt8uwaAhe17kM/0x7Ib3MzSEaThcEzQDuEGTRN0kIbDMUE7hBs0zZshgIsDO/Fb784gF+tjZrR1pOEGCTqci3UtQVtHGm6QoMO5WNe27WaofpqFOndRe0OJh+4G+no13b8V1Ik5qLMXtO2JByeB6xrfWqFNArjl8iyyBT2m6idjq5+Q1V75dVSmftRU3o5BePtq/6VV0/sCM9on4fhK0I4B++YJ2ifh+ErQjgH75vnMkM8M/Vz4f1xZOoTOkaAJWoiAkBsrN0OhWDvaDUuH0PERNEELERByw4wmaCECQm6Y0QQtREDIDTOaoIUICLlhRhO0EAEhN8xoIdB/AkCoOpkYhE4/AAAAAElFTkSuQmCC"},3043:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);