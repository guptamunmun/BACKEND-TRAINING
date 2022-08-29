const authormodels = require("../models/authormodel")
const bookmodels = require("../models/bookmodel")
const createbooks = async function(req,res){
    let data = req.body
    let saveddata = await bookmodel.create(data)
    res.send({msg:saveddata})}
    
    const bookswrittenbychetanbhagat = async function(req,res){
const data = await authormodels .find({author_name:"Chetan Bhagat"})
const bookid = await bookmodels.find({author_id:{$eq:{data[0].author_id}}})
res.send({msg:saveddata})
    }

module.exports.createbooks =createbooks
module.exports.bookswrittenbychetanbhagat=bookswrittenbychetanbhagat