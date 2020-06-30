
const obj ={
    query: (selector,all) => all != undefined ?document.querySelectorAll(selector): document.querySelector(selector),
    SubQuery: (elem,selector) => elem.querySelector(selector),
    pd   : e => e.preventDefault(),
    elem : s => document.createElement(s),
    event: (elem,eventName , handler) => elem.addEventListener(eventName,handler),
};
module.exports = obj
