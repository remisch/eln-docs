(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[7465],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=c(a),p=i,g=h["".concat(l,".").concat(p)]||h[p]||m[p]||s;return a?n.createElement(g,r(r({ref:t},d),{},{components:a})):n.createElement(g,r({ref:t},d))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<s;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},69491:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=a(22122),i=a(19756),s=(a(67294),a(3905)),r={slug:"/uuid/187642421e225f8cfcd65a9243394a72"},o="Image analysis",l={unversionedId:"other_analysis/images/README",id:"other_analysis/images/README",isDocsHomePage:!1,title:"Image analysis",description:"This view allows to annotate images as well as identify Region of Interests on grey scale images.",source:"@site/docs/45_other_analysis/images/README.md",sourceDirName:"45_other_analysis/images",slug:"/uuid/187642421e225f8cfcd65a9243394a72",permalink:"/docs/eln/uuid/187642421e225f8cfcd65a9243394a72",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/45_other_analysis/images/README.md",version:"current",frontMatter:{slug:"/uuid/187642421e225f8cfcd65a9243394a72"},sidebar:"tutorialSidebar",previous:{title:"X-ray upload and processing",permalink:"/docs/eln/uuid/07223c3391c6b0cde342518d240d3426"},next:{title:"Property explorer",permalink:"/docs/eln/uuid/d9498d0a2ea400ea71efec8840a1273b"}},c=[{value:"Example of Analysis of SEM / TEM images",id:"example-of-analysis-of-sem--tem-images",children:[{value:"Creating the mask",id:"creating-the-mask",children:[]},{value:"Creating and filtering ROIs",id:"creating-and-filtering-rois",children:[]},{value:"Painting the final image",id:"painting-the-final-image",children:[]},{value:"Categories",id:"categories",children:[]},{value:"Save / Load preferences",id:"save--load-preferences",children:[]}]}],d={toc:c};function m(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"image-analysis"},"Image analysis"),(0,s.kt)("p",null,"This view allows to annotate images as well as identify Region of Interests on grey scale images."),(0,s.kt)("p",null,"If the source if a color image a first step will be to convert it to a grey scale image using one of the provided algorithms."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"iGrey algorithms",src:a(15475).Z})),(0,s.kt)("p",null,"If you don't know which algorithm to use you may ",(0,s.kt)("inlineCode",{parentName:"p"},"Explore greys"),". The system will reduce the size of the image\nand try all the available algorithms. You should then select the one that yields to the highest contrast."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Greys",src:a(65957).Z})),(0,s.kt)("h2",{id:"example-of-analysis-of-sem--tem-images"},"Example of Analysis of SEM / TEM images"),(0,s.kt)("p",null,"The image coming out of the SEM microscope is expected to be in TIFF 16 bits. Apparently some software destroy the image to 8 bits when adding the scale."),(0,s.kt)("p",null,"There are 3 steps in order to process your image:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The first step is to apply a gaussian filter to the image ","(","blurring",")",". Values of 4 to 8 seem reasonable."),(0,s.kt)("li",{parentName:"ol"},"The second step will generate a mask. The white pixels are the 'positive' area while the black one negative. You may either select one of the provided algorithms or use the 'threshold' algorithm. In this later case the 'Threshold for mask' value will be taken into account. It should be a value between 0 and 100 ","(","percent of white",")","."),(0,s.kt)("li",{parentName:"ol"},"Finally the third step is to create the Regions Of Interest ","(","ROI",")",". It is possible to define the minimal surface, positive / negative as well as the 'Scale' factor that will be applied to the ROI.")),(0,s.kt)("h3",{id:"creating-the-mask"},"Creating the mask"),(0,s.kt)("p",null,"In order to create regions of interest (ROIs) it is required to create a mask (a black and white image). Creation of the mask is based on the threshold that define the level of grey intensity that separates the white pixels from the black pixels."),(0,s.kt)("p",null,"This threshold can be determined automatically using one of the provided algorithm or it can be entered manually as a value between 0 and 100% if the algorithm stays unspecified."),(0,s.kt)("p",null,"In order to quickly evaluate which algorithms or threshold should be used you can click on ",(0,s.kt)("inlineCode",{parentName:"p"},"Explore masks")," and select the more suitable threshold. This function requires that blurring has been applied before."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Masks",src:a(13651).Z})),(0,s.kt)("h3",{id:"creating-and-filtering-rois"},"Creating and filtering ROIs"),(0,s.kt)("p",null,"Once the threshold has been determined it is time to create the ROIs. 4 algorithms are available:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Positive: the ROIs are white"),(0,s.kt)("li",{parentName:"ul"},"Negative: the ROIs are black"),(0,s.kt)("li",{parentName:"ul"},"Watershed: there are some ROIs that overlaps and we need to separate them. The ROIs are white"),(0,s.kt)("li",{parentName:"ul"},"Inverted watershed: same as Watershed but the ROIs are black")),(0,s.kt)("p",null,"There is also the possibility to scale the obtained ROIs. This may be practical in order to get average color of a spot."),(0,s.kt)("h3",{id:"painting-the-final-image"},"Painting the final image"),(0,s.kt)("p",null,"The result of analysis can be graphically displayed on the original image and many options allow to define what should be displayed."),(0,s.kt)("h3",{id:"categories"},"Categories"),(0,s.kt)("p",null,"By clicking on the \u2018categories\u2019 button you will be able to"),(0,s.kt)("p",null,"The system will also calculate the MBR ","(",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Minimum_bounding_rectangle"},"Minimal bounding Rectange"),")",". The ratio between the surface of the MBR and the surface of the ROI ","(","Region Of Interest",")"," is what we call the \u2018filling factor\u2019, 100% means a cube, a sphere should be \u03c0/4 ","(","78.5%",")"),(0,s.kt)("h3",{id:"save--load-preferences"},"Save / Load preferences"),(0,s.kt)("p",null,"From the 3 icons present on the top of the preferences window it is possible to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"load the default preferences"),(0,s.kt)("li",{parentName:"ul"},"load saved preferences"),(0,s.kt)("li",{parentName:"ul"},"save the current preferences")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Save and Load preferences",src:a(72118).Z})),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Annotations")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"It is possible to annotate and measure images with lines and polygons.\nFind more info ",(0,s.kt)("a",{parentName:"p",href:"/docs/eln/other_analysis/images/includes/annotations/README"},"here"),"."))),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Regions of interest (ROIs)")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Many parameters are calculated for regions of interest.\nFind more info ",(0,s.kt)("a",{parentName:"p",href:"/docs/eln/other_analysis/images/includes/rois/README"},"here"),"."))),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Stats and categories")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The different ROIs can be grouped and counted.\nFind more info ",(0,s.kt)("a",{parentName:"p",href:"/docs/eln/other_analysis/images/includes/categories/README"},"here"),"."))),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Define pixel size")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Pixel size can be defined manually or automatically.\nFind more info ",(0,s.kt)("a",{parentName:"p",href:"/docs/eln/other_analysis/images/includes/definePixelSize/README"},"here"),"."))),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Save and load preferences")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"It is possible to save and load preferences in order to reapply always the same processing.\nFind more info ",(0,s.kt)("a",{parentName:"p",href:"/docs/eln/other_analysis/images/includes/saveLoadPrefs/README"},"here"),"."))),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Select ROIs")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Regions of interest may be selected before exportation.\nFind more info ",(0,s.kt)("a",{parentName:"p",href:"/docs/eln/other_analysis/images/includes/selectROIs/README"},"here"),"."))))}m.isMDXComponent=!0},65957:function(e,t,a){"use strict";t.Z=a.p+"assets/images/greys-05e8f99295eb6855fdb77b7ee657d8c5.png"},15475:function(e,t,a){"use strict";t.Z=a.p+"assets/images/greysAlgorithms-6a1da2f76063cb0443f8eb6386659cec.png"},13651:function(e,t,a){"use strict";t.Z=a.p+"assets/images/masks-1fad22c07ae216e1d633d0c84219c791.png"},72118:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);