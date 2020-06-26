const {SubQuery}= require('../utils/short')
const recursiveObject ={
    invalideInput:(elem,msg)=>{
        const invalide =SubQuery(elem.parentElement,'.invalide')
        invalide.style.height='auto'
        invalide.style.display='block'
        if(msg != undefined)  invalide.innerHTML=msg
      }
};
module.exports = recursiveObject
