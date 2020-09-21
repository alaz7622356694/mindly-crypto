(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,a){e.exports=a(56)},31:function(e,t,a){},32:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),o=(a(31),a(32),a(4)),i=a(5),u=a(1),s=a(7),d=a(6),m=a(8),p=a.n(m),h="https://mindly-back.herokuapp.com/api/crypto",y=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"getCrypto",value:function(){return p.a.get(h).then((function(e){return e}))}},{key:"getCryptoById",value:function(e){return p.a.get(h+"/"+e).then((function(e){return e}))}},{key:"addCrypto",value:function(e){return p.a.post(h,NaN+e).then((function(e){return e}))}},{key:"getMarketsData",value:function(){return p.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){return e}))}},{key:"deleteCrypto",value:function(e){return p.a.delete(h+"/"+e).then((function(e){return e}))}}]),e}()),b=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={crypto:[],message:null},n.addCrypto=n.addCrypto.bind(Object(u.a)(n)),n.reloadCryptoList=n.reloadCryptoList.bind(Object(u.a)(n)),n.deleteCrypto=n.deleteCrypto.bind(Object(u.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.reloadCryptoList()}},{key:"reloadCryptoList",value:function(){var e=this;y.getCrypto().then((function(t){e.setState({crypto:t.data})}))}},{key:"addCrypto",value:function(){window.localStorage.removeItem("cryptoId")}},{key:"deleteCrypto",value:function(e){var t=this;y.deleteCrypto(e).then((function(a){t.setState({crypto:t.state.crypto.filter((function(t){return t.id!==e}))})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:" container-fluid card  bg-dark"},r.a.createElement("div",{className:"container-sm card-header bg-primary text-light text-center py-2 "},r.a.createElement("h2",null,"Your portfolio items")),r.a.createElement("div",{className:"container-sm card-body bg-light text-dark "},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-striped table-bordered   "},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Cryptocurrency"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Date of purchase"),r.a.createElement("th",null,"Wallet location"),r.a.createElement("th",null,"Current market value(EUR)"),r.a.createElement("th",null,"Option"))),r.a.createElement("tbody",null,this.state.crypto.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.cryptocurrency),r.a.createElement("td",null,t.amount),r.a.createElement("td",null,t.dateOfPurchase),r.a.createElement("td",null,t.walletLocation),r.a.createElement("td",null,t.currentMarketValue),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger",onClick:function(a){window.confirm("Are you sure you wish to delete this item?")&&e.deleteCrypto(t.id)}}," ","Delete"," ")))})))))))}}]),a}(n.Component),f=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark sticky-top"},r.a.createElement("a",{class:"navbar-brand",href:"#"},"Mindly"),r.a.createElement("button",{type:"button",class:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarCollapse"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse justify-content-between sticky-top",id:"navbarCollapse"},r.a.createElement("div",{class:"navbar-nav"})))))}}]),a}(n.Component),g=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:" container-fluid footer-copyright text-center py-3 text-light bg-dark"},"Mindly Crypto Portfolio 2020",r.a.createElement("br",null),r.a.createElement("span",{className:"text-muted"}," Desinged by Alireza Azari"))}}]),a}(n.Component),v=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={info:[]},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid bg-primary p-5"},r.a.createElement("div",{class:"card-deck text-light"},r.a.createElement("div",{class:"card bg-dark"},r.a.createElement("div",{class:"card-header"},r.a.createElement("img",{class:"img-fluid mx-auto d-block",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Bsv-icon-small.png/150px-Bsv-icon-small.png",alt:"Cinque Terre"})),r.a.createElement("div",{class:"card-body text-justify"},r.a.createElement("p",{class:"card-text align-left"},"Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto and started in 2009 when its implementation was released as open-source software."))),r.a.createElement("div",{class:"card bg-dark"},r.a.createElement("div",{class:"card-header"},r.a.createElement("img",{class:"img-fluid mx-auto d-block",src:"http://www.userlogos.org/files/ethereum1.png",alt:"Cinque Terre"})),r.a.createElement("div",{class:"card-body text-justify"},r.a.createElement("p",{class:"card-text"},"Ethereum is a technology that lets you send cryptocurrency to anyone for a small fee. It also powers applications that everyone can use and no one can take down. It's the world's programmable blockchain."))),r.a.createElement("div",{class:"card bg-dark"},r.a.createElement("div",{class:"card-header"},r.a.createElement("img",{class:"img-fluid mx-auto d-block",src:"http://coinhubdesk.com/my_content/uploads/2018/04/ripple_logo_small.png",alt:"Cinque Terre"})),r.a.createElement("div",{class:"card-body text-justify"},r.a.createElement("p",{class:"card-text"},"Ripple is a technology that acts as both a cryptocurrency and a digital payment network for financial transactions. It was first released in 2012 and was co-founded by Chris Larsen and Jed McCaleb.")))),r.a.createElement("br",null))}}]),a}(n.Component),E=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).markets=new Map([]),n.ShowCurrentDate=function(){return(new Date).getDate()+"/"+((new Date).getMonth()+1)+"/"+(new Date).getFullYear()},n.addCrypto=function(e){var t={cryptocurrency:n.state.value,amount:n.state.amount,walletLocation:n.state.walletLocation,dateOfPurchase:n.ShowCurrentDate(n.state.value),currentMarketValue:n.markets.get(n.state.value)};y.addCrypto(t).then((function(e){n.setState({message:"Crypto added successfuly."})}))},n.changeCryptoHandler=function(e){n.setState({value:e.target.value})},n.changeAmountHandler=function(e){n.setState({amount:e.target.value})},n.changeWalletLocationHandler=function(e){n.setState({walletLocation:e.target.value})},n.changeDateOfPurchaseHandler=function(e){n.setState({dateOfPurchase:e.target.value})},n.changecurrentMarketValueHandler=function(e){n.setState({currentMarketValue:e.target.value})},n.state={value:"bitcoin",amount:"",dateOfPurchase:"",walletLocation:"",currentMarketValue:"",message:null},n.changeCryptoHandler=n.changeCryptoHandler.bind(Object(u.a)(n)),n.changeAmountHandler=n.changeAmountHandler.bind(Object(u.a)(n)),n.changeWalletLocationHandler=n.changeWalletLocationHandler.bind(Object(u.a)(n)),n.changeDateOfPurchaseHandler=n.changeDateOfPurchaseHandler.bind(Object(u.a)(n)),n.changecurrentMarketValueHandler=n.changecurrentMarketValueHandler.bind(Object(u.a)(n)),n.addCrypto=n.addCrypto.bind(Object(u.a)(n)),n.ShowCurrentDate=n.ShowCurrentDate.bind(Object(u.a)(n)),y.getMarketsData().then((function(e){e.data.map((function(e){["bitcoin","ethereum","ripple"].includes(e.id)&&n.markets.set(e.id,e.current_price)}))})),n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:" container-sm card-header bg-primary info-color text-left py-2"},r.a.createElement("h2",null,"Please enter an item to your portfolio")),r.a.createElement("div",{className:" container-sm card-body bg-light text-dark"},r.a.createElement("form",{className:"form-vertical",role:"form"},r.a.createElement("div",{className:"form-group "},r.a.createElement("div",{className:"form-group "}," ",r.a.createElement("label",null,"Cryptocurrency type"),r.a.createElement("select",{className:"form-control w-25",value:this.state.value,onChange:this.changeCryptoHandler},r.a.createElement("option",{value:"bitcoin",className:"form-control",id:"sel1"},"Bitcoin"),r.a.createElement("option",{value:"ethereum",placeholder:"Cryptocurrency type",name:"CryptocurrencyType",className:"form-control",id:"sel1"},"Ethereum"),r.a.createElement("option",{value:"ripple",placeholder:"Cryptocurrency type",name:"CryptocurrencyType",className:"form-control",id:"sel1"},"Ripple"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Amount"),r.a.createElement("input",{type:"number",placeholder:"Amount",name:"amount",className:"form-control w-25",required:!0,value:this.state.amount,onChange:this.changeAmountHandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Wallet Location",r.a.createElement("textarea",{className:"form-control",placeholer:"Wallet Location",required:!0,value:this.state.walletLocation,onChange:this.changeWalletLocationHandler}))),r.a.createElement("br",null)),r.a.createElement("button",{className:"btn btn-primary",onClick:this.addCrypto},"Save"))))}}]),a}(n.Component),k=a(25);var C=function(){return r.a.createElement("div",{className:"container-fluid bg-dark text-light "},r.a.createElement(k.a,null,r.a.createElement(f,null),r.a.createElement(v,null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(E,null)),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(b,null)),r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(55);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.2aa6d528.chunk.js.map