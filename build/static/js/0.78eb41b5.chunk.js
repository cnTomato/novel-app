webpackJsonp([0],{172:function(e,t,A){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return{_i_data:e.chapterReducer}}function i(e){return{actions:Object(s.b)(B,e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=A(0),l=A.n(c),s=A(12),u=A(54),g=A(55),p=A(187),B=A(62),C=A(56),f=A(1),h=A.n(f),w=A(53),E=function(){function e(e,t){for(var A=0;A<t.length;A++){var n=t[A];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,A,n){return A&&e(t.prototype,A),n&&e(t,n),t}}(),d=function(e){function t(e){n(this,t);var A=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return A.state={url:""},A}return o(t,e),E(t,[{key:"componentWillMount",value:function(){var e=this,t=void 0;try{t=this.context.router.route.location.state.chapterurl,console.log(t,"url router")}catch(e){t=w.a.get("current").get("chapterurl").write(),console.log(t,"storage url")}this.setState({url:t},function(){e.props.actions.initPage({url:t})})}},{key:"render",value:function(){var e=this.props,t=e._i_data,A=e.actions;return console.log(t),t.isFetching?l.a.createElement(C.a,null):l.a.createElement(p.a,{data:t.data,actions:A})}}]),t}(c.Component);d.contextTypes={router:h.a.object},t.default=Object(g.d)(Object(u.b)(a,i)(d))},187:function(e,t,A){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=A(0),i=A.n(a),c=A(188),l=(A.n(c),A(1)),s=A.n(l),u=A(53),g=function(){function e(e,t){for(var A=0;A<t.length;A++){var n=t[A];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,A,n){return A&&e(t.prototype,A),n&&e(t,n),t}}(),p=function(e){function t(e){n(this,t);var A=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return A.gocategories=A.gocategories.bind(A),A.goprev=A.goprev.bind(A),A}return o(t,e),g(t,[{key:"goprev",value:function(e){var t=this.props.actions,A=e.currentTarget.attributes["data-url"].value;A.indexOf(".html")&&(u.a.set("current.chapterurl",A).write(),t.initPage({url:A}))}},{key:"gocategories",value:function(e){var t=e.currentTarget.attributes["data-url"].value;this.context.router.history.push({pathname:"/bookInfo",state:{url:t+"/"}})}},{key:"render",value:function(){var e=this.props.data;return i.a.createElement("div",{className:"page chapter"},i.a.createElement("h1",{className:"title"},e.title),i.a.createElement("div",{className:"author"},e.author,"|",i.a.createElement("span",{"data-url":e.categories,onClick:this.gocategories},"\u76ee\u5f55")),i.a.createElement("div",{className:"chapter-content",dangerouslySetInnerHTML:function(){return{__html:e.data?e.data.replace(/\s/gi,""):""}}()}),i.a.createElement("div",{className:"prev","data-url":e.prev,onClick:this.goprev}),i.a.createElement("div",{className:"next","data-url":e.next,onClick:this.goprev}))}}]),t}(a.Component);p.contextTypes={router:s.a.object},t.a=p},188:function(e,t,A){var n=A(189);"string"===typeof n&&(n=[[e.i,n,""]]);var r={hmr:!1};r.transform=void 0;A(166)(n,r);n.locals&&(e.exports=n.locals)},189:function(e,t,A){t=e.exports=A(165)(!0),t.push([e.i,".chapter{position:relative;padding:15px 15px 0 0;line-height:2}.chapter .title{font-size:36px;text-align:center}.chapter .author{font-size:18px;font-weight:400;text-align:center}.chapter-content{padding:30px}.chapter .next,.chapter .prev{position:fixed;left:21.5%;top:0;width:60px;height:100%;-webkit-transition:all .2s linear;-o-transition:all .2s linear;transition:all .2s linear;z-index:9;background:transparent url("+A(190)+") no-repeat scroll 50%;background-size:60px auto}.chapter .next{left:auto;right:0;background:transparent url("+A(191)+") no-repeat scroll 50%;background-size:60px auto}.chapter .next:hover,.chapter .prev:hover{background-color:rgba(0,0,0,.1);-webkit-transition:all .2s linear;-o-transition:all .2s linear;transition:all .2s linear}","",{version:3,sources:["/Users/pan/coding/myself/novel-react/src/assets/styles/chapter.css"],names:[],mappings:"AAAA,SACI,kBAAmB,AACnB,sBAAuB,AACvB,aAAe,CAClB,AAED,gBACI,eAAgB,AAChB,iBAAmB,CACtB,AAED,iBACI,eAAgB,AAChB,gBAAiB,AACjB,iBAAmB,CACtB,AAED,iBACI,YAAc,CACjB,AAED,8BACI,eAAgB,AAChB,WAAY,AACZ,MAAO,AACP,WAAY,AACZ,YAAa,AACb,kCAAmC,AACnC,6BAA8B,AAC9B,0BAA2B,AAC3B,UAAW,AACX,0EAA+E,AAC/E,yBAA2B,CAC9B,AAED,eACI,UAAW,AACX,QAAS,AACT,0EAA+E,AAC/E,yBAA2B,CAC9B,AAED,0CACI,gCAAoC,AACpC,kCAAmC,AACnC,6BAA8B,AAC9B,yBAA2B,CAC9B",file:"chapter.css",sourcesContent:['.chapter {\n    position: relative;\n    padding: 15px 15px 0 0;\n    line-height: 2;\n}\n\n.chapter .title {\n    font-size: 36px;\n    text-align: center;\n}\n\n.chapter .author {\n    font-size: 18px;\n    font-weight: 400;\n    text-align: center;\n}\n\n.chapter-content {\n    padding: 30px;\n}\n\n.chapter .prev, .chapter .next {\n    position: fixed;\n    left: 21.5%;\n    top: 0;\n    width: 60px;\n    height: 100%;\n    -webkit-transition: all .2s linear;\n    -o-transition: all .2s linear;\n    transition: all .2s linear;\n    z-index: 9;\n    background: rgba(0, 0, 0, 0) url("../images/prev.png") no-repeat scroll center;\n    background-size: 60px auto;\n}\n\n.chapter .next {\n    left: auto;\n    right: 0;\n    background: rgba(0, 0, 0, 0) url("../images/next.png") no-repeat scroll center;\n    background-size: 60px auto;\n}\n\n.chapter .prev:hover, .chapter .next:hover {\n    background-color: rgba(0, 0, 0, .1);\n    -webkit-transition: all .2s linear;\n    -o-transition: all .2s linear;\n    transition: all .2s linear;\n}'],sourceRoot:""}])},190:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAEbUlEQVR4Xu3dP48NURjH8d+GRifxAkjEmxD/IhpR6VQ6nUIp0dBoFSoqm4iCRqmj10iERKMREYmEiBcgs2v2zt69c2fuzDnHeZ7nu41m5px7nt/nPmdmdrAlfkJXYCv06lm8ABAcAQAAELwCwZdPBwBA8AoEXz4doByAo5J+lZtu3EwAGFenuUedkPRa0raku3MHS3k+AFJWc/VYbfjNn83PvZoQACAvgOXwAZC33lWNXn34TbXoAHnMmAgfAMHDB0B6AGa++e3S2QLSITAXPh0gePgASAPA5DefLYDwdyrANcB0CKa/+XSA6cE3Z7oInw4wDYGb8AGwOQBX4QNgMwDuwgfAeAAuwwfAOABuwwfAMADX4QNgPQD34QOgH0CI8AGwGkCY8AFwEECo8AGwH0C48AGwABAyfADsAggbPgCChx8dQOhvfrv7RX0hhPD/CYgIgPA7dz/RABD+0rOPSAAIf8WTzygACL/n9x4RABD+mt96egdA+APvPHgGQPjDL7y4/YshhD8ifK9PAgl/ZPgeARD+BuF7A0D4G4bvCQDhTwjfCwDCnxi+BwCEPyN86wAIf2b4lgEQfoLwrQIg/EThWwRA+AnDtwaA8BOHbwkA4WcI3woAws8UvgUAhJ8x/NoBEH7m8GsGQPgFwq8VQBP+G0nHOzWo6v/ZKZRNkWlqeyXspKT3ko4QfpH8q3ol7JikL0vh35d0p0wpYs5SUwc4LOmjpFOdKN5KuijpT8x48q+6JgDNakGQP/N9M9QGoEXwUtIVOkF+DTUCAEH+3PdmqBUACAohqBlAi+C5pKtsB3lE1A6gWfUhSS9AEBcACPJkvzOqhQ7QLr+vE1yS9DtjjVwPbQlAXyd4J+k8CKY5tQYABNNy7j3LIgAQJERgFQAIEiGwDAAECRBYBwCCmQg8AADBDAReALQInkq61qkHt4gDODwBaB9sPQPB+JbgDQAIxmdv7lHwJktrYNMJRlTMYwdol92HoHnH8OeI2oQ4xDOAvu3gg6SzINj17R0ACILdBfQtd9V2QCcI0gHWXROERxBhC+h2BTrBUo+MBoBrAgDsXfw+kXS9U4+Q20HEDtC9JgiPIDKAdjsIjSA6gPAIALB4ILaqE1yQ9MPzM2EALNJtarGM4JOkM54RAGD/1zscAgAc7O+hEABg9QYfBgEA+q/wQiAAwPpLfPcIADB8j+caAQCGAbQPix5JutE53MUtIgDGAWiPeuwNAQA2A9Ac7QoBADYH0Ieg+Ucqvk8b7v+dBYDptV/uBJ8lnbaGAADTAazqBOYQAGAeAPMIADAfgGkEAEgDwCwCAKQDYBIBANICMIcAAOkBNCM+lHSzM3S1dwcAyAPADAIA5ANgAgEA8gJoRn8g6VZnmleSLuefdtwMABhXp7lHtdcEzbXAOUlf5w6Y6nwApKrk8Di3JW1L+jZ8aLkjAFCu1lXOBIAqYyn3oQBQrtZVzgSAKmMp96EAUK7WVc4EgCpjKfehAFCu1lXOBIAqYyn3of4CzjIXkCtjLn4AAAAASUVORK5CYII="},191:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAENElEQVR4Xu3dsarUQBTG8e8iykVsrARfwE5ttRREwVpLEaz1aawttBVEUNRG0Fews/IpxEJQcu8Gs3uT3ZlkJsw552+dTZzz/XImO8nmHol/oStwFHr0DF4ACI4AAAAIXoHgw6cDACB4BYIPv9UOcFHSr+DZrDL81gCcl/RB0jlJDyT9XqUKgQ/SEoA+/LubPL6AoL7MlgBckPRO0v3BsEFQ2UBLALqhgqBy4Lu7bw0ACABwUgE6wUoQWuwA/dBBsAKClgHQCQDAdFDbQOsdgOmgsgArAJgOKkGwBAAEFRBYAwCCwggsAgBBQQRWAYCgEALLAEBQAIF1ACBYiMADABAsQOAFAAhmIvAEAAQzEHgDAIJMBB4BgCADgVcAIEhE4BkACBIQeAcAggMIIgAAwR4EUQCAYAJBJAAgGEEQDQAIdhBEBNAj+CjpzqAeIX+GFhVAl/vx5pfIoRFEBgACibeERe8E0TtAfwkQdjoAwP+rwJAIALD9tSgcAgCcXRwJhQAA40ukYRAAYPpGSQgEANh/u9Q9AgAcfmjCNQIAHAbgesUQAGkA3CIAQDoAlwgAkAfAHQIA5ANwhQAA8wC4QQCA+QBcIADAMgDmEQBgOQDTCABQBoBZBAAoB8AkAgCUBWAOAQDKA5hC8E3Svdb+EBYA6gCYQvBD0o2WEACgHoAeQfeLo1uDw3yXdL3uYdP3DoD0Ws3Z8pqkr5KuDD78WtLjOTur8RkA1Kjq6T7Hwn8p6Wm9Q+bvGQD5NUv5xFj4zyS9SPnwmtsAoHy1zYTfDR0AZQGYCh8AwcMHQDkA5s78fuhMAcsRmA2fDhA8fAAsA2D6zGcKIPyTCnANkA/BxZlPB8gPfmp5t8kVvtTh0QFSKzW+tm86fKaA4OEDIA3ATUmfdm7pmj/zuQZID797oOPyYHM34dMB9iPoznzX4QNgGkCI8AEwDiBM+AA4CyBU+ADYBrAb/l9Jz1t8jCvt+jVtKxaCTus0Fv4TSa/Symh3KwAEDp8pIHj40QGEbfvDCSvqFED4GwURARD+oAVEA0D4O19YIgEg/JFvq1EAEP7EUkUEAIS/Z53KOwDCP7BI6RkA4SesUHsFQPgJ4XtdCbwt6f3gMa7url6IGzuJmW9t5q0DdOF/lnRpM0rCD3QNQPgzWoCXDkD4M8L3cg1A+DPD9wCA8BeEbx3Abvh/Nu/gc/8Y18LMXXwLGAv/kaS3JYsTYV8WLwIJv6BMawAIv2D41q4BCL9w+JYAEH6F8K0AIPxK4VsAQPgVw28dAOFXDr9lAIS/QvitAiD8lcJvEQDhrxh+awCOJf3ceRvXQ0lvVq5JqMO1thLYd4AOA2v7K1BsDUA35A7BVc78FdLnZdHrFLnlo7TYAVqul7v/GwDcRZo3IADk1cvd1gBwF2negACQVy93WwPAXaR5AwJAXr3cbf0Pvgg2kBej+D4AAAAASUVORK5CYII="}});
//# sourceMappingURL=0.78eb41b5.chunk.js.map