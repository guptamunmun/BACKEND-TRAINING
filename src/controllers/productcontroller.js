const Productmodel = require("../models/productmodel")

const createproduct = async function (req,res){
   let data = req.body
    let saveddata = await Productmodel.create(data)
    res.send({msg:saveddata})
}
module.exports.createproduct=createproduct