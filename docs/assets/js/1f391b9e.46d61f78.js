"use strict";(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[3085],{20895:function(e,n,t){t.d(n,{dK:function(){return a},_k:function(){return l},vc:function(){return c},rx:function(){return r},qo:function(){return i},Hk:function(){return o},Iz:function(){return s}});t(31336);var a=["en"],l=!1,c=null,r="c8eb53e2",i=8,o=50,s={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},87979:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var a=t(67294),l=t(86010),c=t(73938),r=t(3905),i=t(96845),o=t(67588),s=t(63773),m="mdxPageWrapper_3qD3";var u=function(e){var n=e.content,t=n.frontMatter,u=n.metadata,d=t.title,f=t.description,v=t.wrapperClassName,_=t.hide_table_of_contents,N=u.permalink;return a.createElement(c.Z,{title:d,description:f,permalink:N,wrapperClassName:null!=v?v:s.kM.wrapper.mdxPages,pageClassName:s.kM.page.mdxPage},a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,l.Z)("row",m)},a.createElement("div",{className:(0,l.Z)("col",!_&&"col--8")},a.createElement(r.Zo,{components:i.Z},a.createElement(n,null))),!_&&n.toc&&a.createElement("div",{className:"col col--2"},a.createElement(o.Z,{toc:n.toc,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level})))))}},67588:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(87462),l=t(63366),c=t(67294),r=t(86010),i=t(25002),o="tableOfContents_35-E",s=["className"];var m=function(e){var n=e.className,t=(0,l.Z)(e,s);return c.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar",n)},c.createElement(i.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},25002:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(87462),l=t(63366),c=t(67294),r=t(63773),i=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var n=e.toc,t=e.className,a=e.linkClassName,l=e.isChild;return n.length?c.createElement("ul",{className:l?void 0:t},n.map((function(e){return c.createElement("li",{key:e.id},c.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),c.createElement(o,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}function s(e){var n=e.toc,t=e.className,s=void 0===t?"table-of-contents table-of-contents__left-border":t,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,f=void 0===d?void 0:d,v=e.minHeadingLevel,_=e.maxHeadingLevel,N=(0,l.Z)(e,i),h=(0,r.LU)(),k=null!=v?v:h.tableOfContents.minHeadingLevel,g=null!=_?_:h.tableOfContents.maxHeadingLevel,p=(0,r.DA)({toc:n,minHeadingLevel:k,maxHeadingLevel:g}),C=(0,c.useMemo)((function(){if(u&&f)return{linkClassName:u,linkActiveClassName:f,minHeadingLevel:k,maxHeadingLevel:g}}),[u,f,k,g]);return(0,r.Si)(C),c.createElement(o,(0,a.Z)({toc:p,className:s,linkClassName:u},N))}}}]);