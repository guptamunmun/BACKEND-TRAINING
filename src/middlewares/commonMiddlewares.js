
const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}
const header = function(req,res,next){
    
    let data = req.body
    data.isfreeappuser=req.headers.isfreeappuser
    let freeuser = (data.isfreeappuser)
    console.log(freeuser);
    console.log(data)
    if(!freeuser)
    res.send({msg:"this request is mandatory"})
   else{
      next()}
    

// let {isFreeAppUser}=req.header
// if(isFreeAppUser==undefined||isFreeAppUser=="")
//    { res.send({msg:"header is not present"})}

//     else{
//         req.isFreeAppUser=isFreeAppUser
//     console.log("header is present")
//     next()
}

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.header=header