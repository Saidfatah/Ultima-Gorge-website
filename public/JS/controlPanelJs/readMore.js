const {query,SubQuery}= require('../utils/short')
module.exports= function renderMore(bookingId)
{
  const axios =require('axios')
  const bookings__readMore  = query('.bookings__readMore')
  const info_container  = SubQuery(bookings__readMore,'div')
  const loader = SubQuery(bookings__readMore,'.loaderGif')
  

  const onApiSucces=data=>{
       console.log(data)
       loader.style.display='none'
       info_container.innerHTML=bookingDataHtml(data)
  }
  axios.get('http://localhost:4000/bookings'+'/'+bookingId )
        .then(function (response) {
            onApiSucces(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
  const bookingDataHtml =booking=>{
    const {name,phone,email,msg,arrivalDate,departureDate,adults,childern}=booking
    return `
       <div>
         <span class="redMore_Label" >Name : </span>          
            <span class="readMore_data">${name} </span>        </br>
         <span class="redMore_Label" >Phone : </span>        
            <span class="readMore_data">${phone}</span>        </br>
         <span class="redMore_Label" >Email : </span>         
            <span class="readMore_data">${email}</span>        </br>
         <span class="redMore_Label" >Arrival Date :</span>   
            <span class="readMore_data">${arrivalDate}</span>  </br>
         <span class="redMore_Label" >Departure Date :</span> 
            <span class="readMore_data">${departureDate}</span></br>
         <span class="redMore_Label" >Adults : </span>        
            <span class="readMore_data">${adults}</span>       </br> 
         <span class="redMore_Label" >Childern : </span>      
            <span class="readMore_data">${childern}</span>     </br>  
         <span class="redMore_Label" >Message : </span>       
            <span class="readMore_data">${msg}</span>          </br>
       </div>
    `
  }
}


    
