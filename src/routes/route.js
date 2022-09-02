const express = require('express');
const lodash = require ('lodash');
const abc = require('../introduction/intro')
const xyz = require( '../logger/logger'    )
const help = require('../util/helper')
const pqr = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    xyz.welcome()
    help.date()
    help.batchinfo()
    pqr.format()
    
    abc.printName()
    
    const month =['jan','feb','march','april','may','june','july','aug','sept','oct','nov','dec']
    const splitmonth = lodash.chunk(month,4);
    console.log(splitmonth)
    const oddnumbers =[1,3,5,7,9,11,13,15,17,19]
   const last9element=lodash.tail(oddnumbers);
   console.log(last9element)
   const arr1 =[1,2,4,1]
   const arr2 =[3,0,6,4]
   const arr3 =[1,4,3,2,5]
   const arr4 =[3,2,1,5,6]
   const arr5 =[3,4,2,6,9]
   const mergearray =lodash.merge(arr1,arr2,arr3,arr4,arr5)
   console.log(mergearray)
   const obj = [ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
const mergedobj = lodash.fromPairs(obj)  
console.log(mergedobj)  
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason