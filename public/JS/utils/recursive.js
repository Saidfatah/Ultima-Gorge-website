const xpose = elem => parseInt(elem.offsetLeft)
const ypose = elem => parseInt(elem.offsetTop)
const setAttrib     = e => tr => v=>  e.setAttribute(tr,v)
const recursiveObject ={
    xposeRecursive: (elem,accumedX) => {
        if(elem.tagName.toLowerCase()=='body') return accumedX
        return recursiveObject.xposeRecursive(elem.parentElement,accumedX +xpose(elem) )
    },
    yposeRecursive:(elem,accumedX) => {
        if(elem.tagName.toLowerCase()=='body') return accumedX
        return recursiveObject.xposeRecursive(elem.parentElement,accumedX +ypose(elem) )
    },
    getParentRecursive: (elem,className)=>{
        if(elem.classList.contains(className))
          return elem
        return recursiveObject.getParentRecursive(elem.parentElement,className)
    },
 
};
module.exports = recursiveObject
