(this["webpackJsonplearn-english"]=this["webpackJsonplearn-english"]||[]).push([[0],{104:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(13),o=a.n(n),c=(a(104),a(18)),s=a(159),d=a(177),l=a(178),h=a(14),p=a(172),u=a(164),j="Learn English Together",m=a(23),b=a(180),g=a(176),v=a(121),O=a(120),x=a(166),y=a(170),f=a(169),L=a(165),T=a(167),R=a(168),U=a(171),C=a(179),E=a(181),w=a(27),A=a(162),I=a(69),k=a.n(I),N=a(71),W=a.n(N),V=a(70),P=a.n(V),B=a(68),D=a.n(B),M=a(2),S=Object(s.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}})),F=function(e){var t=S(),a=Object(w.a)(),i=e.count,r=e.page,n=e.rowsPerPage,o=e.onPageChange;return Object(M.jsxs)("div",{className:t.root,children:[Object(M.jsx)(A.a,{onClick:function(e){o(e,0)},disabled:0===r,"aria-label":"first page",children:"rtl"===a.direction?Object(M.jsx)(D.a,{}):Object(M.jsx)(k.a,{})}),Object(M.jsx)(A.a,{onClick:function(e){o(e,r-1)},disabled:0===r,"aria-label":"previous page",children:"rtl"===a.direction?Object(M.jsx)(P.a,{}):Object(M.jsx)(W.a,{})}),Object(M.jsx)(A.a,{onClick:function(e){o(e,r+1)},disabled:r>=Math.ceil(i/n)-1,"aria-label":"next page",children:"rtl"===a.direction?Object(M.jsx)(W.a,{}):Object(M.jsx)(P.a,{})}),Object(M.jsx)(A.a,{onClick:function(e){o(e,Math.max(0,Math.ceil(i/n)-1))},disabled:r>=Math.ceil(i/n)-1,"aria-label":"last page",children:"rtl"===a.direction?Object(M.jsx)(k.a,{}):Object(M.jsx)(D.a,{})})]})},z=a(89),H="complete_tests",J=function(e){return localStorage.getItem(e)},Z=function(e,t){localStorage.setItem(e,t)},K=function(e){var t=J(H),a=t?t.split("/"):[];return Boolean(a.find((function(t){return t===e})))},Q=function(e){var t=function(e){var t=e.split("/"),a=Object(m.a)(t,3),i=a[0],r=a[1],n=a[2],o="".concat(n,"-").concat(r,"-").concat(i);return new Date(o)};return e?e.sort((function(e,a){return t(e.updatedDate)<t(a.updatedDate)?1:t(a.updatedDate)<t(e.updatedDate)?-1:0})):e},X=function(e){var t=["docURL","answerKeyURL","transcriptURL"],a="formURL",i=Object(z.a)({},e);for(var r in e)t.includes(r)&&(i[r]=e[r].replace("/view?usp","/preview?usp")),r===a&&(i.formURL=e.formURL.replace("/edit?usp=sharing","/viewform?embedded=true"));return i},_=Object(s.a)({paperWrap:{padding:30,height:"100%"},table:{},rootHeaderRow:{textTransform:"capitalize"},rootRow:{textTransform:"capitalize"},hoverRow:{cursor:"pointer"},completeChip:{backgroundColor:"#5cb85c",color:"white"}}),q=function(e){var t=_(),a=e.title,r=e.subTitle,n=e.headers,o=e.rows,c=e.handleClickRow,s=Object(i.useState)(0),d=Object(m.a)(s,2),l=d[0],h=d[1],p=Object(i.useState)(5),j=Object(m.a)(p,2),b=j[0],g=j[1],v=b-Math.min(b,o.length-l*b);return Object(M.jsxs)(O.a,{classes:{root:t.paperWrap},elevation:3,children:[Object(M.jsx)(u.a,{variant:"h6",gutterBottom:!0,children:a}),Object(M.jsx)(u.a,{variant:"subtitle1",gutterBottom:!0,children:r}),Object(M.jsx)(L.a,{component:O.a,children:Object(M.jsxs)(x.a,{className:t.table,children:[Object(M.jsx)(T.a,{children:Object(M.jsxs)(R.a,{classes:{root:t.rootHeaderRow},children:[Array.isArray(n)&&n.map((function(e,t){return Object(M.jsx)(f.a,{children:e.text},t)})),Object(M.jsx)(f.a,{align:"center",children:"Tr\u1ea1ng Th\xe1i"})]})}),Object(M.jsxs)(y.a,{children:[Array.isArray(o)&&(b>0?o.slice(l*b,l*b+b):o).map((function(e,a){return Object(M.jsxs)(R.a,{classes:{hover:t.hoverRow,root:t.rootRow},hover:!0,onClick:function(){!function(e){c(e)}(e)},children:[Array.isArray(n)&&n.map((function(t,a){return Object(M.jsx)(f.a,{component:"th",scope:"row",children:e[t.key]},a)})),Object(M.jsx)(f.a,{align:"center",component:"th",scope:"row",children:Object(M.jsx)(E.a,{size:"small",className:K(e.id)&&t.completeChip,label:K(e.id)?"ho\xe0n th\xe0nh":"ch\u01b0a ho\xe0n th\xe0nh"})})]},a)})),v>0&&Object(M.jsx)(R.a,{style:{height:53*v},children:Object(M.jsx)(f.a,{colSpan:6})})]}),Object(M.jsx)(U.a,{children:Object(M.jsx)(R.a,{children:Object(M.jsx)(C.a,{rowsPerPageOptions:[5,10],colSpan:3,count:o.length,rowsPerPage:b,page:l,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onPageChange:function(e,t){h(t)},onRowsPerPageChange:function(e){g(parseInt(e.target.value,10)),h(0)},ActionsComponent:F})})})]})})]})},G=a(173),Y=a(174),$=a(175),ee=Object(s.a)({modalTitle:{marginTop:0,marginBottom:6,textAlign:"center",textTransform:"capitalize",fontSize:25,fontWeight:"normal"},cardContainer:{marginTop:10},cardWrap:{borderRadius:10,border:"1px solid rgba(0,0,0,.125)"},modeTitle:{fontSize:18},actionButton:{color:"#0d6efd","&:hover":{color:"orange",cursor:"pointer"}},completeButton:{backgroundColor:"#5cb85c",color:"white",width:"100%",fontWeight:"bold","&:hover":{backgroundColor:"#5cb85c"}}}),te=function(e){var t=e.testDetail,a=e.handleCloseModal,r=ee();return Object(M.jsxs)(i.Fragment,{children:[Object(M.jsx)(u.a,{variant:"h2",id:"transition-modal-title",className:r.modalTitle,children:null===t||void 0===t?void 0:t.name}),Object(M.jsx)(u.a,{variant:"subtitle1",id:"transition-modal-description",children:'H\xe3y ch\u1ecdn c\xe1c ch\u1ebf \u0111\u1ed9 b\xean d\u01b0\u1edbi, n\u1ebfu b\u1ea1n \u0111\xe3 th\u1ef1c hi\u1ec7n b\xe0i test h\xe3y b\u1ea5m n\xfat "Ho\xe0n Th\xe0nh" b\xean d\u01b0\u1edbi (\u0111\u1ec3 \u0111\xf3ng c\u1eeda s\u1ed5 h\xe3y click ra v\xf9ng m\xe0u t\u1ed1i).'}),Object(M.jsxs)(p.a,{container:!0,spacing:3,className:r.cardContainer,justifyContent:"center",children:[Object(M.jsx)(p.a,{item:!0,xs:4,children:Object(M.jsx)(G.a,{elevation:0,className:r.cardWrap,children:Object(M.jsxs)(Y.a,{children:[Object(M.jsx)(u.a,{className:r.modeTitle,variant:"h6",children:"Mini Test"}),Object(M.jsx)(u.a,{variant:"subtitle1",children:"Th\u1ef1c hi\u1ec7n b\xe0i Test"}),Object(M.jsx)(c.b,{to:"/mini-test-exam?test=".concat(t.id),children:Object(M.jsx)(u.a,{variant:"button",className:r.actionButton,children:"Let Go"})})]})})}),Object(M.jsx)(p.a,{item:!0,xs:4,children:Object(M.jsx)(G.a,{elevation:0,className:r.cardWrap,children:Object(M.jsxs)(Y.a,{children:[Object(M.jsx)(u.a,{variant:"h6",className:r.modeTitle,children:"Listening Test"}),Object(M.jsx)(u.a,{variant:"subtitle1",children:"R\xe8n luy\u1ec7n Listening Skill"}),Object(M.jsx)(c.b,{to:"/mini-test-listening?test=".concat(t.id),children:Object(M.jsx)(u.a,{variant:"button",className:r.actionButton,children:"Let Go"})})]})})}),Object(M.jsx)(p.a,{item:!0,xs:4,children:Object(M.jsx)(G.a,{elevation:0,className:r.cardWrap,children:Object(M.jsxs)(Y.a,{children:[Object(M.jsx)(u.a,{variant:"h6",className:r.modeTitle,children:"Answer Key"}),Object(M.jsx)(u.a,{variant:"subtitle1",children:"Xem \u0111\xe1p \xe1n chi ti\u1ebft"}),Object(M.jsx)(c.b,{to:"/mini-test-answer-key?test=".concat(t.id),children:Object(M.jsx)(u.a,{variant:"button",className:r.actionButton,children:"Let Go"})})]})})}),Object(M.jsx)(p.a,{item:!0,xs:3,children:Object(M.jsx)($.a,{variant:"contained",className:r.completeButton,onClick:function(){var e=J(H),i=e?e.split("/"):[];i.push(t.id);var r=i.join("/");Z(H,r),a()},disabled:K(t.id),children:"Ho\xe0n Th\xe0nh"})})]})]})},ae=[{id:"MT-1",name:"Test 1",fullAudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626271158/audio/Very%20Easy%20TOEIC/01-5.mp3",docURL:"https://drive.google.com/file/d/1SFQxAEL9EiVun6X_51JkEiwEFcwyiOlK/preview?usp=sharing",formURL:"https://docs.google.com/forms/d/e/1FAIpQLSfW6N46tHG9T-yuXm_0bhHZBkSzx-VGnJrDiHqyXfZvmqXgSQ/viewform?embedded=true",answerKeyURL:"https://drive.google.com/file/d/1-CmfTD7m1dbJPz8QBs7FJo2DnPmcKVfo/preview?usp=sharing",transcriptURL:"https://drive.google.com/file/d/1NGpKuzZ2Y8iDwRdZn1A9ozTvzto_oMN0/preview?usp=sharing",part1AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626270992/audio/Very%20Easy%20TOEIC/01-1.mp3",part2AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626270999/audio/Very%20Easy%20TOEIC/01-2.mp3",part3AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626270994/audio/Very%20Easy%20TOEIC/01-3.mp3",part4AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626270990/audio/Very%20Easy%20TOEIC/01-4.mp3",updatedDate:"28/06/2021"},{id:"MT-2",name:"Test 2",fullAudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626271327/audio/Very%20Easy%20TOEIC/02-5.mp3",docURL:"https://drive.google.com/file/d/1eUhOYBwYfUGLzSV6Qum0PDoiHoLa7Db9/preview?usp=sharing",formURL:"https://docs.google.com/forms/d/11ZmBNi0k7ZHQXKLkgj9N69bm2P2UqPE9PRRgCHA28CY/viewform?embedded=true",answerKeyURL:"https://drive.google.com/file/d/1FZX_5JJXEZLfJgdw1ZPP2pprg4xFyLCx/preview?usp=sharing",transcriptURL:"https://drive.google.com/file/d/1c6MXL2T6Z29waNBs45PnAVNdUDHIT_2w/preview?usp=sharing",part1AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626271191/audio/Very%20Easy%20TOEIC/02-1.mp3",part2AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626271195/audio/Very%20Easy%20TOEIC/02-2.mp3",part3AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626271202/audio/Very%20Easy%20TOEIC/02-3.mp3",part4AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626271194/audio/Very%20Easy%20TOEIC/02-4.mp3",updatedDate:"28/06/2021"},{id:"MT-3",name:"Test 3",fullAudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626271498/audio/Very%20Easy%20TOEIC/03-05.mp3",docURL:"https://drive.google.com/file/d/1Vfohnzp8yP_HXKgJINF2-7EZ4EmNZlzx/preview?usp=sharing",formURL:"https://docs.google.com/forms/d/1hrIQWlskFfyTyzzWqc7AvCOR0FvIp8-waaRrPaOdnsM/viewform?embedded=true",answerKeyURL:"https://drive.google.com/file/d/1qv9EugG6k8giWn6JNDz3ZNkIX8_tFLBB/preview?usp=sharing",transcriptURL:"https://drive.google.com/file/d/1zQKREkK3TcVQ2bxsvavgrOTsXcvUIWWa/preview?usp=sharing",part1AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626271211/audio/Very%20Easy%20TOEIC/03-1.mp3",part2AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626271207/audio/Very%20Easy%20TOEIC/03-2.mp3",part3AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626271206/audio/Very%20Easy%20TOEIC/03-3.mp3",part4AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626271207/audio/Very%20Easy%20TOEIC/03-4.mp3",updatedDate:"05/07/2021"},{id:"MT-4",name:"Test 4",fullAudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626274199/audio/Very%20Easy%20TOEIC/04-05.mp3",docURL:"https://drive.google.com/file/d/1Xq0UVlWoepfh4-voSSu4959LfM2AmfXh/preview?usp=sharing",formURL:"https://docs.google.com/forms/d/1z68p1ylP6j4qdriibMZ4vsZezg4A6a-vh8HZUtvvOxU/viewform?embedded=true",answerKeyURL:"https://drive.google.com/file/d/1UA5tuCe4vhrYIbct0TT3z60ersVtB6CR/preview?usp=sharing",transcriptURL:"https://drive.google.com/file/d/1zQdyrR8ds-1stkQ4mHthTQiWP1Ky1OtU/preview?usp=sharing",part1AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626273693/audio/Very%20Easy%20TOEIC/04-1.mp3",part2AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626273679/audio/Very%20Easy%20TOEIC/04-2.mp3",part3AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626273681/audio/Very%20Easy%20TOEIC/04-3.mp3",part4AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626273682/audio/Very%20Easy%20TOEIC/04-4.mp3",updatedDate:"14/07/2021"},{id:"MT-5",name:"Test 5",fullAudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626584798/audio/Very%20Easy%20TOEIC/05-5.mp3",docURL:"https://drive.google.com/file/d/1LNHaQ5vxTSpBOQ9pQzJ7p7DCbdarDt76/preview?usp=sharing",formURL:"https://docs.google.com/forms/d/1TJbAFCnzy38BAo5RjMJMAWO8-7q90F7eJXpnSndpdn8/viewform?embedded=true",answerKeyURL:"https://drive.google.com/file/d/1608Q0ma_SV0cExk05yBWy6mNLxkZXFyv/preview?usp=sharing",transcriptURL:"https://drive.google.com/file/d/1GJnePtCKTw7zB_D0NQxaW2k3KEG-Ulnj/preview?usp=sharing",part1AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626584625/audio/Very%20Easy%20TOEIC/05-1.mp3",part2AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626584624/audio/Very%20Easy%20TOEIC/05-2.mp3",part3AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626584716/audio/Very%20Easy%20TOEIC/05-3.mp3",part4AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1626584732/audio/Very%20Easy%20TOEIC/05-4.mp3",updatedDate:"18/07/2021"},{id:"MT-6",name:"Test 6",fullAudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1627206989/audio/Very%20Easy%20TOEIC/06-5.mp3",docURL:"https://drive.google.com/file/d/1UsYhP5hBT8b1YSAMbEf-NOvABAQDILAB/preview?usp=sharing",formURL:"https://docs.google.com/forms/d/1wRtRImDp1TMhO8FTujj9hE6RVddI_MyJNEz9BhXz7Cs/viewform?embedded=true",answerKeyURL:"https://drive.google.com/file/d/1FSf8ZWDhvp39xoPbA-HY0rho-A4HNUtn/preview?usp=sharing",transcriptURL:"https://drive.google.com/file/d/1wiEABSsW_T7JsitcdDdiJZDI7ala9mBU/preview?usp=sharing",part1AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1627206984/audio/Very%20Easy%20TOEIC/06-1.mp3",part2AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1627206985/audio/Very%20Easy%20TOEIC/06-2.mp3",part3AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1627206984/audio/Very%20Easy%20TOEIC/06-3.mp3",part4AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1627206984/audio/Very%20Easy%20TOEIC/06-4.mp3",updatedDate:"25/07/2021"},{id:"MT-7",name:"Test 7",fullAudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1627928081/audio/Very%20Easy%20TOEIC/07-5.mp3",docURL:"https://drive.google.com/file/d/1bAy_ar-qv6bD-GLeIyuaCgJPn6g9q_26/view?usp=sharing",formURL:"https://docs.google.com/forms/d/1CrT9jjakq3t7xIsJJf6EEeIp--vyW_2dkDqVOMZW3v4/edit?usp=sharing",answerKeyURL:"https://drive.google.com/file/d/1oqpcS2lxxf4PyeVyrW86xSymBfiXX_Y0/view?usp=sharing",transcriptURL:"https://drive.google.com/file/d/1Lm8gXRPTIn1ZcCY6f7a1aC8HTkPJIcLa/view?usp=sharing",part1AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1627928075/audio/Very%20Easy%20TOEIC/07-1.mp3",part2AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1627928076/audio/Very%20Easy%20TOEIC/07-2.mp3",part3AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1627928075/audio/Very%20Easy%20TOEIC/07-3.mp3",part4AudioURL:"https://res.cloudinary.com/erihuynh/video/upload/v1627928077/audio/Very%20Easy%20TOEIC/07-4.mp3",updatedDate:"03/08/2021"}],ie=[{id:"D-1",name:"Very Easy TOEIC (translated) - Part 1",url:"https://drive.google.com/file/d/1k3SQ5vglqgZyGemSCGk0bV9Qiz62VsT4/preview?usp=sharing",updatedDate:"14/07/2021"}],re=[{key:"name",text:"Ti\xeau \u0111\u1ec1"},{key:"updatedDate",text:"Ng\xe0y \u0111\u0103ng t\u1ea3i"}],ne=Object(s.a)({rootModal:{display:"flex",alignItems:"center",justifyContent:"center"},paperWrap:{padding:30,minWidth:800,border:"none"}}),oe=function(){var e,t=ne(),a=Object(i.useState)(!1),r=Object(m.a)(a,2),n=r[0],o=r[1],c=Object(i.useState)(),s=Object(m.a)(c,2),d=s[0],l=s[1],h=function(){l(null),o(!1)};return Object(M.jsxs)(i.Fragment,{children:[Object(M.jsx)(q,{rows:(e=ae,Q(e)),headers:re,title:"Mini Test",subTitle:"Mini Test l\xe0 m\u1ed9t d\u1ea1ng \u0111\u1ec1 m\xf4 ph\u1ecfng \u0111\u1ec1 thi TOEIC, v\u1edbi \u0111\u1ea7y \u0111\u1ee7 c\xe1c c\u1ea5u tr\xfac c\u1ee7a b\xe0i thi th\u1ef1c t\u1ebf. Nh\u01b0ng s\u1ed1 l\u01b0\u1ee3ng c\xe2u s\u1ebd \xedt \u0111i v\xe0 \u0111\u1ed9 kh\xf3 \u1edf m\u1ee9c 400-550 \u0111i\u1ec3m.",handleClickRow:function(e){console.log({row:e}),l(e),o(!0)}}),Object(M.jsx)(b.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.rootModal,open:n,onClose:h,closeAfterTransition:!0,BackdropComponent:g.a,BackdropProps:{timeout:500},children:Object(M.jsx)(v.a,{in:n,children:Object(M.jsx)(O.a,{elevation:3,classes:{root:t.paperWrap},children:d&&Object(M.jsx)(te,{testDetail:d,handleCloseModal:h})})})})]})},ce=Object(s.a)({modalTitle:{marginTop:0,marginBottom:6,textAlign:"center",textTransform:"capitalize",fontSize:25,fontWeight:"normal"},cardContainer:{marginTop:10},cardWrap:{borderRadius:10,border:"1px solid rgba(0,0,0,.125)"},modeTitle:{fontSize:18},actionButton:{color:"#0d6efd","&:hover":{color:"orange",cursor:"pointer"}},completeButton:{backgroundColor:"#5cb85c",color:"white",width:"100%",fontWeight:"bold","&:hover":{backgroundColor:"#5cb85c"}}}),se=function(e){var t=e.testDetail,a=e.handleCloseModal,r=ce();return Object(M.jsxs)(i.Fragment,{children:[Object(M.jsx)(u.a,{variant:"h2",id:"transition-modal-title",className:r.modalTitle,children:null===t||void 0===t?void 0:t.name}),Object(M.jsx)(u.a,{variant:"subtitle1",id:"transition-modal-description",children:'H\xe3y ch\u1ecdn c\xe1c ch\u1ebf \u0111\u1ed9 b\xean d\u01b0\u1edbi, n\u1ebfu b\u1ea1n \u0111\xe3 th\u1ef1c hi\u1ec7n b\xe0i test h\xe3y b\u1ea5m n\xfat "Ho\xe0n Th\xe0nh" b\xean d\u01b0\u1edbi (\u0111\u1ec3 \u0111\xf3ng c\u1eeda s\u1ed5 h\xe3y click ra v\xf9ng m\xe0u t\u1ed1i).'}),Object(M.jsxs)(p.a,{container:!0,spacing:3,className:r.cardContainer,justifyContent:"center",children:[Object(M.jsx)(p.a,{item:!0,xs:12,children:Object(M.jsx)(G.a,{elevation:0,className:r.cardWrap,children:Object(M.jsxs)(Y.a,{children:[Object(M.jsx)(u.a,{className:r.modeTitle,variant:"h6",children:"T\xe0i li\u1ec7u"}),Object(M.jsx)(u.a,{variant:"subtitle1",children:"Nh\u1eadn n\xfat b\xean d\u01b0\u1edbi \u0111\u1ec3 xem t\xe0i li\u1ec7u."}),Object(M.jsx)(c.b,{to:"/mini-test-exam?test=".concat(t.id),children:Object(M.jsx)(u.a,{variant:"button",className:r.actionButton,children:"Let Go"})})]})})}),Object(M.jsx)(p.a,{item:!0,xs:12,children:Object(M.jsx)($.a,{variant:"contained",className:r.completeButton,onClick:function(){var e=J(H),i=e?e.split("/"):[];i.push(t.id);var r=i.join("/");Z(H,r),a()},disabled:K(t.id),children:"Ho\xe0n Th\xe0nh"})})]})]})},de=[{key:"name",text:"Ti\xeau \u0111\u1ec1"},{key:"updatedDate",text:"Ng\xe0y \u0111\u0103ng t\u1ea3i"}],le=Object(s.a)({rootModal:{display:"flex",alignItems:"center",justifyContent:"center"},paperWrap:{padding:30,maxWidth:500,border:"none"}}),he=function(){var e,t=le(),a=Object(i.useState)(!1),r=Object(m.a)(a,2),n=r[0],o=r[1],c=Object(i.useState)(),s=Object(m.a)(c,2),d=s[0],l=s[1],h=function(){l(null),o(!1)};return Object(M.jsxs)(i.Fragment,{children:[Object(M.jsx)(q,{rows:(e=ie,Q(e)),headers:de,title:"T\xe0i Li\u1ec7u",subTitle:"B\u1ea1n c\xf3 th\u1ec3 t\xecm th\u1ea5y c\xe1c t\u1ea1i li\u1ec7u chia s\u1ebb tr\xean nh\xf3m \u1edf \u0111\xe2y. T\xe0i li\u1ec7u ch\u1ee7 y\u1ebfu t\u1eadp trung v\xe0o vi\u1ec7c \xf4n luy\u1ec7n thi TOEIC. C\u0169ng nh\u01b0 nh\u1eefng n\u1ed9i dung h\u1eefu \xedch v\u1ec1 Ti\u1ebfng Anh",handleClickRow:function(e){console.log({row:e}),l(e),o(!0)}}),Object(M.jsx)(b.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.rootModal,open:n,onClose:h,closeAfterTransition:!0,BackdropComponent:g.a,BackdropProps:{timeout:500},children:Object(M.jsx)(v.a,{in:n,children:Object(M.jsx)(O.a,{elevation:3,classes:{root:t.paperWrap},children:d&&Object(M.jsx)(se,{testDetail:d,handleCloseModal:h})})})})]})},pe=function(){return Object(M.jsxs)(i.Fragment,{children:[Object(M.jsx)(u.a,{variant:"h3",component:"h4",gutterBottom:!0,children:j}),Object(M.jsxs)(p.a,{container:!0,justifyContent:"space-between",spacing:3,children:[Object(M.jsx)(p.a,{item:!0,xs:6,children:Object(M.jsx)(oe,{})}),Object(M.jsx)(p.a,{item:!0,xs:6,children:Object(M.jsx)(he,{})})]})]})},ue=function(){return new URLSearchParams(Object(h.f)().search)},je=function(e){var t=e.docURL;return Object(M.jsx)("iframe",{title:"Doc Frame",id:"docFrame",width:"100%",height:"800",frameborder:"0",marginHeight:"0",marginWidth:"0",src:t,children:"\u0110ang t\u1ea3i\u2026"})},me=a(88),be=(a(118),function(e){var t=e.audioURL;return Object(M.jsx)(me.a,{src:t})}),ge=function(e){var t=e.formURL;return Object(M.jsx)("iframe",{title:"Form Frame",id:"formFrame",width:"100%",height:"580",frameborder:"0",marginHeight:"0",marginWidth:"0",src:t,children:"\u0110ang t\u1ea3i\u2026"})},ve=Object(s.a)({homePageLink:{color:"#0d6efd",textAlign:"right","&:hover":{color:"orange",cursor:"pointer"}},paperWrap:{padding:20}}),Oe=function(){var e=ve(),t=ue().get("test"),a=ae.find((function(e){return e.id===t})),r=X(a);return Object(M.jsxs)(i.Fragment,{children:[Object(M.jsxs)(p.a,{container:!0,justifyContent:"space-between",spacing:3,children:[Object(M.jsx)(p.a,{item:!0,xs:6,children:Object(M.jsx)(u.a,{variant:"h3",component:"h4",children:"Mini Test - ".concat(r.name)})}),Object(M.jsx)(p.a,{item:!0,xs:1,children:Object(M.jsx)(c.b,{to:"/",children:Object(M.jsx)(u.a,{variant:"h6",component:"h4",className:e.homePageLink,children:"Trang Ch\u1ee7"})})})]}),Object(M.jsxs)(p.a,{container:!0,justifyContent:"space-between",spacing:3,children:[Object(M.jsx)(p.a,{item:!0,xs:8,children:Object(M.jsx)(O.a,{elevation:3,classes:{root:e.paperWrap},children:Object(M.jsx)(je,{docURL:r.docURL})})}),Object(M.jsx)(p.a,{item:!0,xs:4,children:Object(M.jsxs)(p.a,{container:!0,spacing:3,children:[Object(M.jsx)(p.a,{item:!0,xs:12,children:Object(M.jsx)(O.a,{elevation:3,classes:{root:e.paperWrap},children:Object(M.jsx)(be,{audioURL:r.fullAudioURL})})}),Object(M.jsx)(p.a,{item:!0,xs:12,children:Object(M.jsx)(O.a,{elevation:3,classes:{root:e.paperWrap},children:Object(M.jsx)(ge,{formURL:r.formURL})})})]})})]})]})},xe=Object(s.a)({homePageLink:{color:"#0d6efd",textAlign:"right","&:hover":{color:"orange",cursor:"pointer"}},paperWrap:{padding:20},partTitle:{textAlign:"center",color:"#800080",marginBottom:10}}),ye=function(){var e=xe(),t=ue().get("test"),a=ae.find((function(e){return e.id===t})),r=X(a);return Object(M.jsxs)(i.Fragment,{children:[Object(M.jsxs)(p.a,{container:!0,justifyContent:"space-between",spacing:3,children:[Object(M.jsx)(p.a,{item:!0,xs:6,children:Object(M.jsx)(u.a,{variant:"h3",component:"h4",children:"Mini Test - Listening - ".concat(r.name)})}),Object(M.jsx)(p.a,{item:!0,xs:1,children:Object(M.jsx)(c.b,{to:"/",children:Object(M.jsx)(u.a,{variant:"h6",component:"h4",className:e.homePageLink,children:"Trang Ch\u1ee7"})})})]}),Object(M.jsxs)(p.a,{container:!0,spacing:3,children:[Object(M.jsx)(p.a,{item:!0,xs:3,children:Object(M.jsxs)(O.a,{elevation:3,classes:{root:e.paperWrap},children:[Object(M.jsx)(u.a,{variant:"h6",component:"h4",className:e.partTitle,children:"Part 1"}),Object(M.jsx)(be,{audioURL:r.part1AudioURL})]})}),Object(M.jsx)(p.a,{item:!0,xs:3,children:Object(M.jsxs)(O.a,{elevation:3,classes:{root:e.paperWrap},children:[Object(M.jsx)(u.a,{variant:"h6",component:"h4",className:e.partTitle,children:"Part 2"}),Object(M.jsx)(be,{audioURL:r.part2AudioURL})]})}),Object(M.jsx)(p.a,{item:!0,xs:3,children:Object(M.jsxs)(O.a,{elevation:3,classes:{root:e.paperWrap},children:[Object(M.jsx)(u.a,{variant:"h6",component:"h4",className:e.partTitle,children:"Part 3"}),Object(M.jsx)(be,{audioURL:r.part3AudioURL})]})}),Object(M.jsx)(p.a,{item:!0,xs:3,children:Object(M.jsxs)(O.a,{elevation:3,classes:{root:e.paperWrap},children:[Object(M.jsx)(u.a,{variant:"h6",component:"h4",className:e.partTitle,children:"Part 4"}),Object(M.jsx)(be,{audioURL:r.part4AudioURL})]})}),Object(M.jsx)(p.a,{item:!0,xs:6,children:Object(M.jsx)(O.a,{elevation:3,classes:{root:e.paperWrap},children:Object(M.jsx)(je,{docURL:r.docURL})})}),Object(M.jsx)(p.a,{item:!0,xs:6,children:Object(M.jsx)(O.a,{elevation:3,classes:{root:e.paperWrap},children:Object(M.jsx)(je,{docURL:r.transcriptURL})})})]})]})},fe=Object(s.a)({homePageLink:{color:"#0d6efd",textAlign:"right","&:hover":{color:"orange",cursor:"pointer"}},paperWrap:{padding:20}}),Le=function(){var e=fe(),t=ue().get("test"),a=ae.find((function(e){return e.id===t})),r=X(a);return Object(M.jsxs)(i.Fragment,{children:[Object(M.jsxs)(p.a,{container:!0,justifyContent:"space-between",spacing:3,children:[Object(M.jsx)(p.a,{item:!0,xs:6,children:Object(M.jsx)(u.a,{variant:"h3",component:"h4",children:"Mini Test - Answer Key - ".concat(r.name)})}),Object(M.jsx)(p.a,{item:!0,xs:1,children:Object(M.jsx)(c.b,{to:"/",children:Object(M.jsx)(u.a,{variant:"h6",component:"h4",className:e.homePageLink,children:"Trang Ch\u1ee7"})})})]}),Object(M.jsx)(p.a,{container:!0,justifyContent:"space-between",spacing:3,children:Object(M.jsx)(p.a,{item:!0,xs:12,children:Object(M.jsx)(O.a,{elevation:3,classes:{root:e.paperWrap},children:Object(M.jsx)(je,{docURL:r.answerKeyURL})})})})]})},Te=function(){return Object(M.jsxs)(h.c,{children:[Object(M.jsx)(h.a,{exact:!0,path:"/",component:pe}),Object(M.jsx)(h.a,{exact:!0,path:"/mini-test-exam",component:Oe}),Object(M.jsx)(h.a,{exact:!0,path:"/mini-test-listening",component:ye}),Object(M.jsx)(h.a,{exact:!0,path:"/mini-test-answer-key",component:Le})]})},Re=Object(s.a)({maxWidthLg:{paddingLeft:150,paddingRight:150,paddingTop:20}}),Ue=function(){var e=Re();return Object(M.jsx)(c.a,{children:Object(M.jsxs)(r.a.Fragment,{children:[Object(M.jsx)(d.a,{}),Object(M.jsx)(l.a,{maxWidth:"xl",className:e.maxWidthLg,children:Object(M.jsx)(Te,{})})]})})},Ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,182)).then((function(t){var a=t.getCLS,i=t.getFID,r=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),i(e),r(e),n(e),o(e)}))};o.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(Ue,{})}),document.getElementById("root")),Ce()}},[[119,1,2]]]);
//# sourceMappingURL=main.e3be0ceb.chunk.js.map