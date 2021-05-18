(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[5767],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return u}});var i=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=i.createContext({}),h=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=h(a),u=o,d=p["".concat(l,".").concat(u)]||p[u]||m[u]||n;return a?i.createElement(d,r(r({ref:t},c),{},{components:a})):i.createElement(d,r({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var h=2;h<n;h++)r[h]=a[h];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1343:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var i=a(2122),o=a(9756),n=(a(7294),a(3905)),r={},s={unversionedId:"spectra/organic_chemistry/chromatography/gc-lc-ms-high-resolution",id:"spectra/organic_chemistry/chromatography/gc-lc-ms-high-resolution",isDocsHomePage:!1,title:"GC / LC \u2014 MS High resolution",description:"GC / LC \u2014 MS visualization",source:"@site/docs/30_spectra/10_organic_chemistry/chromatography/gc-lc-ms-high-resolution.md",sourceDirName:"30_spectra/10_organic_chemistry/chromatography",slug:"/spectra/organic_chemistry/chromatography/gc-lc-ms-high-resolution",permalink:"/docs/spectra/organic_chemistry/chromatography/gc-lc-ms-high-resolution",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/30_spectra/10_organic_chemistry/chromatography/gc-lc-ms-high-resolution.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a report",permalink:"/docs/samples/create_reports"},next:{title:"GC/LC - MS visualization",permalink:"/docs/spectra/organic_chemistry/chromatography/gc-lc-ms-visualization/README"}},l=[{value:"GC / LC \u2014 MS visualization",id:"gc--lc--ms-visualization",children:[{value:"Files loading",id:"files-loading",children:[]},{value:"Chromatogram visualization",id:"chromatogram-visualization",children:[]},{value:"Peak picking in the chromatogram",id:"peak-picking-in-the-chromatogram",children:[]},{value:"Peak picking in mass spectra",id:"peak-picking-in-mass-spectra",children:[]},{value:"Molecular formula prediction",id:"molecular-formula-prediction",children:[]}]}],h={toc:l};function c(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"gc--lc--ms-visualization"},"GC / LC \u2014 MS visualization"),(0,n.kt)("p",null,"This tool allows visualizing and interact with chromatograms generated using GC/LC \u2014 MS techniques."),(0,n.kt)("h3",{id:"files-loading"},"Files loading"),(0,n.kt)("p",null,"This view came with and preloaded test case so you may just click on it and start to analyse the data."),(0,n.kt)("p",null,"It is also designed to work with any file with the ",(0,n.kt)("inlineCode",{parentName:"p"},"JCAMP"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"NetCDF"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"mzData")," formats. This files can be drag and dropped or selected clicking in the same drop module. These files are going to be displayed in the list below, specifying the name of the file."),(0,n.kt)("h3",{id:"chromatogram-visualization"},"Chromatogram visualization"),(0,n.kt)("p",null,"When the desired file is clicked, the corresponding chromatogram is displayed, according to the following options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Serie to work with: visualize and do the peak selection using the total ion chromatogram ","(","tic",")"," or the base peak chromatogram ","(","bpc",")","."),(0,n.kt)("li",{parentName:"ul"},"Lock mass: if there\u2019s any lock mass calibration, it\u2019s possible to introduce the molecular formula or the list of molecular formulas separated by space or commas.")),(0,n.kt)("h3",{id:"peak-picking-in-the-chromatogram"},"Peak picking in the chromatogram"),(0,n.kt)("p",null,"The result of all the selected peaks are stored in the browser, allowing to safely reload the page and continue working from the current selection. Each peak consist of a retention time, the retention time when it begins, the retention time when it ends, the integral between this values, the relative integral and the calculated monoisotopic mass. Each peak also have a zoom action, that allows to easily visualize the peak region. This peaks in the plot also have a red rectangle that indicates their position and a green line that joins the beginning and the ending points of the peak."),(0,n.kt)("h4",{id:"automatic-peak-picking"},"Automatic peak picking"),(0,n.kt)("p",null,"The automatic peak picking task is done using some parameters that allows to filter and improve the results. This peak picking is based on the analysis of the first and second derivative of the chromatogram, therefore the beginning of the peak is where there\u2019s an inflection point. The parameters are the following:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/g8qdngHLJ_9NFieCCoWslFiSGle01vmZY9_PrzDhrki8bzkCqGeChgkdheuiRzPHd3kaxy--FQPEG2NiRHgpy5Vvj6BVjz_2-fzJfbyRL5KCtysHtJ0Dx6ET_9PW83jCy-w9pLYH",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Minimal relative height: the minimal ratio between the height of the current peak and the highest peak."),(0,n.kt)("li",{parentName:"ul"},"Minimum retention time: the minimal retention time for the integration."),(0,n.kt)("li",{parentName:"ul"},"Maximal retention time: the maximal retention time for integration.")),(0,n.kt)("h4",{id:"manual-peak-picking"},"Manual peak picking"),(0,n.kt)("p",null,"All the previous peaks can be modified : First select the corresponding line in the list of peaks and then you should ALT + Click one at the beginning of the peak and once and the end of the peak in the chromatogram. This is also truth for new peaks. This peaks can be created using the button below the peaks table or clicking on the plus icon over the table."),(0,n.kt)("p",null,"Note: the automatic peak picking is going to replace the current peak selection, therefore is recommended to use it before the manual peak selection"),(0,n.kt)("h3",{id:"peak-picking-in-mass-spectra"},"Peak picking in mass spectra"),(0,n.kt)("p",null,"When a peak in the list of peaks from the chromatogram is selected, the corresponding mass spectra is displayed, this mass values are selected using the following options:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/SYltT35ZPRKEQbG-9GaOOVNqHk4YvTwGfP2h6LMmSJ7QdnfExbZ6m45tfUZPl_ewDmqGZS2FKmMLij_uqrLPBjRLC6LR0YTG87Mkp_laTqHvOH819zrVyQmJF372qbTWyj26twmW",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mass spectra in the peak: from which part of the peak take the mass spectra. The current supported options are:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Range: the spectra resulting from the merge of merge all the spectra between the beginning and end of the peak."),(0,n.kt)("li",{parentName:"ul"},"Mean: the mass spectra with a retention time equal to the mean value between the beginning and end of the peak."),(0,n.kt)("li",{parentName:"ul"},"Start: the mass spectra with a retention time equal to the beginning of the peak."),(0,n.kt)("li",{parentName:"ul"},"End: the mass spectra with a retention time equal to the end of the peak."))),(0,n.kt)("li",{parentName:"ul"},"Filter by median: the values under the median of the intensities times this parameter are removed."),(0,n.kt)("li",{parentName:"ul"},"Percentage of the base peak: the values under the percentage ","(","between 0-1",")"," of the maximum intensity are removed."),(0,n.kt)("li",{parentName:"ul"},"Algorithm to merge: the algorithm of how to merge two masses and their respective intensities. The current supported algorithms are:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Centroid: if the distances between the masses is below a parameter, the intensities are added and the mass is weighted to be closer to the most intense original peak."),(0,n.kt)("li",{parentName:"ul"},"Slot: the masses are rounded using a parameter, and if in the rounding step the value is the same the intensities are added."))),(0,n.kt)("li",{parentName:"ul"},"Merge parameter: this is the distance parameter used in the previous merge algorithm."),(0,n.kt)("li",{parentName:"ul"},"Width to group: all the values that are at least at this distance in their masses are going to be considered part of the same multiplet.")),(0,n.kt)("p",null,"The current selected monoisotopic mass is selected from the most intense value in the multiplet with the highest mass. This value can be changed doing Shift + Click over the mass spectra. This will select the closest peak in the mass spectrogram."),(0,n.kt)("h3",{id:"molecular-formula-prediction"},"Molecular formula prediction"),(0,n.kt)("p",null,"The result of the peak selection on mass spectrometry allows to have an experimental monoisotopic mass that will be matched against a set of possible molecular formulas. This process is controlled by the options:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/I39e0EUifIqN4Vd1ibOVWf-TYjdncudgDWJVroU7Q_cLG9wxcxalmKNkgdgKldjKGoTZjzLtK3Jkh1epIPQFUwrIihsdn55hSuNTzpqArhWcOxATQVbwt20aApdUu95RS2Mmub9k",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Modification: how was charged the molecule. Most of the time the value should be H+."),(0,n.kt)("li",{parentName:"ul"},"Range: List of elements followed by their respective range of possibles values, separated between the elements by a space."),(0,n.kt)("li",{parentName:"ul"},"Precision ","(","ppm",")",": maximum absolute error allowed in ppm. This will have a big impact on speed so be as precise as possible !"),(0,n.kt)("li",{parentName:"ul"},"Unsaturation filters:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Use unsaturation: use unsaturation as a filter method."),(0,n.kt)("li",{parentName:"ul"},"Min unsaturation: minimum allowed value for the saturation."),(0,n.kt)("li",{parentName:"ul"},"Max unsaturation: maximum allowed value for the saturation."),(0,n.kt)("li",{parentName:"ul"},"Integer unsaturation: allows only integer results for the saturation values. This option should not be used when the molecule was charged with a proton."))),(0,n.kt)("li",{parentName:"ul"},"Similarity: This will calculate a similarity between the theoretical isotopic distribution and the experimental one. The matching algorithm will consider that each theoretical peak is an isosceles trapezoid with a defined width of the top that should be around the precision of the instrument and the bottom that may be 2 or 3 times the precision. It is expressed in Dalton. You need also to specify the range that will be used to compare the isotopic distribution. For small molecules a value between -0.5 and 2.5 is appropriate. This means that the window compared will be between the monoisotopic mass -0.5 to the monoisotopic mass +2.5.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Width bottom: width in Daltonof the bottom of the isosceles trapezoid used to match the theoretical spectrum to the experimental spectrum. A good value is 3 times the precision.."),(0,n.kt)("li",{parentName:"ul"},"Width top: width in Dalton of the top of the isosceles trapezoid used to match the theoretical spectrum to the experimental spectrum. A good value is half the precision."),(0,n.kt)("li",{parentName:"ul"},"Dalton before: number of Dalton under the monoisotopic mass that define the window used to calculate the similarity between experimental and theoretical isotopic distribution."),(0,n.kt)("li",{parentName:"ul"},"Dalton after: number of Dalton over the monoisotopic mass that define the window used to calculate the similarity between experimental and theoretical isotopic distribution.")))),(0,n.kt)("p",null,"These options, combined with the result of the monoisotopic mass, will generate a list of possible molecular formulas. In this list is shown the molecular formula, the theoric monoisotopic mass, the unsaturation and the error in ppm with the experimental monoisotopic mass. When a row is clicked, the simulated mass spectrometry is overlapped in the mass spectrometry of the compound. There is also a zoom action, that allows to zoom in the region where the simulated mass spectrometry is located."))}c.isMDXComponent=!0}}]);