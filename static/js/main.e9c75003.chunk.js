(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{329:function(e,t,n){},385:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(47),r=n.n(a),s=n(73),i=n(21),o=(n(216),n(2)),l=n.n(o),u=n(5),j=n(396),d=n(400),b=n(401),h=n(402),f=n(403),O=n(398),m=n(112),p=n(111),x=n(34),v=(n(218),n(387),n(386),x.a.initializeApp({apiKey:"AIzaSyDDC2lCsy2fGuJsLkttIlrGWFwkgoaww5o",authDomain:"chat-web-app-a7729.firebaseapp.com",databaseURL:"https://chat-web-app-a7729-default-rtdb.firebaseio.com",projectId:"chat-web-app-a7729",storageBucket:"chat-web-app-a7729.appspot.com",messagingSenderId:"985916971305",appId:"1:985916971305:web:939220a984941e1d04bf38"})),g=v.auth(),k=v.database(),w=v.storage(),y=n(4),C=function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.signInWithPopup(t);case 3:if(n=e.sent,c=n.additionalUserInfo,a=n.user,!c.isNewUser){e.next=9;break}return e.next=9,k.ref("/profiles/".concat(a.uid)).set({name:a.displayName,createdAt:x.a.database.ServerValue.TIMESTAMP});case 9:j.a.success("Signed In",4e3),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),j.a.error(e.t0.message,4e3);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)(d.a,{children:[Object(y.jsxs)(b.a,{className:"mt-page",children:[Object(y.jsxs)(h.a,{children:[Object(y.jsxs)(f.a,{xs:24,md:12,mdOffset:6,children:[Object(y.jsxs)(O.a,{children:[Object(y.jsxs)("div",{className:"text-center",children:[Object(y.jsx)("h2",{children:" Welcome to chat - app "})," ",Object(y.jsx)("p",{children:" A progressive chat platform "})," "]})," ",Object(y.jsxs)("div",{className:"mt-3",children:[Object(y.jsxs)(m.a,{block:!0,color:"green",onClick:function(){e(new x.a.auth.GoogleAuthProvider)},children:[Object(y.jsx)(p.a,{icon:"google"})," Continue With Google "]})," ",Object(y.jsxs)(m.a,{block:!0,color:"blue",onClick:function(){e(new x.a.auth.FacebookAuthProvider)},children:[Object(y.jsx)(p.a,{icon:"facebook"})," Continue With Facebook "]})," "]})," "]})," "]})," "]})," "]})," "]})},N=(n(329),n(23)),S=n(43),A=n(404),T=n(17),D={state:"offline",last_changed:x.a.database.ServerValue.TIMESTAMP},I={state:"online",last_changed:x.a.database.ServerValue.TIMESTAMP},L=Object(c.createContext)(),U=function(e){var t=e.children,n=Object(c.useState)(null),a=Object(T.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(!0),o=Object(T.a)(i,2),l=o[0],u=o[1];return Object(c.useEffect)((function(){var e,t,n=g.onAuthStateChanged((function(n){n?(t=k.ref("/status/".concat(n.uid)),(e=k.ref("/profiles/".concat(n.uid))).on("value",(function(e){var t=e.val(),c={name:t.name,createdAt:t.createdAt,avatar:t.avatar,uid:n.uid,email:n.email};s(c),u(!1)})),k.ref(".info/connected").on("value",(function(e){!1!==!!e.val()&&t.onDisconnect().set(D).then((function(){t.set(I)}))}))):(e&&e.off(),t&&t.off(),k.ref(".info/connected").off(),s(null),u(!1))}));return function(){n(),k.ref(".info/connected").off(),e&&e.off(),t&&t.off()}}),[]),Object(y.jsx)(L.Provider,{value:{isLoading:l,profile:r},children:t})},M=function(){return Object(c.useContext)(L)},E=["children"],F=function(e){var t=e.children,n=Object(S.a)(e,E),c=M(),a=c.isLoading,r=c.profile;return a&&!r?Object(y.jsx)(d.a,{children:Object(y.jsx)(A.a,{center:!0,vertical:!0,size:"md",content:"Loading",speed:"slow"})}):r||a?Object(y.jsx)(i.b,Object(N.a)(Object(N.a)({},n),{},{children:t})):Object(y.jsx)(i.a,{to:"/signin"})},H=n(410),B=n(8),P=n(405),R=n(390),V=n(406),z=n(391),q=n(407),G=n(397);function W(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(c.useState)(e),n=Object(T.a)(t,2),a=n[0],r=n[1],s=Object(c.useCallback)((function(){return r(!0)}),[]),i=Object(c.useCallback)((function(){return r(!1)}),[]);return{isOpen:a,open:s,close:i}}var _=function(e){var t=Object(c.useState)((function(){return window.matchMedia(e).matches})),n=Object(T.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){var t=window.matchMedia(e);r(t.matches);var n=function(e){return r(e.matches)};return t.addListener(n),function(){return t.removeListener(n)}}),[e]),a};var J=P.a.Types.StringType,K=P.a.Model({name:J().isRequired("Chat name is required"),description:J().isRequired("Description is required")}),Y={name:"",description:""},Q=function(){var e=W(),t=e.isOpen,n=e.open,a=e.close,r=Object(c.useState)(),s=Object(T.a)(r,2),i=s[0],o=s[1],d=Object(c.useState)(!1),b=Object(T.a)(d,2),h=b[0],f=b[1],O=Object(c.useRef)(),v=Object(c.useCallback)((function(e){o(e)}),[]),w=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O.current.check()){e.next=2;break}return e.abrupt("return");case 2:return f(!0),t=Object(N.a)(Object(N.a)({},i),{},{createdAt:x.a.database.ServerValue.TIMESTAMP,admins:Object(B.a)({},g.currentUser.uid,!0)}),e.prev=4,e.next=7,k.ref("rooms").push(t);case 7:j.a.info("".concat(i.name," has been created"),4e3),f(!1),o(Y),a(),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(4),f(!1),j.a.error(e.t0.message,4e3);case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"mt-1",children:[Object(y.jsxs)(m.a,{onClick:n,color:"green",block:!0,children:[Object(y.jsx)(p.a,{icon:"creative"})," Create new chat room"]}),Object(y.jsxs)(R.a,{show:t,onHide:a,children:[Object(y.jsx)(R.a.Header,{children:Object(y.jsx)(R.a.Title,{children:"New chat room"})}),Object(y.jsx)(R.a.Body,{children:Object(y.jsxs)(V.a,{fluid:!0,onChange:v,formValue:i,model:K,ref:O,children:[Object(y.jsxs)(z.a,{children:[Object(y.jsx)(q.a,{children:"Room Name"}),Object(y.jsx)(G.a,{name:"name",placeholder:"Enter room name..."})]}),Object(y.jsxs)(z.a,{children:[Object(y.jsx)(q.a,{children:"Description"}),Object(y.jsx)(G.a,{componentClass:"textarea",name:"description",placeholder:"Enter room description..."})]})]})}),Object(y.jsx)(R.a.Footer,{children:Object(y.jsx)(m.a,{block:!0,appearance:"primary",onClick:w,disabled:h,children:"Create Chat Room"})})]})]})},X=n(399);function Z(e){var t=e.toUpperCase().split(" "),n="";return t.forEach((function(e){n+=e[0]})),n}function $(e){return e?Object.keys(e).map((function(t){return Object(N.a)(Object(N.a)({},e[t]),{},{id:t})})):[]}function ee(e,t,n,c){return te.apply(this,arguments)}function te(){return(te=Object(u.a)(l.a.mark((function e(t,n,c,a){var r,s,i,o,u,j,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r={})["/profiles/".concat(t,"/").concat(n)]=c,s=a.ref("/messages").orderByChild("author/uid").equalTo(t).once("value"),i=a.ref("/rooms").orderByChild("lastMessage/author/uid").equalTo(t).once("value"),e.next=6,Promise.all([s,i]);case 6:return o=e.sent,u=Object(T.a)(o,2),j=u[0],d=u[1],j.forEach((function(e){r["/messages/".concat(e.key,"/author/").concat(n)]=c})),d.forEach((function(e){r["/rooms/".concat(e.key,"/lastMessage/author/").concat(n)]=c})),e.abrupt("return",r);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ne=n(203),ce=n.n(ne),ae=n(408),re=["name"],se=function(e){var t=e.name,n=Object(S.a)(e,re);return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(ae.a,Object(N.a)(Object(N.a)({circle:!0},n),{},{children:Z(t)}))})},ie=["image/png","image/jpeg","image/pjpeg"],oe=function(){var e=W(),t=e.isOpen,n=e.open,a=e.close,r=Object(c.useState)(null),s=Object(T.a)(r,2),i=s[0],o=s[1],d=Object(c.useRef)(),b=Object(c.useState)(!1),h=Object(T.a)(b,2),f=h[0],O=h[1],p=M().profile,x=function(e){return new Promise((function(t,n){e.toBlob((function(e){e?t(e):n(new Error("File process error"))}))}))},v=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,c,a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.current.getImageScaledToCanvas(),O(!0),e.prev=2,e.next=5,x(t);case 5:return n=e.sent,c=w.ref("/profile/".concat(p.uid)).child("avatar"),e.next=9,c.put(n,{cacheControl:"public, max-age=".concat(259200)});case 9:return a=e.sent,e.next=12,a.ref.getDownloadURL();case 12:return r=e.sent,e.next=15,ee(p.uid,"avatar",r,k);case 15:return s=e.sent,e.next=18,k.ref().update(s);case 18:j.a.info("Avatar has been uploaded",4e3),O(!1),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(2),j.a.error(e.t0.message,4e3),O(!1);case 26:case"end":return e.stop()}}),e,null,[[2,22]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"mt-3 text-center",children:[Object(y.jsx)(se,{src:p.avatar,name:p.name,className:"width-200 height-200 img-fullsize font-huge"}),Object(y.jsxs)("div",{children:[Object(y.jsxs)("label",{htmlFor:"avatar-upload",className:"d-block cursor-pointer padded",children:["Select new Avatar",Object(y.jsx)("input",{id:"avatar-upload",type:"file",className:"d-none",accept:".png, .jpeg, .jpg",onChange:function(e){var t=e.target.files;if(1===t.length){var c=t[0];!function(e){return ie.includes(e.type)}(c)?j.a.warning("Oh boy, you selected the wrong file type ".concat(c.type)):(o(c),n())}}})]}),Object(y.jsxs)(R.a,{show:t,onHide:a,children:[Object(y.jsx)(R.a.Header,{children:Object(y.jsx)(R.a.Title,{children:"Adjust and Upload your new Avatar"})}),Object(y.jsx)(R.a.Body,{children:i&&Object(y.jsx)("div",{className:"d-flex justify-content-center align-items-center h-100",children:Object(y.jsx)(ce.a,{ref:d,image:i,width:200,height:200,border:10,borderRadius:100,rotate:0})})}),Object(y.jsx)(R.a.Footer,{children:Object(y.jsx)(m.a,{appearance:"ghost",block:!0,onClick:v,disabled:f,children:"Upload Avatar"})})]})]})]})},le=n(393),ue=n(210),je=["initialValue","onSave","label","placeholder","emptyMsg","wrapperClassName"],de=function(e){var t=e.initialValue,n=e.onSave,a=e.label,r=void 0===a?null:a,s=e.placeholder,i=void 0===s?"Write your name":s,o=e.emptyMsg,d=void 0===o?"Input is empty":o,b=e.wrapperClassName,h=void 0===b?"":b,f=Object(S.a)(e,je),O=Object(c.useState)(t),m=Object(T.a)(O,2),x=m[0],v=m[1],g=Object(c.useState)(!1),k=Object(T.a)(g,2),w=k[0],C=k[1],A=Object(c.useCallback)((function(e){v(e)}),[]),D=Object(c.useCallback)((function(){C((function(e){return!e})),v(t)}),[t]),I=function(){var e=Object(u.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===(c=x.trim())&&(j.a.info(d,4e3),v(t)),c===t){e.next=5;break}return e.next=5,n(c);case 5:C(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:h,children:[r,Object(y.jsxs)(le.a,{children:[Object(y.jsx)(ue.a,Object(N.a)(Object(N.a)({},f),{},{disabled:!w,placeholder:i,value:x,onChange:A})),Object(y.jsx)(le.a.Button,{onClick:D,children:Object(y.jsx)(p.a,{icon:w?"close":"edit2"})}),w&&Object(y.jsx)(le.a.Button,{onClick:I,children:Object(y.jsx)(p.a,{icon:"check"})})]})]})},be=n(409),he=function(){var e=Object(c.useState)({"google.com":g.currentUser.providerData.some((function(e){return"google.com"===e.providerId})),"facebook.com":g.currentUser.providerData.some((function(e){return"facebook.com"===e.providerId}))}),t=Object(T.a)(e,2),n=t[0],a=t[1],r=function(e,t){return a((function(n){return Object(N.a)(Object(N.a)({},n),{},Object(B.a)({},e,t))}))},s=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,1!==g.currentUser.providerData.length){e.next=3;break}throw new Error("You can not disconnect from your only Login method.");case 3:return e.next=5,g.currentUser.unlink(t);case 5:r(t,!1),j.a.info("Disconnected from ".concat(t),4e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),j.a.error(e.t0.message,4e3);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.signInWithPopup(t);case 3:j.a.success("Linked to ".concat(t.providerId),4e3),r(t.providerId,!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),j.a.error(e.t0.message,4e3);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{children:[n["google.com"]&&Object(y.jsxs)(be.a,{closable:!0,color:"green",onClose:function(){return s("google.com")},children:[Object(y.jsx)(p.a,{icon:"google"})," Connected"]}),n["facebook.com"]&&Object(y.jsxs)(be.a,{closable:!0,color:"blue",onClose:function(){return s("facebook.com")},children:[Object(y.jsx)(p.a,{icon:"facebook"})," Connected"]}),Object(y.jsxs)("div",{className:"mt-2",children:[!n["google.com"]&&Object(y.jsxs)(m.a,{block:!0,color:"green",onClick:function(){i(new x.a.auth.GoogleAuthProvider)},children:[Object(y.jsx)(p.a,{icon:"google"})," Link to Google Account"]}),!n["facebook.com"]&&Object(y.jsxs)(m.a,{block:!0,color:"blue ",onClick:function(){i(new x.a.auth.FacebookAuthProvider)},children:[Object(y.jsx)(p.a,{icon:"facebook"})," Link to Facebook Account"]})]})]})},fe=function(e){var t=e.onSignOut,n=M().profile,c=function(){var e=Object(u.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee(n.uid,"name",t,k);case 3:return c=e.sent,e.next=6,k.ref().update(c);case 6:j.a.success("Username Updated!!",4e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),j.a.error(e.t0.message,4e3);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(X.a.Header,{children:Object(y.jsx)(X.a.Title,{children:"Dashboard"})}),Object(y.jsxs)(X.a.Body,{children:[Object(y.jsxs)("h3",{className:"pb-2",children:["Hey, ",n.name]}),Object(y.jsx)(he,{}),Object(y.jsx)(H.a,{}),Object(y.jsx)(de,{name:"nickname",initialValue:n.name,onSave:c,label:Object(y.jsx)("h6",{className:"mb-2",children:"Nickname"})}),Object(y.jsx)(oe,{})]}),Object(y.jsx)(X.a.Footer,{children:Object(y.jsx)(m.a,{block:!0,color:"red",onClick:t,children:"Sign Out"})})]})},Oe=function(){var e=W(),t=e.isOpen,n=e.open,a=e.close,r=_("(max-width:992px)"),s=Object(c.useCallback)((function(){k.ref("/status/".concat(g.currentUser.uid)).set(D).then((function(){g.signOut(),j.a.info("Signed Out",4e3),a()})).catch((function(e){j.a.error(e.message,4e3)}))}),[a]);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(m.a,{block:!0,color:"blue",onClick:n,children:[Object(y.jsx)(p.a,{icon:"dashboard"})," Dashboard"]}),Object(y.jsx)(X.a,{full:r,show:t,onHide:a,placement:"left",children:Object(y.jsx)(fe,{onSignOut:s})})]})},me=n(394),pe=Object(c.createContext)(),xe=function(e){var t=e.children,n=Object(c.useState)(null),a=Object(T.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){var e=k.ref("rooms");return e.on("value",(function(e){var t=$(e.val());s(t)})),function(){e.off()}}),[]),Object(y.jsx)(pe.Provider,{value:r,children:t})},ve=function(){return Object(c.useContext)(pe)},ge=n(106),ke=function(e){var t=e.room,n=t.createdAt,c=t.name,a=t.lastMessage;return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(y.jsx)("h3",{className:"text-disappear",children:c}),Object(y.jsx)(ge.a,{datetime:a?new Date(a.createdAt):new Date(n),className:"font-formal text-black-45"})]}),Object(y.jsx)("div",{children:Object(y.jsx)("span",{className:"d-flex align-item-center text-black-70",children:a?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"d-flex align-item-center",children:Object(y.jsx)(se,{src:a.author.avatar,name:a.author.name,sixe:"sm"})}),Object(y.jsxs)("div",{className:"text-disappear ml-2",children:[Object(y.jsx)("div",{className:"italic",children:a.author.name}),Object(y.jsx)("span",{children:a.text||"".concat(a.file.contentType.slice(a.file.contentType.indexOf("/")+1).toUpperCase()," File")})]})]}):Object(y.jsx)("span",{children:"No messages yet..."})})})]})},we=function(e){var t=e.aboveElHeight,n=ve(),c=Object(i.g)();return Object(y.jsxs)(me.a,{appearance:"subtle",vertical:!0,reversed:!0,className:"overflow-y-scroll custom-scroll",style:{height:"calc(100% - ".concat(t,"px - 21px)")},activeKey:c.pathname,children:[!n&&Object(y.jsx)(A.a,{center:!0,vertical:!0,content:"Loading",speed:"normal",size:"md"}),n&&n.length>0&&n.map((function(e){return Object(y.jsx)(me.a.Item,{componentClass:s.b,to:"/chat/".concat(e.id),eventKey:"/chat/".concat(e.id),children:Object(y.jsx)(ke,{room:e})},e.id)}))]})},ye=function(){var e=Object(c.useRef)(),t=Object(c.useState)(0),n=Object(T.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){e.current&&r(e.current.scrollHeight)}),[e]),Object(y.jsxs)("div",{className:"h-100 pt-2",children:[Object(y.jsxs)("div",{ref:e,children:[Object(y.jsx)("div",{children:Object(y.jsx)(Oe,{})}),Object(y.jsx)(Q,{}),Object(y.jsx)(H.a,{children:"Join Conversation"})]}),Object(y.jsx)(we,{aboveElHeight:a})]})},Ce=n(411),Ne=n(149),Se=Object(Ne.a)(),Ae=function(e){var t=e.children,n=e.data;return Object(y.jsx)(Se.Provider,{value:n,children:t})},Te=function(e){return Object(Ne.b)(Se,e)},De=function(){var e=Object(i.h)().chatId,t=W(),n=t.isOpen,c=t.open,a=t.close,r=Te((function(e){return e.name})),s=Te((function(e){return e.description})),o=_("(max-width: 992px)"),l=function(t,n){k.ref("/rooms/".concat(e)).child(t).set(n).then((function(){return j.a.success("Successfully Updates!!!",4e3)})).catch((function(e){return j.a.error(e.message,4e3)}))};return Object(y.jsxs)("div",{children:[Object(y.jsx)(m.a,{className:"br-circle",size:"sm",color:"orange",onClick:c,children:"A"}),Object(y.jsxs)(X.a,{full:o,show:n,onHide:a,placement:"right",children:[Object(y.jsx)(X.a.Header,{className:"font-bolder",children:"Edit Room Information"}),Object(y.jsxs)(X.a.Body,{children:[Object(y.jsx)(de,{initialValue:r,onSave:function(e){l("name",e)},lable:Object(y.jsx)("h6",{className:"mb-2",children:"Name"}),emptyMsg:"Name can not be empty"}),Object(y.jsx)(de,{componentClass:"textarea",rows:5,initialValue:s,onSave:function(e){l("description",e)},lable:Object(y.jsx)("h6",{className:"mb-2",children:"Description"}),emptyMsg:"Description can not be empty",wrapperClassName:"mt-3"})]}),Object(y.jsx)(X.a.Footer,{children:Object(y.jsx)(m.a,{block:!0,onClick:a,color:"cyan",children:"Close"})})]})]})},Ie=Object(c.memo)(De),Le=function(){var e=W(),t=e.isOpen,n=e.open,c=e.close,a=Te((function(e){return e.description})),r=Te((function(e){return e.name}));return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(m.a,{appearance:"link",className:"px-0",onClick:n,children:"Room Information"}),Object(y.jsxs)(R.a,{show:t,onHide:c,children:[Object(y.jsx)(R.a.Header,{children:Object(y.jsxs)(R.a.Title,{children:["About ",r]})}),Object(y.jsxs)(R.a.Body,{children:[Object(y.jsx)("h6",{className:"mb-1",children:"Description"}),Object(y.jsx)("p",{children:a})]}),Object(y.jsx)(R.a.Footer,{children:Object(y.jsx)(m.a,{block:!0,onClick:c,children:"Close"})})]})]})},Ue=Object(c.memo)(Le),Me=function(){var e=Te((function(e){return e.name})),t=_("(max-width:992px"),n=Te((function(e){return e.isAdmin}));return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(y.jsxs)("h4",{className:"text-disappear d-flex align-items-center",children:[Object(y.jsx)(p.a,{componentClass:s.b,to:"/",icon:"arrow-circle-left",className:t?"d-inline-block p-0 mr-2 text-blue link-unstyled":"d-none",size:"2x"}),Object(y.jsx)("span",{className:"text-disappear",children:e})]}),Object(y.jsx)(Ce.a,{className:"ws-nowrap",children:n&&Object(y.jsx)(Ie,{})})]}),Object(y.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(y.jsx)("span",{children:"todo"}),Object(y.jsx)(Ue,{})]})]})},Ee=Object(c.memo)(Me),Fe=n(35),He=n(206),Be=n(212),Pe=n(412),Re=function(e){if(!e)return"grey";switch(e.state){case"online":return"green";case"offline":return"purple";default:return"grey"}},Ve=function(e){return e?"online"===e.state?"Online":"Last online ".concat(new Date(e.last_changed).toLocaleDateString()):"Unnknown State"},ze=function(e){var t=function(e){var t=Object(c.useState)(null),n=Object(T.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){var t=k.ref("status/".concat(e));return t.on("value",(function(e){if(e.exists()){var t=e.val();r(t)}})),function(){t.off()}}),[e]),a}(e.uid);return Object(y.jsx)(He.a,{placement:"top",trigger:"hover",speaker:Object(y.jsx)(Be.a,{children:Ve(t)}),children:Object(y.jsx)(Pe.a,{className:"cursor-poiner",style:{backgroundColor:Re(t)}})})},qe=["profile","children"],Ge=function(e){var t=e.profile,n=e.children,c=Object(S.a)(e,qe),a=W(),r=a.isOpen,s=a.open,i=a.close,o=t.name.split(" ")[0],l=t.name,u=t.avatar,j=t.createdAt,d=new Date(j).toLocaleDateString();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(m.a,Object(N.a)(Object(N.a)({},c),{},{onClick:s,children:o})),Object(y.jsxs)(R.a,{show:r,onHide:i,children:[Object(y.jsx)(R.a.Header,{children:Object(y.jsxs)(R.a.Title,{children:[o," profile"]})}),Object(y.jsxs)(R.a.Body,{className:"text-center",children:[Object(y.jsx)(se,{src:u,name:l,className:"width-200 height-200 img-fullsize font-huge"}),Object(y.jsx)("h4",{className:"mt-2",children:l}),Object(y.jsxs)("p",{children:["Member since ",d]})]}),Object(y.jsxs)(R.a.Footer,{children:[n,Object(y.jsx)(m.a,{block:!0,onClick:i,children:"Close"})]})]})]})},We=n(211),_e=["isVisible","iconName","tooltip","onClick","badgeContent"],Je=function(e){var t=e.condition,n=e.children;return t?Object(y.jsx)(Pe.a,{content:t,children:n}):n},Ke=function(e){var t=e.isVisible,n=e.iconName,c=e.tooltip,a=e.onClick,r=e.badgeContent,s=Object(S.a)(e,_e);return Object(y.jsx)("div",{className:"ml-2",style:{visibility:t?"visible":"hidden"},children:Object(y.jsx)(Je,{condition:r,children:Object(y.jsx)(He.a,{placement:"top",delay:0,delayHide:0,delayShow:0,trigger:"hover",speaker:Object(y.jsx)(Be.a,{children:c}),children:Object(y.jsx)(We.a,Object(N.a)(Object(N.a)({},s),{},{onClick:a,circle:!0,size:"xs",icon:Object(y.jsx)(p.a,{icon:n})}))})})})},Ye=function(e){var t=e.src,n=e.fileName,c=W(),a=c.isOpen,r=c.open,s=c.close;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("input",{type:"image",src:t,alt:"file",onClick:r,className:"mw-100 mh-100 w-auto"}),Object(y.jsxs)(R.a,{show:a,onHide:s,children:[Object(y.jsx)(R.a.Header,{children:Object(y.jsx)(R.a.Title,{children:n})}),Object(y.jsx)(R.a.Body,{children:Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:t,alt:"file",height:"100%",width:"100%"})})}),Object(y.jsx)(R.a.Footer,{children:Object(y.jsx)("a",{href:t,target:"-blank",rel:"noopenner noreferrer",children:"View Original"})})]})]})},Qe=function(e){return e.contentType.includes("image")?Object(y.jsx)("div",{className:"height-220",children:Object(y.jsx)(Ye,{src:e.url,fileName:e.name})}):e.contentType.includes("audio")?Object(y.jsxs)("audio",{controls:!0,children:[Object(y.jsx)("source",{src:e.url,type:"audio/mp3"}),"Your browser does not support the audio element."]}):Object(y.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:["Download ",e.name]})},Xe=function(e){var t=e.message,n=e.handleAdmin,a=e.handleLike,r=e.handleDelete,s=t.author,i=t.createdAt,o=t.text,l=t.file,u=t.likes,j=t.likeCount,d=function(){var e=Object(c.useState)(!1),t=Object(T.a)(e,2),n=t[0],a=t[1],r=Object(c.useRef)(null),s=function(){return a(!0)},i=function(){return a(!1)};return Object(c.useEffect)((function(){var e=r.current;return e&&(e.addEventListener("mouseover",s),e.addEventListener("mouseout",i)),function(){e.removeEventListener("mouseover",s),e.removeEventListener("mouseout",i)}}),[r.current]),[r,n]}(),b=Object(T.a)(d,2),h=b[0],f=b[1],O=_("(max-width:992px)"),p=Te((function(e){return e.isAdmin})),x=Te((function(e){return e.admins})).includes(s.uid),v=g.currentUser.uid===s.uid,k=p&&!v,w=u&&Object.keys(u).includes(g.currentUser.uid),C=f||O;return Object(y.jsxs)("li",{className:"padded mb-1 cursor-pointer ".concat(f?"bg-black-02":""),ref:h,children:[Object(y.jsxs)("div",{className:"d-flex align-items-center  font-bolder mb-1",children:[Object(y.jsx)(ze,{uid:s.uid}),Object(y.jsx)(se,{src:s.avatar,name:s.name,className:"ml-1 ",size:"xs"}),Object(y.jsx)(Ge,{profile:s,appearance:"link",className:"p-0 ml-1 text-black",children:k&&Object(y.jsx)(m.a,{block:!0,onClick:function(){return n(s.uid)},color:"blue",children:x?"Remove Admin privilages":"Grant Admin privilages"})}),Object(y.jsx)(ge.a,{datetime:i,className:"font-formal text-black-45 ml-2"}),Object(y.jsx)(Ke,Object(N.a)(Object(N.a)({},w?{color:"red"}:{}),{},{isVisible:C,iconName:"heart",tooltip:w?"Unlike this message":"Like this message",badgeContent:j,onClick:function(){return a(t.id)}})),v&&Object(y.jsx)(Ke,{isVisible:C,iconName:"close",tooltip:"Delete this message",onClick:function(){return r(t.id,l)}})]}),o&&Object(y.jsx)("div",{className:"word-break-all",children:o}),l&&Qe(l)]})},Ze=Object(c.memo)(Xe),$e=k.ref("/messages");var et=function(){var e=Object(c.useState)(null),t=Object(T.a)(e,2),n=t[0],a=t[1],r=Object(i.h)().chatId,s=Object(c.useState)(15),o=Object(T.a)(s,2),d=o[0],b=o[1],h=Object(c.useRef)(),f=n&&0===n.length,O=n&&n.length>0,p=Object(c.useCallback)((function(e){var t=h.current;$e.off(),$e.orderByChild("roomId").equalTo(r).limitToLast(e||15).on("value",(function(e){var n=$(e.val());(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;return(100*e.scrollTop/(e.scrollHeight-e.clientHeight)||0)>t})(t)&&(t.scrollTop=t.scrollHeight),a(n)})),b((function(e){return e+15}))}),[r]),x=Object(c.useCallback)((function(){var e=h.current,t=e.scrollHeight;p(d),setTimeout((function(){var n=e.scrollHeight;e.scrollTop=n-t}),200)}),[p,d]);Object(c.useEffect)((function(){var e=h.current;return p(),setTimeout((function(){e.scrollTop=e.scrollHeight}),200),function(){$e.off("value")}}),[p]);var v=Object(c.useCallback)(function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=k.ref("/rooms/".concat(r,"/admins")),e.next=3,c.transaction((function(e){return e&&(e[t]?(e[t]=null,n="Admin privilages removed"):(e[t]=!0,n="Admin privilages granted")),e}));case 3:j.a.info(n,4e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[r]),C=Object(c.useCallback)(function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g.currentUser.uid,c=k.ref("/messages/".concat(t)),e.next=4,c.transaction((function(e){return e&&(e.likes&&e.likes[n]?(e.likeCount-=1,e.likes[n]=null):(e.likeCount+=1,e.likes||(e.likes={}),e.likes[n]=!0)),e}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),S=Object(c.useCallback)(function(){var e=Object(u.a)(l.a.mark((function e(t,c){var a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Delete this Message?")){e.next=2;break}return e.abrupt("return");case 2:return a=n[n.length-1].id===t,(s={})["/messages/".concat(t)]=null,a&&n.length>1&&(s["/rooms/".concat(r,"/lastMessage")]=Object(N.a)(Object(N.a)({},n[n.length-2]),{},{msgId:n[n.length-2].id})),a&&1===n.length&&(s["rooms/".concat(r,"/lastMessage")]=null),e.prev=7,e.next=10,k.ref().update(s);case 10:j.a.info("Message Deleted"),e.next=16;break;case 13:return e.prev=13,e.t0=e.catch(7),e.abrupt("return",j.a.error(e.t0.message,4e3));case 16:if(!c){e.next=26;break}return e.prev=17,i=w.refFromURL(c.url),e.next=21,i.delete();case 21:e.next=26;break;case 23:e.prev=23,e.t1=e.catch(17),j.a.error(e.t1.message,4e3);case 26:case"end":return e.stop()}}),e,null,[[7,13],[17,23]])})));return function(t,n){return e.apply(this,arguments)}}(),[r,n]);return Object(y.jsxs)("ul",{ref:h,className:"msg-list custom-scroll",children:[n&&n.length>=15&&Object(y.jsx)("li",{className:"text-center mt-2 mb-2",children:Object(y.jsx)(m.a,{onClick:x,color:"violet",children:"Load More"})}),f&&Object(y.jsx)("li",{children:"No messages yet..."}),O&&function(){var e,t=(e=function(e){return new Date(e.createdAt).toDateString()},n.reduce((function(t,n){var c=e(n);return t[c]||(t[c]=[]),t[c].push(n),t}),{})),c=[];return Object.keys(t).forEach((function(e){c.push(Object(y.jsx)("li",{className:"text-center mb-1 padded",children:e},e));var n=t[e].map((function(e){return Object(y.jsx)(Ze,{message:e,handleAdmin:v,handleLike:C,handleDelete:S},e.id)}));c.push.apply(c,Object(Fe.a)(n))})),c}()]})},tt=n(395),nt=function(e){var t=e.afterUpload,n=W(),a=n.isOpen,r=n.open,s=n.close,o=Object(c.useState)([]),d=Object(T.a)(o,2),b=d[0],h=d[1],f=Object(c.useState)(!1),O=Object(T.a)(f,2),x=O[0],v=O[1],g=Object(i.h)().chatId,k=function(){var e=Object(u.a)(l.a.mark((function e(){var n,c,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=b.map((function(e){return w.ref("/chat/".concat(g)).child(Date.now()+e.name).put(e.blobFile,{cacheControl:"public,maz-age=".concat(259200)})})),e.next=4,Promise.all(n);case 4:return c=e.sent,a=c.map(function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.metadata.contentType,e.t1=t.metadata.name,e.next=4,t.ref.getDownloadURL();case 4:return e.t2=e.sent,e.abrupt("return",{contentType:e.t0,name:e.t1,url:e.t2});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=8,Promise.all(a);case 8:return r=e.sent,e.next=11,t(r);case 11:v(!1),s(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),j.a.error(e.t0.message,4e3);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(le.a.Button,{onClick:r,children:Object(y.jsx)(p.a,{icon:"attachment"})}),Object(y.jsxs)(R.a,{show:a,onHide:s,children:[Object(y.jsx)(R.a.Header,{children:Object(y.jsx)(R.a.Title,{children:"Upload Files"})}),Object(y.jsx)(R.a.Body,{children:Object(y.jsx)(tt.a,{className:"w-100",autoUpload:!1,action:"",fileList:b,onChange:function(e){var t=e.filter((function(e){return e.blobFile.size<=512e4})).slice(0,5);h(t)},multiple:!0,listType:"picture-text",disabled:x})}),Object(y.jsxs)(R.a.Footer,{children:[Object(y.jsx)(m.a,{block:!0,disabled:x,onClick:k,children:"Send to Chat"}),Object(y.jsx)("div",{className:"text-right mt-2",children:Object(y.jsx)("small",{children:"*only files less than 5 MB are allowed"})})]})]})]})},ct=n(209),at=function(e){var t=e.afterUpload,n=Object(c.useState)(!1),a=Object(T.a)(n,2),r=a[0],s=a[1],o=Object(i.h)().chatId,d=Object(c.useState)(!1),b=Object(T.a)(d,2),h=b[0],f=b[1],O=Object(c.useCallback)((function(){s((function(e){return!e}))}),[]),m=Object(c.useCallback)(function(){var e=Object(u.a)(l.a.mark((function e(n){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.prev=1,e.next=4,w.ref("/chat/".concat(o)).child("audio_".concat(Date.now(),".mp3")).put(n.blob,{cacheControl:"public,maz-age=".concat(259200)});case 4:return c=e.sent,e.t0=c.metadata.contentType,e.t1=c.metadata.name,e.next=9,c.ref.getDownloadURL();case 9:e.t2=e.sent,a={contentType:e.t0,name:e.t1,url:e.t2},f(!1),t([a]),e.next=19;break;case 15:e.prev=15,e.t3=e.catch(1),f(!1),j.a.error(e.t3.message,4e3);case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}(),[t,o]);return Object(y.jsxs)(le.a.Button,{onClick:O,disabled:h,clasName:r?"animate-blink":"",children:[Object(y.jsx)(p.a,{icon:"microphone"}),Object(y.jsx)(ct.ReactMic,{record:r,className:"d-none ",onStop:m,mimeType:"audio/mp3 "})]})};function rt(e,t){return{roomId:t,author:Object(N.a)({name:e.name,uid:e.uid,createdAt:e.createdAt},e.avatar?{avatar:e.avatar}:{}),createdAt:x.a.database.ServerValue.TIMESTAMP,likeCount:0}}var st=function(){var e=Object(c.useState)(""),t=Object(T.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(T.a)(r,2),o=s[0],d=s[1],b=M().profile,h=Object(i.h)().chatId,f=Object(c.useCallback)((function(e){a(e)}),[]),O=function(){var e=Object(u.a)(l.a.mark((function e(){var t,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n.trim()){e.next=2;break}return e.abrupt("return");case 2:return(t=rt(b,h)).text=n,c={},r=k.ref("messages").push().key,c["/messages/".concat(r)]=t,c["/rooms/".concat(h,"/lastMessage")]=Object(N.a)(Object(N.a)({},t),{},{msgId:r}),d(!0),e.prev=9,e.next=12,k.ref().update(c);case 12:a(""),d(!1),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(9),d(!1),j.a.error(e.t0.message,4e3);case 20:case"end":return e.stop()}}),e,null,[[9,16]])})));return function(){return e.apply(this,arguments)}}(),m=Object(c.useCallback)(function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),n={},t.forEach((function(e){var t=rt(b,h);t.file=e;var c=k.ref("messages").push().key;n["/messages/".concat(c)]=t})),c=Object.keys(n).pop(),n["/rooms/".concat(h,"/lastMessage")]=Object(N.a)(Object(N.a)({},n[c]),{},{msgId:c}),e.prev=5,e.next=8,k.ref().update(n);case 8:d(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(5),d(!1),j.a.error(e.t0.message,4e3);case 15:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(t){return e.apply(this,arguments)}}(),[h,b]);return Object(y.jsx)("div",{children:Object(y.jsxs)(le.a,{children:[Object(y.jsx)(nt,{afterUpload:m}),Object(y.jsx)(at,{afterUpload:m}),Object(y.jsx)(ue.a,{placeholder:"Message...",value:n,onChange:f,onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),O())}}),Object(y.jsx)(le.a.Button,{color:"orange",appearance:"primary",onClick:O,disabled:o,children:Object(y.jsx)(p.a,{icon:"send-o"})})]})})},it=function(){var e=Object(i.h)().chatId,t=ve();if(!t)return Object(y.jsx)(A.a,{center:!0,vertical:!0,content:"Loading...",speed:"normal",size:"md"});var n=t.find((function(t){return t.id===e}));if(!n)return Object(y.jsxs)("h6",{className:"text-center mt-page",children:["Chat ",e," not found"]});var c,a=n.name,r=n.description,s=(c=n.admins)?Object.keys(c):[],o=s.includes(g.currentUser.uid),l={name:a,description:r,admins:s,isAdmin:o};return Object(y.jsxs)(Ae,{data:l,children:[Object(y.jsx)("div",{className:"chat-top",children:Object(y.jsx)(Ee,{})}),Object(y.jsx)("div",{className:"chat-middle",children:Object(y.jsx)(et,{})}),Object(y.jsx)("div",{className:"chat-bottom ",children:Object(y.jsx)(st,{})})]})},ot=function(){var e=_("(min-width: 992px)"),t=Object(i.i)().isExact,n=e||t;return Object(y.jsx)(xe,{children:Object(y.jsx)(b.a,{fluid:!0,className:"h-100",children:Object(y.jsxs)(h.a,{className:"h-100",children:[n&&Object(y.jsx)(f.a,{xs:24,md:8,className:"h-100",children:Object(y.jsx)(ye,{})}),Object(y.jsxs)(i.d,{children:[Object(y.jsx)(i.b,{exact:!0,path:"/chat/:chatId",children:Object(y.jsx)(f.a,{xs:24,md:16,className:"h-100",children:Object(y.jsx)(it,{})})}),Object(y.jsx)(i.b,{children:e&&Object(y.jsx)(f.a,{xs:24,md:16,className:"h-100",children:Object(y.jsx)("h6",{className:"text-center mt-page",children:"Please select chat"})})})]})]})})})},lt=["children"],ut=function(e){var t=e.children,n=Object(S.a)(e,lt),c=M(),a=c.isLoading,r=c.profile;return a&&!r?Object(y.jsx)(d.a,{children:Object(y.jsx)(A.a,{center:!0,vertical:!0,size:"md",content:"Loading",speed:"slow"})}):r&&!a?Object(y.jsx)(i.a,{to:"/"}):Object(y.jsx)(i.b,Object(N.a)(Object(N.a)({},n),{},{children:t}))};var jt=function(){return Object(y.jsx)(U,{children:Object(y.jsxs)(i.d,{children:[Object(y.jsx)(ut,{path:"/signin",children:Object(y.jsx)(C,{})}),Object(y.jsx)(F,{path:"/",children:Object(y.jsx)(ot,{})})]})})};r.a.render(Object(y.jsx)(s.a,{children:Object(y.jsx)(jt,{})}),document.getElementById("root"))}},[[385,1,2]]]);
//# sourceMappingURL=main.e9c75003.chunk.js.map