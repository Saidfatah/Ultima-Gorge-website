String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
}
const myString ={
    insertStr     : (str,from,to,toBeInsterted)=>str.splice(from,to,toBeInsterted),
    stringBettwen :(left ,right,str) => str.substring(str.lastIndexOf(left) + left.toString().length,  str.lastIndexOf(right))
};
module.exports = myString
