const ProductModel = require("../models/productmodel")

const createproduct = async function (req,res){
   let data = req.body
    let saveddata = await ProductModel.create(data)
    res.send({msg:saveddata})
}
module.exports.createproduct=createproduct