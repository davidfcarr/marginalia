!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(2),o=(n.n(l),n(3)),c=(n.n(o),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),s=wp.i18n.__,u=wp.blocks.registerBlockType,m=wp.editor.RichText,p=wp.element.Fragment,f=wp.editor,w=f.InnerBlocks,d=(f.BlockControls,wp.element.Component),g=wp.editor.InspectorControls,h=wp.components,b=h.PanelBody,y=h.RangeControl,v=h.SelectControl;h.FormatToolbar;u("davidfcarr/marginalia",{title:"Marginalia",icon:"admin-comments",category:"layout",keywords:["Margin","Show Notes","Wrapper"],attributes:{content:{type:"array",source:"children",selector:"p"},position:{type:"string",default:"left"},width:{type:"number",default:8}},edit:function(e){var t=e.attributes,n=e.className,r=e.setAttributes,a=(e.isSelected,{width:t.width+"em"}),i={marginLeft:t.width+2+"em"};return wp.element.createElement(p,null,wp.element.createElement(E,e),wp.element.createElement("div",{className:n},wp.element.createElement("div",{class:"warnifnested"},"Nested inside another Marginalia block"),wp.element.createElement("div",{style:a,class:"marginalia"},wp.element.createElement(m,{tagName:"p",className:"marginaliaNote",value:t.content,onChange:function(e){return r({content:e})}})),wp.element.createElement("small",null,"(float:",t.position,")"),wp.element.createElement("div",{className:"marginaliaMain",style:i},wp.element.createElement(w,null))))},save:function(e){var t=e.attributes,n=e.className,r={},a={};return"left"==t.position?(r.float="left;",r.width=t.width+"em",a.marginLeft=t.width+2+"em"):(r.float="right;",r.width=t.width+"em",a.marginRight=t.width+2+"em"),wp.element.createElement("div",{className:n},wp.element.createElement("div",{style:r,className:"marginalia"},wp.element.createElement(m.Content,{tagName:"p",value:t.content})),wp.element.createElement("div",{style:a,className:"marginaliaMain"},wp.element.createElement(w.Content,null)))}});var E=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.setAttributes;e.className;return wp.element.createElement(g,{key:"inspector"},wp.element.createElement(b,{title:s("Width and Placement","marginalia")},wp.element.createElement(y,{value:t.width,label:s("Margin Width (em)","marginalia"),onChange:function(e){return n({width:e})},min:5,max:20,allowReset:!0}),wp.element.createElement(v,{label:s("Position","marginalia"),value:t.position,onChange:function(e){return n({position:e})},options:[{value:"left",label:s("Left","marginalia")},{value:"right",label:s("Right","marginalia")}]})))}}]),t}(d)},function(e,t){},function(e,t){}]);