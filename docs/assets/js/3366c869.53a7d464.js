"use strict";(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[8336],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22687:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={slug:"/installation/setup"},s="Deploying the ELN",c={unversionedId:"for_developers/installation/setup/index",id:"for_developers/installation/setup/index",isDocsHomePage:!1,title:"Deploying the ELN",description:"System requirements",source:"@site/docs/90_for_developers/installation/10_setup/index.md",sourceDirName:"90_for_developers/installation/10_setup",slug:"/installation/setup",permalink:"/docs/eln/installation/setup",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/90_for_developers/installation/10_setup/index.md",tags:[],version:"current",frontMatter:{slug:"/installation/setup"},sidebar:"tutorialSidebar",previous:{title:"Creating access tokens",permalink:"/docs/eln/for_developers/token/README"},next:{title:"Automatic importation of files (jcamp, etc.)",permalink:"/docs/eln/installation/importation"}},d=[{value:"System requirements",id:"system-requirements",children:[],level:2},{value:"Installing dependencies",id:"installing-dependencies",children:[{value:"1. Install docker and docker-compose and some dependencies",id:"1-install-docker-and-docker-compose-and-some-dependencies",children:[],level:3},{value:"2. Optional configurations",id:"2-optional-configurations",children:[],level:3}],level:2},{value:"Getting the ELN code and running it",id:"getting-the-eln-code-and-running-it",children:[{value:"1. Start docker daemon",id:"1-start-docker-daemon",children:[],level:3},{value:"2. Clone this repo",id:"2-clone-this-repo",children:[],level:3},{value:"3. Edit configuration",id:"3-edit-configuration",children:[{value:"Visualizer",id:"visualizer",children:[],level:4},{value:"ELN",id:"eln",children:[],level:4},{value:"Printers",id:"printers",children:[],level:4}],level:3},{value:"4. Start the application",id:"4-start-the-application",children:[],level:3}],level:2},{value:"Setting up an Apache server",id:"setting-up-an-apache-server",children:[],level:2},{value:"Firewall/iptables",id:"firewalliptables",children:[],level:2},{value:"Groups",id:"groups",children:[],level:2},{value:"Creating user accounts",id:"creating-user-accounts",children:[],level:2},{value:"User forgot password",id:"user-forgot-password",children:[],level:2},{value:"CouchDB authentication",id:"couchdb-authentication",children:[],level:2},{value:"Google or LDAP authentication",id:"google-or-ldap-authentication",children:[],level:2}],p={toc:d};function u(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-the-eln"},"Deploying the ELN"),(0,r.kt)("h2",{id:"system-requirements"},"System requirements"),(0,r.kt)("p",null,"To host an instance of the ELN no special hardware is needed. In principle, an old computer with 8 GB of RAM and an old CPU can be used.\nThe system itself will not need a lot of space of the hard drive and the required hard drive space will depend on the amount of data you want to store (to get started, even 32 GB are enough to store >6,000 5 MB files, and most chemical files are smaller)."),(0,r.kt)("p",null,"We recommend that you use CentOS or Ubuntu as operating system."),(0,r.kt)("h2",{id:"installing-dependencies"},"Installing dependencies"),(0,r.kt)("h3",{id:"1-install-docker-and-docker-compose-and-some-dependencies"},"1. Install docker and docker-compose and some dependencies"),(0,r.kt)("p",null,"On Red Hat Linux/CentOS 8 you need to run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dnf update -y\ndnf install epel-release -y\ndnf install git -y\n")),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo\ndnf install docker-ce \u2013allowerasing\ncurl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n')),(0,r.kt)("p",null,"In Ubuntu you can use the apt package manager to install dependencies."),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"similar commands or installers")," on other operating systems."),(0,r.kt)("h3",{id:"2-optional-configurations"},"2. Optional configurations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.rootusers.com/how-to-enable-or-disable-selinux-in-centos-rhel-7/"},"On CentOS/Red Hat Linux you might want to permanently disable SE Linux")),(0,r.kt)("li",{parentName:"ul"},"If you are behind a corporate proxy you can follow ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/admin/systemd/#/http-proxy"},"the guide to configure Docker to use the proxy"))),(0,r.kt)("h2",{id:"getting-the-eln-code-and-running-it"},"Getting the ELN code and running it"),(0,r.kt)("h3",{id:"1-start-docker-daemon"},"1. Start docker daemon"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start docker\nsystemctl enable docker\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Don't use docker")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You should not use the docker instruction because it is not aware of dependencies, and it could lead to unexpected results. Please always use docker-compose instead."),(0,r.kt)("p",{parentName:"div"},"In order to check all the running docker images: ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose ps"),". To restart a specific image: ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose restart rest-on-couch")))),(0,r.kt)("h3",{id:"2-clone-this-repo"},"2. Clone this repo"),(0,r.kt)("p",null,"We recommend that you run it from ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/docker"),", but this is not crucial for this system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /usr/local/docker\ncd /usr/local/docker\ncurl -L https://github.com/cheminfo/roc-eln-docker/archive/master.tar.gz | tar xz\nmv roc-eln-docker-master roc-eln-docker\ncd roc-eln-docker\n")),(0,r.kt)("h3",{id:"3-edit-configuration"},"3. Edit configuration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Adjust the options in ",(0,r.kt)("inlineCode",{parentName:"li"},".env"),". Mandatory configuration options have the value ",(0,r.kt)("inlineCode",{parentName:"li"},"REPLACEME")),(0,r.kt)("li",{parentName:"ol"},"Optional: edit ",(0,r.kt)("inlineCode",{parentName:"li"},"flavor-builder-config.json")," to configure home page"),(0,r.kt)("li",{parentName:"ol"},"If LDAP configuration is needed, edit ",(0,r.kt)("inlineCode",{parentName:"li"},"rest-on-couch/home/ldap.js"),".")),(0,r.kt)("p",null,"If you want a default configuration you might just follow the continuous integration instead of the next steps in this section (Visualizer, ELN, Printers). That is, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"ci/install.sh")," script followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up -d"),"."),(0,r.kt)("p",null,"You might want to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ngnix")," proxy directly without additional Apache or Ngnix server. In this case, you'll need to set ",(0,r.kt)("inlineCode",{parentName:"p"},"NGINX_PORT")," to 80 (HTTP) or 443 (HTTPS), modify the docker compose to something like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'services:\n  nginx-proxy:\n    image: docker.io/nginx:1.14-alpine\n    ports:\n      - "${NGINX_PORT}:80" # or  "${NGINX_PORT}:433"\n')),(0,r.kt)("p",null,"and the ",(0,r.kt)("inlineCode",{parentName:"p"},"ngnix")," configuration to read the SSL certificates in case you use SSL."),(0,r.kt)("p",null,"If you do not make these changes, you'll need to set up an Apache or Ngnix server on our system. This is configuration is preferable in case you have more than one serivce running on your server."),(0,r.kt)("h4",{id:"visualizer"},"Visualizer"),(0,r.kt)("p",null,"Copy the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NPellet/visualizer"},"visualizer")," config to ",(0,r.kt)("inlineCode",{parentName:"p"},"rest-on-couch/home/visualizer"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd rest-on-couch/home\ncurl -L https://github.com/cheminfo/roc-visualizer-config/archive/master.tar.gz | tar xz\nmv roc-visualizer-config-master visualizer\n")),(0,r.kt)("h4",{id:"eln"},"ELN"),(0,r.kt)("p",null,"Copy the ELN config to ",(0,r.kt)("inlineCode",{parentName:"p"},"rest-on-couch/home/eln"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd rest-on-couch/home\ncurl -L https://github.com/cheminfo/roc-eln-config/archive/master.tar.gz | tar xz\nmv roc-eln-config-master eln\ncd eln\nnpm i\n")),(0,r.kt)("h4",{id:"printers"},"Printers"),(0,r.kt)("p",null,"Copy the printer config to ",(0,r.kt)("inlineCode",{parentName:"p"},"rest-on-couch/home/printers"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd rest-on-couch/home\ncurl -L https://github.com/cheminfo/roc-printers-config/archive/master.tar.gz | tar xz\nmv roc-printers-config-master printers\n")),(0,r.kt)("h3",{id:"4-start-the-application"},"4. Start the application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /usr/local/docker/roc-eln-docker\ndocker-compose pull\ndocker-compose up -d --build\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Updating the system")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The docker-compose.yml file contains the list of all the docker images required by this project, their version as well as their dependencies. If you want to update the version of an image you should change the name in the docker-compose.yml. After changing this file you should run: ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up -d --build")," (",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," allows to put the process in background)."))),(0,r.kt)("h2",{id:"setting-up-an-apache-server"},"Setting up an Apache server"),(0,r.kt)("p",null,"Under RedHat/CentOs run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yum install httpd -y\nsystemctl enable httpd\n")),(0,r.kt)("p",null,"then, create ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/httpd/conf.d/eln.conf")," with the following content"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<VirtualHost *:80>\n    ServerAdmin     a@b.com\n    ServerName      eln.myinstitution.org\n\n    SetEnvIf Origin "^(.*)$" AccessControlAllowOrigin=$0\n    Header set Access-Control-Allow-Origin %{AccessControlAllowOrigin}e env=AccessControlAllowOrigin\n    Header set Vary Origin\n    Header set Access-Control-Expose-Headers "ETag, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"\n\n    AllowEncodedSlashes NoDecode\n    ProxyPass / http://localhost:4444/ nocanon\n    ProxyPassReverse / http://localhost:4444/\n</VirtualHost>\n')),(0,r.kt)("p",null,"In case you want to use SSL, you can listen on port 433 and add your SSL certificates. To check your configuration, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"apachectl configtest")),(0,r.kt)("p",null,"You can start the server with ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl start httpd"),"."),(0,r.kt)("h2",{id:"firewalliptables"},"Firewall/iptables"),(0,r.kt)("p",null,"If you did not already install iptables, you can do it with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yum install iptables-services -y\nsystemctl start iptables\nsystemctl enable iptables\n")),(0,r.kt)("p",null,"to allow HTTP on port 80 add the following rule to ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/iptables")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-A INPUT -p tcp --dport 80 -m state --state NEW,ESTABLISHED -j ACCEPT\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that docker will install new chains in iptables. This means you may not restart iptables once docker is started ! If you really have to restart iptables service then you will have also to restart docker and docker-compose."))),(0,r.kt)("h2",{id:"groups"},"Groups"),(0,r.kt)("p",null,"Typically, you will want to set up groups in the database to easily manage access to documents. You can do so via the ",(0,r.kt)("inlineCode",{parentName:"p"},"roc/")," endpoint of your deployment.\nFor this, log in as ",(0,r.kt)("inlineCode",{parentName:"p"},"admin@cheminfo.org"),' and select the "ELN" database.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Logging in as admin@cheminfo.org at the roc enpoint",src:n(36097).Z})),(0,r.kt)("p",null,'In the "Groups" section you can then administer groups. To create a group, you only have to enter the name of the group.\n',(0,r.kt)("img",{alt:"Creating a group",src:n(21256).Z})),(0,r.kt)("p",null,"Once you created a group, you can add users and owners by adding the usernames (email addresses) and specifying the rights (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"read, write"),")\n",(0,r.kt)("img",{alt:"Adding a user to a group",src:n(61480).Z})),(0,r.kt)("h2",{id:"creating-user-accounts"},"Creating user accounts"),(0,r.kt)("p",null,"In case you do not use the LDAP or Google authentication, you will need to create user accounts. To do so, you can use the frontend at the ",(0,r.kt)("inlineCode",{parentName:"p"},"roc/")," endpoint. If you want to create many users at once, you might want to use a script that inserts the documents into the ",(0,r.kt)("inlineCode",{parentName:"p"},"_users")," database. In both approaches, you will set some initial password which users can change themselves at the ",(0,r.kt)("inlineCode",{parentName:"p"},"roc/")," endpoint."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create a user account",src:n(8214).Z})),(0,r.kt)("h2",{id:"user-forgot-password"},"User forgot password"),(0,r.kt)("h2",{id:"couchdb-authentication"},"CouchDB authentication"),(0,r.kt)("p",null,"If a user forgot a password, the admin can provide the users with a new password by updating the document of the user in the couchdb ",(0,r.kt)("inlineCode",{parentName:"p"},"_users")," database (for example, this can conveniently be done from the Fauxton interface at the ",(0,r.kt)("inlineCode",{parentName:"p"},"_utils")," endpoint of your database URL). By inserting the field ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," with a new password in the document, the password will be updated, and the user can change the password from the ",(0,r.kt)("inlineCode",{parentName:"p"},"roc/")," endpoint."),(0,r.kt)("h2",{id:"google-or-ldap-authentication"},"Google or LDAP authentication"),(0,r.kt)("p",null,"In case the account uses Google or LDAP authentication you cannot help the user other than by referring to the password reset procedure of the authentication provider (LDAP, Google)."))}u.isMDXComponent=!0},61480:function(e,t,n){t.Z=n.p+"assets/images/adding_user_to_group-d0bb98789ca6812f1a710da64714ef4c.gif"},8214:function(e,t,n){t.Z=n.p+"assets/images/create_a_user_account-5e8c8d35ce8217bcd0bf3b34f15d1ec7.gif"},21256:function(e,t,n){t.Z=n.p+"assets/images/creating_a_group-3c0b0ad283ba19c2ecc68774ae7d762e.gif"},36097:function(e,t,n){t.Z=n.p+"assets/images/logging_in_as_admin-33927cdd99c5875d006319a247fba32f.gif"}}]);