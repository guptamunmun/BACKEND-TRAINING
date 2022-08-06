// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. 
// For example - Radon, W3D3, the topic for today is Nodejs module system’


let result = function(){
    let date = new Date().getMonth()+1
     let month = new Date().getDate()
     let year = new Date().getFullYear()
    console.log(`today date is ${date}/${month}/${year}`) }
   
     
    
    let info = function getBatchInfo() {
       console.log(" plutonium, W3D5, the topic for today is Nodejs module system")
    }
    module.exports.date =result;
    module.exports. batchinfo=info;
