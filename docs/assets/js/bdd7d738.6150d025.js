(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[1333],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4033:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={slug:"/installation/importation"},l={unversionedId:"for_developers/installation/importation/index",id:"for_developers/installation/importation/index",isDocsHomePage:!1,title:"Automatic importation of files (jcamp, etc.)",description:"rest-on-couch allows to automatically import files based on a filter that is placed in the corresponding folder.",source:"@site/docs/89_for_developers/installation/20_importation/index.md",sourceDirName:"89_for_developers/installation/20_importation",slug:"/installation/importation",permalink:"/docs/eln/installation/importation",editUrl:"https://github.com/cheminfo/eln-docs/edit/master/website/docs/89_for_developers/installation/20_importation/index.md",version:"current",frontMatter:{slug:"/installation/importation"},sidebar:"tutorialSidebar",previous:{title:"Deploying the ELN",permalink:"/docs/eln/installation/setup"},next:{title:"Customizing the deployment",permalink:"/docs/eln/installation/customization"}},c=[],p={toc:c};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rest-on-couch")," allows to automatically import files based on a filter that is placed in the corresponding folder."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"roc-eln-docker")," folder you will find ",(0,i.kt)("inlineCode",{parentName:"p"},"rest-on-couch")," that contains a folder ",(0,i.kt)("inlineCode",{parentName:"p"},"eln")," that corresponds to the name of the ",(0,i.kt)("inlineCode",{parentName:"p"},"couchDB")," database. In this folder you are free to put any number of folders that will contain a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"\xecmport.js")," describing how to import files that are dropped in the folder. So all the files that you would like to import of the kind ",(0,i.kt)("inlineCode",{parentName:"p"},"nmr")," for example could be placed in: ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/docker/roc-eln-docker/rest-on-couch/eln/nmr/to_process")," and once they are processed they will be moved to ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/docker/roc-eln-docker/rest-on-couch/eln/nmr/processed")," or in case of error to ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/docker/roc-eln-docker/rest-on-couch/eln/nmr/errored"),"."),(0,i.kt)("p",null,"In order to debug a file that is in errored and to edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"import.js")," file you may run the importation in an interactive way. For this you may go in the docker image. First find the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"rest-on-couch-import")," image using ",(0,i.kt)("inlineCode",{parentName:"p"},"docker ps")," and then go in the image using ",(0,i.kt)("inlineCode",{parentName:"p"},"docker exec -it fe2acfbb9bba sh")," (replace the correct image ID)."),(0,i.kt)("p",null,"To get the help of the import you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"node bin/rest-on-couch-import.js --help")),(0,i.kt)("p",null,"You can test the importation of an errored file with an instruction like: ",(0,i.kt)("inlineCode",{parentName:"p"},"node bin/rest-on-couch-import.js --dry-run /rest-on-couch/eln/nmr/errored/2017/08/28/abc.jdx eln nmr")))}s.isMDXComponent=!0}}]);