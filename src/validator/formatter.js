// trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]
const value = "    Function    Up    "
const result = function (){
   const c = value.trim();
    console.log(c)
   const d = value.toLowerCase()
    console.log(d) 
   const e = value.toUpperCase()
    console.log(e)
}

module.exports.format = result