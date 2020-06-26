const axios =require('axios')
const {query,SubQuery}= require('../utils/short')
const {xposeRecursive,yposeRecursive,getParentRecursive,test} = require('../utils/recursive')
require('../flatPicker_Calender/flatpicker')
module.exports = (function () {
    //#region refs
    const daysContainer = document.querySelector('.flatPicker__daysContainer')
    const loader         = query('#loader')
    const form           = query('form')
    const name           = query('#name')
    const flatPicker     = query('.flatPicker')
    const arrivalLabel   = query('#arrivalLabel')
    const departureLabel = query('#departureLabel')
    const departureBtn   = query('#departureBtn')
    const arrivalBtn     = query('#arrivalBtn')
    const email          = query('#email')
    const phoneNumber    = query('#phoneNumber')
    const adultsSelect   = query('#adultsSelect')
    const childernSelect = query('#childernSelect')
    const msg            = query('#message')
    const numbers        = Array.from(query('.number',true))
    const invalides      = Array.from(query('.invalide',true))
    const count          = query('.count')
    const flash          = query('.flash')
    const submit         = query('#submit')
    //#endregion 
    //#region inits
    let adultsCount   = 1
    let ChildernCount = 0
    let arrivaldate   = ''
    let departuredate = ''
    let isArrival     = true
    let arrivalValue      =''
    let departureValue    =''
    let emailValue    =''
    let nameValue     =''
    let msgValue      =''
    let phoneValue    =''
    let clickedBtnflatPickerToogle=null
    let selectAdultsCount  = false
    let selectChildernCount= false
    let selectIsAdults= true 
    //#endregion

   //event handlers
    const selectGuestCount =e=>{
       e.preventDefault()
       let numberCount= 5; 
       const numberHeight =  40
       if(e.target.id == 'adultsSelect')
       {
         SubQuery(count,'.number').style.display='none'
         numberCount= 5;
         selectIsAdults =true
       }
       else
       {
         SubQuery(count,'.number').style.display='block'
         numberCount= 6;
         selectIsAdults =false
       }
       count.style.display='block'
       count.style.opacity='1'
       count.style.height= ((numberHeight*numberCount))+'px'
       count.style.top=(numberHeight+e.target.parentElement.offsetTop)+'px'
       count.style.left=(e.target.parentElement.offsetLeft + 10)+'px'
       
    }
    const selectGuestCountNumber =e=>{
       e.preventDefault()
       count.style.height='0px'
       count.style.opacity='0'
       const selectedNumber = e.target.innerHTML
       if(selectIsAdults) {
         adultsCount = parseInt(selectedNumber)
         adultsSelect.innerHTML=selectedNumber
         selectAdultsCount  = true; 
        }
       else {
         ChildernCount = parseInt(selectedNumber)
         childernSelect.innerHTML=selectedNumber
         selectChildernCount= true; 
       }
       setTimeout(() =>count.style.display='none', 500);
    }
    const submitForm  =e=>{
      e.preventDefault()
      msgValue   =msg.value
      emailValue =email.value
      nameValue  =name.value
      phoneValue =phoneNumber.value

      if(nameValue =='' || phoneValue =='' || emailValue =='' || arrivalValue =='' || departureValue =='' ||  !selectAdultsCount || !selectChildernCount)
      {
        if(emailValue =='')invalideInput(email) 
        if(nameValue =='')invalideInput(name) 
        if(phoneValue =='')invalideInput(phoneNumber) 
        if(departureValue =='')invalideInput(phoneNumber) 
        if(arrivalValue =='')invalideInput(phoneNumber) 
        if(!selectAdultsCount)invalideInput(adultsSelect) 
        if(!selectChildernCount)invalideInput(childernSelect) 
      }else
      {
        if(!ValidateEmail(emailValue)) invalideInput(email,'email invalide') 
        else apiPostCall()
      }
    }
    const formClick   =e=>{
      e.preventDefault()
  
      if(e.target.id !='submit')
      invalides.forEach(invalide => invalide.style.display='none');
    }
    const showFlatPicker =e=>{
      flatPicker.style.display='none'
      flatPicker.style.opacity='0'
      clickedBtnflatPickerToogle =e.target
      setTimeout(() => {
        if(e.target.id =='departureBtn')
        {
           isArrival = false
           flatPicker.style.display='block'
           flatPicker.classList.remove('flatPicker_left')
           flatPicker.classList.add('flatPicker_right')
  
        }
        else if(e.target.id =='arrivalBtn')
        {
           isArrival = true
           flatPicker.style.display='block'
           flatPicker.classList.remove('flatPicker_right')
           flatPicker.classList.add('flatPicker_left')
         }
      }, 20);
    }
    
    const generalClick =e=>{
      if(!e.target.classList.contains('flatPicker__control') )
      {
        flatPicker.style.display='none'
        flatPicker.style.opacity='0'
      }
    }
    const pickDate=e=>{
      if(e.target.classList.contains('flatPicker__day') )
      {
          if(!e.target.classList.contains('disabled')){
            const pickedDtae= e.target.getAttribute('area_labe')
            clickedBtnflatPickerToogle.innerHTML=pickedDtae
            if(isArrival){ 
              arrivalLabel.style.top='0px'
              arrivalValue=pickedDtae
            }
            else {
              departureLabel.style.top='0px'
              departureValue=pickedDtae
            }
          }
      } 
     }
    //local helper functions 
    const apiPostCall    =()=>{
      loader.style.display='block'
      axios.post('http://localhost:4000/bookings',{
          name:nameValue,
          email:emailValue,
          phone:phoneValue,
          msg:msgValue,
          adults:adultsCount,
          childern:ChildernCount,
          arrivalDate:arrivalValue,
          departureDate:departureValue
         })
         .then(res=>{
               console.log(res.data)
               setTimeout(() => {
                loader.style.display='none'
                flash.style.display='block'
               }, 1000);
         })
         .catch(err=>console.log(err))
    }
    const invalideInput=(elem,msg)=>{
      const invalide = elem.parentElement.querySelector('.invalide')
      invalide.style.height='auto'
      invalide.style.display='block'
      if(msg != undefined)  invalide.innerHTML=msg
    }
    const ValidateEmail=mail=> 
    {
       if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) return true
       return false
    }

    //event listners
    departureBtn.addEventListener('click',showFlatPicker)
    arrivalBtn.addEventListener('click',showFlatPicker)
    daysContainer.addEventListener('click',pickDate)
    form.addEventListener('click',formClick)
    adultsSelect.addEventListener('click',selectGuestCount)
    numbers.forEach(number =>number.addEventListener('click',selectGuestCountNumber));
    childernSelect.addEventListener('click',selectGuestCount)
    submit.addEventListener('click',submitForm)
    window.onclick = generalClick
}());