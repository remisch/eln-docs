(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[5415,4689,4225,9801],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,c(c({ref:t},p),{},{components:n})):a.createElement(h,c({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,c[1]=s;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6098:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),c=n(7081),s=n(7642),o=n(3900),l={slug:"/uuid/99e77c27589aa8f3d14f48716e4e6c89"},p="Calculate PCA for spectra",u={unversionedId:"spectra/machine_learning/pca/README",id:"spectra/machine_learning/pca/README",isDocsHomePage:!1,title:"Calculate PCA for spectra",description:"While superimposing spectra allows checking differences between 2 or 3 experiments it become tedious to compare a large set of data.",source:"@site/docs/30_spectra/30_machine_learning/40_pca/README.md",sourceDirName:"30_spectra/30_machine_learning/40_pca",slug:"/uuid/99e77c27589aa8f3d14f48716e4e6c89",permalink:"/docs/eln/uuid/99e77c27589aa8f3d14f48716e4e6c89",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_spectra/30_machine_learning/40_pca/README.md",version:"current",frontMatter:{slug:"/uuid/99e77c27589aa8f3d14f48716e4e6c89"},sidebar:"tutorialSidebar",previous:{title:"Calculate the similarity between spectra",permalink:"/docs/eln/spectra/machine_learning/similarity/README"},next:{title:"UMAP dimension reduction",permalink:"/docs/eln/uuid/123afc6387248096bb2ab8bbd1a0bedf"}},d=[{value:"Spectra selection, normalization and previsualization",id:"spectra-selection-normalization-and-previsualization",children:[]},{value:"Create the PCA model",id:"create-the-pca-model",children:[]},{value:"Advanced analysis",id:"advanced-analysis",children:[]},{value:"References",id:"references",children:[]}],m={toc:d};function h(e){var t=e.components,l=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"calculate-pca-for-spectra"},"Calculate PCA for spectra"),(0,r.kt)("p",null,"While superimposing spectra allows checking differences between 2 or 3 experiments it become tedious to compare a large set of data."),(0,r.kt)("p",null,"Many data mining algorithms may help in those cases and here we propose to analyze the data using principal component analysis."),(0,r.kt)("p",null,"Principal component analysis (PCA) is a statistical procedure that uses an orthogonal transformation to convert a set of observations of possibly correlated variables (here spectra) into a set of values of linearly uncorrelated variables called principal components. If there are n observations with p variables, then the number of distinct principal components is min(n-1,p). This transformation is defined in such a way that the first principal component has the largest possible variance (that is, accounts for as much of the variability in the data as possible), and each succeeding component in turn has the highest variance possible under the constraint that it is orthogonal to the preceding components. The resulting vectors (each being a linear combination of the variables and containing n observations) are an uncorrelated orthogonal basis set. PCA is sensitive to the relative scaling of the original variables."),(0,r.kt)("p",null,"The workflow is the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select samples and add spectra"),(0,r.kt)("li",{parentName:"ul"},"Preprocess the spectra using various parameters"),(0,r.kt)("li",{parentName:"ul"},"Calculate the PCA"),(0,r.kt)("li",{parentName:"ul"},"Display each spectrum in the new space")),(0,r.kt)("h2",{id:"spectra-selection-normalization-and-previsualization"},"Spectra selection, normalization and previsualization"),(0,r.kt)(c.default,{mdxType:"SelectSpectra"}),(0,r.kt)(s.default,{mdxType:"SpectraNormalization"}),(0,r.kt)(o.default,{mdxType:"SuperimposeSpectraManipulation"}),(0,r.kt)("h2",{id:"create-the-pca-model"},"Create the PCA model"),(0,r.kt)("p",null,"In order to generate the PCA model you should click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Recalculate PCA")," button that can be found in the PCA tab."),(0,r.kt)("p",null,"Even after creating the model you may still add new spectra. Those spectra will be projected to the new PCA space. The spectra used for the calculations are represented using a filled circle while the one projected are represented with a circle."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"result",src:n(2362).Z})),(0,r.kt)("p",null,"By default, each sample will have a different color."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sample PCA",src:n(5897).Z})),(0,r.kt)("p",null,"In the list of selected sample you can check which spectra are used for the PCA calculation and which one are just projected on the model."),(0,r.kt)("h2",{id:"advanced-analysis"},"Advanced analysis"),(0,r.kt)("p",null,"By selecting ",(0,r.kt)("inlineCode",{parentName:"p"},"PCA PC")," you can check the various principal component as well as the explained variance."),(0,r.kt)("p",null,"While PC1 versus PC2 offers usually a good separation it is not always the best that can be achieved and in this view we plot the 4 first principal components against each other."),(0,r.kt)("p",null,"In this specific example we can see that the best separation is obtained when using PC2 versus PC3."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pca versus",src:n(4252).Z})),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"doi.org/10.1007/s11483-012-9279-7")))}h.isMDXComponent=!0},7081:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return l},default:function(){return u}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),c={},s=void 0,o={unversionedId:"spectra/machine_learning/includes/select-spectra",id:"spectra/machine_learning/includes/select-spectra",isDocsHomePage:!1,title:"select-spectra",description:"The first step is to select the spectra and you may follow this tutorial",source:"@site/docs/30_spectra/30_machine_learning/includes/select-spectra.md",sourceDirName:"30_spectra/30_machine_learning/includes",slug:"/spectra/machine_learning/includes/select-spectra",permalink:"/docs/eln/spectra/machine_learning/includes/select-spectra",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_spectra/30_machine_learning/includes/select-spectra.md",version:"current",frontMatter:{}},l=[],p={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Select spectra")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The first step is to select the spectra and you may follow this ",(0,r.kt)("a",{parentName:"p",href:"/eln/uuid/ml-spectra-selection"},"tutorial")))))}u.isMDXComponent=!0},7642:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return l},default:function(){return u}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),c={},s=void 0,o={unversionedId:"spectra/machine_learning/includes/spectra-normalization",id:"spectra/machine_learning/includes/spectra-normalization",isDocsHomePage:!1,title:"spectra-normalization",description:"Once spectra have been selected, data normalization filters can be applied and more information is available here.",source:"@site/docs/30_spectra/30_machine_learning/includes/spectra-normalization.md",sourceDirName:"30_spectra/30_machine_learning/includes",slug:"/spectra/machine_learning/includes/spectra-normalization",permalink:"/docs/eln/spectra/machine_learning/includes/spectra-normalization",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_spectra/30_machine_learning/includes/spectra-normalization.md",version:"current",frontMatter:{}},l=[],p={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Spectra normalization")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Once spectra have been selected, data normalization filters can be applied and ",(0,r.kt)("a",{parentName:"p",href:"/eln/uuid/ml-spectra-normalization"},"more information is available here"),"."))))}u.isMDXComponent=!0},3900:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return l},default:function(){return u}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),c={},s=void 0,o={unversionedId:"spectra/machine_learning/includes/superimposed-spectra-manipulation",id:"spectra/machine_learning/includes/superimposed-spectra-manipulation",isDocsHomePage:!1,title:"superimposed-spectra-manipulation",description:"The superimposed spectra can be manipulated without numerous advanced features described here.",source:"@site/docs/30_spectra/30_machine_learning/includes/superimposed-spectra-manipulation.md",sourceDirName:"30_spectra/30_machine_learning/includes",slug:"/spectra/machine_learning/includes/superimposed-spectra-manipulation",permalink:"/docs/eln/spectra/machine_learning/includes/superimposed-spectra-manipulation",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_spectra/30_machine_learning/includes/superimposed-spectra-manipulation.md",version:"current",frontMatter:{}},l=[],p={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Superimposed spectra manipulation")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The superimposed spectra can be manipulated without numerous ",(0,r.kt)("a",{parentName:"p",href:"/eln/uuid/ml-spectra-visualization"},"advanced features described here"),"."))))}u.isMDXComponent=!0},4252:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pcaVersus-f0ec24ea240ac15cc1650cda262503a7.png"},2362:function(e,t,n){"use strict";t.Z=n.p+"assets/images/result-71acdf6f75fb460bcc1bc18ac075285e.png"},5897:function(e,t,n){"use strict";t.Z=n.p+"assets/images/samplePCA-1b6621ea7563f6a1ed7ce9a3d7a9ff53.png"}}]);