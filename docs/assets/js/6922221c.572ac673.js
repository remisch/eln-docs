"use strict";(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[7713],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56319:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={},s=void 0,u={unversionedId:"structural_analysis/includes/preprocessing/README",id:"structural_analysis/includes/preprocessing/README",isDocsHomePage:!1,title:"README",description:"Preprocessing",source:"@site/docs/30_structural_analysis/includes/preprocessing/README.md",sourceDirName:"30_structural_analysis/includes/preprocessing",slug:"/structural_analysis/includes/preprocessing/README",permalink:"/docs/eln/structural_analysis/includes/preprocessing/README",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/includes/preprocessing/README.md",tags:[],version:"current",frontMatter:{}},c=[{value:"Preprocessing",id:"preprocessing",children:[],level:2}],p={toc:c};function d(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"preprocessing"},"Preprocessing"),(0,i.kt)("p",null,"You can apply the following modifications to the spectra to enhance the visualization. The modifications include the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Center Mean : subtract the mean from every variable observation in the dataset, so that the new variable's mean is centered at 0."),(0,i.kt)("li",{parentName:"ul"},"Divide by SD : divide every variable observable in the dataset by the standard deviation yields a distribution with a standard deviation equal to 1."),(0,i.kt)("li",{parentName:"ul"},"Divide by max Y : divide every value by the maximum y-value shifts all the y-values between 0 and 1."),(0,i.kt)("li",{parentName:"ul"},"Rescale (x to y) : rescale the graph such that the y-values fit between specified minimum and maximum values."),(0,i.kt)("li",{parentName:"ul"},"Normalize (sum to n) : normalize the integral under the curve so that it sums to n."),(0,i.kt)("li",{parentName:"ul"},"Multiply (value) : multiply every y-value by a scalar."),(0,i.kt)("li",{parentName:"ul"},"Add (value) : add a scalar to every y-value."),(0,i.kt)("li",{parentName:"ul"},"AirPLS baseline : baseline correction using adaptive iterative reweighed penalized least squares algorithm."),(0,i.kt)("li",{parentName:"ul"},"Rolling average baseline : "),(0,i.kt)("li",{parentName:"ul"},"Iterative polynomial baseline : baseline correction using iterative polynomial fitting algorithm."),(0,i.kt)("li",{parentName:"ul"},"Rolling ball baseline :"),(0,i.kt)("li",{parentName:"ul"},"Rolling median baseline :")),(0,i.kt)("p",null,"A certain range of x-values can be selected to show only a part of the spectrum using ",(0,i.kt)("inlineCode",{parentName:"p"},"Range"),"."),(0,i.kt)("p",null,"Depending on the analysis, some regions should be removed using ",(0,i.kt)("inlineCode",{parentName:"p"},"Exclusions")," in order to improve the visualization."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"add preprocessing",src:n(90839).Z})))}d.isMDXComponent=!0},90839:function(e,t,n){t.Z=n.p+"assets/images/preprocessing-54d102eeba6f7dad57f1cb405d9bf169.gif"}}]);