// const {xposeRecursive,yposeRecursive,getParentRecursive,test} = require('../utils/recursive')
// const easer= require('../utils/myEasing')
const easer= require('../utils/myEasing')
const {query,SubQuery}= require('../utils/short')
module.exports = (function () {
     const imageSlide__btn_prev   = query('.imageSlide__btn_prev')
     const imageSlide__btn_next   = query('.imageSlide__btn_next')
     const img1   = query('.img1')
     const img2   = query('.img2')
     

    const swapPrev =e=>{
        easer(0,100,scrollWidth(img2),1000,'easeInOutQuad')
        swapZindex(img1,img2,imageSlide__btn_prev ,imageSlide__btn_next,'scaleOut','scaleIn')
    }
  
    const swapNext =e=>{
        easer(0 ,100,scrollWidth(img1),1000,'easeInOutQuad')
        swapZindex(img2,img1,imageSlide__btn_next ,imageSlide__btn_prev,'scaleOut','scaleIn')
    }
    const swapZindex=(e1,e2,btn1,btn2,class1,class2)=>{
        e1.style.zIndex="60"
        e2.style.zIndex="70"

        e1.style.filter="blur(10px)"
        e2.style.filter="blur(0px)"

        btn2.disabled=false
        btn1.disabled=true

        btn1.style.opacity='.8'
        btn2.style.opacity='1'

        btn1.style.cursor='default'
        btn2.style.cursor='pointer'

        SubQuery(e1,'img').classList.add(class1)
        SubQuery(e1,'img').classList.remove(class2)
        SubQuery(e2,'img').classList.add(class2)
        SubQuery(e2,'img').classList.remove(class1)
    }

    imageSlide__btn_prev.addEventListener('click',swapPrev)
    imageSlide__btn_next.addEventListener('click',swapNext)
    const scrollWidth=(img)=>(value)=>img.style.width=value +'%'
}());