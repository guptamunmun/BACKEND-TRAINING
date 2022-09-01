const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

const jwt = require('jsonwebtoken')


// const basicCode= async function(req, res) {
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)

//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")
//     res.send({ msg: "This is coming from controller (handler)"})
//     }
const createuser=async function(req,res){
  try{
  const data = req.body
  const saveddata = await userModel.create(data)
  res.status(200).send({msg:saveddata})}
  
catch(error){
res.send(error.message)
}}


const login = async function(req,res){
  try{
  let data =req.body.emailId
  let data2 = req.body.mobile
  const saveddata =await userModel.findOne({emailId:data,mobile:data2}) ;
  let token = jwt.sign({userId:saveddata._id.toString()},"meenakshi");
  token=req.headers["x-auth-token"]
let decodedToken= jwt.verify(token,"meenakshi")
   console.log(decodedToken);
res.status(200).send(saveddata)}
catch(error){
 res.status(400).send({msg: "emailand mobile dont match"})}
}


const getuserdata= async function(req,res){
try{
  let data = await userModel.findOne()
  res.send({msg:data})
}catch(error){
  res.status(404).send(error.message)
}
}
module.exports.createuser=createuser

module.exports.login=login
module.exports.getuserdata=getuserdata


// module.exports.basicCode= basicCode