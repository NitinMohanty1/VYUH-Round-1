(this["webpackJsonpmcq-react"]=this["webpackJsonpmcq-react"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(27),o=n.n(s),r=(n(36),n(2)),c=(n(37),n(3)),u=n(63),h=n(64),l=n(65),d=(n(38),n(1));function f(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],i=t[1],s=Object(r.f)();return Object(d.jsx)("div",{class:"contentmain",children:Object(d.jsxs)("div",{style:{paddingTop:"20%",paddingLeft:"40%",paddingBottom:"23%"},children:[Object(d.jsx)(u.a,{className:"mb-3",style:{width:"30%"},children:Object(d.jsx)(h.a,{value:n,onChange:function(e){return i(e.target.value)},placeholder:"Enter Your Team Name"})}),Object(d.jsx)(l.a,{variant:"primary",style:{width:"30%"},disabled:!n,onClick:function(){return function(){var e=new URLSearchParams;n?e.append("name",n):e.delete("name"),s({pathname:"/question",search:e.toString()})}()},children:"Start Game"})]})})}var b=n(28),m=n.n(b);function j(e){var t=e.name,n=e.score,i=Object(a.useState)(!1),s=Object(c.a)(i,2),o=(s[0],s[1]),r=Object(a.useState)(!1),u=Object(c.a)(r,2),h=(u[0],u[1]);return Object(a.useEffect)((function(){sessionStorage.getItem("submitted")||(o(!0),m.a.post("https://sheet.best/api/sheets/1f070a94-eeac-4e42-a6c4-efa60aaa2daa",{name:t,score:n,timestamp:(new Date).toString()}).then((function(){o(!1),sessionStorage.setItem("submitted","true")})).catch((function(){o(!1),h(!0)})))}),[]),Object(d.jsx)("div",{style:{color:"Green",fontSize:"30px",fontWeight:"bold"},children:Object(d.jsxs)("div",{children:["Your Final Score is ",n,". Thank you ",t,"!!!"]})})}var g=function(e){return Object(d.jsx)(d.Fragment,{children:e.options[e.id].map((function(t){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"radio",value:t[0],onChange:e.onChange,name:"".concat(e.name,"-").concat(e.id+1)}),t]})}))})};function p(e){var t=e.type,n=e.question,i=e.option,s=e.onOptionSelection,o=e.onAnswerSubmit,r=e.id,u=e.timerCount,h=e.onTimerEnd,f=Object(a.useState)(0),b=Object(c.a)(f,2),m=b[0],j=b[1];return Object(a.useEffect)((function(){console.log("called",t,u),j(u)}),[]),Object(a.useEffect)((function(){var e=setInterval((function(){m>0?j(m-1):(h(),j(u))}),1e3);return function(){clearInterval(e)}})),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:["Timer: ",m]}),Object(d.jsx)("div",{className:"col-12 my-4",dangerouslySetInnerHTML:{__html:"".concat(r+1,".").concat(n.question)}}),Object(d.jsx)(g,{options:i,name:t,onChange:function(e){return s(e)},id:r}),Object(d.jsx)(l.a,{style:{width:"20%"},onClick:function(){return o(n.answer)},children:"Submit"})]})}function O(){var e=Object(r.e)().search,t=new URLSearchParams(e).get("name"),n=Object(a.useState)(0),i=Object(c.a)(n,2),s=i[0],o=i[1],u=Object(a.useState)(""),h=Object(c.a)(u,2),l=h[0],f=h[1],b=Object(a.useState)(""),m=Object(c.a)(b,2),g=m[0],O=m[1],v=Object(a.useState)(!1),B=Object(c.a)(v,2),x=B[0],C=B[1],k=Object(a.useState)(0),E=Object(c.a)(k,2),I=E[0],q=E[1],L=Object(a.useState)(0),T=Object(c.a)(L,2),D=T[0],F=T[1],P=Object(a.useState)(""),N=Object(c.a)(P,2),M=N[0],R=N[1];Object(a.useEffect)((function(){var e=+sessionStorage.getItem("currentQuestionIndex")||0,t=+sessionStorage.getItem("currentSetbackIndex")||0,n=+sessionStorage.getItem("score")||0;o(e),q(t),F(n)}),[]),Object(a.useEffect)((function(){sessionStorage.setItem("currentQuestionIndex",s)}),[s]),Object(a.useEffect)((function(){sessionStorage.setItem("currentSetbackIndex",I)}),[I]),Object(a.useEffect)((function(){sessionStorage.setItem("score",D)}),[D]);var W=function(e){g===e&&F(D+5),C(!1),q(I+1)};return Object(d.jsx)("div",{className:"container-fluid p-4 content disableselect",children:s===w.length?Object(d.jsx)(j,{score:D,name:t}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:["Hello ",t,". Welcome to Trivia the major event by DOT club for TRISHNA, the annual cultural fest of IBS Hyderabad. All the Best...!!!"]}),Object(d.jsxs)("div",{children:["Score: ",D]}),!!M&&Object(d.jsxs)("div",{style:{color:"green",fontSize:"20px",fontWeight:"bold"},children:["Clue: ",M]}),Object(d.jsxs)("div",{className:"row no-gutters",children:[x&&S.map((function(e,t){return t===I&&Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{color:"red",fontSize:"20px",fontWeight:"bold"},children:"Setback Question"}),Object(d.jsx)(p,{type:"setback",question:e,id:t,option:A,timerCount:300,onOptionSelection:function(e){return function(e){O(e.target.value)}(e)},onAnswerSubmit:function(){return W(e.answer)},onTimerEnd:function(){return W(null)}})]})})),!x&&w.map((function(e,t){return t===s&&Object(d.jsx)(p,{type:"question",question:e,id:t,option:y,timerCount:300,onOptionSelection:function(e){return function(e){f(e.target.value)}(e)},onAnswerSubmit:function(){return function(e,t){l===e?(F(D+10),R(t)):(C(!0),R("")),o(s+1)}(e.answer,e.clue)},onTimerEnd:function(){return o(s+1)}})}))]})]})})}var w=[{question:"Alien Pk and Alien Jaadu are travelling to Earth. Alien dhoop is the son of Alien Pk but alien Pk is not the father of Alien dhoop. What is the relation between alien dhoop and alien pk? ",answer:"D",clue:"A"},{question:"If on planet earth 31 March 2017 is a Saturday, find the day of the week on 1 January 2014? ",answer:"C",clue:"DC"},{question:"You travel three different distance from the space station 10 km, 20 km and 30 km at a speed of 1/2km hr, 1/3 km/hr and 1 km/hr respectively. What is the ratio of the time taken for the distances given? ",answer:"A",clue:"EF"},{question:"ALL MOONS ARE STARS.  B.ALL STARS ARE GALAXIES  C.NO STARS ARE PLANETS  : <br>  CON 1-SOME PLANETS ARE GALAXIES <br>  CON 2-NO PLANET IS A GALAXY",answer:"C",clue:"B"},{question:"PARAJUMBLE <br> A. Later this month, if all goes according to plan, a rocket called the Falcon Heavy will take off from Cape Canaver-al, in Florida. <br> B. Its mission is to put a sports car in orbit around the sun. <br> C. The Falcon Heavy is the latest product of SpaceX, a firm founded by Elon Musk, an American billionaire. <br> D. Before then, the Falcon Heavy may earn its keep lifting satellites and carrying tourists on slingshot trips around the moon. <br> E. The car is Mr Musk's own, made by Tesla, another of his businesses. <br> F. SpaceX has the explicit aim, besides making money, of enabling people to travel to and colonise Mars.",answer:"D",clue:""},{question:"Aliens Jaadu and Pk are buying a new spaceship which runs at a speed of 90 km/hr. If the speed of the spaceship reduces constantly by 10% of initial speed each year then what will be the speed at which it will run after two years? ",answer:"B",clue:"AE"},{question:"How is alien Jaadu,s mother\u2019s niece\u2019s father related to Pk? ",answer:"D",clue:"B"},{question:"Pointing to a baby alien, Alien Pk said 'He is the only grandson of my grandfather'. How is the alien related to Pk?",answer:"A",clue:"DC"},{question:"Alien Pk landed in a new planet Nebula in search of his friend jaadu who is in exactly opposite direction to Pk and the distance between them is 100 meters,<br> Since pk was not aware of this he started moving randomly. If jaadu is standing in the east direction and moves 50 m towards south, 90 m towards west and 50 m towards north,<br> what is the distance between jaadu and Pk?",answer:"B",clue:"F"},{question:"PARAJUMBLE <br> A. The Indian Space Research Organization (ISRO) crossed an important milestone with the successful launch of weather satellite INSAT-3DR using a Geosynchronous Satellite Launch Vehicle (GSLV) equipped with the indigenous cryogenic upper stage.<br> B. The September 8 GSLV launch marks the third consecutive success; the fact that it is the first operational flight by the GSLV carrying the indigenous cryogenic upper stage is confirmation that India now belongs to the elite club of countries that have mastered the cryogenic technology.<br> C. Likewise, igniting a cryogenic fuel and sustaining the combustion for a prolonged period is a daunting task.<br> D. Maintaining structural and thermal integrity of the engine at very high temperatures during combustion just a few centimeters away from \u2013 250\xb0 C, a temperature at which materials behave very differently, is a huge challenge.<br> E. This marks a departure from the long history of failures with the GSLV; except for the first, every launch of the Polar Satellite Launch Vehicle (PSLV), the workhorse of ISRO, has been a success.<br> F. The Thursday launch had fully utilized the maximum payload carrying capacity of the GSLV-Mk II by carrying the heaviest satellite (2,211 kg) ever from Indian soil.",answer:"C",clue:""}],y=[["A. Nephew","B. Uncle","C. Brother","D. Father"],["A. Wednesday","B. Friday","C. Thurday","D. Monday"],["A. 2:6:3","B. 3:2:6","C. 1:2:3","D. 1:3:6"],["A. Only conclusion 1 follow","B. Only conclusion 2 follow","C. Both Conclusion follow","D. Neither Conclusion follow"],["A. CEFBAD","B. FBADCE","C. ADCEBF","D. ADCEFB"],["A. 26","B. 72","C. 81","D. 99"],["A. Son","B. Nephew","C. Cousin","D. Uncle"],["A. Brother","B. Uncle","C. Data Inadequate","D. None of these"],["A. 20","B. 10","C. 30","D. 40"],["A. AEDBCF","B. DEABCF ","C. AEBDCF","D. FAEBCD"]],S=[{question:"Which of these planets has no moons ?",answer:"B"},{question:"Right now, which of these is further from the Sun? ",answer:"A"},{question:"Which of these is the moon of Jupiter ?",answer:"B"},{question:"Which of these is largest object in the asteroid belt ?",answer:"B"},{question:"The first flight of the space shuttle program by NASA was launched in ?",answer:"B"},{question:"Which of these is the distance between Earth and the centre of the Milky Way galaxy ?",answer:"B"},{question:"Which galaxy is further away from Earth ?",answer:"B"},{question:"Which year was the first exoplanet discovered in ?",answer:"A"},{question:"Which of these is evidence for the big bang theory ?",answer:"A"},{question:"First space station ?",answer:"B"}],A=[["A. Uranus","B. Mercury"],["A. Pluto","B. Neptune"],["A. Enceladus","B. LO-LO"],["A. Makemake","B. Ceres"],["A. 1980","B. 1981"],["A. 250 light-years","B. 25000 light-years"],["A. Andromeda","B. Large Magellanic cloud"],["A. 1995","B. 2005"],["A. Observation of redshift of the distant galaxies","B. The abundance of nitrogen in the earth\u2019s atmosphere"],["A. Sputnik 1","B. Salyut 1"]];var v=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/",element:Object(d.jsx)(f,{})}),Object(d.jsx)(r.a,{path:"/question",element:Object(d.jsx)(O,{})})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),s(e),o(e)}))},x=(n(61),n(29));o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(x.a,{children:Object(d.jsx)(v,{})})}),document.getElementById("root")),B()}},[[62,1,2]]]);
//# sourceMappingURL=main.fa1b4aa0.chunk.js.map