(function(){"use strict";var e={7927:function(e,t,a){var n=a(9242),s=a(3396);function i(e,t,a,i,o,l){const r=(0,s.up)("router-view"),u=(0,s.up)("v-icon"),d=(0,s.up)("v-btn"),m=(0,s.up)("v-fab-transition"),c=(0,s.up)("v-main"),h=(0,s.up)("v-app"),f=(0,s.up)("v-theme-provider"),p=(0,s.Q2)("scroll");return(0,s.wg)(),(0,s.j4)(f,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h,{app:"",theme:"dark"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Wm)(r),(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[e.settings.isGoTop?(0,s.wy)(((0,s.wg)(),(0,s.j4)(d,{key:0,fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary",onClick:l.toTop},{default:(0,s.w5)((()=>[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Uk)("mdi-arrow-up")])),_:1})])),_:1},8,["onClick"])),[[p,l.onScroll],[n.F8,e.fab]]):(0,s.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1})}const o={isSplash:!1,isTheme:!0,isGoTop:!1,isThemeDark:!0};var l={name:"App",data:()=>({loading:!0,fab:!1,settings:o}),created(){},mounted(){setTimeout((()=>{this.loading=!1}),4e3),this.$vuetify.theme.dark=!this.$vuetify.theme.dark},methods:{onScroll(e){if("undefined"===typeof window)return;const t=window.pageYOffset||e.target.scrollTop||0;this.fab=t>20},toTop(){this.$vuetify.goTo(0)}}},r=a(89);const u=(0,r.Z)(l,[["render",i]]);var d=u,m=(a(9773),a(8727)),c=a(481),h=a(8600),f=(0,m.Rd)({components:c,directives:h}),p=a(678),w=a(7139);const g={class:"text--primary"},_={class:"text--primary"};function v(e,t,a,n,i,o){const l=(0,s.up)("coin-flip"),r=(0,s.up)("v-card-title"),u=(0,s.up)("v-card-subtitle"),d=(0,s.up)("v-col"),m=(0,s.up)("v-row"),c=(0,s.up)("v-card-text"),h=(0,s.up)("v-card"),f=(0,s.up)("v-divider"),p=(0,s.up)("v-text-field"),v=(0,s.up)("v-btn"),y=(0,s.up)("v-spacer"),W=(0,s.up)("v-toolbar"),T=(0,s.up)("v-card-actions"),b=(0,s.up)("v-dialog"),k=(0,s.up)("v-container");return(0,s.wg)(),(0,s.j4)(k,null,{default:(0,s.w5)((()=>[(0,s.Wm)(l),(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Wm)(d,{cols:"6",style:{"text-align":"center"}},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{color:o.currentTeam===o.teams[0].Name?"error":void 0,theme:"dark"},{default:(0,s.w5)((()=>[(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,w.zw)(o.teams[0].Name),1)])),_:1}),(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,w.zw)(o.teams[0].Title),1)])),_:1}),(0,s.Wm)(c,{class:"d-flex justify-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{flat:"","max-width":"fit-content"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m,{align:"center"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,null,{default:(0,s.w5)((()=>[(0,s._)("span",g,(0,w.zw)(o.teams[0].Score),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Retry : "+(0,w.zw)(o.teams[0].Retry),1)])),_:1})])),_:1},8,["color"])])),_:1}),(0,s.Wm)(d,{cols:"6",style:{"text-align":"center"}},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{color:o.currentTeam===o.teams[1].Name?"info":void 0,theme:"dark"},{default:(0,s.w5)((()=>[(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,w.zw)(o.teams[1].Name),1)])),_:1}),(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,w.zw)(o.teams[1].Title),1)])),_:1}),(0,s.Wm)(c,{class:"d-flex justify-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{flat:"","max-width":"fit-content"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m,{align:"center"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,null,{default:(0,s.w5)((()=>[(0,s._)("span",_,(0,w.zw)(o.teams[1].Score),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Retry : "+(0,w.zw)(o.teams[1].Retry),1)])),_:1})])),_:1},8,["color"])])),_:1})])),_:1}),(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Wm)(d,{cols:"12"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m,{align:"center",justify:"center",style:{"text-align":"center"}},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{cols:"12"},{default:(0,s.w5)((()=>[(0,s.Uk)("Question "+(0,w.zw)(i.currentCount)+" of "+(0,w.zw)(o.totalCount),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,s.Wm)(h,{class:"mt-5"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m,{align:"center",justify:"center",style:{"text-align":"center"}},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{cols:"12"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,w.zw)(o.question),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,s.Wm)(h,{class:"mt-5"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m,{align:"center",justify:"center"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.answers,((e,t)=>((0,s.wg)(),(0,s.j4)(d,{cols:"6",key:t},{default:(0,s.w5)((()=>[e.isHidden?((0,s.wg)(),(0,s.j4)(h,{key:0,variant:"tonal",style:{"text-align":"center"},class:"pa-2"},{default:(0,s.w5)((()=>[(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Wm)(d,{cols:"12"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,w.zw)(t+1),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)):((0,s.wg)(),(0,s.j4)(h,{key:1,variant:"tonal",style:{"text-align":"center"},class:"pa-2"},{default:(0,s.w5)((()=>[(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Wm)(d,{cols:"12",md:"1"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,w.zw)(t+1),1)])),_:2},1024),(0,s.Wm)(f,{vertical:""}),(0,s.Wm)(d,{cols:"12",md:"9"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,w.zw)(e.Title),1)])),_:2},1024),(0,s.Wm)(f,{vertical:""}),(0,s.Wm)(d,{cols:"12",md:"2"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,w.zw)(e.Score),1)])),_:2},1024)])),_:2},1024)])),_:2},1024))])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1}),(0,s.Wm)(m,{align:"center",justify:"center"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{md:"9",cols:"12"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{modelValue:i.answer,"onUpdate:modelValue":t[0]||(t[0]=e=>i.answer=e),variant:"outlined",label:"Provide your answer here",class:"mt-4",required:""},null,8,["modelValue"])])),_:1}),(0,s.Wm)(d,{md:"3",cols:"12"},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{color:o.currentTeam===o.teams[0].Name?"error":"info",onClick:o.checkAnswer,disabled:!i.answer},{default:(0,s.w5)((()=>[(0,s.Uk)(" Check Your Answer ")])),_:1},8,["color","onClick","disabled"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[i.isGameOver?((0,s.wg)(),(0,s.j4)(v,{key:0,onClick:o.showAllAnswers},{default:(0,s.w5)((()=>[(0,s.Uk)(" Show All Answers ")])),_:1},8,["onClick"])):(0,s.kq)("",!0),(0,s.Wm)(y),i.isGameOver?((0,s.wg)(),(0,s.j4)(v,{key:1,to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Play Again ")])),_:1})):(0,s.kq)("",!0)])),_:1}),(0,s.Wm)(b,{transition:"dialog-top-transition",width:"auto",modelValue:i.gameOverDialog,"onUpdate:modelValue":t[2]||(t[2]=e=>i.gameOverDialog=e),persistent:""},{default:(0,s.w5)((()=>[(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,{align:"center",title:"Game Over!!!"}),(0,s.Wm)(r,{align:"center"},{default:(0,s.w5)((()=>[(0,s.Uk)("Congratulations!!!")])),_:1}),(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,w.zw)(i.winner.Title)+", You have won the game with "+(0,w.zw)(i.winner.Score)+" points ",1)])),_:1}),(0,s.Wm)(f),(0,s.Wm)(T,null,{default:(0,s.w5)((()=>[(0,s.Wm)(v,{onClick:t[1]||(t[1]=e=>i.gameOverDialog=!1)},{default:(0,s.w5)((()=>[(0,s.Uk)(" Close ")])),_:1}),(0,s.Wm)(y),(0,s.Wm)(v,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Play Again ")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}a(7658);const y={class:"pa-12"},W=(0,s._)("div",{class:"side-a pt-10",style:{"text-align":"center"}}," Team Red ",-1),T=(0,s._)("div",{class:"side-b pt-10",style:{"text-align":"center"}}," Team Blue ",-1),b=[W,T];function k(e,t,a,n,i,o){const l=(0,s.up)("v-toolbar"),r=(0,s.up)("v-card-title"),u=(0,s.up)("v-card-text"),d=(0,s.up)("v-divider"),m=(0,s.up)("v-spacer"),c=(0,s.up)("v-btn"),h=(0,s.up)("v-card-actions"),f=(0,s.up)("v-card"),p=(0,s.up)("v-dialog");return(0,s.wg)(),(0,s.j4)(p,{transition:"dialog-top-transition",width:"auto",modelValue:i.dialog,"onUpdate:modelValue":t[1]||(t[1]=e=>i.dialog=e),persistent:""},{default:(0,s.w5)((()=>[(0,s.Wm)(f,null,{default:(0,s.w5)((()=>[(0,s.Wm)(l,{align:"center",title:"Lets Start"}),(0,s.Wm)(r,{align:"center"},{default:(0,s.w5)((()=>[(0,s.Uk)("Flip the Coin to select who play first")])),_:1}),(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s._)("div",y,[(0,s._)("div",{id:"coin",onClick:t[0]||(t[0]=(...e)=>o.flipCoin&&o.flipCoin(...e)),class:(0,w.C_)(i.coinClass)},b,2)])])),_:1}),(0,s.Wm)(d),(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[(0,s._)("p",null,(0,w.zw)(i.resultDisplay),1),(0,s.Wm)(m),(0,s.Wm)(c,{disabled:!i.resultDisplay,onClick:o.startGame},{default:(0,s.w5)((()=>[(0,s.Uk)(" Let's Go ")])),_:1},8,["disabled","onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])}var q={name:"CoinFlip",data(){return{flipResult:0,dialog:!0,coinClass:"",result:"",resultDisplay:""}},methods:{flipCoin(){this.resultDisplay||(this.flipResult=Math.random(),this.coinClass="",this.resultDisplay="",setTimeout((()=>{this.flipResult<=.5?(this.coinClass="heads",this.result="Team Red"):(this.coinClass="tails",this.result="Team Blue")}),100),setTimeout((()=>{this.resultDisplay=this.result+" wins the toss",console.log(this.result+" wins the toss")}),3e3))},startGame(){var e=this.$store.state.quizData;e.forEach((e=>{e.Answers.forEach((e=>{e.isHidden=!0}))})),this.$store.commit("SET_QUIZ_DATA",e);var t=this.$store.state.teams;t.forEach((e=>{e.Score=0,e.Retry=5})),this.$store.commit("SET_TEAMS",t),this.$store.commit("SET_CURRENT_TEAM",this.result),this.dialog=!1}}};const S=(0,r.Z)(q,[["render",k]]);var A=S,z={data(){return{currentCount:1,answer:"",isGameOver:!1,gameOverDialog:!1,winner:{}}},components:{CoinFlip:A},computed:{question(){return this.$store.state.quizData[this.currentCount-1].Question},answers(){return this.$store.state.quizData[this.currentCount-1].Answers},totalCount(){return this.$store.state.settings.QuestionNum},teams(){return this.$store.state.teams},currentTeam(){return this.$store.state.currentTeam}},mounted(){this.$store.state.loading||""!==this.$store.state.quizData[this.currentCount-1].Question||this.$router.push({path:"/"})},methods:{checkAnswer(){var e=null;if(this.answers.forEach((t=>{var a=String(t["Title"]);a&&a.toLowerCase()===this.answer.toLowerCase()&&(t.isHidden=!1,e=t)})),null!==e){this.teams.forEach((t=>{t.Name===this.currentTeam&&(t.Score+=e.Score)})),this.$store.commit("SET_TEAMS",this.teams),this.$store.commit("SET_CURRENT_TEAM",this.currentTeam===this.teams[0].Name?this.teams[1].Name:this.teams[0].Name);var t=this.answers.filter((e=>!0===e.isHidden));0===t.length&&this.currentCount++}else this.teams.forEach((e=>{if(e.Name===this.currentTeam&&(e.Retry--,0===e.Retry)){this.isGameOver=!0,e.IsWinner=!1;const t=this.teams.find((e=>e.Name!==this.currentTeam));t.IsWinner=!0,t.Score+=e.Score,e.Score=0,this.winner=t,this.gameOverDialog=!0}})),this.$store.commit("SET_TEAMS",this.teams);this.answer=""},showAllAnswers(){this.answers.forEach((e=>{e.isHidden=!1}))}}};const C=(0,r.Z)(z,[["render",v]]);var U=C;const E=(0,s._)("h1",{class:"pa-12 text-h2 text-center"}," Family Vued ",-1);function R(e,t,a,n,i,o){const l=(0,s.up)("v-card-title"),r=(0,s.up)("v-card-subtitle"),u=(0,s.up)("v-text-field"),d=(0,s.up)("v-select"),m=(0,s.up)("v-card-text"),c=(0,s.up)("v-divider"),h=(0,s.up)("v-btn"),f=(0,s.up)("v-card-actions"),p=(0,s.up)("v-card"),w=(0,s.up)("rules-view"),g=(0,s.up)("v-container");return(0,s.wg)(),(0,s.j4)(g,null,{default:(0,s.w5)((()=>[(0,s.Wm)(p,{class:"mx-auto"},{default:(0,s.w5)((()=>[E,(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[(0,s.Uk)(" Create a new Quiz ")])),_:1}),(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Uk)(" Configure quiz settings ")])),_:1}),(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Wm)(u,{modelValue:i.teams[0].Title,"onUpdate:modelValue":t[0]||(t[0]=e=>i.teams[0].Title=e),variant:"outlined",label:"Red Team Name"},null,8,["modelValue"]),(0,s.Wm)(u,{modelValue:i.teams[1].Title,"onUpdate:modelValue":t[1]||(t[1]=e=>i.teams[1].Title=e),variant:"outlined",label:"Blue Team Name"},null,8,["modelValue"]),(0,s.Wm)(u,{modelValue:i.question_lenght,"onUpdate:modelValue":t[2]||(t[2]=e=>i.question_lenght=e),name:"question_lenght",type:"number",variant:"outlined",label:"Number of Questions (Min. 10)",min:"10",step:"10"},null,8,["modelValue"]),(0,s.Wm)(d,{modelValue:i.question_type,"onUpdate:modelValue":t[3]||(t[3]=e=>i.question_type=e),items:i.items,variant:"outlined",label:"Answers per question"},null,8,["modelValue","items"])])),_:1}),(0,s.Wm)(c),(0,s.Wm)(f,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h,{variant:"outlined",class:"ma-3",onClick:o.StartGame},{default:(0,s.w5)((()=>[(0,s.Uk)(" Start Game! ")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,s.Wm)(w)])),_:1})}const O={class:"text-caption font-weight-light font-italic pa-2"};function D(e,t,a,n,i,o){const l=(0,s.up)("v-toolbar-title"),r=(0,s.up)("v-spacer"),u=(0,s.up)("v-btn"),d=(0,s.up)("v-toolbar-items"),m=(0,s.up)("v-toolbar"),c=(0,s.up)("v-list-subheader"),h=(0,s.up)("v-list-item-title"),f=(0,s.up)("v-list-item"),p=(0,s.up)("v-divider"),g=(0,s.up)("v-list"),_=(0,s.up)("v-card"),v=(0,s.up)("v-dialog");return(0,s.wg)(),(0,s.j4)(v,{modelValue:i.dialog,"onUpdate:modelValue":t[1]||(t[1]=e=>i.dialog=e),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition"},{activator:(0,s.w5)((({props:e})=>[(0,s._)("p",O,[(0,s.Uk)(" * Please click "),(0,s._)("a",(0,s.dG)({class:"v-link"},e),"here",16),(0,s.Uk)(" to view Rules, Terms And Conditions of the game ")])])),default:(0,s.w5)((()=>[(0,s.Wm)(_,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m,{dark:""},{default:(0,s.w5)((()=>[(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Rules, Terms And Conditions")])),_:1}),(0,s.Wm)(r),(0,s.Wm)(d,null,{default:(0,s.w5)((()=>[(0,s.Wm)(u,{variant:"text",onClick:t[0]||(t[0]=e=>i.dialog=!1)},{default:(0,s.w5)((()=>[(0,s.Uk)(" Close ")])),_:1})])),_:1})])),_:1}),(0,s.Wm)(g,{lines:"one"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Rules")])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.gameRules,((e,t)=>((0,s.wg)(),(0,s.j4)(f,{key:t},{default:(0,s.w5)((()=>[(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,w.zw)(t+1)+". "+(0,w.zw)(e),1)])),_:2},1024)])),_:2},1024)))),128)),(0,s.Wm)(p),(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Terms And Conditions")])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.termsConditions,((e,t)=>((0,s.wg)(),(0,s.j4)(f,{key:t},{default:(0,s.w5)((()=>[(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,w.zw)(t+1)+". "+(0,w.zw)(e),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"])}const x=["On the Dashboard page, the user can configure the quiz by providing the number of questions, number of answers per question, and names of the teams participating in the game.","When the user clicks the 'Start Game' button, the game begins.","The game starts with a coin toss to determine which player goes first. Let's assume Player A wins the coin toss and plays first.","On the Quiz page, a question is displayed along with a set of possible answers.","Each player takes turns guessing the correct answer. Player A guesses first.","If Player A guesses the correct answer, the points associated with that answer are added to Player A's score.","If Player A guesses the wrong answer, their chance is not changed, and their retry count decreases.","Once Player A's retry count reaches 0, Player B wins and scores of both player adds up and get assigned to winning player B.","Once the game ends user can either see all the remaining answers or play the game again by cicking on the respective buttons."],N=["By using this quiz app, you agree to comply with and be bound by the following terms and conditions.","This quiz app is intended for entertainment and educational purposes only.","The content provided in the quiz questions and answers is for general knowledge and reference only. We do not guarantee the accuracy, completeness, or suitability of the content. Use the information at your own risk.","The quiz questions and answers may be subject to change without notice. We reserve the right to modify, add, or remove questions or any part of the quiz content at any time.","The user is responsible for providing accurate and up-to-date information while configuring the quiz, including the number of questions, number of answers per question, and team names.","We do not collect or store any personal information of the users or participants of the quiz. Any data provided by the user during the quiz setup process is used solely for the purpose of running the quiz and is not shared with third parties.","The start of the quiz is initiated by the user clicking the 'Start Game' button on the Dashboard page. Once the game starts, the order of play, coin toss, and other game mechanics are handled by the app and cannot be manipulated by the user.","The scores and results displayed at the end of the quiz are based on the answers provided by the participants during the game. We are not responsible for any errors, technical issues, or discrepancies in the score calculation.","The winner of the quiz is determined based on the final scores calculated by the app. In case of a tie, the app may either declare a tie or follow a tiebreaker rule as specified in the game setup.","We reserve the right to suspend, terminate, or modify the quiz app or any part of it without prior notice. We shall not be liable for any loss or damage arising from such actions.","By using this quiz app, you acknowledge that you have read, understood, and agreed to these terms and conditions."];var V={name:"RulesView",data(){return{dialog:!1,notifications:!1,sound:!0,widgets:!1,gameRules:x,termsConditions:N}}};const j=(0,r.Z)(V,[["render",D]]);var Q=j,P={data(){return{question_lenght:"10",question_type:"3 Answers",items:["3 Answers","4 Answers","5 Answers","6 Answers","7 Answers"],teams:[{Name:"Team Red",Title:"Team A",Score:0,Retry:5},{Name:"Team Blue",Title:"Team B",Score:0,Retry:5}]}},components:{RulesView:Q},methods:{StartGame(){if(!(""!==this.question_type&&""!==this.question_lenght&&this.question_lenght>=10))return!0;this.$store.dispatch("fetchQuizDataByParam",{limit:this.question_lenght,sheet:this.question_type}),this.$store.commit("SET_TEAMS",this.teams),this.$router.push({path:"quiz"})}}};const $=(0,r.Z)(P,[["render",R]]);var B=$;const G=[{path:"/quiz",name:"quiz",component:U},{path:"/",name:"dashboard",component:B}],M=(0,p.p7)({history:(0,p.PO)("/family-fued-quiz/"),routes:G});var I=M,Z=a(65),K=a(3663),H=(0,Z.MT)({state:{data:"",results:"",loading:!1,currentTeam:"Team Red",quizData:[{Question:"",Answers:[]}],settings:{QuestionNum:10,QuestionType:3},teams:[{Name:"Team Red",Title:"Team A",Score:0,Retry:5,IsWinner:!1},{Name:"Team Blue",Title:"Team B",Score:0,Retry:5,IsWinner:!1}]},getters:{},mutations:{getData(e,t){e.data="",e.data+=t},updateResults(e,t){e.results="",e.results+=t},SET_QUIZ_DATA(e,t){e.quizData=t},SET_SETTINGS(e,t){e.settings=t},SET_TEAMS(e,t){e.teams=t},SET_CURRENT_TEAM(e,t){e.currentTeam=t}},actions:{async fetchQuizData({commit:e}){try{const t=await K.Z.get("https://script.google.com/macros/s/AKfycbyOoDcEIoPM0tuONattL2VgBa1Sq3A8QMKPSm2KBS_6qZrQMBGEpK4nnuRwBp55lQOdlA/exec");e("SET_QUIZ_DATA",t.data)}catch(t){console.log(t)}},fetchQuizDataByParam({commit:e},t){try{this.state.loading=!0;var a="https://script.google.com/macros/s/AKfycbyOoDcEIoPM0tuONattL2VgBa1Sq3A8QMKPSm2KBS_6qZrQMBGEpK4nnuRwBp55lQOdlA/exec";t.limit&&t.sheet&&e("SET_SETTINGS",{QuestionNum:t.limit,QuestionType:t.sheet}),a+="?limit="+this.state.settings.QuestionNum+"&sheet="+this.state.settings.QuestionType,K.Z.get(a).then((t=>{const a=t.data;a.forEach((e=>{e.Answers.forEach((e=>{e.isHidden=!0}))})),e("SET_QUIZ_DATA",a),this.state.loading=!1})).catch((e=>{console.error(e)}))}catch(n){console.log(n)}}},modules:{}});(0,n.ri)(d).use(f).use(I).use(H).mount("#app")}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,n,s,i){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],s=e[d][1],i=e[d][2];for(var l=!0,r=0;r<n.length;r++)(!1&i||o>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[r])}))?n.splice(r--,1):(l=!1,i<o&&(o=i));if(l){e.splice(d--,1);var u=s();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,s,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,i,o=n[0],l=n[1],r=n[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(s in l)a.o(l,s)&&(a.m[s]=l[s]);if(r)var d=r(a)}for(t&&t(n);u<o.length;u++)i=o[u],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(d)},n=self["webpackChunkfamily_fued_quiz"]=self["webpackChunkfamily_fued_quiz"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(7927)}));n=a.O(n)})();
//# sourceMappingURL=app.50feb38f.js.map