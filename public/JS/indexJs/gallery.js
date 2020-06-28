const {xposeRecursive,yposeRecursive,getParentRecursive,test} = require('../utils/recursive')
const easer= require('../utils/myEasing')
const {query,SubQuery}= require('../utils/short')
module.exports = (function () {

     //#region refs 
const navBarfill             = query('.navBarfill')
const navBtn                 = Array.from(query('.navBtn',true))
const imagesGalleryContainer = query('.imagesGalleryContainer')
const backgroundFillGallery  = query('.backgroundFillGallery')
const galleryPaddingLeft     = parseInt(getComputedStyle(query('.Gallery')).paddingLeft.split('px')[0]) 
const imagesContainers       = Array.from(query('.flexItem',true))
const GalleryCloseBtn        = query('.GalleryClose')
const currentImage           = query('.currentImage')
const heroHeight             = query('.hero').offsetHeight
let  clickedImageLeft   = 0; 
let  clickedImageTop    = 0; 
let  clickedImageWidth  = 0; 
let  clickedImageHeight = 0; 
//#endregion  

     const openGallery = (e)=>{
          const image =getParentRecursive(e.target,'flexItem')  
          const imageWidth = image.offsetWidth
          const imageHeight = image.offsetHeight
          const imageY = yposeRecursive(image,0)
          const imageX = xposeRecursive(image,0)
          const ImageMarginBottom = parseInt(getComputedStyle(image).marginBottom.split('px')[0])
          const ImagePaddingTop = parseInt(getComputedStyle(image).paddingTop.split('px')[0])
          
          //slide navbar 
          easer(0 ,-100,scrollNavBarFillTop,600)
          navBtn.forEach(btn=>btn.style.display='none' )

          //set the props 
          clickedImagePaddingTop = ImagePaddingTop
          clickedImageLeft       = (imageX -galleryPaddingLeft)  
          clickedImageTop        = ((imageY -scrollY) -ImageMarginBottom-32)
          clickedImageWidth      = imageWidth
          clickedImageHeight     = imageHeight
          
          //first snap the current image container to the clicked image position 
          imagesGalleryContainer.style.top      =scrollY +'px'
          imagesGalleryContainer.style.display  ='block'
          SubQuery(currentImage,'img').src =  SubQuery(image,'img').getAttribute("src")
          CurrentImageHeight     = SubQuery(currentImage,'img').offsetHeight
          toggleTransition(currentImage,false)
          setStyle(ImagePaddingTop +'px',imageWidth +'px',imageHeight +'px',((imageY -scrollY) -ImageMarginBottom-32) +'px',(imageX -galleryPaddingLeft)  +'px')
          backgroundFillGallery.style.opacity='1'

          // zoom the current image In  and open the gallery view
          setTimeout(() => {
               toggleTransition(currentImage,true)
               SubQuery(currentImage,'img').style.height ='100%'
               setStyle('0',600 +'px','80%','50%','50%')
               currentImage.style.transform  = 'translate(-50%,-50% ) scale(2)'
          }, 50);

     }
     const closeGallery=(e)=>{
          e.preventDefault()
          easer(-100 ,0,scrollNavBarFillTop,1500)
          navBtn.forEach(btn=>btn.style.display='flex' )
          backgroundFillGallery.style.opacity = '0'

          SubQuery(currentImage,'img').style.height  ='auto'
          currentImage.style.transform        =  ''
          setStyle(clickedImagePaddingTop +'px',clickedImageWidth +'px',clickedImageHeight +'px',clickedImageTop +'px',clickedImageLeft +'px')
          setTimeout(() =>imagesGalleryContainer.style.display='none', 500);
     }

     imagesContainers.forEach(image =>image.addEventListener('click',openGallery));
     GalleryCloseBtn.addEventListener('click',closeGallery)
     imagesGalleryContainer.style.height=heroHeight+'px'   
     
     function setStyle(...args) {
          console.log(setStyle.arguments[0])
          currentImage.style.paddingTop       =  setStyle.arguments[0] 
          currentImage.style.width            =  setStyle.arguments[1] 
          currentImage.style.height           =  setStyle.arguments[2] 
          currentImage.style.top              =  setStyle.arguments[3] 
          currentImage.style.left             =  setStyle.arguments[4]  
     }
     const toggleTransition=(elem,can)=>elem.style.transition=can?'all .3s ease-out':'none'
     const scrollNavBarFillTop=value=>navBarfill.style.top=value+'%'
}());