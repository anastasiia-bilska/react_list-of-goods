(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s,c=n(4),i=n.n(c),r=n(5),a=n(6),o=n(9),l=n(7),u=n(8),h=n(1),d=n.n(h),b=(n(14),n(15),n(2)),j=n.n(b),p=n(0),N=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(s||(s={}));var v=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={isReversed:!1,sortType:s.NONE},e.handleLengthSortClick=function(){e.setState({sortType:s.LENGTH})},e.handleNameSortClick=function(){e.setState({sortType:s.ALPHABET})},e.handleReverseClick=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.handleResetClick=function(){e.setState({isReversed:!1,sortType:s.NONE})},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isReversed,n=e.sortType,c=function(e,t){var n=t.sortType,c=t.isReversed,i=Object(u.a)(e);switch(n){case s.LENGTH:i.sort((function(e,t){return e.length-t.length}));break;case s.ALPHABET:i.sort((function(e,t){return e.localeCompare(t)}))}return c?i.reverse():i}(N,this.state),i=t||n!==s.NONE;return Object(p.jsxs)("div",{className:"section content box",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:j()("button is-info",{"is-light":n!==s.ALPHABET}),onClick:this.handleNameSortClick,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:j()("button is-success",{"is-light":n!==s.LENGTH}),onClick:this.handleLengthSortClick,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:j()("button is-warning",{"is-light":!t}),onClick:this.handleReverseClick,children:"Reverse"}),i&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleResetClick,children:"Reset"})]}),Object(p.jsx)("ul",{className:"list",children:Object(p.jsx)("ul",{children:c.map((function(e){return Object(p.jsx)("li",{"data-cy":"Good",children:e},e)}))})})]})}}]),n}(d.a.Component);i.a.render(Object(p.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.cb79c55a.chunk.js.map