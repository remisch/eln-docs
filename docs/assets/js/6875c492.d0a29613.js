(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[8610],{20895:function(e,t,a){"use strict";a.d(t,{dK:function(){return r},_k:function(){return n},vc:function(){return l},rx:function(){return s},qo:function(){return c},Hk:function(){return o},Iz:function(){return i}});a(31336);var r=["en"],n=!1,l=null,s="cd7ff5e8",c=8,o=50,i={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},46165:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var r=a(19756),n=a(67294),l=a(86010),s=a(90261),c=a(36742),o="sidebar_2ahu",i="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",f=a(24973);function h(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,f.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(i,"margin-bottom--md")},t.title),n.createElement("ul",{className:m},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var p=a(571);var v=function(e){var t=e.sidebar,a=e.toc,c=e.children,o=(0,r.Z)(e,["sidebar","toc","children"]),i=t&&t.items.length>0;return n.createElement(s.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},i&&n.createElement("aside",{className:"col col--3"},n.createElement(h,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i})},c),a&&n.createElement("div",{className:"col col--2"},n.createElement(p.Z,{toc:a})))))}},43146:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var r=a(67294),n=a(86010),l=a(3905),s=a(24973),c=a(36742),o=a(13018),i=a(60637),m=a(41217),u=a(86146),d="blogPostTitle_GeHD",g="blogPostData_291c",f="blogPostDetailsFull_3kfx";var h=function(e){var t,a,h,p=(a=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),v=e.children,E=e.frontMatter,b=e.metadata,_=e.truncated,N=e.isBlogPostPage,k=void 0!==N&&N,Z=b.date,T=b.formattedDate,w=b.permalink,L=b.tags,y=b.readingTime,P=b.title,C=b.editUrl,I=E.author,M=E.image,x=E.keywords,R=E.author_url||E.authorURL,U=E.author_title||E.authorTitle,z=E.author_image_url||E.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(m.Z,{keywords:x,image:M}),r.createElement("article",{className:k?void 0:"margin-bottom--xl"},(h=k?"h1":"h2",r.createElement("header",null,r.createElement(h,{className:d},k?P:r.createElement(c.Z,{to:w},P)),r.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:Z},T),y&&r.createElement(r.Fragment,null," \xb7 ",p(y))),r.createElement("div",{className:"avatar margin-vert--md"},z&&r.createElement(c.Z,{className:"avatar__photo-link avatar__photo",href:R},r.createElement("img",{src:z,alt:I})),r.createElement("div",{className:"avatar__intro"},I&&r.createElement(r.Fragment,null,r.createElement("div",{className:"avatar__name"},r.createElement(c.Z,{href:R},I)),r.createElement("small",{className:"avatar__subtitle"},U)))))),r.createElement("div",{className:"markdown"},r.createElement(l.Zo,{components:i.Z},v)),(L.length>0||_)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(t={},t[f]=k,t))},L.length>0&&r.createElement("div",{className:"col"},r.createElement("b",null,r.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),L.map((function(e){var t=e.label,a=e.permalink;return r.createElement(c.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),k&&C&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:C})),!k&&_&&r.createElement("div",{className:"col text--right"},r.createElement(c.Z,{to:b.permalink,"aria-label":"Read more about "+P},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},69404:function(e,t,a){"use strict";a.r(t);var r=a(67294),n=a(36742),l=a(46165),s=a(43146),c=a(24973),o=a(13018);t.default=function(e){var t,a=e.metadata,i=e.items,m=e.sidebar,u=a.allTagsPath,d=a.name,g=a.count,f=(t=(0,o.c2)().selectMessage,function(e){return t(e,(0,c.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,c.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:f(g),tagName:d});return r.createElement(l.Z,{title:h,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:m},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(n.Z,{href:u},r.createElement(c.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),i.map((function(e){var t=e.content;return r.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},86146:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var r=a(67294),n=a(24973),l=a(22122),s=a(19756),c=a(86010),o="iconEdit_2_ui",i=function(e){var t=e.className,a=(0,s.Z)(e,["className"]);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(o,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function m(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(i,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){"use strict";a.d(t,{r:function(){return o},Z:function(){return i}});var r=a(67294),n=a(86010);var l=function(e,t,a){var n=(0,r.useState)(void 0),l=n[0],s=n[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var n=0,c=!1,o=document.getElementsByClassName(e);n<o.length&&!c;){var i=o[n],m=i.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));r.id===u&&(l&&l.classList.remove(t),i.classList.add(t),s(i),c=!0),n+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},s="tableOfContents_35-E",c="table-of-contents__link";function o(e){var t=e.toc,a=e.isChild;return t.length?r.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:c,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children}))}))):null}var i=function(e){var t=e.toc;return l(c,"table-of-contents__link--active",100),r.createElement("div",{className:(0,n.Z)(s,"thin-scrollbar")},r.createElement(o,{toc:t}))}}}]);