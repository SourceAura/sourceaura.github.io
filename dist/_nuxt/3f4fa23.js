(window.webpackJsonp=window.webpackJsonp||[]).push([[14,12],{426:function(t,e,l){"use strict";l.r(e);var r={data:function(){return{}},props:{petal:{type:Object}}},n=l(10),o=l(418),c=l.n(o),d=l(584),v=l(478),m=l(417),x=l(435),f=l(480),_=l(412),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("nuxt-link",{staticClass:"flex transition duration-700 ease-in-out transform hover:translate-y-0.5 hover:scale-105 flex-col rounded-xl shadow-lg overflow-hidden",attrs:{to:t.localePath("/petals/"+t.petal.slug)}},[l("v-card",{attrs:{"max-width":"344",color:"#000",outlined:""}},[l("v-list-item",{attrs:{"three-line":""}},[l("v-list-item-content",[l("div",{staticClass:"text-overline mb-4 text-white"},[t._v(t._s(t.petal.title))]),t._v(" "),l("v-list-item-title",{staticClass:"text-h3 mb-1 text-white"},[t._v(t._s(t.petal.category))]),t._v(" "),l("v-list-item-subtitle",[l("h1",{staticClass:"text-white"},[t._v("... "+t._s(t.petal.description))])])],1),t._v(" "),l("v-list-item-avatar",{attrs:{tile:"",size:"90",color:"#fff"}},[l("img",{attrs:{src:"https://media1.tenor.com/images/fbd438a9f31f5d8022a8568128228f2d/tenor.gif?itemid=21007368",alt:""}})])],1),t._v(" "),l("v-card-actions",[l("v-btn",{attrs:{outlined:"",rounded:"",text:""}},[l("div",{staticClass:"flex text-xs text-white"},[l("time",{attrs:{datetime:t.petal.createdAt}},[t._v("\n            "+t._s(new Date(t.petal.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}))+"\n          ")]),t._v(" "),l("span",{staticClass:"mx-1 text-white"},[t._v("·")]),t._v(" "),l("span",{staticClass:"text-white"},[t._v(t._s(t.petal.readingTime))])])])],1)],1)],1)}),[],!1,null,"773e2802",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VListItem:x.a,VListItemAvatar:f.a,VListItemContent:_.a,VListItemSubtitle:_.b,VListItemTitle:_.c})},583:function(t,e,l){"use strict";l.r(e);var r={data:{cardColor:"black"},props:{petals:{type:Array}}},n=l(10),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.$config.petals.enabled?l("div",{staticClass:"bg-transparent"},[l("div",{staticClass:"max-w-7xl pb-6 mx-auto content-around",attrs:{"data-aos":"fade-up"}},[l("div",{staticClass:"max-w-prose text-center mx-auto py-4"},[l("p",{staticClass:"text-xs leading-6 text-chileanFire font-semibold tracking-wide lowercase"},[t._v(t._s(t.$t("recentPetal.subtext")))]),t._v(" "),l("nuxt-link",{staticClass:"mt-2 text-3xl hover:text-elfGreen leading-8 font-extrabold tracking-tight text-white",attrs:{to:t.localePath("/petals")}},[t._v(t._s(t.$t("recentPetal.header")))])],1),t._v(" "),l("div",{staticClass:"gap-4 mx-4 grid max-w-7xl grid-flow-row sm:grid-flow-col",attrs:{"data-aos":"zoom-in"}},t._l(t.petals,(function(t){return l("PetalCard",{key:t.slug,attrs:{petal:t}})})),1)])]):t._e()}),[],!1,null,"7dab4fc5",null);e.default=component.exports;installComponents(component,{PetalCard:l(426).default})}}]);