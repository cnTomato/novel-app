webpackJsonp([2],{170:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{_i_data:e.resultReducer}}function s(e){return{actions:Object(u.b)(h,e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=r(0),l=r.n(c),u=r(12),p=r(54),f=r(55),d=r(183),h=r(60),A=r(56),b=r(1),v=r.n(b),y=r(53),m=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),g=function(e){function t(e){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={text:""},r}return a(t,e),m(t,[{key:"componentWillMount",value:function(){var e=this,t=void 0;try{t=this.context.router.route.location.state.text}catch(e){t=y.a.get("current").get("text").write()}this.setState({text:t},function(){e.props.actions.initPage({text:t})})}},{key:"render",value:function(){var e=this.props._i_data;return e.isFetching?l.a.createElement(A.a,null):l.a.createElement(d.a,{data:e.data})}}]),t}(c.Component);g.contextTypes={router:v.a.object},t.default=Object(f.d)(Object(p.b)(i,s)(g))},173:function(e,t,r){"use strict";function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e,t){return e(t={exports:{}},t.exports),t.exports}r.d(t,"a",function(){return v});var a,i=r(0),s=r.n(i),c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u=o(function(e,t){function r(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{threshold:0},n=arguments[3],o=r.root,c=r.rootMargin,l=r.threshold||0;if(e&&t){var u=c?l.toString()+"_"+c:""+l.toString();o&&(u=n?n+"_"+u:null);var p=u?s.get(u):null;p||(p=new IntersectionObserver(a,r),u&&s.set(u,p));var f={callback:t,visible:!1,options:r,observerId:u,observer:u?void 0:p};return i.set(e,f),p.observe(e),f}}function n(e){if(e){var t=i.get(e);if(t){var r=t.observerId,n=t.observer,o=r?s.get(r):n;o&&o.unobserve(e);var a=!1;r&&i.forEach(function(t,n){t&&t.observerId===r&&n!==e&&(a=!0)}),o&&!a&&(o.disconnect(),s.delete(r)),i.delete(e)}}}function o(){s.forEach(function(e){e.disconnect()}),s.clear(),i.clear()}function a(e){e.forEach(function(e){var t=e.isIntersecting,r=e.intersectionRatio,n=i.get(e.target);if(n&&r>=0){var o=n.options,a=!1;Array.isArray(o.threshold)?a=o.threshold.some(function(e){return n.visible?r>e:r>=e}):void 0!==o.threshold&&(a=n.visible?r>o.threshold:r>=o.threshold),void 0!==t&&(a=a&&t),n.callback&&n.callback(a)}})}Object.defineProperty(t,"__esModule",{value:!0}),t.observe=r,t.unobserve=n,t.destroy=o;var i=new Map,s=new Map;t.default={observe:r,unobserve:n,destroy:o}}),p=n(u),f={default:p,__moduleExports:u,observe:u.observe,unobserve:u.unobserve,destroy:u.destroy},d=f&&p||f,h=n(o(function(e,t){function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(s.a),i=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={inView:!1},o.node=null,o.handleNode=function(e){o.node&&(0,d.unobserve)(o.node),o.node=e,o.observeNode(),o.props.innerRef&&o.props.innerRef(e)},o.handleChange=function(e){o.setState({inView:e}),o.props.onChange&&o.props.onChange(e)},r(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"componentDidUpdate",value:function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||((0,d.unobserve)(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&((0,d.unobserve)(this.node),this.node=null)}},{key:"componentWillUnmount",value:function(){this.node&&((0,d.unobserve)(this.node),this.node=null)}},{key:"observeNode",value:function(){if(this.node){var e=this.props;(0,d.observe)(this.node,this.handleChange,{threshold:e.threshold,root:e.root,rootMargin:e.rootMargin},e.rootId)}}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.render,o=e.tag,i=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["children","render","tag","innerRef","triggerOnce","threshold","root","rootId","rootMargin"]),s=this.state.inView;return a.createElement(o,n({},i,{ref:this.handleNode}),"function"==typeof r?r(s):null,"function"==typeof t?t(s):t)}}]),t}();i.defaultProps={tag:"div",threshold:0,triggerOnce:!1},t.default=i}));!function(e){e.NotAsked="NotAsked",e.Loading="Loading",e.LoadSuccess="LoadSuccess",e.LoadError="LoadError"}(a||(a={}));var A=function(e){function t(t){var r=e.call(this,t)||this;return r.state={hasBeenInView:!1,imageState:a.NotAsked},r.renderInner=r.renderInner.bind(r),r.renderLazy=r.renderLazy.bind(r),r.onInView=r.onInView.bind(r),r.onLoadSuccess=r.onLoadSuccess.bind(r),r.onLoadError=r.onLoadError.bind(r),r}return function(e,t){function r(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.onInView=function(e){!0===e&&(this.props.src?(this.setState(function(e,t){return l({},e,{imageState:a.Loading})}),b({src:this.props.src,srcSet:this.props.srcSet,alt:this.props.alt}).then(this.onLoadSuccess).catch(this.onLoadError)):this.setState(function(e,t){return l({},e,{imageState:a.LoadSuccess})}))},t.prototype.onLoadSuccess=function(){this.setState(function(e,t){return l({},e,{imageState:a.LoadSuccess})})},t.prototype.onLoadError=function(){this.setState(function(e,t){return l({},e,{imageState:a.LoadError})})},t.prototype.render=function(){return this.props.loadEagerly?this.renderInner(this.props,{imageState:a.LoadSuccess}):this.renderLazy(this.props,this.state)},t.prototype.renderLazy=function(e,t){return s.a.createElement(h,l({rootMargin:"50px 0px",threshold:.01},e.observerProps,{onChange:this.onInView,triggerOnce:!0}),this.renderInner(e,t))},t.prototype.renderInner=function(e,t){var r=e.src,n=e.srcSet,o=e.alt,a=e.render,i=e.children,c=t.imageState;return s.a.createElement(s.a.Fragment,null,"function"==typeof a?a({src:r,srcSet:n,alt:o,imageState:c}):"function"==typeof i?i({src:r,srcSet:n,alt:o,imageState:c}):null)},t.displayName="LazyImageFull",t}(s.a.Component),b=function(e){var t=e.src,r=e.srcSet,n=e.alt;return new Promise(function(e,o){var a=new Image;r&&(a.srcset=r),n&&(a.alt=n),a.src=t,a.onload=e,a.onerror=o})},v=function(e){var t=e.actual,r=e.placeholder,n=e.loading,o=e.error,i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r}(e,["actual","placeholder","loading","error"]);return s.a.createElement(A,l({},i),function(e){var i=e.src,s=e.srcSet,c=e.alt;switch(e.imageState){case a.NotAsked:return!!r&&r({alt:c});case a.Loading:return n?n():!!r&&r({alt:c});case a.LoadSuccess:return t({src:i,alt:c,srcSet:s});case a.LoadError:return o?o():t({src:i,alt:c,srcSet:s})}})};v.displayName="LazyImage"},174:function(e,t,r){var n=r(175);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(166)(n,o);n.locals&&(e.exports=n.locals)},175:function(e,t,r){t=e.exports=r(165)(!0),t.push([e.i,".sort-tab-header{padding:15px 0;border-bottom:1px solid #f5f5f5;line-height:2}.sort-sex,.sort-type{display:-ms-flexbox;display:flex}.sort-tab-header span{display:block;padding-right:30px}.sort-tab-header span.active,.sort-tab-header span:hover{color:#f87562;cursor:pointer;-webkit-transition:all .2s linear;-o-transition:all .2s linear;transition:all .2s linear}.sort .items{display:-ms-flexbox;display:flex;padding:15px 0;border-bottom:1px solid #f5f5f5}.sort .items:last-child{border-bottom:none}.sort .item-img,.sort .item-img div{width:90px}.sort .item-content{padding-left:15px;padding-right:15px;width:100%;font-size:14px}.sort .item-content span{color:#f87562}.sort .title{margin-bottom:5px;font-size:16px;font-weight:700}.sort .item-content p:last-child{width:90%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}","",{version:3,sources:["/Users/pan/coding/myself/novel-react/src/assets/styles/sort.css"],names:[],mappings:"AAAA,iBACI,eAAgB,AAChB,gCAAiC,AACjC,aAAe,CAClB,AAED,qBACI,oBAAqB,AACrB,YAAc,CACjB,AAED,sBACI,cAAe,AACf,kBAAoB,CACvB,AAED,yDACI,cAAe,AACf,eAAgB,AAChB,kCAAmC,AACnC,6BAA8B,AAC9B,yBAA2B,CAC9B,AAED,aACI,oBAAqB,AACrB,aAAc,AACd,eAAgB,AAChB,+BAAiC,CACpC,AAED,wBACI,kBAAoB,CACvB,AAED,oCACI,UAAY,CACf,AAED,oBACI,kBAAmB,AACnB,mBAAoB,AACpB,WAAY,AACZ,cAAgB,CACnB,AAED,yBACI,aAAe,CAClB,AAED,aACI,kBAAmB,AACnB,eAAgB,AAChB,eAAkB,CACrB,AAED,iCACI,UAAW,AACX,gBAAiB,AACjB,0BAA2B,AACxB,uBAAwB,AAC3B,kBAAoB,CACvB",file:"sort.css",sourcesContent:[".sort-tab-header {\n    padding: 15px 0;\n    border-bottom: 1px solid #f5f5f5;\n    line-height: 2;\n}\n\n.sort-type, .sort-sex {\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.sort-tab-header span {\n    display: block;\n    padding-right: 30px;\n}\n\n.sort-tab-header span:hover, .sort-tab-header span.active {\n    color: #f87562;\n    cursor: pointer;\n    -webkit-transition: all .2s linear;\n    -o-transition: all .2s linear;\n    transition: all .2s linear;\n}\n\n.sort .items {\n    display: -ms-flexbox;\n    display: flex;\n    padding: 15px 0;\n    border-bottom: 1px solid #f5f5f5;\n}\n\n.sort .items:last-child {\n    border-bottom: none;\n}\n\n.sort .item-img, .sort .item-img div {\n    width: 90px;\n}\n\n.sort .item-content {\n    padding-left: 15px;\n    padding-right: 15px;\n    width: 100%;\n    font-size: 14px;\n}\n\n.sort .item-content span {\n    color: #f87562;\n}\n\n.sort .title {\n    margin-bottom: 5px;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n.sort .item-content p:last-child {\n    width: 90%;\n    overflow: hidden;\n    -o-text-overflow: ellipsis;\n       text-overflow: ellipsis;\n    white-space: nowrap;\n}"],sourceRoot:""}])},183:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=r(173),l=r(174),u=(r.n(l),r(1)),p=r.n(u),f=r(53),d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),h=function(e){function t(e){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.search=r.search.bind(r),r}return a(t,e),d(t,[{key:"search",value:function(e){var t=e.currentTarget.attributes["data-url"].value;f.a.set("current.url",t).write(),this.context.router.history.push({pathname:"/bookInfo",state:{url:t}})}},{key:"render",value:function(){var e=this,t=this.props.data;return s.a.createElement("div",{className:"page sort"},t.map(function(t,r){return s.a.createElement("div",{key:r,className:"items",onClick:e.search,"data-url":t.url},s.a.createElement("div",{className:"item-img"},s.a.createElement(c.a,{src:t.imgUrl,alt:t.title,placeholder:function(e){var t=e.alt;return s.a.createElement("img",{src:"http://temp.im/754x754",alt:t})},actual:function(e){var t=e.src,r=e.alt;e.srcSet;return s.a.createElement("img",{src:t,alt:r})}})),s.a.createElement("div",{className:"item-content"},s.a.createElement("h5",{className:"title"},t.title),s.a.createElement("p",{className:"author"},"\u4f5c\u8005\uff1a"+t.author),s.a.createElement("p",{className:"major"},"\u7c7b\u578b\uff1a"+t.type),s.a.createElement("p",{className:"shortIntro"},"\u7b80\u4ecb\uff1a"+t.desc)))}))}}]),t}(i.Component);h.contextTypes={router:p.a.object},t.a=h}});
//# sourceMappingURL=2.6e2443d0.chunk.js.map