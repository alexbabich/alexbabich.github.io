(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["741842cb"],{"617e":function(t,n,i){},dcf1:function(t,n,i){"use strict";var e=i("617e"),a=i.n(e);a.a},e428:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("q-page",{staticClass:"flex flex-center"},[i("q-card",{staticStyle:{width:"500px"},attrs:{inline:""}},[i("q-card-media",[i("img",{attrs:{src:t.info.Poster}})]),i("q-card-separator"),i("q-card-title",[t._v("\n            "+t._s(t.info.Title)+"\n        ")]),i("q-card-separator"),i("q-card-main",[i("p",[t._v(t._s(t.info.Year))]),i("p",{staticClass:"text-faded"},[t._v(t._s(t.info.Plot))])])],1),t._v("\n    "+t._s(t.info)+"\n")],1)},a=[];e._withStripped=!0;var s=i("bc3a"),r=i.n(s),o={name:"Film",data:function(){return{info:"",filmId:this.$route.params.id}},methods:{getFilms:function(t){var n=this;r.a.get(this.$store.state.API.mainURL+"&i="+t+"&plot=full").then(function(t){return n.info=t.data}).catch(function(t){console.log(t)})}},beforeMount:function(){this.getFilms(this.filmId)}},c=o,l=(i("dcf1"),i("2877")),f=Object(l["a"])(c,e,a,!1,null,null,null);f.options.__file="Film.vue";n["default"]=f.exports}}]);