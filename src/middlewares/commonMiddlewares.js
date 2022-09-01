const jwt=require("jsonwebtoken")
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
const tokenDataInHeaders = function(req,res,next){
    try{
    token=req.headers["x-auth-token"]
   
    if(token){
    next()}
else res.status(401).send({msg:"authentication required"})}
        catch(error){
 return res.status(500).send(error.message)}}

 const authorise = function(req,res,next){
try{
        if(token==decodedToken){
            next()
        }else{
            return res.status(403).send({msg:"NOT AUTHENTICATED OR FORBIDDEN"})
        }
    }catch(error){
res.send(error.message)
    }
 }

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.tokenDataInHeaders=tokenDataInHeaders
module.exports.authorise=authorise