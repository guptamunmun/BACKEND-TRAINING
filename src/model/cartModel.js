<<<<<<< HEAD
const mongoose = require('mongoose')
const objectId  = mongoose.Schema.Types.ObjectId;

const cartSchema = new mongoose.Schema({
    userId:{
        type: objectId,
        ref: "User",
        required: true,
        unique: true
    },
    items: [{
        productId:{
            type :objectId,
            ref: "Product",
            required: true
        },
        quantity: {
            type : objectId,
            require : true,
            minLength : 1
        },
        _id :false
    }],
    totalPrice: {
        type :Number,
        required : true
    },
    totalItems: {
        type :Number,
        required : true
    },
},{ timestamps: true})

module.exports = mongoose.model("cart", cartSchema);
=======
const mongoose=require("mongoose")
const productModel=require("./productModel")
const userModel =require("./userModel")
const ObjectId= mongoose.Schema.Types.ObjectId
const cartSchema = new mongoose.Schema(

{
  userId: {type:ObjectId, ref: "user", required:true, unique:true},
  items:[ {
    productId: {type:ObjectId, ref:"product", required:true},
    quantity: {type:Number, required:true,default:1}
  }],
  totalPrice: {type:Number, required:true},
//   "Holds total price of all the items in the cart"
  totalItems: {type:Number, required:true},
//   Holds total number of items in the cart
},{timestamps:true})
module.exports = mongoose.model("cart",cartSchema)
>>>>>>> f5452e24858fe1745fc2dd51f3f82207ba7f06d7
