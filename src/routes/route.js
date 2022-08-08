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
    
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason