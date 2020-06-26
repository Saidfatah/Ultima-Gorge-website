module.exports = (function () {
    const axios =require('axios')
    const bookings__Table =document.getElementById('bookings__Table')

    const loadBookings=(bookings)=>{
      console.log(bookings)
      bookings.forEach(element => {
       const {name,phone,email,msg,arrivalDate,departureDate,adults,childern}=element
       const booking = `<tr data_email="${email}">
             <td> ${name}</td>
             <td> ${phone}</td>
             <td> ${email}</td>
             <td> ${msg}</td>
             <td> ${arrivalDate}</td>
             <td> ${departureDate}</td>
             <td> ${adults}</td>
             <td> ${childern}</td>
             <td> <span><i class="fas fa-compass"></i></span></td>
            </tr>`
            bookings__Table.innerHTML += booking

      });
    }

    axios.get('http://localhost:4000/bookings', )
      .then(function (response) {
        loadBookings(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

  
    
}());