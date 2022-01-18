"use strict";(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[561],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=l.createContext({}),d=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return l.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=A(e,["components","mdxType","originalType","parentName"]),s=d(n),u=i,m=s["".concat(o,".").concat(u)]||s[u]||p[u]||a;return n?l.createElement(m,r(r({ref:t},c),{},{components:n})):l.createElement(m,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=s;var A={};for(var o in t)hasOwnProperty.call(t,o)&&(A[o]=t[o]);A.originalType=e,A.mdxType="string"==typeof e?e:i,r[1]=A;for(var d=2;d<a;d++)r[d]=n[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},94354:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return A},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return c},default:function(){return s}});var l=n(87462),i=n(63366),a=(n(67294),n(3905)),r=["components"],A={slug:"/uuid/1fdc4456ddfda089d9a67f9366ac6883"},o="Analyze high resolution mass spectra for peptides and nucleotides",d={unversionedId:"structural_analysis/mass/peptide-and-nucleotide/README",id:"structural_analysis/mass/peptide-and-nucleotide/README",isDocsHomePage:!1,title:"Analyze high resolution mass spectra for peptides and nucleotides",description:"Introduction",source:"@site/docs/30_structural_analysis/mass/50_peptide-and-nucleotide/README.md",sourceDirName:"30_structural_analysis/mass/50_peptide-and-nucleotide",slug:"/uuid/1fdc4456ddfda089d9a67f9366ac6883",permalink:"/docs/eln/uuid/1fdc4456ddfda089d9a67f9366ac6883",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/mass/50_peptide-and-nucleotide/README.md",tags:[],version:"current",frontMatter:{slug:"/uuid/1fdc4456ddfda089d9a67f9366ac6883"},sidebar:"tutorialSidebar",previous:{title:"Mass overlay user guide",permalink:"/docs/eln/uuid/4cf732cabaf4941a66d2f19cbc5875f2"},next:{title:"MSPolyCalc: advanced polymer mass analysis",permalink:"/docs/eln/uuid/230d2530cee8782b3cb63dc4e25931d9"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Importing experimental data",id:"importing-experimental-data",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Ionizations",id:"ionizations",children:[],level:3}],level:2},{value:"Nucleic and peptidic sequence",id:"nucleic-and-peptidic-sequence",children:[],level:2},{value:"One letter code",id:"one-letter-code",children:[],level:2},{value:"Three letter code",id:"three-letter-code",children:[],level:2},{value:"Peptides",id:"peptides",children:[],level:2},{value:"Nucleotides",id:"nucleotides",children:[],level:2},{value:"Report",id:"report",children:[{value:"Dynamically filter fragment",id:"dynamically-filter-fragment",children:[],level:3},{value:"Filtering from the table",id:"filtering-from-the-table",children:[],level:3}],level:2}],p={toc:c};function s(e){var t=e.components,A=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,l.Z)({},p,A,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"analyze-high-resolution-mass-spectra-for-peptides-and-nucleotides"},"Analyze high resolution mass spectra for peptides and nucleotides"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This tool allows analyzing complex mass spectra of polynucleotide or protein/peptide that may involve digestion, adducts, residue modification, etc."),(0,a.kt)("p",null,"Please use a recent version of Google Chrome !!!"),(0,a.kt)("h2",{id:"importing-experimental-data"},"Importing experimental data"),(0,a.kt)("p",null,"This tool can be either used in a LIMS or stand-alone. In the stand-alone mode you should either drag/drop your experimental spectrum as a tab-delimited text file or copy and paste it (",(0,a.kt)("inlineCode",{parentName:"p"},"CTRL"),"-V) while moving you mouse over the drop zone."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Paste",src:n(95470).Z})),(0,a.kt)("p",null,"The list of available spectra will be displayed in the table, and you may click on one of them to display it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"list spectra",src:n(63395).Z})),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"ionizations"},"Ionizations"),(0,a.kt)("p",null,"All the results are shown for the neutral molecule, and it is therefore necessary to specify the ionization method. The methods may be entered as a comma separated list of all the allowed ionizations."),(0,a.kt)("p",null,"You may as well specify multiple charges. Here are some examples of allowed patterns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"H+ (addition a proton)"),(0,a.kt)("li",{parentName:"ul"},"H+, Na+, K+ (either a proton, sodium cation or potassium cation)"),(0,a.kt)("li",{parentName:"ul"},"H+, (H+)2, (H+)3 (addition of one, two or three protons)"),(0,a.kt)("li",{parentName:"ul"},"(H+)-1, (H+)-2, (H+)-3 (removal of one, two or three protons)")),(0,a.kt)("p",null,"It is also allowed to enter a range"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(H+)1-10 (addition of one to 10 protons)"),(0,a.kt)("li",{parentName:"ul"},"(H+)-1--10 (removal of one to 10 protons)")),(0,a.kt)("h2",{id:"nucleic-and-peptidic-sequence"},"Nucleic and peptidic sequence"),(0,a.kt)("p",null,"There are various possibilities to enter a peptidic sequence"),(0,a.kt)("h2",{id:"one-letter-code"},"One letter code"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AAAHHHCCCKK")),(0,a.kt)("p",null,"A sequence may be entered as a one letter code. By default the system will add on the N-terminal side an hydrogen\n",(0,a.kt)("inlineCode",{parentName:"p"},"H")," and on the C-terminal side a ",(0,a.kt)("inlineCode",{parentName:"p"},"OH"),"."),(0,a.kt)("p",null,"N or C terminal modifications should be entered between parenthesis. For example if you have an amide function on\nthe C-terminal you should enter ",(0,a.kt)("inlineCode",{parentName:"p"},"AAAHHHCCCKK(NH2)"),"."),(0,a.kt)("p",null,"It is also possible to have side chain modifications by adding the modification after the one letter amino acid between parenthesis."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AAAC(S-1Se)GGG"),": the sulfur of a cysteine is replace by a selenium (",(0,a.kt)("inlineCode",{parentName:"li"},"S-1"),", we remove a sulfur, ",(0,a.kt)("inlineCode",{parentName:"li"},"Se")," we add a selenium)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AAA(H-1Cl)GGG"),": we replace the hydrogen of an alanine by a chlorine"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AAAS(PO3H)"),": we have a phosphorylated serine")),(0,a.kt)("h2",{id:"three-letter-code"},"Three letter code"),(0,a.kt)("p",null,"Sequence may be entered as a 3 letter code. In this case lowercase / uppercase has to be respected and N and C terminal groups must be specified."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HAlaGlyProOH")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MeAla(Se)GlyNH2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(CH3)Ala(Se)GlyNH2"))),(0,a.kt)("h2",{id:"peptides"},"Peptides"),(0,a.kt)("p",null,"In the case of peptide it is also possible to ",(0,a.kt)("inlineCode",{parentName:"p"},"in-silico")," digest the sequence and to specify the allowed missed cleavage and the minimal and maximal sequence length."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"peptide digestion",src:n(85133).Z})),(0,a.kt)("p",null,"While the usual fragmenation ABCXYZ are allowed it is also possible to specify internal fragments like YA and YB."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"peptide fragmentation",src:n(72373).Z})),(0,a.kt)("p",null,'This may lead to numerous sequences that will have to be processed and if you would like to focus on a part of the sequence you can use the "Sequence must contain" field. This allows to enter a string that have to be contain in the expanded sequence code !'),(0,a.kt)("p",null,"This means that if you have a sequence ",(0,a.kt)("inlineCode",{parentName:"p"},"AGSTY")," and would like to only process the fragments that contain the glycine you should enter in this field ",(0,a.kt)("inlineCode",{parentName:"p"},"Gly")," or if you want only ",(0,a.kt)("inlineCode",{parentName:"p"},"ST")," you should enter ",(0,a.kt)("inlineCode",{parentName:"p"},"SerThr"),". Please note that for advanced user you can enter a regular expression."),(0,a.kt)("h2",{id:"nucleotides"},"Nucleotides"),(0,a.kt)("h2",{id:"report"},"Report"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"report")," tab allows to create a dynamic image that shows the various fragmentation observed in the case of peptidic and nucleic sequences."),(0,a.kt)("p",null,"It is a vectorial format (SVG) suitable for publication and preferences allows to define various rendering parameters."),(0,a.kt)("p",null,"There are also 2 ways to filter the displayed fragments"),(0,a.kt)("h3",{id:"dynamically-filter-fragment"},"Dynamically filter fragment"),(0,a.kt)("p",null,"The more visual way is based on interactive preferences that allows to show / hide internal fragments as well as to select the minimal similarity and minimal quantity of the fragments to display."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"filter report",src:n(89400).Z})),(0,a.kt)("h3",{id:"filtering-from-the-table"},"Filtering from the table"),(0,a.kt)("p",null,"From the table is it also possible to make queries per column. In order to display only the selected fragments you need to click on the top of the select column. It is also possible to select couple of fragments to display."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"fragment selection in report",src:n(7166).Z})))}s.isMDXComponent=!0},63395:function(e,t){t.Z="data:image/png;base64,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IIGmBBQ4TUmZTwISkIAEJCCBriGgwOmarrKiEpCABCQgAQk0JaDAaUrKfBKQgAQkIAEJdA0BBU7XdJUVlYAEJCABCUigKQEFTlNS5pOABCQgAQlIoGsIKHC6pqusqAQkIAEJSEACTQkocJqSMp8EJCABCUhAAl1DoG/8P9bM/0286TcptvrGwK5psRWVgAQkIAEJSKDjCQxXlyBr+DGC0/FdbAUlIAEJSEACEmiXgAKnXWLml4AEJCABCUig4wkocDq+i6ygBCQgAQlIQALtElDgtEvM/BKQgAQkIAEJdDwBBU7Hd5EVlIAEJCABCUigXQIKnHaJmV8CEpCABCQggY4noMDp+C6yghKQgAQkIAEJtEtAgdMuMfNLQAISkIAEJNDxBBQ4Hd9FVlACEpCABCQggXYJ9H+Tcbsnml8CEpCABCQgAQl0GgG/ybjTesT6SEACEpCABCQw0Qi4RDXRUFqQBCQgAQlIQAKdQkCB0yk9YT0kIAEJSEACEphoBBQ4Ew2lBUlAAhKQgAQk0CkEpomKDPffksf5HiUgAQlIQAISkMDEIjBSXWIEZ2L1hOVIQAISkIAEJNAxBBQ4HdMVVkQCEpCABCQggYlFoH+JamIVaDndReDtt99OF1544QSVXmSRRdICCyyQ1llnnTT//PNP8L4JwyfwxRdfpBlnnDHNOuuswy/EM0cdgX/++Sd99tlnad55503TTjttx7X/nXfeSRdccEE68cQTO7J+HQfMCk1yAgqcSY64Oy6w9957p5lnnjnxBUk//fRT+v7779NLL72UzjzzzLT55punzTbbrDsa0gW1vPzyy9Naa62VNtxwwy6orVXsFAK//PJLOuuss9Khhx6aFl544U6plvWQQMcSUOB0bNdM3oottNBCabbZZhtw0Q022CA9++yz6frrr0+8v8wyywx43xcSkIAEJCCBTiWgwOnUnumQeq2xxhrp1VdfTXfccUcWOJ9//nm677770l577ZUjPK+//npabLHF8lIWd5j33ntveu+999IPP/yQFl100bT66qunlVdeub81d999d777nG666dLTTz+d3nrrrSysllpqqbTFFlsk0gczwvQPP/xw4rpffvllDtcvu+yyaeONN05TTfX/LWVEnr7++uuEQHvuuefSG2+8kaNQdXe97dTn008/Tffff3/68MMP088//5zmnnvutP766+e2R50//vjj9MADD2QGpLHMt+WWW2ZGr732WhaM1I22v//++2mjjTbK75H3iSeeSK+88kriOiwLLr/88rkNfX19vD2BUResLrp2++2352uvttpqqQmzF154IdG3W2+99YDr0M4bbrghbbfddmnOOedMwYv6cc6bb76ZDj744H72cXKMkx133DGPF/pg6qmnTiuttFLm8cEHH+R+hMEss8yS1l577dzWOJ8oIhxhxlgiurjqqqvmMRLLM7TrwQcfzPWAKQKdPPCIPIP1R1yr7sgYevTRRxPnc+0lllgibbXVVmmOOebI2YNDk3H8559/ZgaM9e+++y4tvvjiac0118z9W1775ZdfzuOD8TX99NOnpZdeOo0dOza3i76GGUbfssS5yy67JJaY68Y642i++eZL9H9pfDaffPLJtMcee+T+vm/8Z3m4fVSWW/7NPPDII4/keeP333/P8wDjqlzqHopJjJ+6eeabb77Jn8N33303/f3334m5g88/7dUkUBKY+j/jjQQmoCa23HLLNclmni4h8O2332YHgRhgUq2zv/76Kz3zzDNpk002yZPpXXfdlZ3Sddddl50oAgMnTPgcZ0Q+JvDffvstCyPeGzNmTC4ap8WE/NBDD2Xhw3XZU8Ck++KLL2ZBhCOsM5bPLr744iwOOA9xgfOhTCY7nBvXQpDhmHAoCBwEGNGnuvY1rQ9LdmeffXZ2LEym/ODcEH7Un8kV53XGGWfkaNe2226bnTkT9Z133pnbOs0002QhgAMjIobTZNKfaaaZ0q233pqdIEtXiB4cGI4MR9/qM8dET5711luv36HDjT648sorM5/ZZ5+9MTMY0m+l/frrr+mmm25KCF2ECLzoH9rN9XEuSy65ZOZenvfVV18lxgkCZq655sq84EQabcJhr7vuurm///jjjyx2YEgehAt7OWBHP+PkF1xwwSxmOJfxht1222153CA8GHPzzDNPzkP7YTZUf8C9zhg/8EN0UTZjF8Hz/PPP5zSEdNNxw2fnvPPOy4IX4UWZMKXucAmnT3k333xzrjdtQUwieBi/sEcQcF14rrjiivlzh2Bn3q4b64899liaYYYZ8hgr28jYgz1MR9JHZZnxN3MJjD766KN8bdpLP8CT+vB5Zew0YRJ1Y8yV8wwcmGcohxuiFVZYITNBqDEuyK/1DoGR6hIjOL0zFiZZS3CSGE4+jAn5qKOOyk6FtPi+gkMOOSQ7Z9JwfNzx4rxXWWWVPKGTzoR34IEHZsfBawwncuqpp+Y7WBxfnSGAuGM97LDDskAgDyIBAcOkhxNC5GB8MHjv6KOPzpNtTmzxq0l9iCRwN7rbbrv1bw5mI/Ynn3yS60RkgrtjbNddd+13+NTtlFNOyZEIRBHCBjHHXTwTPkYk6vHHH0+77757f7QLHji/888/PwuBcIT5hH9/cU2iK9ytI4zCeE00g2u0wyzOH+qIg6QtOJiImrU6B0aIPYz+YIM1bSWCQP0xHBOOmz7DeSNscNrcvePAMMpBMBMZIOKA0d846ohS4PARuDDZYYcdGvVHLqjyi+ggdSojYwiv0047Lfc3kUmsybghykVbjjnmmCxaOA8OiA/EKQz4XN1zzz05ShZjAuHIGGBcM/ZoIwxgT0S0jEa2M9a5ftWG00fVMsrXsNp55537k4h0wg4BDdcmTOLk6jxz9dVX5znlgAMOyCKHfES6eFCCvIwrTQJBYKr4w6MEWhGIyAcOJoxlF+6YMe64WXLZdNNN+8VN5OOOlSgLziiMu3Em79K4Y8VJM/m1MvYD4RAQCaXxmkmfKFNpO+2005DihvxN6oMT2HffffvFTVyHqFIIv+CE4wvjTnO//fbLjjvSqkcECe0vl/LIgyPEkXEnX2dcD2bVdnMXTSQGZ98us7rrVNOoaxNxw3khPqIMnB9WjUrh0H/88cf8HpEVll+qeWBNdIYjhkhAjBARCWN8IJ5p+3D7g/MQJYixMMY65caYJ73JuKEveBIRZqUhZFj+e2+8KKZ/+YyQrzTGNRxiWax8r/p307FePY/Xw+mjunIirXqDAjOYRv82YRJllfMMkR8EOxEuPldhiGwENxy5CdEkEASM4AQJjy0JsCyA8Vgzy0sYkYkwlgKwuLONdI5MRIiZOI80HEOd4cxLIVTNg8Mp76rL94lWEKYOw2FUnUq8Vz02qQ91wyExOVMPlmd4ZJewPM4Z4+4Up3zFFVfk/TncWVIv3g9nW702rymLvQQsUVQNtiGgqu/xmuWLc845p38/EqF99vAQacLaYZZPaPCL/hwqchPFRPQvXnMeLFiuKw2xglDGOAexxx0/SyqMHRghOkojSgPrk046KXOHNaKQ+mHD7Q+ebiMqwnIj45wyKZtyy3Y3GTf0B4Ksrm+pI4KN9lF+6bR5D2MP21DWzlivK2s4fVRXTqSx9FY1+pwxjjVhEp/dunmGGwgifqXx2cSYqwb7rJXn+HfvExg4y/R+e23hMAjgxDHWt0OolPsXWBfH6iZo0tnwWd5ZtcqH8yjzcW5p3MHF5tEynb9Jj0mO19UnwkhrZU3qw3d88Hg3kyebf3GeOEIiTjhfjHL22Wef7IjZ//Pe+LtzlmM4hygOUaA6Yw8K59ZtsMbBEeJvZZTJ+9SDu13uYkmLSEM7zOquEU6pfA+H2tSqQobz6tIiKsP7jLdLLrkkizaiC7FZnQgA+zHCEI7HHnts3ugMazafszcIZiyRDLc/cPgsv7IcishiiYilIZYJDxwfxWF/FNZk3DAm2VtU17fstcKRM1Zajeto62DHdsY646Fqdf1Rl1b2UbWM8nUpAsv0+LsJk8hbzjNRd1hVefIannX1jrI8jj4CCpzR1+dttRgHh5MmGkHYv87ibgvxE461zEdEoXzEnD0ndYZjiyWMuvcpu1w2KPNQZqs76jJf3d9N6sNTM9zJs0+mnESfeuqp/iJpJxMt0R5+iDbhlC+77LLseHnaqM5YgmD5r/oEE3mJWrTiHmWxJMD+A76viE2phOvD2mEWQjXO5ThY9KjMNzH/ZsmNJ3GOP/74AZtGWW4LY1mKsYCYY98VPzhgImyIIF4jRNrtD8rgaSW4IWL5wegHNj6zWRbOWJNxgyhi3LB8WzWeQENMEfEgYlRnjC/aEHvL6vK0SkM4V21K9Ge1Dk2Y1NUzhBxRSyJepfH5od+IBGoSCALuwQkSHicgwB0TT70gPNhz0cqYgAklM/lXjUmHTaNM8mHcbROmLg0hxWSOkGplvIfzK/cCkZeoD+eWIqpVGXXpQ9UHp4eDY/mpFDdcl7vvMIQgm4JjqYV0lvXYFxKRr8hb3g3DjkhBRIIiD+KIJ7eq58b7cWQ5h7tiogz0FRt1w5oyIypDP8VyZJzfav9PvD8pjiz9Ue/qEzFEUsIQOOeee27ekxFpCMHYT8LSTzv9UZbBshdPvpWGYKWfSsc71LjhfMY9wqwcE6Szd4gnAjHywL667IJAoR7VqGY5dnIBNb8Yd1XRxHnsYZnS1oRJXR2J5nADVArdyIfAZ9P2SCJhUZbH3iGgwOmdvhxRS3i0k/0OTLLsg+H7RU4//fT8XSDbbLPNBBt7qxdjeQQnzSPFOFsmdBwAkzgTWuxTifNIRzQw6eLIr7rqqnxePEUS+cpjvMcTEyGQOMa/muCR4uHaYPXBcRId4ntqqCvGdXGEiMBgx9IVjpUnYmJfElEdnpoqxRd3mQg/yoITwollJuqAoyONMnkaiAm9uvm42kbECXkQOIipWEIhX1NmsdcBkcr1EZw4kqqTrF57UrzmDh8xAwOMaA7Oi/GEIXKJGsKGNrN8SH2JQN337z4slrWa9kcutPhFtIRIGMt+CCnGKBvBibiMGTOmyJlynw02jnmEH9HJ+Ka/GS+IGx4T5z3awdOGfD5YluMzBH8+Q9dcc02+VghWbiQwls5gMphRT4Qx18K4KbjlllsmuDkYrIxJ9V4TJq2uTVSUvmF+QvjBgfHA03XMQUMtj7Uq1/TeJOASVW/2a+NWxfIHzro07lhxyjylg8MJazWBEDLm0c1rr702R1MiP+FkNoOWhhDhukQnwpjoDz/88Byyj7TqEcd95JFH5omfx07DcM5HHHFEv2NvVcfIXz02qc+4cePyUtPJJ5/cfzpPvYwdOzZddNFFWdTQfh5hZgLme37Ye8MkjIPafvvt+8+DKeIF5xOPSx900EGZHf8aIwzRUz5yHul1RzgjTCOCEXmaMqOPWSIjYkDdMdLYO4TQjXESxyi/1bHdPijLYS8FApDN08EQh82/KLj00kvzVxKwz4b9Tty5szcqohyIvT333DMLRvg16Y/y2vxNtJJ28qWVITJIx7mWm36bjBvGNfVG4JRjh89WuWzFv0rh6xSIAIZR//333z8/YUUaAod+pl78HHfccS0dOvkQhPAKQ/yyN4lHrbGR9FGUWR5jbMSxfI/9SpHehEmruiHkEbIIRJaNw+iL+EqBSPMogb7xdyf5mcv4HpOhkDDRaxIYjAB3qtyBcodd3YjJl56xb4IvUOPumLtbwun8tGM4NJZ0mCxHsu7eTn24s+aaLB2wb6bcAFmtO0s9cGCPRV0+Ig6UgwMvJ3PaxZ03jpo9B+EUquVXXxNt4EmdE044YUB5Zb4mzKgT16c/qktEZVmT42+iYIwjWAz2qDT9wn4clicYDyXPqOdQ/RH5qkdY0FeUWy5/tDNuokzqQISPMUGb6oxrER1EzNDmuv6nj8hXRurqyiItrslnsax/q/yTOz3qNxiTujrhtpg7EDtw4nOk9R6B4eoSxgc/RnB6b0xM8RY1FSxM0E0m6boGMaENd1NxXXmkDVUfHGfdJuq68hAHgwkEhF9d22lX9Xt+6sov03B2PEFERKnOuUfeJsxwrBOba1y/3SOOazBhE+XRZv4lxmA2VH+0OpcoylA21LiJ85vUgXFRRkzj3PIYS1VlWqu/m1yz1bmTI3249UP41T2OPjnq7DW6h4ACp3v6yppKYAIC/EsB9k4RnYn9NhNkMkECEpDAKCSgwBmFnT4lm8y3kHZSOLnT6tNu37Angb0H7IHiblibPAS6fdxMHkpeRQJTlkD/HpwpWw2vLgEJSEACEpCABEZOIPbg+Jj4yFlaggQkIAEJSEACHUZAgdNhHWJ1JCABCUhAAhIYOQEFzsgZWoIEJCABCUhAAh1GQIHTYR1idSQgAQlIQAISGDmB/qeohvuFOiOvgiVIQAISkIAEJCCBgQRGqkuM4Azk6SsJSEACEpCABHqAgAKnBzrRJkhAAhKQgAQkMJCAAmcgD19JQAISkIAEJNADBBQ4PdCJNkECEpCABCQggYEEFDgDefhKAhKQgAQkIIEeIKDA6YFOtAkSkIAEJCABCQwkoMAZyMNXEpCABCQgAQn0AAEFTg90ok2QgAQkIAEJSGAgAQXOQB6+koAEJCABCUigBwj0f5Nx07aM9JsFq9dpWl71vFavx40b1+qtAeledwCOtl/IuR6Z46qeS9NUx1U9KcdVPZemqY6relK9Mq7qW5eSEZxWZEyXgAQkIAEJSKBrCShwurbrrLgEJCABCUhAAq0IKHBakTFdAhKQgAQkIIGuJaDA6dqus+ISkIAEJCABCbQioMBpRcZ0CUhAAhKQgAS6loACp2u7zopLQAISkIAEJNCKgAKnFRnTJSABCUhAAhLoWgJtfw9O17bUiktAAhKQgAQk0PME+vr6chuN4PR8V9tACUhAAhKQwOgj0Pff8Tb6mm2LJSABCUhAAhLoVQJIGyM4vdq7tksCEpCABCQwigkocEZx59t0CUhAAhKQQC8SYB+OAqcXe9Y2SUACEpCABEY5AQXOKB8ANl8CEpCABCTQiwQUOL3Yq7ZJAhKQgAQkMMoJKHBG+QCw+RKQgAQkIIFeJPA/2DOXYS7rDLkAAAAASUVORK5CYII="},95470:function(e,t){t.Z="data:image/png;base64,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IIGmBBQ4TUmZTwISkIAEJCCBriGgwOmarrKiEpCABCQgAQk0JaDAaUrKfBKQgAQkIAEJdA0BBU7XdJUVlYAEJCABCUigKQEFTlNS5pOABCQgAQlIoGsIKHC6pqusqAQkIAEJSEACTQkocJqSMp8EJCABCUhAAl1DoG/8P9bM/0286TcptvrGwK5psRWVgAQkIAEJSKDjCQxXlyBr+DGC0/FdbAUlIAEJSEACEmiXgAKnXWLml4AEJCABCUig4wkocDq+i6ygBCQgAQlIQALtElDgtEvM/BKQgAQkIAEJdDwBBU7Hd5EVlIAEJCABCUigXQIKnHaJmV8CEpCABCQggY4noMDp+C6yghKQgAQkIAEJtEtAgdMuMfNLQAISkIAEJNDxBBQ4Hd9FVlACEpCABCQggXYJ9H+Tcbsnml8CEpCABCQgAQl0GgG/ybjTesT6SEACEpCABCQw0Qi4RDXRUFqQBCQgAQlIQAKdQkCB0yk9YT0kIAEJSEACEphoBBQ4Ew2lBUlAAhKQgAQk0CkEpomKDPffksf5HiUgAQlIQAISkMDEIjBSXWIEZ2L1hOVIQAISkIAEJNAxBBQ4HdMVVkQCEpCABCQggYlFoH+JamIVaDndReDtt99OF1544QSVXmSRRdICCyyQ1llnnTT//PNP8L4JwyfwxRdfpBlnnDHNOuuswy/EM0cdgX/++Sd99tlnad55503TTjttx7X/nXfeSRdccEE68cQTO7J+HQfMCk1yAgqcSY64Oy6w9957p5lnnjnxBUk//fRT+v7779NLL72UzjzzzLT55punzTbbrDsa0gW1vPzyy9Naa62VNtxwwy6orVXsFAK//PJLOuuss9Khhx6aFl544U6plvWQQMcSUOB0bNdM3oottNBCabbZZhtw0Q022CA9++yz6frrr0+8v8wyywx43xcSkIAEJCCBTiWgwOnUnumQeq2xxhrp1VdfTXfccUcWOJ9//nm677770l577ZUjPK+//npabLHF8lIWd5j33ntveu+999IPP/yQFl100bT66qunlVdeub81d999d777nG666dLTTz+d3nrrrSysllpqqbTFFlsk0gczwvQPP/xw4rpffvllDtcvu+yyaeONN05TTfX/LWVEnr7++uuEQHvuuefSG2+8kaNQdXe97dTn008/Tffff3/68MMP088//5zmnnvutP766+e2R50//vjj9MADD2QGpLHMt+WWW2ZGr732WhaM1I22v//++2mjjTbK75H3iSeeSK+88kriOiwLLr/88rkNfX19vD2BUResLrp2++2352uvttpqqQmzF154IdG3W2+99YDr0M4bbrghbbfddmnOOedMwYv6cc6bb76ZDj744H72cXKMkx133DGPF/pg6qmnTiuttFLm8cEHH+R+hMEss8yS1l577dzWOJ8oIhxhxlgiurjqqqvmMRLLM7TrwQcfzPWAKQKdPPCIPIP1R1yr7sgYevTRRxPnc+0lllgibbXVVmmOOebI2YNDk3H8559/ZgaM9e+++y4tvvjiac0118z9W1775ZdfzuOD8TX99NOnpZdeOo0dOza3i76GGUbfssS5yy67JJaY68Y642i++eZL9H9pfDaffPLJtMcee+T+vm/8Z3m4fVSWW/7NPPDII4/keeP333/P8wDjqlzqHopJjJ+6eeabb77Jn8N33303/f3334m5g88/7dUkUBKY+j/jjQQmoCa23HLLNclmni4h8O2332YHgRhgUq2zv/76Kz3zzDNpk002yZPpXXfdlZ3Sddddl50oAgMnTPgcZ0Q+JvDffvstCyPeGzNmTC4ap8WE/NBDD2Xhw3XZU8Ck++KLL2ZBhCOsM5bPLr744iwOOA9xgfOhTCY7nBvXQpDhmHAoCBwEGNGnuvY1rQ9LdmeffXZ2LEym/ODcEH7Un8kV53XGGWfkaNe2226bnTkT9Z133pnbOs0002QhgAMjIobTZNKfaaaZ0q233pqdIEtXiB4cGI4MR9/qM8dET5711luv36HDjT648sorM5/ZZ5+9MTMY0m+l/frrr+mmm25KCF2ECLzoH9rN9XEuSy65ZOZenvfVV18lxgkCZq655sq84EQabcJhr7vuurm///jjjyx2YEgehAt7OWBHP+PkF1xwwSxmOJfxht1222153CA8GHPzzDNPzkP7YTZUf8C9zhg/8EN0UTZjF8Hz/PPP5zSEdNNxw2fnvPPOy4IX4UWZMKXucAmnT3k333xzrjdtQUwieBi/sEcQcF14rrjiivlzh2Bn3q4b64899liaYYYZ8hgr28jYgz1MR9JHZZnxN3MJjD766KN8bdpLP8CT+vB5Zew0YRJ1Y8yV8wwcmGcohxuiFVZYITNBqDEuyK/1DoGR6hIjOL0zFiZZS3CSGE4+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"},85133:function(e,t,n){t.Z=n.p+"assets/images/peptide-digestion-c9bf3f464c1130c218d99789e275a617.png"},72373:function(e,t,n){t.Z=n.p+"assets/images/peptide-fragmentation-ff9de379179ca032a48594f1afdfe156.png"},89400:function(e,t,n){t.Z=n.p+"assets/images/report-filter-28bf219d591527b24c47754d44960557.gif"},7166:function(e,t,n){t.Z=n.p+"assets/images/report-table-cfc5358d0006ba10f7498faf1aae829c.gif"}}]);