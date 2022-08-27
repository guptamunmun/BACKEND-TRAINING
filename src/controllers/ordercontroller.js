const orderModel = require("../models/ordermodel")
const productModel = require("../models/productmodel")
const { findByIdAndUpdate } = require("../models/usermodel1")
const usermodel1 = require("../models/usermodel1")
const createorder = async function (req,res){
    let data = req.body
    let user =data.userId
    let prod = data.productId
    let udata = await usermodel1.findById(user)
    let pdata = await productModel.findById(prod)
if (data.isfreeappuser=="true") 
{data.amount=0}
else{
    if(udata.balance>pdata.price)
     {data.amount = pdata.price 

  let update = await usermodel1.findByIdAndUpdate({_id:user},{$set:{balance: udata.balance-pdata.price}},{new:true})
}
     else{
        return res.send({msg:"user has insufficient balance"})
     }
}




    if(!user)return res.send({msg:"enter a  userid"})
    if(!prod)return res.send({msg:"enter a  product"})
   
   if(!udata)return res.send({msg:"enter a valid userid"})
   
   if(!pdata)return res.send({msg:"enter a valid product id"})
   
        


            let saveddata = await orderModel.create(data)
            res.send({msg:saveddata})
}
module.exports.createorder=createorder
