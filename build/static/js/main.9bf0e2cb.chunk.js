(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{58:function(e,t,a){e.exports=a(95)},63:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){},89:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(49),l=a.n(r),i=(a(63),a(65),a(13)),o=(a(67),Object(n.createContext)()),m=function(e){var t=e.reducer,a=e.initialState,r=e.children;return c.a.createElement(o.Provider,{value:Object(n.useReducer)(t,a)},r)},s=function(){return Object(n.useContext)(o)};var u=function(e){var t=e.id,a=e.title,n=e.image,r=e.price,l=e.rating,o=s(),m=Object(i.a)(o,2),u=(m[0],m[1]);return c.a.createElement("div",null,c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,a),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"product__rating"},Array(l).fill().map(function(){return c.a.createElement("p",null,"\u2b50")}))),c.a.createElement("img",{src:n,alt:"product__image"}),c.a.createElement("button",{onClick:function(){u({type:"ADD_TO_BASKET",item:{id:t,image:n,price:r,rating:l}})}},"Add to Basket")))};var d=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__container"},c.a.createElement("img",{src:"e-commerce.png",alt:"",className:"home__image"}),c.a.createElement("div",{className:"home__row"},c.a.createElement(u,{id:"12321",title:"Bennett\u2122 Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Charcoal Black)",price:11.96,rating:5,image:"laptop bag.webp"}),c.a.createElement(u,{id:"12322",title:"IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)",price:13,rating:4,image:"microwaveOven.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(u,{id:"12323",title:"All the Light we Cannot See: The Breathtaking World Wide Bestseller",price:4,rating:4,image:"storybook.jpg"}),c.a.createElement(u,{id:"12324",title:"Echo Studio - Smart speaker with high-fidelity audio, Dolby Atmos and Alexa (Black)",price:32,rating:4,image:"smartspeaker.jpg"}),c.a.createElement(u,{id:"12325",title:"2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 512GB) - Space Grey (5th Generation)",price:600,rating:4,image:"ipad.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(u,{id:"12326",title:"Samsung 34 inch (86.4 cm) LED Curved Computer Monitor - Full HD, Super Slim,VA Panel,HDR 10 - LC34G55TWWWXXL (Black)",price:800,rating:4,image:"gamingmonitor.jpg"})))))},p=(a(69),a(51)),E=a.n(p),g=a(52),_=a.n(g),h=a(38),v=a.n(h),f=(a(71),a(29));var b=function(){var e=s(),t=Object(i.a)(e,2),a=t[0].basket;return t[1],c.a.createElement("div",{className:"header"},c.a.createElement(f.b,{to:"/",style:{textDecoration:"none"}},c.a.createElement("div",{className:"header__logo"},c.a.createElement(v.a,{className:"header__logoImage",fontSize:"large"}),c.a.createElement("h2",{className:"header__logoTitle"},"eShop"))),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{type:"text",className:"header__searchInput"}),c.a.createElement(E.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(f.b,{to:"/login",style:{textDecoration:"none"}},c.a.createElement("div",{className:"nav__item"},c.a.createElement("span",{className:"nav__itemLineOne"},"Hello Guest"),c.a.createElement("span",{className:"nav__itemLineTwo"},"SignIn"))),c.a.createElement("div",{className:"nav__item"},c.a.createElement("span",{className:"nav__itemLineOne"},"Your"),c.a.createElement("span",{className:"nav__itemLineTwo"},"Shop")),c.a.createElement(f.b,{to:"/checkout",style:{textDecoration:"none"}},c.a.createElement("div",{className:"nav__itemBasket"},c.a.createElement(_.a,null),c.a.createElement("span",{className:"nav__itemLineTwo nav__basketCount"},a.length)))))},N=a(3);a(82),a(84);var k=function(e){var t=e.id,a=e.title,n=e.image,r=e.price,l=e.rating,o=s(),m=Object(i.a)(o,2),u=(m[0].basket,m[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{src:n,alt:"",className:"checkoutProduct__image"}),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},a),c.a.createElement("p",{className:"checkoutProduct__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map(function(){return c.a.createElement("p",null,"\u2b50")})),c.a.createElement("button",{onClick:function(){u({type:"REMOVE_FROM_BASKET",id:t})}},"Remove from Basket")))},S=(a(86),a(53)),y=a.n(S),O=a(15),B=a(33),w=function(e){return e.reduce(function(e,t){return t.price+e},0)},j=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(B.a)({},e,{basket:[].concat(Object(O.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var a=e.basket.findIndex(function(e){return e.id===t.id}),n=Object(O.a)(e.basket);return a>=0?n.splice(a,1):console.warn("can't remove product(id:${action.id}) as it is not in the basket"),Object(B.a)({},e,{basket:n});default:return e}};var A=function(){var e=s(),t=Object(i.a)(e,2),a=t[0].basket;return t[1],c.a.createElement("div",{className:"subtotal"},c.a.createElement(y.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal(",a.length," items):",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"}),"This order contains a gift"),c.a.createElement("button",null,"Proceed to checkout"))},decimalScale:2,value:w(a),displayType:"text",thousandSeparator:!0,prefix:"$"}))};var C=function(){var e=s(),t=Object(i.a)(e,2),a=t[0].basket;return t[1],c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{src:"advertisement.jpg",alt:"",className:"checkout__ad"}),c.a.createElement("div",null,c.a.createElement("h2",{className:"checkout__title"},"Your Shopping Basket"),a.map(function(e){return c.a.createElement(k,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))),c.a.createElement("div",{className:"checkout__right"},c.a.createElement(A,null)))},I=(a(89),a(47)),T=(a(91),a(96),I.a.initializeApp({apiKey:"AIzaSyBFplvfTVYmyLC-BWnsVc6N2vuO_h6gixs",authDomain:"eshop-55793.firebaseapp.com",projectId:"eshop-55793",storageBucket:"eshop-55793.appspot.com",messagingSenderId:"684504919264",appId:"1:684504919264:web:94040de28619d477123485",measurementId:"G-17L472BDZW"}).firestore(),I.a.auth());var x=function(){var e=Object(N.f)(),t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(""),m=Object(i.a)(o,2),s=m[0],u=m[1];return c.a.createElement("div",{className:"login"},c.a.createElement(f.b,{to:"/",style:{textDecoration:"none"}},c.a.createElement("div",{className:"login__logo"},c.a.createElement(v.a,{className:"login__logoImage",fontSize:"large"}),c.a.createElement("h2",{className:"login__logoTitle"},"eShop"))),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign-in"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{type:"text",value:r,onChange:function(e){return l(e.target.value)}}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"password",value:s,onChange:function(e){return u(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"login__signInButton",onClick:function(t){t.preventDefault(),T.signInWithEmailAndPassword(r,s).then(function(t){e.push("/")}).catch(function(e){return alert(e.message)})}},"Sign In")),c.a.createElement("p",null,"By signing-in you agree to the eShop Website Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),c.a.createElement("button",{className:"login__registerButton",onClick:function(t){t.preventDefault(),T.createUserWithEmailAndPassword(r,s).then(function(t){t&&e.push("/")}).catch(function(e){return alert(e.message)})}},"Create your eShop Account")))};var D=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(f.a,null,c.a.createElement(N.c,null,c.a.createElement(N.a,{path:"/login"},c.a.createElement(x,null)),c.a.createElement(N.a,{path:"/checkout"},c.a.createElement(b,null),c.a.createElement(C,null)),c.a.createElement(N.a,{path:"/"},c.a.createElement(b,null),c.a.createElement(d,null)))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,{initialState:{basket:[]},reducer:j},c.a.createElement(D,null))),document.getElementById("root"))}},[[58,2,1]]]);
//# sourceMappingURL=main.9bf0e2cb.chunk.js.map