const easer= require('../utils/myEasing')
module.exports = (function () {
      const galleryTop   = document.querySelector('.Gallery').offsetTop
      const galleryHeight   = document.querySelector('.Gallery').offsetHeight
      const logo         = document.querySelector('.logo')
      const navBarfill   = document.querySelector('.navBarfill')
      const heroHeight   = document.querySelector('.hero').offsetHeight
      const navBtn       = Array.from(document.querySelectorAll('.navBtn'))
      let slideded       = false
      window.onscroll=(e)=>{
         if(scrollY >galleryTop -40 ) document.querySelector('body').style.background='var(--colorPrimaryFaint)'
         else if(scrollY >(galleryTop+galleryHeight) )document.querySelector('body').style.background='var(--colorWhite)'
         else document.querySelector('body').style.background='var(--colorWhite)'
         if(scrollY<(heroHeight/2) && slideded)
          {
             navBtn.forEach(btn=>swapClass(btn,'slideUpColors','slideDownColors'))
             swapClass(logo,'slideUpColors','slideDownColors')
             easer(0 ,-100,scrollNavBarFillTop,1000)
             slideded = false 
         }
         if(scrollY>heroHeight && !slideded){
             navBtn.forEach(btn=>swapClass(btn,'slideDownColors','slideUpColors'))
             swapClass(logo,'slideDownColors','slideUpColors')
             easer(-100 ,0,scrollNavBarFillTop,500)
             slideded = true 
         }
      }
      const swapClass  = (elem,add,remove)=>{
         elem.classList.add(add)
         elem.classList.remove(remove)
      }
      const scrollNavBarFillTop=value=>navBarfill.style.top=value+'%'
}());


