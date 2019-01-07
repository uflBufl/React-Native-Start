!function(e){var t={};function s(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";function a(e){return React.createElement("img",{src:"img/w-mercury-development.svg",className:"logo"})}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}s.r(t);class n extends React.Component{render(){return React.createElement("input",r({type:"submit",className:"form__button "+this.props.addClass},this.props))}}class i extends React.Component{render(){return React.createElement("div",{className:"block"},this.props.children)}}const o=React.createContext({user:{name:"",photoUrl:""}});class l extends React.Component{render(){return React.createElement("div",null,React.createElement(i,null,React.createElement(o.Consumer,null,e=>React.createElement("form",this.props,React.createElement("img",{src:e.photoUrl,className:"block__img"}),React.createElement("h1",{className:"block__headline block__headline_name",id:"UsName"},e.name),React.createElement(n,{value:"Logout",addClass:"form form__button_profile"})))))}}async function c(e,t){const s=JSON.stringify({email:e,password:t});return await async function(e,t){const s={method:"POST",headers:{"Content-Type":"application/json"},body:t};return await async function(e,t){const s=await fetch(e,t),a=await s.json();if(s.ok)return a;{let e=a.error;throw 0==s.status&&(e="No internet connection"),503==s.status&&(e="Server is temporarily unavailable"),400==s.status&&(e="E-Mail or password is incorrect"),{error:e,status:s.status}}}(e,s)}("https://us-central1-mercdev-academy.cloudfunctions.net/login",s)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}class d extends React.Component{render(){return React.createElement("input",u({className:"form__input "+this.props.addClass,style:1==this.props.isInvalid?{borderColor:"#ed4159",color:"#ed4159"}:{}},this.props))}}class m extends React.Component{constructor(e){super(e),this.state={email:"user@example.com",password:"mercdev",isSending:!1,isInvalid:!1,error:""},this.removeInvalid=this.removeInvalid.bind(this),this.submitForm=this.submitForm.bind(this),this.handleChangeEmail=this.handleChangeEmail.bind(this),this.handleChangePassword=this.handleChangePassword.bind(this)}async submitForm(e){e.preventDefault(),this.setState({isSending:!0,error:""});try{const e=await c(this.state.email,this.state.password);this.props.submitLogin(e)}catch(e){400==e.status&&this.setState({password:"",isInvalid:!0}),this.setState({error:e.error})}this.setState({isSending:!1})}removeInvalid(){this.setState({isInvalid:!1})}handleChangeEmail(e){this.setState({email:e.target.value})}handleChangePassword(e){this.setState({password:e.target.value})}render(){return React.createElement("div",null,React.createElement(i,null,React.createElement("h1",{className:"block__headline"},"Log In"),React.createElement("form",{onSubmit:this.submitForm,className:"form"},React.createElement(d,{type:"email",onClick:this.removeInvalid,value:this.state.email,isInvalid:this.state.isInvalid,disabled:this.state.isSending,onChange:this.handleChangeEmail,placeholder:"E-Mail"}),React.createElement(d,{type:"password",value:this.state.password,disabled:this.state.isSending,onChange:this.handleChangePassword,placeholder:"Password",addClass:"form__input_password"}),React.createElement("div",{className:"form__error",style:""==!this.state.error?{display:"inline-block"}:{display:"none"}},React.createElement("span",{id:"errortext",name:"errortext"},this.state.error)),React.createElement(n,{value:"Login",disabled:this.state.isSending}))))}}ReactDOM.render(React.createElement(class extends React.Component{constructor(e){super(e),this.state={},this.submitLogout=this.submitLogout.bind(this),this.submitLogin=this.submitLogin.bind(this)}submitLogin(e){this.setState({user:e})}submitLogout(){this.setState({user:null})}render(){return React.createElement("div",null,React.createElement(a,null),React.createElement(o.Provider,{value:this.state.user},this.state.user?React.createElement(l,{onSubmit:this.submitLogout,user:this.state.user}):React.createElement(m,{submitLogin:this.submitLogin})))}},null),document.querySelector("#root"))}]);