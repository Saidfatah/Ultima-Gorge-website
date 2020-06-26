const {event,pd,query,SubQuery}= require('../utils/short')
const renderMore= require('../controlPanelJs/readMore')
const renderContact= require('../controlPanelJs/contactClient')
module.exports = (function () {
   const bookings__table      = query('.bookings__table')
   const bookings__readMore   = query('.bookings__readMore')
   const bookings__contact    = query('.bookings__contact')
   const bookings__statistics = query('.bookings__statistics')
   const AuthGuard            = query('.AuthGuard')
   const auth__heroText       = query('.auth__heroText')
   const loginFromContainer   = query('.Book')
   const statisticsBtn        = query('.NavBarPhone')
   const bookingsBtn          = query('.NavBarBookNow')
   const logoutBtn            = query('.navBarLocation')
   const views=[bookings__table ,bookings__readMore,bookings__contact,bookings__statistics]


   const tableClick    = e =>{
        pd(e)
        if(e.target.id == 'readMore')
           {
               refreshRoutes('bookings__readMore')
               const bookingId = e.target.getAttribute('data_id')
               renderMore(bookingId)
           }
        else if(e.target.id == 'contact')
           {
               refreshRoutes('bookings__contact')
               const bookingPhone = e.target.getAttribute('data_phone')
               const bookingEmail = e.target.getAttribute('data_email')
               renderContact(bookingEmail,bookingPhone)
           }
   }
   const BookingsRoute = e=>{
        pd(e)
        refreshRoutes('bookings__table')
   } 
   const statisticsRoute = e=>{
        pd(e)
        refreshRoutes('bookings__statistics')
   }
   const logOut = e=>{
        pd(e)
        AuthGuard.classList.add('hide')
        loginFromContainer.classList.remove('hide')
        SubQuery(loginFromContainer,'#loader').style.display='none'
        auth__heroText.classList.remove('hide')
   }
   const refreshRoutes=(exception)=>{
       views.forEach(element => {
            if(!element.classList.contains(exception) )
               element.classList.add('hide')
            else
               element.classList.remove('hide')
       });
   }
   event(bookings__table ,'click',tableClick) 
   event(statisticsBtn ,'click',statisticsRoute) 
   event(bookingsBtn ,'click',BookingsRoute) 
   event(logoutBtn ,'click',logOut) 
}());