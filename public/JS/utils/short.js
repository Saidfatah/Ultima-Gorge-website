
const recursiveObject ={
    query: (selector,all) => all != undefined ?document.querySelectorAll(selector): document.querySelector(selector),
    SubQuery: (elem,selector) => elem.querySelector(selector),
};
module.exports = recursiveObject
