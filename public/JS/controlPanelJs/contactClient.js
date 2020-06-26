const {query}= require('../utils/short')
module.exports= function renderContact(bookingEmail,bookingPhone)
{
  //call post api to use email sender in backend 
  //make htmlTemplate for phone call 
  //render html 
  const bookings__contact    = query('.bookings__contact')
  bookings__contact.innerHTML += bookingContactHtml()
  const bookingContactHtml =()=>{
    return `
       <div> ${bookingEmail}  </div>
       <div> ${bookingPhone} </div>
    `
  }
}


    
