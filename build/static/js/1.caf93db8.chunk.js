webpackJsonp([1],{169:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{_i_data:e.sortReducer}}function s(e){return{actions:Object(p.b)(h,e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),l=n.n(c),p=n(12),d=n(54),u=n(55),f=n(182),h=n(59),b=n(56),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),A=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.changeSex=n.changeSex.bind(n),n.changeType=n.changeType.bind(n),n.loadData=n.loadData.bind(n),n.state={sex:"male",type:"hot",id:"54d42d92321052167dfb75e3"},n}return a(t,e),y(t,[{key:"changeSex",value:function(e){var t=this,n=e.currentTarget.attributes.datatype.value;Array.prototype.filter.call(e.currentTarget.parentNode.children,function(t){t!==e&&t.classList.remove("active"),e.currentTarget.classList.add("active")}),this.setState({sex:n},function(){t.loadData(t.state.sex,t.state.type)})}},{key:"changeType",value:function(e){var t=this,n=e.currentTarget.attributes.datatype.value;Array.prototype.filter.call(e.currentTarget.parentNode.children,function(t){t!==e&&t.classList.remove("active"),e.currentTarget.classList.add("active")}),this.setState({type:n},function(){t.loadData(t.state.sex,t.state.type)})}},{key:"loadData",value:function(e,t){if("male"===e)switch(t){case"hot":this.props.actions.initPage({id:"54d42d92321052167dfb75e3"});break;case"best":this.props.actions.initPage({id:"5a6844aafc84c2b8efaa6b6e"});break;case"hotsearch":this.props.actions.initPage({id:"5a6844f8fc84c2b8efaa8bc5"});break;case"potential":this.props.actions.initPage({id:"54d42e72d9de23382e6877fb"});break;case"keep":this.props.actions.initPage({id:"564547c694f1c6a144ec979b"});break;case"finish":this.props.actions.initPage({id:"564eb878efe5b8e745508fde"})}else switch(t){case"hot":this.props.actions.initPage({id:"54d43437d47d13ff21cad58b"});break;case"best":this.props.actions.initPage({id:"5a684551fc84c2b8efaab179"});break;case"hotsearch":this.props.actions.initPage({id:"5a684515fc84c2b8efaa9875"});break;case"potential":this.props.actions.initPage({id:"54d43709fd6ec9ae04184aa5"});break;case"keep":this.props.actions.initPage({id:"5645482405b052fe70aeb1b5"});break;case"finish":this.props.actions.initPage({id:"564eb8a9cf77e9b25056162d"})}}},{key:"componentWillMount",value:function(){this.props.actions.initPage({id:this.state.id})}},{key:"render",value:function(){var e=this.props._i_data;return console.log(e),e.isFetching?l.a.createElement(b.a,null):l.a.createElement("div",{className:"sort-tab"},l.a.createElement("div",{className:"sort-tab-header"},l.a.createElement("div",{className:"sort-type",ref:"sortType"},l.a.createElement("span",{className:"active",datatype:"hot",onClick:this.changeType},"\u6700\u70ed\u699c"),l.a.createElement("span",{datatype:"best",onClick:this.changeType},"\u597d\u8bc4\u699c"),l.a.createElement("span",{datatype:"hotsearch",onClick:this.changeType},"\u70ed\u641c\u699c"),l.a.createElement("span",{datatype:"potential",onClick:this.changeType},"\u6f5c\u529b\u699c"),l.a.createElement("span",{datatype:"keep",onClick:this.changeType},"\u7559\u5b58\u699c"),l.a.createElement("span",{datatype:"finish",onClick:this.changeType},"\u5b8c\u7ed3\u699c")),l.a.createElement("div",{className:"sort-sex",ref:"sortSex"},l.a.createElement("span",{className:"active",datatype:"male",onClick:this.changeSex},"\u7537\u6027"),l.a.createElement("span",{datatype:"female",onClick:this.changeSex},"\u5973\u6027"))),l.a.createElement("div",{className:"sort-tab-content"},l.a.createElement(f.a,{data:e.data})))}}]),t}(c.Component);t.default=Object(u.d)(Object(d.b)(i,s)(A))},173:function(e,t,n){"use strict";function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e,t){return e(t={exports:{}},t.exports),t.exports}n.d(t,"a",function(){return A});var a,i=n(0),s=n.n(i),c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},p=o(function(e,t){function n(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{threshold:0},r=arguments[3],o=n.root,c=n.rootMargin,l=n.threshold||0;if(e&&t){var p=c?l.toString()+"_"+c:""+l.toString();o&&(p=r?r+"_"+p:null);var d=p?s.get(p):null;d||(d=new IntersectionObserver(a,n),p&&s.set(p,d));var u={callback:t,visible:!1,options:n,observerId:p,observer:p?void 0:d};return i.set(e,u),d.observe(e),u}}function r(e){if(e){var t=i.get(e);if(t){var n=t.observerId,r=t.observer,o=n?s.get(n):r;o&&o.unobserve(e);var a=!1;n&&i.forEach(function(t,r){t&&t.observerId===n&&r!==e&&(a=!0)}),o&&!a&&(o.disconnect(),s.delete(n)),i.delete(e)}}}function o(){s.forEach(function(e){e.disconnect()}),s.clear(),i.clear()}function a(e){e.forEach(function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=i.get(e.target);if(r&&n>=0){var o=r.options,a=!1;Array.isArray(o.threshold)?a=o.threshold.some(function(e){return r.visible?n>e:n>=e}):void 0!==o.threshold&&(a=r.visible?n>o.threshold:n>=o.threshold),void 0!==t&&(a=a&&t),r.callback&&r.callback(a)}})}Object.defineProperty(t,"__esModule",{value:!0}),t.observe=n,t.unobserve=r,t.destroy=o;var i=new Map,s=new Map;t.default={observe:n,unobserve:r,destroy:o}}),d=r(p),u={default:d,__moduleExports:p,observe:p.observe,unobserve:p.unobserve,destroy:p.destroy},f=u&&d||u,h=r(o(function(e,t){function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s.a),i=function(e){function t(){var e,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return r=o=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={inView:!1},o.node=null,o.handleNode=function(e){o.node&&(0,f.unobserve)(o.node),o.node=e,o.observeNode(),o.props.innerRef&&o.props.innerRef(e)},o.handleChange=function(e){o.setState({inView:e}),o.props.onChange&&o.props.onChange(e)},n(o,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"componentDidUpdate",value:function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||((0,f.unobserve)(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&((0,f.unobserve)(this.node),this.node=null)}},{key:"componentWillUnmount",value:function(){this.node&&((0,f.unobserve)(this.node),this.node=null)}},{key:"observeNode",value:function(){if(this.node){var e=this.props;(0,f.observe)(this.node,this.handleChange,{threshold:e.threshold,root:e.root,rootMargin:e.rootMargin},e.rootId)}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.render,o=e.tag,i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","render","tag","innerRef","triggerOnce","threshold","root","rootId","rootMargin"]),s=this.state.inView;return a.createElement(o,r({},i,{ref:this.handleNode}),"function"==typeof n?n(s):null,"function"==typeof t?t(s):t)}}]),t}();i.defaultProps={tag:"div",threshold:0,triggerOnce:!1},t.default=i}));!function(e){e.NotAsked="NotAsked",e.Loading="Loading",e.LoadSuccess="LoadSuccess",e.LoadError="LoadError"}(a||(a={}));var b=function(e){function t(t){var n=e.call(this,t)||this;return n.state={hasBeenInView:!1,imageState:a.NotAsked},n.renderInner=n.renderInner.bind(n),n.renderLazy=n.renderLazy.bind(n),n.onInView=n.onInView.bind(n),n.onLoadSuccess=n.onLoadSuccess.bind(n),n.onLoadError=n.onLoadError.bind(n),n}return function(e,t){function n(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.onInView=function(e){!0===e&&(this.props.src?(this.setState(function(e,t){return l({},e,{imageState:a.Loading})}),y({src:this.props.src,srcSet:this.props.srcSet,alt:this.props.alt}).then(this.onLoadSuccess).catch(this.onLoadError)):this.setState(function(e,t){return l({},e,{imageState:a.LoadSuccess})}))},t.prototype.onLoadSuccess=function(){this.setState(function(e,t){return l({},e,{imageState:a.LoadSuccess})})},t.prototype.onLoadError=function(){this.setState(function(e,t){return l({},e,{imageState:a.LoadError})})},t.prototype.render=function(){return this.props.loadEagerly?this.renderInner(this.props,{imageState:a.LoadSuccess}):this.renderLazy(this.props,this.state)},t.prototype.renderLazy=function(e,t){return s.a.createElement(h,l({rootMargin:"50px 0px",threshold:.01},e.observerProps,{onChange:this.onInView,triggerOnce:!0}),this.renderInner(e,t))},t.prototype.renderInner=function(e,t){var n=e.src,r=e.srcSet,o=e.alt,a=e.render,i=e.children,c=t.imageState;return s.a.createElement(s.a.Fragment,null,"function"==typeof a?a({src:n,srcSet:r,alt:o,imageState:c}):"function"==typeof i?i({src:n,srcSet:r,alt:o,imageState:c}):null)},t.displayName="LazyImageFull",t}(s.a.Component),y=function(e){var t=e.src,n=e.srcSet,r=e.alt;return new Promise(function(e,o){var a=new Image;n&&(a.srcset=n),r&&(a.alt=r),a.src=t,a.onload=e,a.onerror=o})},A=function(e){var t=e.actual,n=e.placeholder,r=e.loading,o=e.error,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n}(e,["actual","placeholder","loading","error"]);return s.a.createElement(b,l({},i),function(e){var i=e.src,s=e.srcSet,c=e.alt;switch(e.imageState){case a.NotAsked:return!!n&&n({alt:c});case a.Loading:return r?r():!!n&&n({alt:c});case a.LoadSuccess:return t({src:i,alt:c,srcSet:s});case a.LoadError:return o?o():t({src:i,alt:c,srcSet:s})}})};A.displayName="LazyImage"},174:function(e,t,n){var r=n(175);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(166)(r,o);r.locals&&(e.exports=r.locals)},175:function(e,t,n){t=e.exports=n(165)(!0),t.push([e.i,".sort-tab-header{padding:15px 0;border-bottom:1px solid #f5f5f5;line-height:2}.sort-sex,.sort-type{display:-ms-flexbox;display:flex}.sort-tab-header span{display:block;padding-right:30px}.sort-tab-header span.active,.sort-tab-header span:hover{color:#f87562;cursor:pointer;-webkit-transition:all .2s linear;-o-transition:all .2s linear;transition:all .2s linear}.sort .items{display:-ms-flexbox;display:flex;padding:15px 0;border-bottom:1px solid #f5f5f5}.sort .items:last-child{border-bottom:none}.sort .item-img,.sort .item-img div{width:90px}.sort .item-content{padding-left:15px;padding-right:15px;width:100%;font-size:14px}.sort .item-content span{color:#f87562}.sort .title{margin-bottom:5px;font-size:16px;font-weight:700}.sort .item-content p:last-child{width:90%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}","",{version:3,sources:["/Users/pan/coding/myself/novel-react/src/assets/styles/sort.css"],names:[],mappings:"AAAA,iBACI,eAAgB,AAChB,gCAAiC,AACjC,aAAe,CAClB,AAED,qBACI,oBAAqB,AACrB,YAAc,CACjB,AAED,sBACI,cAAe,AACf,kBAAoB,CACvB,AAED,yDACI,cAAe,AACf,eAAgB,AAChB,kCAAmC,AACnC,6BAA8B,AAC9B,yBAA2B,CAC9B,AAED,aACI,oBAAqB,AACrB,aAAc,AACd,eAAgB,AAChB,+BAAiC,CACpC,AAED,wBACI,kBAAoB,CACvB,AAED,oCACI,UAAY,CACf,AAED,oBACI,kBAAmB,AACnB,mBAAoB,AACpB,WAAY,AACZ,cAAgB,CACnB,AAED,yBACI,aAAe,CAClB,AAED,aACI,kBAAmB,AACnB,eAAgB,AAChB,eAAkB,CACrB,AAED,iCACI,UAAW,AACX,gBAAiB,AACjB,0BAA2B,AACxB,uBAAwB,AAC3B,kBAAoB,CACvB",file:"sort.css",sourcesContent:[".sort-tab-header {\n    padding: 15px 0;\n    border-bottom: 1px solid #f5f5f5;\n    line-height: 2;\n}\n\n.sort-type, .sort-sex {\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.sort-tab-header span {\n    display: block;\n    padding-right: 30px;\n}\n\n.sort-tab-header span:hover, .sort-tab-header span.active {\n    color: #f87562;\n    cursor: pointer;\n    -webkit-transition: all .2s linear;\n    -o-transition: all .2s linear;\n    transition: all .2s linear;\n}\n\n.sort .items {\n    display: -ms-flexbox;\n    display: flex;\n    padding: 15px 0;\n    border-bottom: 1px solid #f5f5f5;\n}\n\n.sort .items:last-child {\n    border-bottom: none;\n}\n\n.sort .item-img, .sort .item-img div {\n    width: 90px;\n}\n\n.sort .item-content {\n    padding-left: 15px;\n    padding-right: 15px;\n    width: 100%;\n    font-size: 14px;\n}\n\n.sort .item-content span {\n    color: #f87562;\n}\n\n.sort .title {\n    margin-bottom: 5px;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n.sort .item-content p:last-child {\n    width: 90%;\n    overflow: hidden;\n    -o-text-overflow: ellipsis;\n       text-overflow: ellipsis;\n    white-space: nowrap;\n}"],sourceRoot:""}])},182:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=n.n(i),c=n(173),l=n(174),p=(n.n(l),n(53)),d=n(1),u=n.n(d),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"search",value:function(e){p.a.set("current.text",e).write(),p.a.get("history").write().includes(e)||p.a.get("history").push(e).write(),this.context.router.history.push({pathname:"/result",state:{text:e}})}},{key:"render",value:function(){var e=this,t=this.props.data;return s.a.createElement("div",{className:"page sort"},t.map(function(t,n){var r=decodeURIComponent(t.cover);return s.a.createElement("div",{key:n,className:"items",onClick:e.search.bind(e,t.title)},s.a.createElement("div",{className:"item-img"},s.a.createElement(c.a,{src:r.replace(/\/agent\//g,""),alt:t.title,placeholder:function(e){var t=e.alt;return s.a.createElement("img",{src:"http://temp.im/754x754",alt:t})},actual:function(e){var t=e.src,n=e.alt;e.srcSet;return s.a.createElement("img",{src:t,alt:n})}})),s.a.createElement("div",{className:"item-content"},s.a.createElement("h5",{className:"title"},t.title),s.a.createElement("div",{className:"author"},"\u4f5c\u8005\uff1a",s.a.createElement("span",null,t.author)),s.a.createElement("div",{className:"major"},"\u7c7b\u578b\uff1a",s.a.createElement("span",null,t.minorCate)),s.a.createElement("div",{className:"rentation"},"\u7559\u5b58\u7387\uff1a",s.a.createElement("span",null,t.retentionRatio+"%")),s.a.createElement("div",{className:"shortIntro"},"\u7b80\u4ecb\uff1a",t.shortIntro)))}))}}]),t}(i.Component);h.contextTypes={router:u.a.object},t.a=h}});
//# sourceMappingURL=1.caf93db8.chunk.js.map