(this.webpackJsonpquote_generator=this.webpackJsonpquote_generator||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(0),s=n(1),c=n.n(s),a=n(8),u=n.n(a),i=(n(14),n(2)),r=n(3),h=n(4),j=n(6),l=n(5),b=(n(15),function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t='"'+this.props.quote.quote+'" -'+this.props.quote.author;console.log(t);var e="http://twitter.com/intent/tweet?text="+t;return Object(o.jsxs)("div",{className:"quote-main-container",children:[Object(o.jsxs)("div",{className:"quote",children:[Object(o.jsx)("i",{className:"fa fa-quote-left"}),this.props.quote.quote,Object(o.jsx)("i",{className:"fa fa-quote-right"})]}),Object(o.jsxs)("div",{className:"author",children:["-",this.props.quote.author]}),Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)("div",{className:"social-media",children:Object(o.jsx)("a",{href:e,target:"_blank",children:Object(o.jsx)("i",{className:"fa fa-twitter-square"})})}),Object(o.jsx)("div",{className:"new-quote",children:Object(o.jsx)("button",{onClick:this.props.newQuote,children:"New Quote"})})]})]})}}]),n}(s.Component)),f=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(t){var o;return Object(i.a)(this,n),(o=e.call(this,t)).state={quotes:[],quote:{}},o.newQuote=o.newQuote.bind(Object(h.a)(o)),o}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){return t.json()})).then((function(e){t.setState({quotes:e.quotes,quote:e.quotes[Math.floor(Math.random()*e.quotes.length)]})}))}},{key:"newQuote",value:function(){this.setState({quote:this.state.quotes[Math.floor(Math.random()*this.state.quotes.length)]})}},{key:"render",value:function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(b,{quote:this.state.quote,newQuote:this.newQuote})})}}]),n}(s.Component),d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,o=e.getFID,s=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),o(t),s(t),c(t),a(t)}))};u.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),d()}},[[16,1,2]]]);
//# sourceMappingURL=main.c8ed392f.chunk.js.map