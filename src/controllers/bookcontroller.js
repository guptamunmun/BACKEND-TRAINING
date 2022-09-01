const authormodels = require("../models/authormodel")

const bookmodels = require("../models/bookmodel")
const createbooks = async function(req,res){
    let data = req.body
    let saveddata = await bookmodel.create(data)
    res.send({msg:saveddata})}
    
    const bookswrittenbychetanbhagat = async function(req,res){
const data = await authormodels .find({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
console.log(data)
console.log(data[0].author_id)
const saveddata = await bookmodels.find({author_id:data[0].author_id}).select({name:1,_id:0})
res.send({msg:saveddata})
    }
    const updateprice = async function(req,res){
        const data = await bookmodels.findOneAndUpdate({name:"Two states"},{price:100},{new:true})
        const updateddata = await bookmodels.find({name:"Two states"}).select({author_id:1,_id:0,price:1})
        const author = await authormodels.find({author_id:updateddata[0].author_id}).select({author_name:1,_id:0})
        

        console.log(data,updateddata)
    res.send({msg:author,updateddata})}

    const booksfrom50to100=async function(req,res){
        const data = await bookmodels.find({price:{$gte:50,$lte:100}}).select({author_id:1,price:1,_id:0}) 
        console.log(data)
    
        for(i=0;i<data.length;i++){
            const saveddata =  authormodels.find({author_id:data[i].author_id}).select({author_name:1,_id:0})
            console.log(saveddata)
         
        res.send(saveddata.author_name)}
    }

module.exports.createbooks =createbooks
module.exports.bookswrittenbychetanbhagat=bookswrittenbychetanbhagat
module.exports.updateprice=updateprice
module.exports.booksfrom50to100=booksfrom50to100