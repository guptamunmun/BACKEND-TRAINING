const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

// router.get('/students', function (req, res){
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })

// router.get('/student-details/:name', function(req, res){
//     /*
//     params is an attribute inside request that contains 
//     dynamic values.
//     This value comes from the request url in the form of an 
//     object where key is the variable defined in code 
//     and value is what is sent in the request
//     */

//     let requestParams = req.params

//     // JSON strigify function helps to print an entire object
//     // We can use any ways to print an object in Javascript, JSON stringify is one of them
//     console.log("This is the request "+ JSON.stringify(requestParams))
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
    
//     res.send('Dummy response')

// })


router.get('/movies', function (req, res){
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    

//     console.log('Name of the student is ', studentName)
    res.send(movies)
})
// GET /movies/:indexNumber
router.get('/movies/:indexNumber', function (req, res){ let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

let moviesarray = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
let requestParams = req.params

let movieName = requestParams.indexNumber
 let a = moviesarray[movieName]
if(movieName<0||movieName > moviesarray.length){
    res.send("enter valid input")
}
else{
    res.send(a)
}
}


   )



module.exports = router;