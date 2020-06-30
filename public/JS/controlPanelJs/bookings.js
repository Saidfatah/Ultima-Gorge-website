const {query}= require('../utils/short')
module.exports = (function () {
    const axios =require('axios')
    const bookings__Table_body = query("#table_body")
    const loader = query('.loaderGif')
    const loadBookings=(bookings)=>{
      setTimeout(() => {
        loader.style.display='none'
        bookings.forEach(element => {
           const {_id,name,phone,email,arrivalDate,departureDate,adults,childern}=element
           const booking = `<tr data_email="${email}">
               <td> ${name}</td>
               <td> ${arrivalDate}</td>
               <td> ${departureDate}</td>
               <td> ${adults}</td>
               <td> ${childern}</td>
               <td> <span class="action"
                          id="contact"
                          data_phone ="${phone}" 
                          data_email="${email}"
                          ><i class="fas fa-reply-all"></i>Contact</span></td>
               <td> <span class="action" 
                          id="readMore" 
                          data_id="${_id}"
                          ><i class="fas fa-ellipsis-h"></i>more..</span></td>
              </tr>`
           bookings__Table_body.innerHTML += booking
        });
      }, 5000);
     
    }
    const onApiSucces =(data)=>{
        loadBookings(data)
    }
    axios.get('http://localhost:4000/bookings' )
         .then(function (response) {
        
        onApiSucces(response.data)
         })
         .catch(function (error) {
        console.log(error);
         });

  
    
}());