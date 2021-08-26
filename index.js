//requiring path and fs modules
const  http = require('http');
const path = require('path');
const fs = require('fs');
const prettyFileIcons = require('pretty-file-icons');



const server = http.createServer((req, res) => {
try{
var arr = [];
fs.readdir("../", (err, files) => {
    if (err)
      console.log(err);
    else {
    
      files.forEach(file => { 
      var icon =  prettyFileIcons.getIcon(file);

     
      // console.log(file , icon);
      var obj = {
        icon,
         file


      }

      arr.push(obj);
      
      })
    }
    
    res.write(JSON.stringify(arr));
    res.end(); 
  
  })
}
catch(err){

  console.log(err);

}
  
});

server.listen(5000 , () => {
    console.log("port started at 5000")
    
    } );