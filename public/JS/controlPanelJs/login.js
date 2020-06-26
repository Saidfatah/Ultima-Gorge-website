const {event,pd,query}= require('../utils/short')
const {invalideInput}= require('../utils/validate')
const axios =require('axios')
module.exports = (function () {
    const loader    = query('#loader')
    const heroText  = query('.auth__heroText')
    const flash     = query('.flash')
    const AuthGuard = query('.AuthGuard')
    const form      = query('form')
    const login     = query('#login')
    const userName  = query('#userName')
    const password  = query('#password')
    const invalides = Array.from(query('.invalide',true))
    let  userNameValue =''
    let  passwordValue =''
    loginHnadler =e=>{
      pd(e)
      userNameValue = userName.value
      passwordValue = password.value
      if(userNameValue =='' || passwordValue =='')
      {
        if(userNameValue =='')invalideInput(userName) 
        if(passwordValue =='')invalideInput(password) 
      }
      else loginApîCall()
    }
    const formClick   =e=>{
        pd(e)
        if(e.target.id !='login')
        invalides.forEach(invalide => invalide.style.display='none');
      }
    const loginApîCall =()=>{
       loader.style.display='block'
        axios.post('http://localhost:4000/users/login', {userName:userNameValue , password :passwordValue})
        .then(function (response) {
          onLoggingSucces()
        })
        .catch(function (error) {
          onLoggingFail()
        });
    }
    const onLoggingSucces=()=>{
          const loginFromContainer = query('.Book')
          heroText.classList.add('hide')
          loginFromContainer.classList.add('hide')
          AuthGuard.classList.remove('hide')
    }
    const onLoggingFail=()=>{
         setTimeout(() => {
          loader.style.display='none'
          flash.style.display ='block'
         }, 500);
    }
    event(login,'click',loginHnadler) 
    event(form,'click',formClick)

}());