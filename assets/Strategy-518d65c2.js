import{_ as V,g as R,h as W,u as z,a as D,r as u,i as C,j as w,n as x,w as F,k as j,b as A,o as l,c as r,l as T,d as s,F as g,m as S,e as P,f as U,t as b,p as G}from"./index-008ee3cd.js";import{I as J}from"./InputWrapper-2606704e.js";const K={name:"Strategy",components:{InputWrapper:J},setup(){const f=R.useToast(),e=W(),h=z(),t=D(),y=u(""),v=C(()=>t.getCurrentMessages),M=C(()=>t.getStatus),n=u(null),c=u(!1),o=u(0),I=4;u(0);const d=["当前常见的网络诈骗手段有哪些？","如何识别网络诈骗的常见选择和模式？","网络诈骗分子的常用沟通交易平台有哪些？","在网络诈骗案件中，易变账件体的特征有哪些？","本地区活跃的网络赌博平台有哪些？","如何高效识别网站/应用是否为网络赌博平台？","有哪些高风险迹象可以帮助识别潜在的网络赌博活动？","如何追踪网络赌博相关的资金流动记录？","有哪些常见的网络洗钱手段和方法？","参与网络洗钱活动的企业和个人具有什么共同特征？","是否有识别潜在网络洗钱活动的预警信号？","如何发现并追踪虚拟货币中的可疑交易？","在处理新型网络经济犯罪时，有哪些常见的法律条款和司法解释可以参考？","有哪些关键线索可以帮助快速确定案件性质和嫌疑人的动机？","在收集证据时，如何与其他部门/区域进行协调合作？","如何合理保存和保护电子证据，防止被篡改或被破坏？"],m=u(null);w(()=>{const a=e.query.id,i=e.query.restore==="true";t.createdEmptyConversation(),i&&a&&t.restoreConversation(a)&&x(()=>{p()})});const p=()=>{m.value&&x(()=>{m.value.scrollTop=m.value.scrollHeight})},k=async a=>{v.value.length===0&&await t.createConversation("strategy",!0),await t.sendMessage(a,"strategy"),v.value.length===1&&t.currentConversation&&h.replace({name:"Strategy",query:{id:t.currentConversation.id,new:!0}}),p()};F(()=>t.getMessage,()=>{p()},{deep:!0});const Q=a=>new Date(a).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"}),q=C(()=>{const a=o.value*4;return d.slice(a,a+4)}),B=()=>{o.value<Math.ceil(d.length/4)-1&&o.value++},L=()=>{o.value>0&&o.value--},H=()=>{const a=[...d].sort(()=>Math.random()-.5);d.splice(0,d.length,...a),o.value=0},N=a=>{k({query:a})};return w(()=>{const a=setInterval(()=>{o.value<Math.ceil(d.length/I)-1?o.value++:o.value=0},5e3);j(()=>{clearInterval(a)})}),{chatStore:t,status:M,inputMessage:y,messages:v,chatContent:n,showQuestions:c,toggleQuestions:()=>{c.value=!c.value},selectQuestion:N,handleInputBlur:()=>{setTimeout(()=>{c.value=!1},200)},sendMessage:k,formatTime:Q,currentPage:o,allQuestions:d,currentPageQuestions:q,nextPage:B,prevPage:L,refreshQuestions:H,copyMessage:async a=>{try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(a),f.success("已复制到剪切板！");else{const i=document.createElement("textarea");return i.value=a,document.body.appendChild(i),i.focus(),i.select(),f.success("已复制到剪切板！"),new Promise((_,E)=>{document.execCommand("copy")?_():E(),i.remove()})}}catch(i){console.error("复制失败:",i),f.error("复制失败："+i)}},shareMessage:a=>{console.log("分享消息:",a)},favoriteMessage:a=>{console.log("收藏消息:",a)},deleteMessage:a=>{const i=v.value.findIndex(_=>_.id===a.id);i!==-1&&v.value.splice(i,1)},messagesContainer:m,scrollToBottom:p,switchMode:a=>{h.push({name:a==="tianwen"?"Tianwen":"Strategy",query:{fromChat:!0,lastMessage:y.value}})}}}},O={class:"strategy-container"},X={class:"chat-interface"},Y={class:"messages-container",ref:"messagesContainer"},Z={class:"message ai"},$={class:"message-wrapper"},ss={class:"message-content"},es={class:"questions-header"},ts={class:"nav-buttons"},as=["disabled"],ns=["disabled"],os={class:"questions-list"},is=["onClick"],ls={class:"message-wrapper"},rs=["innerHTML"],cs={class:"message-wrapper"},ds=["innerHTML"],vs={class:"message-footer"},us={class:"message-time"},gs={class:"message-actions"},fs=["onClick"],ms=["onClick"],ps={class:"message-wrapper"},_s={class:"message-content"},bs={class:"message-footer"},hs={class:"message-time"},ys={class:"message-actions"},Ms=["onClick"],Cs=["onClick"],ks={class:"input-section"},ws={class:"mode-selector"};function xs(f,e,h,t,y,v){const M=A("InputWrapper");return l(),r("div",O,[e[19]||(e[19]=T('<div class="header" data-v-23132133><div class="title-section" data-v-23132133><div class="icon" data-v-23132133><i class="fas fa-book" data-v-23132133></i></div><span class="title" data-v-23132133>侦查谋略</span></div><div class="actions" data-v-23132133><button class="action-btn" title="收藏" data-v-23132133><i class="fas fa-star" data-v-23132133></i><div class="btn-hover-bg" data-v-23132133></div></button><button class="action-btn" title="通知" data-v-23132133><i class="fas fa-bell" data-v-23132133></i><div class="btn-hover-bg" data-v-23132133></div></button></div></div>',1)),s("div",X,[s("div",Y,[e[16]||(e[16]=T('<div class="message ai" data-v-23132133><div class="avatar" data-v-23132133><i class="fas fa-balance-scale" data-v-23132133></i></div><div class="message-wrapper" data-v-23132133><div class="message-content" data-v-23132133>我是侦查谋略小助手，请你询问:</div><div class="message-time" data-v-23132133>13:45</div></div></div>',1)),s("div",Z,[e[7]||(e[7]=s("div",{class:"avatar"},[s("i",{class:"fas fa-balance-scale"})],-1)),s("div",$,[s("div",ss,[s("div",es,[e[5]||(e[5]=s("span",null,"你可以这样问我：",-1)),s("div",ts,[s("button",{onClick:e[0]||(e[0]=(...n)=>t.prevPage&&t.prevPage(...n)),disabled:t.currentPage===0},e[3]||(e[3]=[s("i",{class:"fas fa-chevron-left"},null,-1)]),8,as),s("button",{onClick:e[1]||(e[1]=(...n)=>t.nextPage&&t.nextPage(...n)),disabled:t.currentPage>=Math.ceil(t.allQuestions.length/4)-1},e[4]||(e[4]=[s("i",{class:"fas fa-chevron-right"},null,-1)]),8,ns)])]),s("div",os,[(l(!0),r(g,null,S(t.currentPageQuestions,n=>(l(),r("div",{key:n,class:"question-item",onClick:c=>t.selectQuestion(n)},b(n),9,is))),128))])]),e[6]||(e[6]=s("div",{class:"message-time"},"13:45",-1))])]),(l(!0),r(g,null,S(t.messages,(n,c)=>(l(),r("div",{key:n.id,class:G(["message",n.type])},[n.type==="ai"?(l(),r(g,{key:0},[t.status&&t.messages.length-1===c?(l(),r(g,{key:0},[e[9]||(e[9]=s("div",{class:"avatar"},[s("i",{class:"fas fa-robot"})],-1)),s("div",ls,[s("div",{class:"message-content",innerHTML:t.chatStore.getMessage},null,8,rs),e[8]||(e[8]=s("div",{class:"message-footer"},[s("div",{class:"message-time"})],-1))])],64)):(l(),r(g,{key:1},[e[12]||(e[12]=s("div",{class:"avatar"},[s("i",{class:"fas fa-balance-scale"})],-1)),s("div",cs,[s("div",{class:"message-content",innerHTML:n.content},null,8,ds),s("div",vs,[s("div",us,b(t.formatTime(n.timestamp)),1),s("div",gs,[s("button",{class:"action-icon",onClick:o=>t.copyMessage(n.content),title:"复制"},e[10]||(e[10]=[s("i",{class:"fas fa-copy"},null,-1)]),8,fs),s("button",{class:"action-icon",onClick:o=>t.favoriteMessage(n),title:"收藏"},e[11]||(e[11]=[s("i",{class:"fas fa-star"},null,-1)]),8,ms)])])])],64))],64)):(l(),r(g,{key:1},[s("div",ps,[s("div",_s,b(n.content),1),s("div",bs,[s("div",hs,b(t.formatTime(n.timestamp)),1),s("div",ys,[s("button",{class:"action-icon",onClick:o=>t.copyMessage(n.content),title:"复制"},e[13]||(e[13]=[s("i",{class:"fas fa-copy"},null,-1)]),8,Ms),s("button",{class:"action-icon",onClick:o=>t.deleteMessage(n),title:"删除"},e[14]||(e[14]=[s("i",{class:"fas fa-trash"},null,-1)]),8,Cs)])])]),e[15]||(e[15]=s("div",{class:"avatar user-avatar"},[s("i",{class:"fas fa-user"})],-1))],64))],2))),128))],512),s("div",ks,[s("div",ws,[s("button",{class:"mode-btn",onClick:e[2]||(e[2]=n=>t.switchMode("tianwen"))},e[17]||(e[17]=[s("i",{class:"fas fa-search-location"},null,-1),P(" 天网追缉 ")])),e[18]||(e[18]=s("button",{class:"mode-btn active"},[s("i",{class:"fas fa-book"}),P(" 侦查谋略 ")],-1))]),U(M,{onSendMessage:t.sendMessage},null,8,["onSendMessage"])])])])}const Ns=V(K,[["render",xs],["__scopeId","data-v-23132133"]]);export{Ns as default};
