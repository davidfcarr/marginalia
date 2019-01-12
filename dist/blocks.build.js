!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(2),o=(n.n(i),n(3)),c=(n.n(o),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),m=wp.i18n.__,s=wp.blocks.registerBlockType,u=wp.editor.RichText,p=wp.element.Fragment,f=wp.editor,w=f.InnerBlocks,d=(f.BlockControls,wp.element.Component),g=wp.editor.InspectorControls,h=wp.components,b=h.PanelBody,y=h.RangeControl,v=h.SelectControl;h.FormatToolbar;s("davidfcarr/marginalia",{title:"Marginalia",icon:"admin-comments",category:"layout",keywords:["Margin","Show Notes","Wrapper"],attributes:{content:{type:"array",source:"children",selector:"p"},position:{type:"string",default:"left"},width:{type:"number",default:8}},edit:function(e){var t=e.attributes,n=e.className,a=e.setAttributes,r={};return r.width=t.width+"em",wp.element.createElement(p,null,wp.element.createElement(E,e),wp.element.createElement("div",{className:n},wp.element.createElement("small",null,"Marginal Note (float: ",t.position,")"),wp.element.createElement("div",{style:r,className:"marginalia"},wp.element.createElement(u,{tagName:"p",className:n,value:t.content,onChange:function(e){return a({content:e})}})),wp.element.createElement("div",{className:"marginaliaMain"},wp.element.createElement("small",null,"Main Content"),wp.element.createElement(w,null)),wp.element.createElement("div",{className:"marginaliaEnd"},"Marginalia block end")))},save:function(e){var t=e.attributes,n=e.className,a={},r={};return"left"==t.position?(a.float="left;",a.width=t.width+"em",r.marginLeft=t.width+2+"em"):(a.float="right;",a.width=t.width+"em",r.marginRight=t.width+2+"em"),wp.element.createElement("div",{className:n},wp.element.createElement("div",{style:a,className:"marginalia"},wp.element.createElement(u.Content,{tagName:"p",value:t.content})),wp.element.createElement("div",{style:r,className:"marginaliaMain"},wp.element.createElement(w.Content,null)))}});var E=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.setAttributes;e.className;return wp.element.createElement(g,{key:"inspector"},wp.element.createElement(b,{title:m("Width and Placement","marginalia")},wp.element.createElement(y,{value:t.width,label:m("Margin Width (em)","marginalia"),onChange:function(e){return n({width:e})},min:5,max:20,allowReset:!0}),wp.element.createElement(v,{label:m("Position","marginalia"),value:t.position,onChange:function(e){return n({position:e})},options:[{value:"left",label:m("Left","marginalia")},{value:"right",label:m("Right","marginalia")}]})))}}]),t}(d)},function(e,t){},function(e,t){}]);