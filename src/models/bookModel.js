const mongoose = require('mongoose');   

const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {


	name:String,
    author: {
        type: ObjectId,
        ref: "newauthor"
    },IsHardCover:{type:Boolean,
        default:false},
	 price : Number,
		ratings:Number,
        publisher: {
            type: ObjectId,
            ref:"newpublisher"
        }
}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)
