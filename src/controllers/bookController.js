const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publishermodel = require("../models/publishermodel")

 const createnewBook= async function (req, res) {
     let book = req.body
    if (!book.author)return res.send({msg:"authorid not given"})
    let checkauthorId= await authorModel.findById(book.author)

      if(!book.publisher)return res.send ({msg:"publisher id is required"})  
    let checkpublisherId = await publishermodel.findById(book.publisher)
     let bookCreated = await bookModel.create(book)
    
     res.send({data: bookCreated})
 }

  // const putBooksData= async function (req, res) {
  //    let books = await bookModel.update()
  //  res.send({data: books})
  // }

 const getBooksWithAuthorDetailspublisherdetails= async function (req, res) {
     let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({msg: specificBook})
}
const putreq = async function(req,res){
  let data = await publishermodel.find({name:{$in:['Penguin','Harper Collins']}})
  console.log(data)
 for(let i =0;i<data.length;i++)
 {
 let updatebooks = await bookModel.updateMany({publisher:data[i]._id},

  {$set:{IsHardCover:true}},{new:true})
 
 res.send({msg:updatebooks})} 
}
  const bookpriceupdate =async function (req,res){
    
const auther = await authorModel.find({$gt:{rating:3.5}})
for(i=0;i<auther.length;i++){
let updateprice = await bookModel.updateMany({author:auther[i]._id},{$inc:{price:10}},{new:true})
}
res.send({msg:updateprice})
  }
  


// const books= async function (req, res) {
//   let specificBook = await bookModel.find().populate('author').populate('publisher')
//  res.send({msg: specificBook})

//  const config = { headers: {'Content-Type': 'application/json'} };
// axios.put(url, content, config).then(response => {
//     ...
// });
module.exports.bookpriceupdate=bookpriceupdate
module.exports.putreq=putreq
 module.exports.createnewBook= createnewBook
//  module.exports.getBooksData= getBooksData
  module.exports.getBooksWithAuthorDetailspublisherdetails = getBooksWithAuthorDetailspublisherdetails
