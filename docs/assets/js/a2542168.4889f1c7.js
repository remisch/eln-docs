"use strict";(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[4292],{3905:function(e,t,n){n.d(t,{Zo:function(){return A},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},A=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,A=o(e,["components","mdxType","originalType","parentName"]),m=s(n),h=i,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(d,l(l({ref:t},A),{},{components:n})):r.createElement(d,l({ref:t},A))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41027:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return A},default:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],o={slug:"/uuid/901378074eeb9b75396aadff96b3b83a"},c="Search by NMR chemical shifts",s={unversionedId:"structural_analysis/nmr/search/README",id:"structural_analysis/nmr/search/README",isDocsHomePage:!1,title:"Search by NMR chemical shifts",description:"This tool is designed to search by NMR chemical shifts that may be practical to find similar pure products or identify products in complex mixture like in the case of metabolomics. In order to select the chemical shifts you may either enter directly the values in the table Ranges to search or ALT + CLICK directly on the spectrum.",source:"@site/docs/30_structural_analysis/nmr/search/README.md",sourceDirName:"30_structural_analysis/nmr/search",slug:"/uuid/901378074eeb9b75396aadff96b3b83a",permalink:"/docs/eln/uuid/901378074eeb9b75396aadff96b3b83a",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/nmr/search/README.md",tags:[],version:"current",frontMatter:{slug:"/uuid/901378074eeb9b75396aadff96b3b83a"},sidebar:"tutorialSidebar",previous:{title:"NMR spectroscopy",permalink:"/docs/eln/structural_analysis/nmr/introduction/README"},next:{title:"NMR spectra superimposition",permalink:"/docs/eln/uuid/f162299d0efd3f7c21b5542c85003689"}},A=[{value:"Adding an experimental spectrum",id:"adding-an-experimental-spectrum",children:[],level:2},{value:"Specify the allowed error and display the result",id:"specify-the-allowed-error-and-display-the-result",children:[],level:2},{value:"Interactive results",id:"interactive-results",children:[],level:2},{value:"Quick search",id:"quick-search",children:[],level:2},{value:"The spectra displayer",id:"the-spectra-displayer",children:[],level:2}],u={toc:A};function m(e){var t=e.components,o=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"search-by-nmr-chemical-shifts"},"Search by NMR chemical shifts"),(0,a.kt)("p",null,"This tool is designed to search by NMR chemical shifts that may be practical to find similar pure products or identify products in complex mixture like in the case of metabolomics. In order to select the chemical shifts you may either enter directly the values in the table ",(0,a.kt)("inlineCode",{parentName:"p"},"Ranges to search")," or ALT + CLICK directly on the spectrum."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rangeSearch",src:n(86670).Z})),(0,a.kt)("p",null,"You may at any time either delete one of the lines by clicking on the ",(0,a.kt)("img",{alt:"trash",src:n(78484).Z})," icon in front of the row, or you may delete all the chemical shifts by clicking on the same icon on the top right of the table. You may as well specify the multiplicity. The score will receive some bonus if the multiplicity matches (and can therefore have a score over one)."),(0,a.kt)("h2",{id:"adding-an-experimental-spectrum"},"Adding an experimental spectrum"),(0,a.kt)("p",null,"Experimental spectrum can be added either by clicking on ",(0,a.kt)("inlineCode",{parentName:"p"},"Load demo"),", by dragging & dropping a ",(0,a.kt)("a",{parentName:"p",href:"/docs/eln/structural_analysis/includes/jcamp/README"},"JCAMP file")," or by selecting an existing spectrum from the database. Those spectra will be filtered based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Exclusion zones"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(34041).Z})),(0,a.kt)("p",null,"The exclusion zones will be indicated on the spectrum by a red line."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(72809).Z})),(0,a.kt)("h2",{id:"specify-the-allowed-error-and-display-the-result"},"Specify the allowed error and display the result"),(0,a.kt)("p",null,"While searching for similar spectra the program will allow an error on the chemical SHIFT \u21e7. This error is specified in:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(15322).Z})),(0,a.kt)("p",null,"Each peak will be represented as an allowed zone by a blue rectangle."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(58786).Z})),(0,a.kt)("p",null,"And the signals of the 10 best matches will be represented as 10 different lines. The color will represent the score:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"light green: > 0.8"),(0,a.kt)("li",{parentName:"ul"},"orange : 0.6 < score <= 0.8"),(0,a.kt)("li",{parentName:"ul"},"pink : score 0.4 < score <= 0.6")),(0,a.kt)("p",null,"Mouse over the annotations will highlight the corresponding molecule. If you click on the annotation you will get the detailed information."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(83964).Z})),(0,a.kt)("h2",{id:"interactive-results"},"Interactive results"),(0,a.kt)("p",null,"Mouse over in the list of reference products will highlight the region where peaks are expected"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(92188).Z})),(0,a.kt)("p",null,"This allows to quickly browse through the list of the reference spectra. If one of the reference looks promising, just click on it to display the reference corresponding NMR spectrum."),(0,a.kt)("h2",{id:"quick-search"},"Quick search"),(0,a.kt)("p",null,"You may enter complex query in order to search for reference products. This includes research on molecular formula, chemical SHIFT \u21e7 and reference."),(0,a.kt)("p",null,"You may for example search for products that have a chemical SHIFT \u21e7 between 10 and 11:"),(0,a.kt)("p",null,"delta:10..11"),(0,a.kt)("p",null,"Or combine queries for the chemical shifts as well as the molecular formula containing 10 carbons:"),(0,a.kt)("p",null,"delta:2..2.1 delta:3..3.4 mf:C10"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(94479).Z})),(0,a.kt)("h2",{id:"the-spectra-displayer"},"The spectra displayer"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(51660).Z})),(0,a.kt)("p",null,"The following options are available in the spectra displayer:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"click + drag + release : zoom in the spectrum"),(0,a.kt)("li",{parentName:"ul"},"double click: zoom out = display the full spectra"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SHIFT \u21e7")," + double click : zoom out progressively"),(0,a.kt)("li",{parentName:"ul"},"scroll wheel : vertical scale"),(0,a.kt)("li",{parentName:"ul"},"select a series (click on the corresponding line in the legend) + scroll wheel : vertical scale of a specific series"),(0,a.kt)("li",{parentName:"ul"},"hide a series by clicking on the corresponding eye in the legend")))}m.isMDXComponent=!0},51660:function(e,t,n){t.Z=n.p+"assets/images/image1-9f253ebaf2ac3172c0e39c9b9dc49ff4.png"},92188:function(e,t,n){t.Z=n.p+"assets/images/image2-fcda74b33ffe952305d805f913701286.png"},34041:function(e,t,n){t.Z=n.p+"assets/images/image3-9a84b9bb2025e30e263b616a8294212e.png"},83964:function(e,t,n){t.Z=n.p+"assets/images/image4-5ff479e6cf906033f0ce3bc222907c02.png"},72809:function(e,t,n){t.Z=n.p+"assets/images/image5-2c66efcc0c8806d6c80c7c3daf02da74.png"},94479:function(e,t,n){t.Z=n.p+"assets/images/image6-beb61b58a2836621254bcc0e2952ecaf.png"},15322:function(e,t){t.Z="data:image/png;base64,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"},58786:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAB8CAYAAADpXacpAAAFOklEQVR4Ae2dz2tcVRTHv28mk8y0KXFSk2hKVCzRJrWNxuIPEFQEFREUSykU/wBX2kJFXLoQqRt/Iv5aqIi6dtGdBoKCC+1CJElJY2rbpGlL43RiMkwnM1dm6pt5d3zOu/juPePIdzbvnnPvPefM556cx8mbZDyllAJfzgkknHuggxoBghZKBIImaCECQm6Y0QQtREDIDTOaoIUICLlhRhO0EAEhN102/MzMAIUCsNH1O6ZuflMzObA+intWnkUmA4yPa1PWhOXyMj5e+0Czt7d7Ak9veUbTVYWV8nl8uPa+ph/Z2IOeYhanstOafnLlIHpL2zE98p6m3526A/u3HtB0UQJLRxQhS/MEbQlklBmCjiJkaZ6gLYGMMuPZ+H20fzNs5czlzbCVX5M5ifiZ0SYnYWENQVuAaGKCoE0oWVhD0BYgmpiw0hn+k6Pvd3yEXPpcYzoHvNT3Mnq8dENnMDq1OY8v/vhcW3lfz/14NPN4Tfdu/m2sVi5r80Ghuq66vtXrZP83oZ3hjet22llmdCv6FucI2iLMVqYIuhUdi3MEbRFmK1PsDAGwM2yVIh02x9IhdGAETdBCBITcWOsMj9/6CpRXqYe9pZTFw2cO12VXgxKu4rXcq5r54eRwrftc3PxV0x/pO4pt3ra67kolh7fybwDDdRX8Z5wNjZ0RS4cdjpFWCDoSkZ0FBG2HY6QVgo5EZGcBO0N2hnYy6b9ihaVD6CQImqCFCAi5idUZqoXngOJpjFWDzVyL+EThOID2/6Co2acAVWxgTA3CG/2sIQdGXVjFZOZQQAOsVSYwXzym6eII7ScSJ/oO2kvQQodF0AQtREDIDTtDdoZCqSbkhjWaoIUICLlhRguBjtUZ+jFej68wkPnEF2vX01dfxGr5EU1nQ1BLx4ArU7opLwmosqbzRj8FUkNA4STU4gvanC9449Fd7ER6P5Leem2LmgHQlYV325e+CeMrM9oYVbyFBB2Pn/FugjZGFW8hQcfjZ7ybnSE7Q+Nk6YiFLB1Cx0TQBC1EQMhN/M5w4xeM4Wj9mWE17kubT+Bs6XmhtxDPjVp6HWP4Vot/rvgONiqj8Qw37WbpaALiSiRoV2Sb7BJ0ExBXIkG7Ittkl50hO8OmlOhwkaVD6AAJmqCFCAi5idcZKoXK19PYFQi2kNqKuaF9uHNpGl7gm0dKqTQwfm9gJaB+nodaXNZ0VcG76QZ4d93+N307FHuXvkPyr+eRlXkA6W4kHmv932zC4mTpCKPiQEfQDqCGmSToMCoOdATtAGqYSXaG7AzD8qJzdSwdQmdH0AQtREDITbzO0CDI3ed/QHf52t/71TqrZBKJJx8w2Nn+JUP5MxjOL9YDqcbvTe6CNzJU15kOWDpMScVcR9AxAZpuJ2hTUjHXEXRMgKbb2RmyMzTNlc5Yx9IhdE4ETdBCBITcOO8Mhd5HLDeDlxbQnwt8uwaAhe17kM/0x7Ib3MzSEaThcEzQDuEGTRN0kIbDMUE7hBs0zZshgIsDO/Fb784gF+tjZrR1pOEGCTqci3UtQVtHGm6QoMO5WNe27WaofpqFOndRe0OJh+4G+no13b8V1Ik5qLMXtO2JByeB6xrfWqFNArjl8iyyBT2m6idjq5+Q1V75dVSmftRU3o5BePtq/6VV0/sCM9on4fhK0I4B++YJ2ifh+ErQjgH75vnMkM8M/Vz4f1xZOoTOkaAJWoiAkBsrN0OhWDvaDUuH0PERNEELERByw4wmaCECQm6Y0QQtREDIDTOaoIUICLlhRhO0EAEhN8xoIdB/AkCoOpkYhE4/AAAAAElFTkSuQmCC"},86670:function(e,t,n){t.Z=n.p+"assets/images/range_search-d2b0b258af6ce77f9a8bb09fbdf8fcdc.gif"},78484:function(e,t){t.Z="data:image/png;base64,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"}}]);