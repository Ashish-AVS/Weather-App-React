(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),i=a.n(r),l=(a(23),a(6)),s=a(3),o=(a(8),function(e){return c.a.createElement("div",{style:{width:"auto"}},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"container"},c.a.createElement("h2",null,e.City,c.a.createElement("sup",{className:"country"},e.country)),c.a.createElement("div",{className:"city-temp"},Math.round(e.Temp),c.a.createElement("sup",null,"\xb0C")),c.a.createElement("figure",null,c.a.createElement("img",{src:e.icon,alt:"http://openweathermap.org/img/wn/50n@2x.png"}),c.a.createElement("figcaption",null,e.description.toUpperCase())))))}),m=a(5),u=a.n(m),p="78872b499149036415d75305243de5d8",d=function(){var e=Object(n.useState)([""]),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),d=m[0],h=m[1],E=Object(n.useState)([]),f=Object(s.a)(E,2),g=f[0],b=f[1],y=Object(n.useState)(!1),w=Object(s.a)(y,2),v=w[0],j=w[1],N=function(e,t){e?r((function(e){return[].concat(Object(l.a)(e),[d])})):h(t.target.value)};Object(n.useEffect)((function(){var e=a[a.length-1];u.a.get("https://api.openweathermap.org/data/2.5/weather?q="+e+"&appid="+p+"&units=metric").catch((function(e){e.response&&(console.log(e.response.status),j(!0))})),u.a.get("https://api.openweathermap.org/data/2.5/weather?q="+e+"&appid="+p+"&units=metric").then((function(e){var t=e.data;j(!1),b((function(e){return[].concat(Object(l.a)(e),[t])}))}))}),[a]);return c.a.createElement("div",{className:"firstPage container-fluid",style:{background:"#0a1f44",paddingTop:"50px"}},c.a.createElement("h1",null,"Simple Weather App"),c.a.createElement("h4",{className:"error-message"},v?c.a.createElement("div",null,"Enter a valid city name"):c.a.createElement("span",null)),c.a.createElement("div",{className:"my-form"},c.a.createElement("input",{type:"text",onChange:function(e){return N(!1,e)},placeholder:"Search for a City"}),c.a.createElement("button",{type:"submit",className:"btn btn-danger submitButton btn-lg",onClick:function(){return N(!0,"")}},"Submit")),c.a.createElement("div",{className:"weather-container"},g&&g.map((function(e){return c.a.createElement("div",{className:"weather-item"},c.a.createElement(o,{key:e.id,City:e.name,Temp:e.main.temp,country:e.sys.country,description:e.weather[0].description,icon:"https://openweathermap.org/img/wn/"+e.weather[0].icon+"@2x.png"}))}))),c.a.createElement("footer",null,c.a.createElement("h5",{className:"Footer"},c.a.createElement("i",{class:"fab fa-react"}),"  App By Ashish")))};i.a.render(c.a.createElement(d,null),document.getElementById("root"))},8:function(e,t,a){}},[[18,1,2]]]);
//# sourceMappingURL=main.afce654f.chunk.js.map