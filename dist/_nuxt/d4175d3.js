(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{427:function(t,e,n){"use strict";n.r(e);var r=n(4),c=(n(29),{props:{slug:{type:String}},computed:{user:function(){return this.$store.state.user}},data:function(){return{count:0,total:0,buffer:0,id:""}},methods:{clapClicked:function(t){this.count=t,this.total++,this.buffer++,this.user||this.$toast.error("sign in please so we don't lose your likes",{duration:3e3,theme:"bubble"}),this.buffer>=2&&this.user&&(this.$store.dispatch("incrementLikes",{count:this.buffer,slug:this.slug,id:this.id}),this.buffer=0)},fetchLikes:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$config.firebase.enabled){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,t.$store.dispatch("fetchLikes",{slug:t.slug});case 5:n=e.sent,r=n.count,c=n.id,t.total=r,t.id=c,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))()}},mounted:function(){this.fetchLikes()},watch:{user:function(t){t&&this.fetchLikes()}}}),o=n(10),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"space-y-2 flex flex-col items-center justify-center"},[n("vue-clap-button",{attrs:{"init-clicked":t.count,icon:"love",size:50,"max-click":10,"bg-color":"#000","color-active":"#ff7400","color-normal":"#e6e6e6"},on:{clap:t.clapClicked}}),t._v(" "),n("p",{staticClass:"text-xs select-none text-white hover:text-candyPink"},[t._v("\n    "+t._s(t.total)+"\n  ")])],1)}),[],!1,null,"29320f9b",null);e.default=component.exports}}]);