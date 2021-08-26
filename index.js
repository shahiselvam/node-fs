//requiring path and fs modules
const express = require("express");
const app = express();
const path = require('path');
const fs = require('fs');
const prettyFileIcons = require('pretty-file-icons');
require("dotenv").config();



app.use((req, res) => {
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
const port = process.env.PORT || 7000;

app.listen(port , () => {
    console.log(`port started at ${port}`)
    
    } );