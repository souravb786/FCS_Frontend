(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{167:function(e,t,c){},168:function(e,t,c){},169:function(e,t,c){},176:function(e,t,c){},177:function(e,t,c){},178:function(e,t,c){},179:function(e,t,c){},180:function(e,t,c){},181:function(e,t,c){},182:function(e,t,c){},203:function(e,t,c){},206:function(e,t,c){},207:function(e,t,c){},208:function(e,t,c){},209:function(e,t,c){},210:function(e,t,c){},211:function(e,t,c){},213:function(e,t,c){"use strict";c.r(t);var n=c(91),i=c(0),a=c.n(i),s=c(12),r=c.n(s),o=(c(167),c(6)),l=(c(168),c(169),c(143)),d=c.n(l),j=c(138),u=c.n(j),b=c(142),h=c.n(b),m=c(23),O=c(1),x=Object(i.createContext)(),p=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(O.jsx)(x.Provider,{value:Object(i.useReducer)(t,c),children:n})},f=function(){return Object(i.useContext)(x)},g=c(258);var v=function(){var e=f(),t=Object(o.a)(e,1)[0].user;return Object(O.jsxs)("div",{className:"Header",children:[Object(O.jsx)("div",{className:"logo",children:Object(O.jsx)(m.b,{to:"/",style:{color:"inherit"},children:Object(O.jsx)("h1",{style:{color:"orange"},children:"Fake Store"})})}),Object(O.jsxs)("div",{className:"category",children:[Object(O.jsx)("h2",{children:"Home"}),Object(O.jsx)("h2",{children:"Shop"}),Object(O.jsx)("h2",{children:"Mens"}),Object(O.jsx)("h2",{children:"Electronics"})]}),Object(O.jsxs)("div",{className:"search-bar",children:[Object(O.jsx)("input",{type:"text"}),Object(O.jsx)(u.a,{})]}),Object(O.jsxs)("div",{className:"icon-container",children:[Object(O.jsx)(h.a,{className:"icon"}),Object(O.jsx)(m.b,{to:"/profile",children:Object(O.jsx)(g.a,{src:t?t.image:"",className:"icon-avatar"})}),Object(O.jsx)(m.b,{to:"/checkout",style:{color:"inherit"},children:Object(O.jsx)(d.a,{className:"icon"})})]})]})},y=(c(176),c(145)),_=c.n(y),N=c(144),w=c.n(N);var k=function(){var e=Object(i.useState)(0),t=Object(o.a)(e,2),c=t[0],n=t[1],a=[{url:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},{url:"https://images.unsplash.com/photo-1609250291996-fdebe6020a8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"}],s=Object(i.useState)("https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"),r=Object(o.a)(s,2),l=r[0],d=r[1];return Object(i.useEffect)((function(){d(a[c].url)}),[c]),Object(O.jsxs)("div",{className:"banner",children:[Object(O.jsxs)("div",{className:"button-container",children:[Object(O.jsx)(w.a,{className:"icon",onClick:function(){return n((function(){return 0===c?(a.length-1)%a.length:(c-1)%a.length}))}}),Object(O.jsx)(_.a,{className:"icon",onClick:function(){return n((c+1)%a.length)}})]}),Object(O.jsx)("img",{src:l,alt:"home banner img"})]})};c(177);var C=function(e){var t=e.product,c=Object(i.useState)(!1),n=Object(o.a)(c,2),a=n[0],s=n[1];return Object(O.jsx)("div",{className:"product_deck",children:Object(O.jsxs)("div",{className:"product-body",style:{backgroundColor:"white"},children:[Object(O.jsx)("div",{className:"imageContainer",style:{overflow:"hidden"},children:Object(O.jsx)("img",{src:t.image,alt:"..."})}),Object(O.jsx)("h2",{children:t.title}),Object(O.jsxs)("div",{className:"price-Heart",children:[Object(O.jsxs)("p",{children:["\u20b9",t.price]}),Object(O.jsx)("i",{onClick:function(){return s(!a)},className:a?"fa fa-heart fa-2x":"fa fa-heart-o fa-2x"})]}),Object(O.jsx)(m.b,{to:"/product".concat(t.id),children:Object(O.jsx)("button",{href:"#",className:"button",children:"View Product"})})]})})},S=(c(178),c(76)),B=(c(179),[{name:"Sourav",photo:c.p+"static/media/sourav_profile.c7f9fa0e.jpg"},{name:"Vikhyat Yadav",photo:""},{name:"Rajat Singharia",photo:""},{name:"Shivam Gautam",photo:""},{name:"Ayush Arpit",photo:""}]);var P=function(){return Object(O.jsxs)("div",{className:"footer",children:[Object(O.jsx)("div",{className:"footer__logo",style:{fontSize:36,fontWeight:"800",color:"orange"},children:"Fake Store"}),Object(O.jsxs)("div",{style:{display:"flex",paddingTop:20},children:[Object(O.jsxs)("div",{style:{marginLeft:20,marginRight:80},children:[Object(O.jsx)("h2",{style:{marginBottom:40},children:"About"}),Object(O.jsx)("div",{style:T.text,children:"Fake Store"}),Object(O.jsx)("div",{style:T.text,children:"Blogs"}),Object(O.jsx)("div",{style:T.text,children:"Carrers"}),Object(O.jsx)("div",{style:T.text,children:"Referal Program"})]}),Object(O.jsxs)("div",{style:{marginLeft:20,marginRight:80},children:[Object(O.jsx)("h2",{style:{marginBottom:40},children:"Legal"}),Object(O.jsx)("div",{style:T.text,children:"Terms of use"}),Object(O.jsx)("div",{style:T.text,children:"Privacy Policy"})]}),Object(O.jsxs)("div",{style:{marginLeft:20,marginRight:80},children:[Object(O.jsx)("h2",{style:{marginBottom:40},children:"Support"}),Object(O.jsx)("div",{style:T.text,children:"Help Center"}),Object(O.jsx)("div",{style:T.text,children:"Transactions"}),Object(O.jsx)("div",{style:T.text,children:"Replacement Policy"}),Object(O.jsx)("div",{style:T.text,children:"Return & Refund"}),Object(O.jsx)("div",{style:T.text,children:"Security"})]}),Object(O.jsxs)("div",{style:{marginLeft:20,marginRight:80},children:[Object(O.jsx)("h2",{style:{marginBottom:40},children:"Socials"}),Object(O.jsxs)("div",{style:T.social__options,children:[Object(O.jsxs)("div",{style:T.icon_container,children:[Object(O.jsx)(S.a,{name:"telegram plane",className:"footer-icons",size:"mini"})," "]}),Object(O.jsx)("div",{style:T.text,children:"Telegram"})]}),Object(O.jsxs)("div",{style:T.social__options,children:[Object(O.jsxs)("div",{style:T.icon_container,children:[Object(O.jsx)(S.a,{name:"instagram",className:"footer-icons",size:"mini"})," "]}),Object(O.jsx)("div",{style:T.text,children:"Instagram"})]}),Object(O.jsxs)("div",{style:T.social__options,children:[Object(O.jsxs)("div",{style:T.icon_container,children:[Object(O.jsx)(S.a,{name:"twitter",className:"footer-icons",size:"mini"})," "]}),Object(O.jsx)("div",{style:T.text,children:"Twitter"})]}),Object(O.jsxs)("div",{style:T.social__options,children:[Object(O.jsxs)("div",{style:T.icon_container,children:[Object(O.jsx)(S.a,{name:"youtube",className:"footer-icons",size:"mini"})," "]}),Object(O.jsx)("div",{style:T.text,children:"YouTube"})]}),Object(O.jsxs)("div",{style:T.social__options,children:[Object(O.jsxs)("div",{style:T.icon_container,children:[Object(O.jsx)(S.a,{name:"facebook f",className:"footer-icons",size:"mini"})," "]}),Object(O.jsx)("div",{style:T.text,children:"Facebook"})]})]}),Object(O.jsxs)("div",{className:"team__container",style:{marginLeft:20,marginRight:80},children:[Object(O.jsx)("h2",{style:{marginBottom:40},children:"Team"}),B.map((function(e,t){return Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:20},children:[Object(O.jsx)(g.a,{src:e.photo}),Object(O.jsx)("span",{style:T.team__name,children:e.name})]},t)}))]})]})]})},T={text:{fontSize:18,marginBottom:10,marginTop:20,fontWeight:"500",color:"gray"},icon_container:{height:50,width:50,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"orange",marginTop:10,marginBottom:10,marginRight:20,borderRadius:50},social__options:{display:"flex",alignItems:"center",justifyContent:"flex-start"},team__name:{fontSize:24,color:"gray",fontWeight:"500",marginLeft:20}};var W=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){fetch("".concat("https://fakestoreapi.com/","/products")).then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),Object(O.jsxs)("div",{className:"Home",children:[Object(O.jsx)(v,{}),Object(O.jsxs)("div",{style:{marginTop:100,width:"100vw"},children:[Object(O.jsx)("div",{className:"home-banner",style:{width:"100vw"},children:Object(O.jsx)(k,{})}),Object(O.jsx)("div",{className:"product__section",style:{marginBottom:40},children:c.map((function(e,t){return Object(O.jsx)(C,{product:e},t)}))})]}),Object(O.jsx)(P,{})]})},I=c(102),F=(c(180),c(256)),R=c.p+"static/media/login_page_illustration.efd3edf6.jpg",z=c(14),L=c(7),H="SET_USER",E="SET_TOKEN",q=function(e,t){switch(t.type){case H:return Object(L.a)(Object(L.a)({},e),{},{user:t.user});case E:return Object(L.a)(Object(L.a)({},e),{},{accesstoken:t.accesstoken});default:return e}},M=c(68);var D=function(){var e=Object(z.g)(),t=Object(i.useState)(""),c=Object(o.a)(t,2),n=c[0],a=c[1],s=Object(i.useState)(""),r=Object(o.a)(s,2),l=r[0],d=r[1],j=f(),u=Object(o.a)(j,2);Object(I.a)(u[0]);var b=u[1],h=f(),x=Object(o.a)(h,2),p=(x[0].accesstoken,x[1],Object(i.useState)()),g=Object(o.a)(p,2),v=g[0],y=g[1];return Object(O.jsxs)("div",{className:"Login",children:[Object(O.jsx)("div",{className:"login__left",children:Object(O.jsx)("img",{src:R,alt:"login page illustration"})}),Object(O.jsx)("div",{className:"login__right",children:Object(O.jsxs)("div",{className:"right__main",children:[Object(O.jsx)("p",{children:"Login"}),Object(O.jsxs)("div",{className:"inputs",children:[Object(O.jsx)(F.a,{className:"text-field",id:"outlined-email-input",label:"Email",type:"email",autoComplete:"current-email",fullWidth:!0,variant:"outlined",onChange:function(e){return a(e.target.value)}}),Object(O.jsx)(F.a,{className:"text-field",id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password",fullWidth:!0,variant:"outlined",onChange:function(e){return d(e.target.value)}}),Object(O.jsx)("div",{className:"login__button",onClick:function(){fetch("".concat("http://192.168.3.46:5000","/api/auth/login"),{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:l})}).then((function(e){return e.json()})).then((function(t){t.error?y(t.error):(b({type:H,user:Object(M.a)(t.accesstoken).user}),b({type:E,accesstoken:t.accesstoken}),e.push("/"))}))},children:"Login"}),Object(O.jsx)("span",{style:{color:"red"},children:v})]}),Object(O.jsxs)("div",{className:"other__option",children:[Object(O.jsx)("span",{className:"text__container",children:" OR "}),Object(O.jsxs)("div",{className:"icon__container",children:[Object(O.jsx)("div",{className:"twitter__icon",children:Object(O.jsx)(S.a,{className:"inner__icon",name:"twitter",size:"mini"})}),Object(O.jsx)("div",{className:"facebook__icon",children:Object(O.jsx)(S.a,{className:"inner__icon",name:"facebook f",size:"mini"})}),Object(O.jsx)("div",{className:"github__icon",children:Object(O.jsx)(S.a,{className:"inner__icon",name:"github",size:"mini"})}),Object(O.jsx)("div",{className:"google__icon",children:Object(O.jsx)(S.a,{className:"inner__icon",name:"google",size:"mini"})})]})]}),Object(O.jsxs)("div",{className:"lower__section",children:[Object(O.jsx)(m.b,{to:"/",children:"Forgot Password?"}),Object(O.jsx)(m.b,{to:"/signup",style:{color:"inherit"},children:Object(O.jsx)("div",{className:"signup__button",children:"Sign up"})})]})]})})]})},A=c.p+"static/media/EmptyCart.f4d17ec9.webp",J=(c(181),c(182),c(37)),Y=c(110),G=c(69),V=Object(G.b)({name:"basket",initialState:{items:[]},reducers:{setBasket:function(e,t){e.items=t.payload},addToBasket:function(e,t){e.items.findIndex((function(e){return e.id===t.payload.id}))<0&&(e.items=[].concat(Object(Y.a)(e.items),[t.payload]))},removeFromBasket:function(e,t){var c=e.items.findIndex((function(e){return e.id===t.payload.id})),n=Object(Y.a)(e.items);c>=0?n.splice(c,1):console.warn("Cant remove product (id: ".concat(t.payload.id,") as its not in the basket")),e.items=n},addQuantity:function(e,t){var c=e.items.findIndex((function(e){return e.id===t.payload.id})),n=Object(L.a)(Object(L.a)({},e.items[c]),{},{quantity:e.items[c].quantity+1});e.items[c]=n},deleteQuantity:function(e,t){var c=e.items.findIndex((function(e){return e.id===t.payload.id})),n=e.items.find((function(e){return e.id===t.payload.id})),i=Object(Y.a)(e.items);if(1===n.quantity)i.splice(c,1),e.items=i;else{var a=Object(L.a)(Object(L.a)({},e.items[c]),{},{quantity:e.items[c].quantity-1});e.items[c]=a}}}}),Q=V.actions,U=(Q.setBasket,Q.addToBasket),Z=(Q.removeFromBasket,Q.addQuantity),K=Q.deleteQuantity,X=function(e){return e.basket.items},$=function(e){return e.basket.items.reduce((function(e,t){return e+t.price*t.quantity}),0)},ee=V.reducer;var te={productRowLeft:{display:"flex",justifyContent:"center",width:"15%",height:250,padding:10},productPrice:{marginTop:20,fontSize:20,fontWeight:"600"},product__image:{}},ce=function(e){var t=e.product,c=e.quantity,n=(e.setQuantity,Object(J.b)()),i=f();return Object(o.a)(i,1)[0].accesstoken,Object(O.jsxs)("div",{className:"product__row",children:[Object(O.jsxs)("div",{style:{display:"flex",flexDirection:"row",width:"85%"},children:[Object(O.jsx)("div",{style:{height:250,padding:10,alignItems:"center",display:"flex"},children:Object(O.jsx)("img",{src:t.image,width:120,alt:"checkout product img"})}),Object(O.jsxs)("div",{className:"product__info",children:[Object(O.jsx)("p",{className:"product__title",children:t.title}),Object(O.jsx)("p",{className:"product__description",children:t.description}),Object(O.jsxs)("div",{className:"controls",children:[Object(O.jsx)("span",{className:"add__button",onClick:function(){var e=t.id;n(Z({id:e}))},children:"+"}),Object(O.jsx)("span",{children:c}),Object(O.jsx)("span",{className:"remove__button",onClick:function(){var e=t.id;n(K({id:e}))},children:"-"})]})]})]}),Object(O.jsx)("div",{style:te.productRowLeft,children:Object(O.jsxs)("p",{style:te.productPrice,children:["$ ",t.price]})})]})},ne=c(148),ie=c(53),ae=c(116),se=c.n(ae),re=c(149),oe=c.p+"static/media/img3.3c679063.jpg",le=c(150),de=c.n(le),je=(c(203),c(257)),ue={iconStyle:"solid",style:{base:{iconColor:"greenyellow",color:"#black",fontWeight:500,fontFamily:"Roboto, Open Sans, Segoe UI, sans-serif",fontSize:"22px",fontSmoothing:"antialiased",":-webkit-autofill":{color:"#fce883"},"::placeholder":{color:"grey"}},invalid:{iconColor:"Red",color:"black"}}};function be(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(ie.useStripe)(),s=Object(ie.useElements)(),r=function(){var e=Object(re.a)(se.a.mark((function e(t){var c,i,r,o;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.createPaymentMethod({type:"card",card:s.getElement(ie.CardElement)});case 3:if(c=e.sent,i=c.error,r=c.paymentMethod,i){e.next=19;break}return e.prev=7,o=r.id,e.next=11,de.a.post("".concat("http://192.168.3.46:5000/posts/payments"),{amount:9999999,id:o});case 11:e.sent.data.success&&n(!0),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(7);case 17:e.next=19;break;case 19:case"end":return e.stop()}}),e,null,[[7,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(O.Fragment,{children:c?Object(O.jsxs)("div",{className:"success",style:{height:"100vh",width:"100vw",display:"flex",placeItems:"center",alignItems:"centre",justifyContent:"center",flexDirection:"column"},children:[Object(O.jsx)("h2",{children:" Thanks for shopping with us "}),Object(O.jsx)(m.b,{to:"/",children:Object(O.jsx)(je.a,{className:"button2",children:"Continue Shopping"})})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"logo",children:Object(O.jsx)("img",{src:oe,alt:"payment form illustration"})}),Object(O.jsx)("div",{className:"data",children:Object(O.jsxs)("form",{onSubmit:r,children:[Object(O.jsx)("fieldset",{className:"FormGroup",children:Object(O.jsx)("div",{className:"FormRow",children:Object(O.jsx)(ie.CardElement,{options:ue})})}),Object(O.jsx)("div",{className:"button1",children:Object(O.jsx)("button",{children:Object(O.jsx)("h1",{children:"Pay"})})})]})})]})})}var he=Object(ne.a)("pk_test_51JstOkSDisUUgHqFHnU6IkKcNSP8MQWonNBIhA51ZbIGc4ilNlxbbJCrKHsqhhMTIxPfVRY5CqLSwkt95SGrbTVc0092fl6wiW");function me(){return Object(O.jsx)(ie.Elements,{stripe:he,children:Object(O.jsx)(be,{})})}var Oe=function(){var e=Object(J.c)(X),t=Object(J.c)($),c=Object(i.useState)(!1),n=Object(o.a)(c,2),a=n[0],s=n[1];return a?Object(O.jsx)(me,{}):Object(O.jsxs)("div",{className:"checkout",children:[Object(O.jsx)(v,{}),0===e.length?Object(O.jsxs)("div",{className:"no__product",children:[Object(O.jsx)("img",{src:A,alt:"cart empty"}),Object(O.jsx)("span",{children:"Your Cart is Empty"})]}):Object(O.jsxs)("div",{className:"products",children:[Object(O.jsx)("div",{className:"products__list",children:e.map((function(e,t){return Object(O.jsx)(ce,{product:e,quantity:e.quantity},t)}))}),Object(O.jsx)("div",{className:"total__section",children:Object(O.jsxs)("div",{className:"total__section__inner",children:[Object(O.jsxs)("span",{style:{display:"flex",fontSize:16,justifyContent:"center",cursor:"default",userSelect:"none"},children:[Object(O.jsx)(S.a,{name:"check circle",color:"green"}),"Your Order is eligble for free delivery"]}),Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:40,marginBottom:20,marginTop:20,backgroundColor:"white"},children:[Object(O.jsxs)("span",{style:{fontSize:20,fontWeight:"600",marginLeft:20},children:["Subtotal (",e.length,": item)"]}),Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(O.jsx)(S.a,{name:"dollar",size:"mini",className:"rupee-icon"}),Object(O.jsx)("span",{style:{fontSize:18,fontWeight:"600"},children:t})]})]}),Object(O.jsx)("div",{style:{paddingLeft:20,paddingRight:20},children:Object(O.jsx)("div",{className:"checkout__btn",onClick:function(){return s(!0)},children:"Proceed to Checkout"})})]})})]})]})};function xe(e){return e.length<8?"Password must be 8 digit long":""}var pe=function(e){return!e||e.length<10?"Please enter yout Mobile no.":""},fe=function(e){return e?e.length<3?"Name should contain atleast 3 char":"":"Please enter your name"},ge=function(e){return"admin"==e.toLowerCase()?"You can choose only Seller or Buyer":"buyer"!=e.toLowerCase()&&"seller"!=e.toLowerCase()?"Please select valid role":""};var ve=function(){var e=Object(z.g)(),t=f(),c=Object(o.a)(t,2);Object(I.a)(c[0]);var n=c[1],a=Object(i.useState)({name:"",error:""}),s=Object(o.a)(a,2),r=s[0],l=s[1],d=Object(i.useState)({dob:"",error:""}),j=Object(o.a)(d,2),u=j[0],b=j[1],h=Object(i.useState)({email:"",error:""}),m=Object(o.a)(h,2),x=m[0],p=m[1],g=Object(i.useState)({mobile:"",error:""}),v=Object(o.a)(g,2),y=v[0],_=v[1],N=Object(i.useState)({password:"",error:""}),w=Object(o.a)(N,2),k=w[0],C=w[1],S=Object(i.useState)({role:"",error:""}),B=Object(o.a)(S,2),P=B[0],T=B[1],W=Object(i.useState)(),q=Object(o.a)(W,2),D=q[0],A=q[1];return Object(O.jsxs)("div",{className:"Login",children:[Object(O.jsx)("div",{className:"login__left",children:Object(O.jsx)("img",{src:R,alt:"login page illustration"})}),Object(O.jsx)("div",{className:"login__right",children:Object(O.jsxs)("div",{className:"right__main",children:[Object(O.jsx)("p",{children:"Sign In"}),Object(O.jsxs)("div",{className:"inputs",children:[Object(O.jsx)(F.a,{className:"text-field",id:"outlined-text-input",label:"Your Full Name",type:"text",autoComplete:"current-name",fullWidth:!0,error:r.error,variant:"outlined",onChange:function(e){return l(Object(L.a)(Object(L.a)({},r),{},{name:e.target.value,error:fe(e.target.value)}))}}),Object(O.jsx)("span",{style:{color:"red"},children:r.error}),Object(O.jsx)(F.a,{className:"text-field",id:"outlined-email-input",label:"Email",type:"email",autoComplete:"current-email",fullWidth:!0,variant:"outlined",onChange:function(e){return p(Object(L.a)(Object(L.a)({},x),{},{email:e.target.value}))}}),Object(O.jsx)("span",{style:{color:"red"},children:x.error}),Object(O.jsx)(F.a,{className:"text-field",id:"outlined-password-input",label:"Date of birth",type:"date",error:u.error,fullWidth:!0,variant:"outlined",onChange:function(e){var t;b(Object(L.a)(Object(L.a)({},u),{},{dob:e.target.value,error:(t=e.target.value,t?"":"Please enter your D.O.B")}))}}),Object(O.jsx)("span",{style:{color:"red"},children:u.error}),Object(O.jsx)(F.a,{className:"text-field",id:"outlined-tel-input",label:"Mobile number",type:"number",autoComplete:"current-mobile",fullWidth:!0,error:y.error,onChange:function(e){e.target.value.length<=10?_(Object(L.a)(Object(L.a)({},y),{},{mobile:e.target.value,error:pe(e.target.value)})):e.target.value=y.mobile},variant:"outlined"}),Object(O.jsx)("span",{style:{color:"red"},children:y.error}),Object(O.jsx)(F.a,{className:"text-field",id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password",fullWidth:!0,error:k.error,variant:"outlined",onChange:function(e){C(Object(L.a)(Object(L.a)({},k),{},{password:e.target.value,error:xe(e.target.value)}))}}),Object(O.jsx)("span",{style:{color:"red"},children:k.error}),Object(O.jsx)(F.a,{className:"text-field",id:"outlined-password-input",label:"Confirm password",type:"password",autoComplete:"current-password",fullWidth:!0,variant:"outlined",error:D,onChange:function(e){e.target.value!==k.password?A("password and confirm password must be equal"):A("")}}),Object(O.jsx)("span",{style:{color:"red"},children:D}),Object(O.jsx)(F.a,{id:"outlined-password-input",label:"Role",type:"text",autoComplete:"current-password",fullWidth:!0,variant:"outlined",error:P.error,onChange:function(e){T(Object(L.a)(Object(L.a)({},P),{},{role:e.target.value,error:ge(e.target.value)}))}}),Object(O.jsx)("span",{children:P.error}),Object(O.jsx)("div",{className:"login__button",onClick:function(){r.error||u.error||y.error||k.error||D||x.error||P.error||fetch("".concat("http://192.168.3.46:5000","/api/auth/register"),{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r.name,email:x.email,password:k.password,dob:u.dob,mobile:y.mobile,role:P.role})}).then((function(e){return e.json()})).then((function(t){n({type:H,user:Object(M.a)(t.accesstoken).user}),n({type:E,token:t.accesstoken}),e.push("/")}))},children:"Sign in"})]})]})})]})};c(206);var ye=function(){var e=Object(J.b)(),t=Object(z.h)().productId,c=Object(i.useState)({}),n=Object(o.a)(c,2),a=n[0],s=n[1];return Object(i.useEffect)((function(){fetch("".concat("https://fakestoreapi.com/","products/").concat(t)).then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(O.jsxs)("div",{className:"item__page",children:[Object(O.jsx)(v,{}),Object(O.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:100,height:"100%"},children:[Object(O.jsx)("div",{className:"left__div",children:Object(O.jsx)("img",{src:a.image,alt:"product "})}),Object(O.jsx)("div",{className:"right__div",children:Object(O.jsxs)("div",{className:"info__section",children:[Object(O.jsx)("h2",{className:"product__title",children:a.title}),Object(O.jsx)("p",{className:"product__description",children:a.description}),Object(O.jsxs)("div",{style:{paddingInline:20,display:"flex",alignItems:"center"},children:[Object(O.jsx)(S.a,{name:"rupee",size:"big",className:"rupee-icon"}),":",Object(O.jsx)("p",{style:{fontSize:20,fontWeight:"bold"},children:a.price})]}),Object(O.jsxs)("div",{style:{paddingInline:20},children:[Object(O.jsx)("div",{className:"add__to__cart",onClick:function(){var t=Object(L.a)(Object(L.a)({},a),{},{quantity:1});e(U(t))},children:"Add to Cart"}),Object(O.jsx)("div",{className:"buy__now",children:"Buy Now"})]})]})})]}),Object(O.jsx)(P,{})]})};c(207);var _e=function(){return Object(O.jsxs)("div",{className:"error__page",children:[Object(O.jsx)("img",{className:"banner",src:"https://res.cloudinary.com/practicaldev/image/fetch/s--upMfnEaM--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/7aqcppklh6bexoa70320.jpg",alt:"error",srcset:""}),Object(O.jsx)(m.b,{to:"/",children:Object(O.jsx)("button",{className:"btn",children:"Go Back"})})]})};c(208);var Ne=function(){var e=f(),t=Object(o.a)(e,1)[0].user;return Object(O.jsxs)("div",{style:{background:"white",display:"flex",width:800,borderRadius:10,padding:40},className:"user__card",children:[Object(O.jsx)("div",{style:{background:"white",alignItems:"center",display:"grid",placeItems:"center"},children:Object(O.jsx)("img",{className:"user__image",src:t.image,alt:"user",style:{objectFit:"contain",width:200,borderRadius:"50%",background:"white"}})}),Object(O.jsxs)("div",{style:{paddingInline:20,background:"white",height:"100%",padding:20,display:"flex",flexDirection:"column"},children:[Object(O.jsxs)("div",{style:we.dataField,children:["Name : ",Object(O.jsx)("span",{style:{fontWeight:300},children:t.name})]}),Object(O.jsxs)("div",{style:we.dataField,children:["DOB : ",Object(O.jsx)("span",{style:{fontWeight:300},children:t.dob})]}),Object(O.jsxs)("div",{style:we.dataField,children:["Email : ",Object(O.jsx)("span",{style:{fontWeight:300},children:t.email})]}),Object(O.jsxs)("div",{style:we.dataField,children:["Role : ",Object(O.jsx)("span",{style:{fontWeight:300},children:t.role})]}),Object(O.jsxs)("div",{style:we.dataField,children:["Address :",Object(O.jsxs)("div",{children:[Object(O.jsxs)("span",{style:{fontWeight:300},children:[t.address.flat,", ",t.address.locality," "]}),Object(O.jsxs)("span",{style:{fontWeight:300},children:[t.address.district," ",t.address.state,"-",t.address.pin]})]})]})]})]})},we={dataField:{fontSize:20,color:"black",fontWeight:400,width:400,padding:10,borderRadius:5,marginBlock:5}};c(209);var ke=function(){var e=f(),t=Object(o.a)(e,2),c=t[0].user,n=t[1],a=f(),s=Object(o.a)(a,2),r=s[0].accesstoken,l=(s[1],Object(i.useState)({email:c.email,error:""})),d=Object(o.a)(l,2),j=d[0],u=d[1],b=Object(i.useState)({mobile:c.mobile,error:""}),h=Object(o.a)(b,2),m=h[0],x=h[1],p=Object(i.useState)(c.address),g=Object(o.a)(p,2),v=g[0],y=g[1];return Object(O.jsxs)("div",{typeof:"",style:{width:"40%"},children:[Object(O.jsx)(F.a,{className:"text-field",id:"outlined-text-input",type:"number",autoComplete:"current-mobile",fullWidth:!0,value:m.mobile,variant:"outlined",style:{marginBlock:20},error:m.error,onChange:function(e){return x(Object(L.a)(Object(L.a)({},m),{},{mobile:e.target.value,error:pe(e.target.value)}))}}),Object(O.jsx)(F.a,{className:"text-field",id:"outlined-text-input",type:"email",autoComplete:"current-email",fullWidth:!0,value:j.email,variant:"outlined",style:{marginBlock:20},error:j.error,onChange:function(e){return u(Object(L.a)(Object(L.a)({},j),{},{email:e.target.value}))}}),Object(O.jsx)(F.a,{className:"text-field",label:"Building or Flat no.",id:"outlined-text-input",type:"text",autoComplete:"current-address",fullWidth:!0,variant:"outlined",style:{marginBlock:20},onChange:function(e){return y(Object(L.a)(Object(L.a)({},v),{},{flat:e.target.value}))}}),Object(O.jsx)(F.a,{className:"text-filed",label:"Locality",id:"outlined-text-input",type:"text",autoComplete:"current-state",variant:"outlined",style:{marginBlock:20},onChange:function(e){return y(Object(L.a)(Object(L.a)({},v),{},{locality:e.target.value}))}}),Object(O.jsx)(F.a,{className:"text-field",label:"State",id:"outlined-text-input",type:"text",autoComplete:"current-state",variant:"outlined",style:{marginBlock:20},onChange:function(e){return y(Object(L.a)(Object(L.a)({},v),{},{state:e.target.value}))}}),Object(O.jsx)(F.a,{className:"text-field",label:"District",id:"outlined-text-input",type:"text",autoComplete:"current-state",variant:"outlined",style:{marginBlock:20},onChange:function(e){return y(Object(L.a)(Object(L.a)({},v),{},{district:e.target.value}))}}),Object(O.jsx)(F.a,{className:"text-field",label:"PIN Code",id:"outlined-text-input",type:"number",autoComplete:"current-state",variant:"outlined",style:{marginBlock:20},onChange:function(e){return y(Object(L.a)(Object(L.a)({},v),{},{pin:e.target.value}))}}),Object(O.jsx)("button",{type:"",onClick:function(){fetch("".concat("http://192.168.3.46:5000","/update/profile"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify({email:c.email,newemail:j.email,address:v,mobile:m.mobile})}).then((function(e){return e.json()})).then((function(e){n({type:H,user:e})}))},children:"Save Changes"})]})};var Ce=function(){var e=f(),t=Object(o.a)(e,2),c=t[0].user,n=t[1],i=Object(z.g)();return Object(O.jsxs)("div",{className:"profile",children:[Object(O.jsx)(v,{}),Object(O.jsxs)("div",{style:{marginBlock:100,height:"100vh",padding:20},children:[Object(O.jsxs)("div",{style:{display:"flex"},children:[Object(O.jsx)(Ne,{}),Object(O.jsx)("div",{style:{margin:20},className:"edit__details",onClick:function(){n({type:H,user:null}),n({type:E,accesstoken:null}),i.push("/")},children:"Logout"}),"admin"===c.role?Object(O.jsx)(m.b,{to:"/userPage",children:Object(O.jsx)("div",{className:"edit__details",style:{margin:20},children:"See all users"})}):Object(O.jsx)("div",{})]}),Object(O.jsx)(ke,{})]})]})};c(210),c(211);var Se=function(e){var t=e.user;return Object(O.jsxs)("div",{className:"details",children:[Object(O.jsx)("div",{className:"name",children:Object(O.jsx)("h2",{children:t.name})}),Object(O.jsx)("div",{className:"role",children:Object(O.jsx)("h2",{children:t.role})}),Object(O.jsxs)("div",{className:"del",onClick:function(){fetch("http://192.168.1.11:5000/user/delete",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_name:t.user_name})})},children:[Object(O.jsx)(S.a,{name:"trash icon"}),"remove"]})]})};var Be=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){fetch("".concat("http://192.168.3.46:5000","/user/getall")).then((function(e){return e.json()})).then((function(e){n(e.users)}))}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"heading",children:Object(O.jsx)("h1",{children:"User Details"})}),Object(O.jsx)("div",{className:"user_detail",children:c.map((function(e,t){return Object(O.jsx)(Se,{user:e},t)}))})]})};var Pe=function(){var e=f(),t=Object(o.a)(e,1)[0].user;return Object(O.jsx)(m.a,{children:t?Object(O.jsxs)(z.d,{children:[Object(O.jsx)(z.b,{component:W,exact:!0,path:"/"}),Object(O.jsx)(z.b,{component:Oe,exact:!0,path:"/checkout"}),Object(O.jsx)(z.b,{component:ye,exact:!0,path:"/product:productId"}),Object(O.jsx)(z.b,{component:me,exact:!0,path:"/payment"}),Object(O.jsx)(z.b,{component:Ce,exact:!0,path:"/profile"}),Object(O.jsx)(z.b,{component:Be,exact:!0,path:"/userPage"}),Object(O.jsx)(z.b,{component:_e,exact:!0,path:"/404"}),Object(O.jsx)(z.a,{to:"/"})]}):Object(O.jsxs)(z.d,{children:[Object(O.jsx)(z.b,{component:D,exact:!0,path:"/login"}),Object(O.jsx)(z.b,{component:ve,exact:!0,path:"/signup"}),Object(O.jsx)(z.b,{component:_e,exact:!0,path:"/404"}),Object(O.jsx)(z.a,{to:"/login"})]})})};var Te=function(){Object(z.g)();var e=f(),t=Object(o.a)(e,2),c=(t[0].user,t[1]),n=Object(i.useState)(!1),a=Object(o.a)(n,2),s=a[0],r=a[1];return Object(i.useEffect)((function(){fetch("".concat("http://192.168.3.46:5000/api/auth/refreshLogin"),{method:"POST",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.error||(c({type:H,user:Object(M.a)(e.accesstoken).user}),c({type:E,accesstoken:e.accesstoken})),r(!1)}))}),[]),s?Object(O.jsx)("h1",{children:"Loading..."}):Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(Pe,{})})},We=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,260)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))},Ie=(c(212),Object(G.b)({name:"product",initialState:{id:""},reducers:{changeProduct:function(e,t){e.id=t.payload}}})),Fe=(Ie.actions.changeProduct,Ie.reducer),Re=Object(G.a)({reducer:{basket:ee,product:Fe}});r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(J.a,{store:Re,children:Object(O.jsx)(p,Object(n.a)({initialState:{user:null,accesstoken:null},reducer:q,children:Te},"children",Object(O.jsx)(Te,{})))})}),document.getElementById("root")),We()}},[[213,1,2]]]);
//# sourceMappingURL=main.ee9e1d43.chunk.js.map