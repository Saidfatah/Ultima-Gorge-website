const easer= require('../utils/myEasing')
const {query}= require('../utils/short')
module.exports = (function () {
    const videoContainer = query('.videoPContainer')
    const backgroundFill = query('.backgroundFill')
    const video          = query('.video')
    const close          = query('.close')
    const videoBlockBtn  = query('.video-block')
    const navBarfill     = query('.navBarfill')
    const navBtn         = Array.from(query('.navBtn',true))
    let   opened         = false
    const togglevideo = e=>{
        e.preventDefault()
        if(opened)
           {
                document.body.style.overflow='scroll'
                swapClass(video,'fadeOutVideo','fadeInVideo')
                setTimeout(() => {
                    videosrc = video.src.slice(0, -11);
                    video.src = videosrc
                } ,1000);
                setTimeout(() =>backgroundFill.style.opacity=0 ,1000);
                setTimeout(() =>videoContainer.style.display='none',1100);
                easer(-100 ,0,scrollNavBarFillTop,900)
                navBtn.forEach(btn=> btn.style.display='flex')
                opened = false 
           }else
           {
                document.body.style.overflow = 'hidden'
                videoContainer.style.display = 'block' 
                backgroundFill.style.opacity = 1
                backgroundFill.style.top     = scrollY +'px'
                video.style.top              = scrollY +'px'
                close.style.top              = (scrollY+60) +'px'
                navBtn.forEach(btn=>btn.style.display='none' )
                setTimeout(() =>{
                    swapClass(video,'fadeInVideo','fadeOutVideo')
                    video.src += "?autoplay=1";
                },1000);
                easer(0 ,-100,scrollNavBarFillTop,1500)
                opened = true 
        }
    }
    close.addEventListener('click',togglevideo)
    videoBlockBtn.addEventListener('click',togglevideo)
    const swapClass  = (elem,add,remove)=>{
        elem.classList.add(add)
        elem.classList.remove(remove)
    }
    const scrollNavBarFillTop=value=>navBarfill.style.top=value+'%'
}()
);