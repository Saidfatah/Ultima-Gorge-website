
const recursiveObject ={
    query: (selector,all) => all != undefined ?document.querySelectorAll(selector): document.querySelector(selector),
    SubQuery: (elem,selector) => elem.querySelector(selector),
    pd: e => e.preventDefault(),
    event: (elem,eventName , handler) => elem.addEventListener(eventName,handler),
};
module.exports = recursiveObject
