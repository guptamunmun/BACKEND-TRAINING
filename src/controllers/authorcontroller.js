const authormodel = require("../models/authormodel")

const createauthor = async function (req,res){
    const data = req.body
    const saveddata = await authormodel.create(data)
    res.send({msg:saveddata})
}
module.exports.createauthor=createauthor