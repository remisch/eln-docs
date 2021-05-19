(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[1059],{3905:function(e,r,o){"use strict";o.d(r,{Zo:function(){return c},kt:function(){return u}});var t=o(7294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function A(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?A(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):A(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},A=Object.keys(e);for(t=0;t<A.length;t++)o=A[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(t=0;t<A.length;t++)o=A[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var a=t.createContext({}),l=function(e){var r=t.useContext(a),o=r;return e&&(o="function"==typeof e?e(r):i(i({},r),e)),o},c=function(e){var r=l(e.components);return t.createElement(a.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,A=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=l(o),u=n,m=g["".concat(a,".").concat(u)]||g[u]||p[u]||A;return o?t.createElement(m,i(i({ref:r},c),{},{components:o})):t.createElement(m,i({ref:r},c))}));function u(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var A=o.length,i=new Array(A);i[0]=g;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<A;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}g.displayName="MDXCreateElement"},9455:function(e,r,o){"use strict";o.r(r),o.d(r,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return a},default:function(){return c}});var t=o(2122),n=o(9756),A=(o(7294),o(3905)),i={},s={unversionedId:"spectra/organic_chemistry/nmr/superimpose/README",id:"spectra/organic_chemistry/nmr/superimpose/README",isDocsHomePage:!1,title:"README",description:"NMR superimposition user guide",source:"@site/docs/30_spectra/10_organic_chemistry/nmr/superimpose/README.md",sourceDirName:"30_spectra/10_organic_chemistry/nmr/superimpose",slug:"/spectra/organic_chemistry/nmr/superimpose/README",permalink:"/docs/docs/spectra/organic_chemistry/nmr/superimpose/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/30_spectra/10_organic_chemistry/nmr/superimpose/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Search by NMR chemical shifts",permalink:"/docs/docs/spectra/organic_chemistry/nmr/search/README"},next:{title:"Superimposition",permalink:"/docs/docs/spectra/organic_chemistry/nmr/superimposition"}},a=[{value:"NMR superimposition user guide",id:"nmr-superimposition-user-guide",children:[{value:"Exclusion of some ranges",id:"exclusion-of-some-ranges",children:[]},{value:"Spectra displayer",id:"spectra-displayer",children:[]}]}],l={toc:a};function c(e){var r=e.components,i=(0,n.Z)(e,["components"]);return(0,A.kt)("wrapper",(0,t.Z)({},l,i,{components:r,mdxType:"MDXLayout"}),(0,A.kt)("h2",{id:"nmr-superimposition-user-guide"},"NMR superimposition user guide"),(0,A.kt)("p",null,"This view allows superimposing 1D and 2D spectra.\nClick on a sample from the ",(0,A.kt)("inlineCode",{parentName:"p"},"List of selected samples"),"."),(0,A.kt)("p",null,"The list of NMR spectra available for the sample will appear in the upper module just to the right. Go to the row of your interest and click on either the Red, the Blue or the Green column to have the corresponding spectrum plotted in the chosen color. Choose a different spectrum (it may be from a different sample) and a different color to plot it superimposed over the first one. You may have up to three 1D and three 2D spectra superimposed."),(0,A.kt)("h3",{id:"exclusion-of-some-ranges"},"Exclusion of some ranges"),(0,A.kt)("p",null,"It is possible to exclude some ranges of the spectra in order to compare them more easily. This is for example the case when you are doing NMR spectra in water.\nEnter the ranges to exclude in the corresponding table:"),(0,A.kt)("p",null,(0,A.kt)("img",{src:o(9127).Z})),(0,A.kt)("p",null,"Red lines will appear on the 1D spectrum showing the zones that are excluded."),(0,A.kt)("p",null,(0,A.kt)("img",{src:o(2802).Z})),(0,A.kt)("h3",{id:"spectra-displayer"},"Spectra displayer"),(0,A.kt)("p",null,"For 1D NMR spectra, the following options are available in the spectra displayer :"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"click + drag + release : zoom in the spectrum"),(0,A.kt)("li",{parentName:"ul"},"double click: zoom out = display the full spectra"),(0,A.kt)("li",{parentName:"ul"},"SHIFT + double click : zoom out progressively"),(0,A.kt)("li",{parentName:"ul"},"scroll wheel : vertical scale"),(0,A.kt)("li",{parentName:"ul"},"select a series (click on the corresponding line in the legend) + scroll wheel : vertical scale of a specific series"),(0,A.kt)("li",{parentName:"ul"},"hide a series by clicking on the corresponding eye in the legend")),(0,A.kt)("p",null,"For 2D NMR spectra the following options are available :"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"draw a rectangle to zoom in a specific zone of the spectrum"),(0,A.kt)("li",{parentName:"ul"},"double click: zoom out = display the full spectra"),(0,A.kt)("li",{parentName:"ul"},"SHIFT + double click : zoom out progressively")))}c.isMDXComponent=!0},9127:function(e,r){"use strict";r.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAACgCAYAAABXNhMaAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAGdaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjE5ODwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNjA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K/0T0XAAAH75JREFUeAHtXQlcFEf2/gYQ8AY1ioBRUIMgXognmiis94X7j4nGW+O18UjEZOORoEbXI2o8IzGeEUXxCIln4i14xKwKJgq4BiSoRIMCgpkZosy/quegZ5hpBhx6rip+zXRXV733vq/q9avq7qmRKEgCS4wBxoAWA07UL7itSIEiRZFyX5WnVZIdMAZsgAGJRAL15iBxgMSh+JgPz+n58+coKlI6RNGLIrwoesEd8wuxfcaALTHg4OAARwdHODgSxyCOwh07kmOSr05OL14QRyAO8fzFc9B96ihsdKWmh33aIgPUGZycnOBInMHJ0QkKR+VsQh1JKGYntVPs2bMH3333He7du2eLXDBMjAEtBry9vTFo0CAMHToUTuSPOgUNCPSTJkleXp6COsVvv/2G2bNno2bNmloC2AFjwBYZIP0eS5Ysga+vL4YNGwZnZ2dUcqoERydHDq7kyZMnipEjR2Lbtm3cyb/++gt///23LXLBMDEGOAYqVaqEKlWqoLCwEGPHjsXOnTvh4uyCSs6VQM/R5EDnFJmZmdyEm3oRcwqOF/bPhhmgfZz2dXrTifZ96gP0phN/bu2gPpDL5TZMBYPGGCjJgLrPUx9Q35lVl3JS76gnHepj9skYsDcG1EGC4maOYW+tz/AaxYDGMehTQJYYA9bIgFQqRU5uDnfzqE7tOiaBoHEM+mjcqKRIw9p35uISmdEX8is8vgz/9+OxKNyXn2vcftYxzNrpghUfhRpXXrfUy9bXlceOrYYB+pghOTmZmyPQh3bBwcGoW7fuS9tf7BiqBxulSpQU4ty58xhy9CQ6uAD8KbuLu6fmAUmpcngFpLm/Y/cGYNG/w1CZl2/srjQ3D7t/IvUJhvLUN1YPK2dZDJBHDbh58yZnlLeXN5oHNoerq6tJjCy7Y4C+dNUJbYKao7EeE6Q5UlR21+6eOTk5cHd3V5aW5hAPT4fUtTJ8AvxBcyUSAoYELHoDQEbOEwFaHZyGysqVlTKlOQ9wN/0PwM0H/r5KmVWav4P0b0k1tT0aHW7wD/Dl5UtJIVKKyLhGZFT2IDI8VXap66o+pcRmmU6eK8GgsgJpt5KRK6sMD39/eBYrBrGU/BGM1yhGD6Lfs1g/kZfzIBnpf5BSurqpzemkDnRs1rGBHRYz8OjhI82Bj6+Ppo9oMl9iRzOxoJ3S2I3q0182F+v8G8NjzXXVeRniJnrBf/xxyIj83Ovb4eHjj8nLd2P3vDDSKd/AsSylXuoZEokM3/g0x6brsmL5susY/tomrn5KzCz4+Adhwe4oTO4cAI+JMVy+LPkr+Ly6XUdHFJZPCYEP1ZGulJeydzg8PDzg0XwYog5EoXuQPzxmHePqaeNJwQz/APiTTu8fHo5w1f43KURO7iUM9fBF5ynLEbV8MoJ8PLD8WDpnryx5L3yofA9/zN29G8tD28LHey7SVdyeXfYG/IO6I4rYz+leflZVL0bJy0KVzV4TkSIzvj20bbefevQlQHXKysrihlP3798nI5pzxf2nlH6trq/7WY6IQUQoLqFbxBoseLV4KCWT1cTAGWPxcepBrPLrg6g3UjEo5zNMPtIPZ7OGo4r0Ft7pMxsLjqdiShC9Sq/CiC880TvyDDI+UL2fQkDU9COnKisblzOW5Ln4uhGgWdj8wS5sT3yEvp60+gPMrNsGm/71T0xyUYZPiSwZ47R0ALcOvItur69F6v2PAVcy9nMagbO/rUIAvcp/dBp1/SORsrgfgjRXfao1AJsfPaQ7XDo6sz7GYAvGBEgQE/5/yFpwDI+mBHHnpGm70bBjJ7RPfYROUNqx+mwG3qEKVn2CpXX98eP1TzHGZQ+GrvXD2Yx4pe5VacT+TojqeRcNv5yFgdsTsZkDBpx+tz66bbqOR+8rdajMYB88BugbGuoXAekzCDrXyMjI4B7WBQQEcI7BK17mXY1j0NdwjUsOIN0Lc9v5oZFbcQ15rpw8YneEY+2uuPPdQjTp7YdIBz9s+ukkWhDZ0rvncdF5AfYG14FaU7uIFPz8wAWOOb9zguhrv3RCL1G9FqzKJB9y8kpwbbTr7oAx7y1DbORQBPn7Yk02rVcF0ptKxyrUo6PFkMUYOaUlkvLmwoPcMPD7dCJaVFVZUDsEyzt6EtnE7uKLD6dW/e/q1oEYs/d9/JI1ANWkV7HxUlOs29tOU75ak5GIHRmBQ0l/oEs9Yr3zcvxfYDUVxjoIX/AGfiB4Mn7eCvSPgHfhUzzMo0PDOugx0gGjr6TifNjr+H78e4iJiURoG3/02PoImcQANU9qW9inkoGCZwWIj4/XOMHt27e51zvoWR8fHwSQCP+ySeMYxt+VkqBQ0hm9Rw5AcwPaa3XpjlFkaPTNayMQ1rgqnT5wXwjB0GaoqnX3qxYaewPSPGXHpo7BlVV9gYQTz4XCyqTzVsXI/bfhuWsjVk9vjwsp5FXh0M/w6/734K6SyWEoocML7f0kuHFXhvpK4UpbOOFUnzI66btbnZOwCj1nAycy5sKLOg6xpY7j6/CsSmsVJ992HbHzxkMs7aXGUXxe+UUYosfVC/huIkZnh2gqurgMwOdveSIw5ADiPaPx9erpmHEhhXhEOPYlbUUYjYwsaTFQUFCA8+fPg0YMmlJTU9GjRw/OSapWrcpFEa0K5TzQXCeNHqeqOqFMYAx8YFw3fBM+izhHJPp+eZULa9wEO+YKcriOruqMDw6g/7hdZIyvtJ7aQJMrr4zsbiJOkzzJk6vYFZOGf4yci8OXniAn5zesx3xM3H2L9lcu6dUhuYVvU19DR98qys7Mk63WB4KpBP4HR9B44CKsO7cPwdQRaL2qZHj0fDOSc/jlZbi85xI+7OjLs4N/nppGjuUPgHkJOHz4sGaLnt2PYM3DkV0HUOsfI7Hm8CWCKwcnVj/FkEm7StqkY3sJm238/LNnz7j5g9op6PcpOnTogGrVqsHNzY17AbCsnCh7Tsn/ZXcMSr7iMQpzZZDJdDZyLu3ADEw4PABXt8/F2qOxSJ3XAxuu5qBKYD+M+nsFInbRjkw7Tg62TJqEx8FBqEKOuc4jqQJ3LwmOJRaX2drl30AaKV+nCvZO7YnoWzmaDoPqwGOVg9L6JXXIcGpxN5xu9h7a1qY61XqU+0o7SE3OHl6e7BbGBo5C6PoLGBlIHEpzPhAfjHLAkIhojYNnnfoCU3/qjF5ta+uXT5GR+oGhU8n95C44nKa6sZBzC//qMRG/u9ZH3vpJmLhLfQEhOFCDAIOemwI8GzU22UfeX8/+wtmzZzWRgjpF586d4eXlxWufsnNR0iWUOcVDKUK0cUmCV5CKfgH1SxTv8skqJHz2DTZc+wNNqLzaPZB84CP494pA6JPtWJe8H2P8u8Btqmr9hdAVSJ4WCMnNS4CvsgMN2RCLFf494DbdDyhKwehPJiLkQmUCPhBrD8xDUIgvpqk1D96A9An8+l7FOlT10ewjXDw7ijgfkU/nxnIleUoRSsxqB1GLlaYnIg7ExqkhxFZ1LhC+4SJ2rPsVKwY3h6/bNDQjzpjiGIIt8fvRjiiQUnEqHErJFBOJgDQikbnIxS030LltfUiakS/FkKFg6OIDmNeuNqQx+3AwiGBW8+I4GKfuKG0u1m6/e/QdJnqnid6yp3cV6SQ7JCQEnp4VN9aUPHz4UEHHaAkJCaIxT59L0KR+NqFPMVeGEKF1s4grKMWTJ3TyWots+moq84zRYbi2EWcIBopCCIN+KaQeB59g07FfSh5Y0cyyy9SvyVZyqWMcPXIUT/Ofcl9H7dKli8mcgso6ceIEXFxcuE39gFATMRyMjhgvT3dV8iWR0pLhMlVQp/bL1C9Ns5HnCYaqRhbVLkbqGTC/au3a2kXZkZIB0je7h3bHjRs30KhRI3jWLzlaMTVVGscwtWAmjzFgSgaqkTtOnTt1MqVIQVmaybdgKXaSMWBnDDDHsLMGZ3CNY4A5hnE8sVJ2xgBzDDtrcAbXOAY0k++jx44ZV4OVYgzYAQMax1Cvp2MHmBlExkCpDGgcIywsrNTCpi5w/Phx9O7d29RizSqPYTIr/WVSTtvKUGJzDEPMsHy7ZoA5hl03PwNviAHmGIaYYfl2zQBzDLtufgbeEAPMMQwxw/LtmgHmGHbd/Ay8IQaYYxhihuXbNQOa5xjWykJhWhzCRq9EjRrk66Bcegq0nIODS/pwq5lYHS55GmaHjcaNmko8TwkcCo1+ztlxEH186RotVpyyE9B18GzM3xOPMLI+hFCSZ6cg6SlZzMK3OvKvbEEs3sL49uT7zCIkq3cMyB+j4ZvrET2jlQh0iaDCxRdLEuI5RYXJWzDux2DbwUZQJR0jywiRtO14EsLGC7eZ5M8LWHAwGEfmtkL1Zr3Rm37JX6RkG0OpaiWvooVpxxB3KgFbxnbF2NgU5CfFYUSXrujXj2zTtiBNThgmV+foNdFYPG0EunYl5RbH4VTcYowYQY/7IfZKtkjNYJyaJGJbP2IXxTBtS4LWusHGSTB3qTSs3lQPe47sQKXtq5VtoDIpKS5SC1v+/QRMmrAdT4/PwbQ1CcjPvoEb2alYM20N7mtg5CNu9mIiR44rO2dzbUjbbc2xNE2J8u7YgGO44O63MYiNjeW26C3RuHKf9vrHWDl/Nmq/vwdf9c5Gn6n7MT0uHkeOxGNdnzsYNeUY6ViFiNn3FTp+vIUs4HUSg+6sROT1joiOjkb8tzOxY+Fxi+l8+VcW473NHtgRf4RgOIm+ibMxOe7lO0B5O0556mWf2oG/x4yGVw1fTOn1CDt+Vl54lNhe1WALOzMbW7NbYe2qN8loIBLrZnQB8h/jQbYn2rrvx/Yr+Ur1xHlWZDZFjaQVmHnldZwki7DFx+8AFo9GHNcHymOlso4NOAZQk6x32zK4Jfz8/NAiuAW86pAIQq4idIgV3soL8pRzaDppHtqrfjrBt+8cDHkYixRSpu5rEejiRSOOC5qFNsXYYaQRaKpeB3U511Eemvt/8o/JmLxiBJQQXNBn8Ur8vfmixThu6fzk43jkaTT2lIOuL+sS1BKnlp7m7NfFFr7lJCa3qg6X6tWI2OLRAN1rPyYCx6ISOHUpx3chbHpvpF26hEZNyDAt4RROJaShPmnC/ReK40rptpUsYf1zDEKte+tgNPNtpoUuv9AFvTv5cnmk/6Ma+bna4uQMSrm8UI4moT7F1JMVNgvk5J8mp7hRiuuaZ4+sLkp+GIWnm6xqQRBwS5pajpU8+3R3ydU9StIEYx//F/TdPReXJmiUuw6n77+F6rrYCKr8py50da0Sydk3DENuTyeT8pY4fNAdo8fXQPaPCri/RuYfhCA6C6nefwk+9CllZl9CsnaGTUQM0pu1Uekc1fENwvV1X2vGpvlJ0dgmCUNr2tEEqwqe1NFSsYc+HRtg7RfKKyzVlBQ9FzmDQ0Scjr4cvitf/QehS9Zg/IjxGD9+PJnHjceyOa2xePsV6GI7Nrkv1qWQ23CFBXqUVsebc17F1GFDceefI+kyXvAi0Sctyxnt27fnNvy4BIfv0wtc+ZMNRAxA+cvMuiTwLq9effDN7Mt4uyuZVJMwG59QCav2RMEZSbqVuEiizHRBNTfzX4vV2LzI8G/u5aEI63cUXesmIl4yCXu3akfJEmAsJYPc5Nh4pjU+WagdA7zC3kWjJZshn/UfFbZYtMEdXCe324+1rwHnp93g/t5UjChYgtX9i9vTK2wYGv7nNN7q3Z5DSLkZPbYvuoxoTeon4noDMtx6ydu6ZllwTd1e4n93QU6nHtzCWmobTP1Z4ZgIABrH6AJhYqUKx6QGYgAbh1ddRuBTLs8ngzAynDKSG4pr0aJFwguuCeizoVN0tTkrh0MAWDsEgy1gAJuxeF1cyITdoPCynbCNOUbZMLPSjIFSGWCOUSpFrIA9MsAcwx5bnWEulQHmGKVSxArYIwPMMeyx1RnmUhlgjlEqRayAPTKgecBH7+maI5lLb0ViZZgqkl1xZGscg61EKA7hTIt1MKBxjPDwcNEtvn79Otq0aSO63opUyDBVJLumlU3bylAy6xzjzp07huyy2nyGyXqaTqitNO9KJSWVfKHOeiAySxkD5WOgVatWet+VMmvE2LdvX/nQWHAthsmCG0fHNKG2YhFDhyx2aF8MsIghUnsLXYVEMsHkamwREyVJCBeLGCbvRkygNTHAIoZIrSV0FRLJBJOrsUVMlCQhXCximLwbMYHWxACLGCK1ltBVSCQTTK7GFjFRkoRwlTti5Ofnc9+XpZ/OZNmSiIgINGjQwOSNwgQyBiqSAZNFjGcFBXjy+Ak2bNgAd3d3jBs3Dm3btsXSpUu5/Kd09WEjk5DHUhEZ8RvRs11Pbpu1X/8DyIwTGzFs2DBMmjSJfA7ArP2pRmqvmGK6mKwRgy4zuph0z6uP0w4tRq2JvXD1L3WOZX8K4nr48KGiZcuWCmPTZ599pmjSpImicePGereJEycaK0q43N19RP5ERUoOKSa9q1jVtrFiwXl6oJ0OTR2q2JeSpcjJyVFkZd1VZOVItQuY88gWMBjJ36/RUxXuExwUbhMWKZ4YWccSitG+T30gNzdXIZUW950yP/meN28e6Ju4vr6+3NanTx/UqVMHrVu35i4PkZ9GGn2ZEPLYpINfo+/GZfBzI+JcG2LKrgjs+PKkjuxc/O+uF1rUc0VengxuHg3h4eaqU0bcQz4ma8WgyxgfEwqf4OTGlTiZLNUUu7lrGrqe+5Icd8G+D2fCXXPGsne0cOmYWmbHUNdv3rw56DZ69Gh4e3lzK02rzxn7OWTIEINFnz6thddfK+7krg2DEHAnE7n8GrJUbEiOQ78pi7Bj5QQENmmHQxkyfgnR9/mYrBWDLml8TDe/GYa3rn+Elef+xxW7uWOCyimaYdMHx/GPppV1q1vsMR+XrpHldgxdQeU55nusLCMeG7/YiI0bv8D++AzkZddAvZrFjqFXvswD23adwp2YFfh07SH8emQK3n9zN8zpGnxM1opBl2s+JrKENnf6cnoCTu4gkeKC8vcu1kz6L970tx6noCC0cWmjNqtj8D3WtearCAoOQlBQZ7RoUQ8NfO/izC+8+PAwE1m1akLXVeo2rKdB5OrXFo2RZ1bH4GOyVgwaQlU7fEzqc5KcaXjrAh0+ActH/omRba3LKajd+nDRfJrM6hhaHuvWEB26dkCHDh3IvMIVDduGYMfyk5pOHr99GeqPDuMcI5X8DgIdMckyDqJv122a4dUf53fiN48GJZxHCVWc/3xMhjHkIv5EPGe3JWLQZYqPCeTCw08L3v4T73atxc+ymn1tXDpml/WuFL2TQO79ajbyS0SKgIAARbt27bi7VI+zH5voZoNUcWhmT0Xj4KGKif0bK3z7b1Eo70lJFV+SO2ILLnO3qxTnV/UneoMV/XsEKxr3jFCkFN9YMJEdLyPGAAZpoiKY2HyZs1Vq4Rh08D+6rJg2wZHcgXpdse+/pmprHR0iHhq6K1WuB3xRUVE4dOiQjosBxDkwf/78EvmGMqjHCoUzrp5MxkUNV1fdQRRPKilDB11uQmV4xStyVy8mK8Ogy49eTLqFrPCY4jK0qHO5HMMKOWAmMwb0MmCyJ996pZczk3qsrSWGyXpaVKitWMSwnnZkllYAAyxiVACp+kQKXYX0lbeGPFvERHkXwqVZV4qusSO0nEhFNaC59FYUHiqXYapIdsWRrXEMcssVdBMz/fLLL+SBXpCYKkXRlZt3Db6Nm4iiSwwlybf+JHhgU5gobxSXoaRxDEMFKjI/PT2dE09uW1ekGlFlSyQSUfWJoSwzMw/+Aa+IoUpUHRSXoWTWJ98DBw40ZBfLtyAGevaynejHp1UIl1kd4/vvv+fbyfYtlIEff7C9pVQp1UK4zOoYLGJYqCfomCV0ZdUpalWHQrjM6hgsYlhHPxK6sloHAv1WCuEyq2OwiKG/wSwtV+jKamm2lsUeIVxmdQwWMcrSjOYrK3RlNZ9VL69ZCJdZHYNFjJdvXDEkCF1ZxdBfUTqEcJn1OQY/Ymy9pP9ZxrhOtvdcoKIauqLk0iurUCeqKL0VLVcoYpTbMehCa8uWLYN6wbUZ02fAu4F3mbCwiFEmusxW2BadgpJJcS1apJ/WMjvGs4JnkBfKsXXrVri5uWHw4MFITU3FipVkQYJPP4WTkxNq1KihX5tOLj9i3DvyFiIX71eWcPCHf2sgv8FcDIsbDuv7NrESRuaZvfjoq1vwqF9FhfwveHYbhw8HNdRiIvPMt1i4KxHVqldBQX426g+YioU6ZbQqiHxgbMRIP7EVoT9cw7cL16O1GrLItpZFnVDE0Lx2fuXKFaNk0hUHo6OjYeg1ju7du2P9+vVGyaKF6DfzqKyoH27j0SO6VhFxg+xYRM78BANX/Y7vPrCuZT/pKyH0XSmaZHkF+FMmhzPZd3UtwPzus+C5YRs+7FSNO6/+98O/IyGfMB1vvOICmayAFHYnK6S4qE9bxWfyweXoezGW2PovXFsxzmrWlnq96xjT/NTYxx9/zC245uPjA7r16tVLueBaK3KJJ2nOnDncpzH/+BHDuUZTeDdpSbamyD4XCYw9ikEdyzY0M0anmGVca1ZDg3q1UY9sfx7aij8iVpRwCqAAaRmvIIA4xdM8OWrW87A4p9C6shbm4eyOaJz9X/EiRcVOEYRt771jNU6hhUunY5T7rpT6bdzhw4fDy9MLnUM664gu/VDfHKPwzpdYdzgMC0b1Ll2AtZTI+xmTVgUgarj2EIozX/Y7Nt8+h7cjtmPPhqUICRqHHzLlFoWMP8dI3jcXY39ZjfUXMzkbk2MXqSKFD1ZPWotuPgLfzbcoVMo5hiGTyjzHMCSoPPn8iKGun/jldHjPvAZv6xpJqM3X+3lm8Ub03rxWtVSZThF5Laz/eh06tfXgTkybcBgho0/gjdP9zboMEN9K7TmGchh4NTMRZ2O/xdgrcVzRpaN2YlBT63EKanSFRAw+ceXdLxEx5D/h6OUiDAlrWV6RFlgvA5tOBmJokPa8gm/oK97Fq726NmkGH5AbHPwCZt7nRwyNKbnLiFPQOQUw/81TeLuldTkFtVsvLnqCpHIPpZTVX+6/bsQozLyKTOfP0Mi4m1ovp1yk2rJfr+FRj1Bo30IowKUzidzSZbJMMozqc1SzjNnDS8eRXrcuLClgal9Zyc0BXpodfgqjOyqX7eRlW8WuNi5tk8s1lKI/FHPu3DlO0rVr1/DkyRNk3lOOOQXXf9LWjRIRo5DclWpQn7uLo1PUig8LUbcRvS/FS7I/MC9iLT6/uBVBgeFYP2EeQoMO4TUf4DaCsHdXd4sZRlGr+VdW/96TyaLOPyEWbbB61OcY1NI6nUKNy2TPMajACe9OwJGjR+gul6pXr8590jtUtWoZv1yjbsRwDojAlp0qoTby4Rr4NmICdcC4NsGpa8rFkEFiQ6cpn+PqWDkXNWq6WlKsUNqtNceoHYhlK37GMh1I1ngoFDHK/BzD1ASon2PYyish/OcYpuaKyTM9A4aeY5RrKGUq8/gRg70TZSpWTS9HK2KYXrzZJApFDLNOvkvMMcxGEVMsxAB/jiFUztrOCeEyq2PwI4a1kWpP9gpdWa2ZByFcmqEUXeNJvZyN2GBtbckZul6R0NIsYvNrCn22iEmIF41jBAcHg25iJrpin6GXEcW0w5S6KKY2bdqgY0dTSjWvLFvERBmluAwlsw6lzLEkqCEiTJXPMJmKyYqXI9RWmtu1SUlJFW8J08AYsDAG2GrnIjWI0AraIplgcjW2iImSJISLRQyTdyMm0JoYYBFDpNYSugqJZILJ1dgiJkqSEC4WMUzejZhAa2KARQyRWkvoKiSSCSZXY4uYKElCuFjEMHk3YgKtiQEWMURqLaGrkEgmmFyNLWKiJAnhYhHD5N2ICbQmBljEEKm1hK5CIplgcjW2iImSJISLRQyTdyMm0JoYYBFDpNYSugqJZILJ1dgiJkqSEC4WMUzejZhAa2KARQyRWkvoKiSSCSZXY4uYKElCuFjEMHk3YgKtiQEWMURqLaGrkEgmmFyNLWKiJAnhYhHD5N2ICbQmBljEEKm1hK5CIplgcjW2iImSJISLRQyTdyMm0JoYYBFDpNYSugqJZILJ1dgiJkqSEC4WMUzejZhAa2KARQyRWkvoKiSSCSZXY4uYKElCuDTrStE1doSWEzE52yqB5tJbUXioXIapItkVRzYbSonDM9NioQxY5FDKQrliZjEGzPtTY4x/xoClMmDWJTotlRRmF2OAOQbrA4wBPQwwx9BDCstiDDDHYH2AMaCHAeYYekhhWYwB5hisDzAG9DDAHEMPKSyLMcAcg/UBxoAeBphj6CGFZTEGmGOwPsAY0MMAcww9pLAsxgBzDNYH7JKB0n5GmzmGXXYL+wYdFxfH/Ra7EAvMMYTYYedsjgHqFPPnz+c2IXDMMYTYYedsigG+U1DnEErMMYTYYedshgFdp2COYTNNy4CUlwF9TqHPMSQSiUaFA/9Ak8t2GAM2woAhp0hMTNQgpD7g4OAAvi84ODk5oUGDBkhNTdUUZDuMAVthgEaGBQsWgP+pdgra52nfpz7g6OCo5RiSvLw8xZ49e0ALT58+HX5+frbCCcPBGDDIAHWKtWvXgq4SMmzYMDg7O6OSUyU4OjlydSTPCp4pnr94jpiYGBw6dAj37t0zKIydYAzYCgPe3t4YMGAA5xROjiRiEIeoVKkSN6SiGCVSqVRR9KII1DlevHiB58+fo7SngrZCDsNhnwzQuQQ3fHJ0BHUKB0cHONJ9MqRSzzOcaAY3+SAnqYPQk0VFRfbJGENtFwzQiTadU1CH4Po+PVb5gZoACXECEiAUUBQpUKQo4qIFd0zyWGIM2BoD1BHUm4OEOIZD8TEfq4TzCn4O22cMMAbw/+TGqAz6SiTSAAAAAElFTkSuQmCC"},2802:function(e,r){"use strict";r.Z="data:image/png;base64,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"}}]);