const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {


    

    bookName: String, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },Year:Number,
    TotalPages:Number,
    sales: {type: Number, default: 10},
    stockavailable:Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
