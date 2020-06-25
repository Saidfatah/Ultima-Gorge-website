const easer= require('../utils/myEasing')
module.exports = (function () {
    const scrollTop       = document.querySelector('.scrollTop')
    const Book            = document.querySelector('.Book')
    const bookScroll2            = document.querySelector('#bookScroll2')
    const NavBarBookNow   = document.querySelector('.NavBarBookNow')
    const siteTotalHeight = document.body.offsetHeight
    const scrollToTop=e=>{
        console.log('scrol to top')
        easer(siteTotalHeight ,0,scrollWindow,1000)
    }

    const scrollToBookNow=e=>{
        console.log(Book.offsetTop)
        easer(scrollY ,Book.offsetTop-150,scrollWindow,1500)
    }


    scrollTop.addEventListener('click',scrollToTop)
    NavBarBookNow.addEventListener('click',scrollToBookNow)
    bookScroll2.addEventListener('click',scrollToBookNow)
    
    const scrollWindow=value=>window.scrollTo(0,value)
}());
