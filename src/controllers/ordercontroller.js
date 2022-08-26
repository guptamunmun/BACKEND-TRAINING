const orderModel = require("../models/ordermodel")
const createorder = async function (req,res){
    let data = req.body
    
    if(!(data.userId||data.productId)){
    if(!data.userId)return res.send({msg:"enter a valid userid"})
    if(!data.productId)return res.send({msg:"enter a valid product"})}
   
    let saveddata = await orderModel.create(data)
    res.send({msg:saveddata})

}

const updateorder= async function(req,res){

    let data = req.body
           
    let saveddata =await orderModel.updateOne({isfreeappuser:true},{amount:0})
    res.send({msg:saveddata})

}
module.exports.createorder=createorder
module.exports.updateorder=updateorder