const {query,SubQuery}= require('../../utils/short')
module.exports= function renderContact(bookingEmail,bookingPhone)
{
  const clientPhone = query('#clientPhone')
  const clientPhone_span =SubQuery(clientPhone,'span') 
  const clientEmail = query('#clientEmail')


  clientPhone.href=`tel:  +${bookingPhone}`
  clientEmail.href=`mailto: +${bookingEmail}`

  clientEmail.innerHTML=bookingEmail
  clientPhone_span.innerHTML='+'+bookingPhone
}


    
