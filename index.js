// var express = require('express')
// var app = express()
// var fs = require('fs')
//
// app.get('/listUsers', function(req, res){
//   fs.readFile(__dirname + "/users.json", "utf-8", function(err, data){
//     console.log(data)
//     res.end(data)
//   })
// })
//
// app.get('/:id', function(req,res){
//   fs.readFile(__dirname + "/users.json", function(err, data) {
//     var users = JSON.parse(data)
//     var userID = users["user" + req.params.id]
//     res.end(JSON.stringify(userID))
//   })
// })
//
// var user = {
//    "user4" : {
//       "name" : "mohit",
//       "password" : "password4",
//       "profession" : "teacher",
//       "id": 4
//    }
// }
//
// app.get('/addUser', function (req, res) {
//    // First read existing users.
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//        data = JSON.parse( data );
//        data["user4"] = user["user4"];
//        console.log( data );
//       //  res.end( JSON.stringify(data));
//       res.end("hello world")
//    });
// })
//
// var server = app.listen(8081, function(){
//   var host = server.address().address
//   var port = server.address().port
//   console.log("server listening at http://%s%s", host, port)
// })

var express = require('express');
var app = express();
var fs = require("fs");

var IPFS = require('ipfs')
var ipfsNode = new IPFS()
console.log(ipfsNode)

var contract = {
   "contract4" : {
      "title" : "mohit",
      "contractAddress" : "password4",
      "ipfsHash" : "teacher",
      "id": 4
   }
}

app.get('/addContract', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["contract4"] = contract["contract4"];
       console.log( data );
       res.end(JSON.stringify(data));
   });
})

app.get('/postContract', function(req, res){
  // fs.readFile(__dirname + "/documents/sampleContract1.pdf", function(err, data){
  //   console.log(data)
  //   res.type("application/pdf")
  //   res.send(data, 'binary')
  // })
  var filename = __dirname + "/documents/sampleContract1.pdf"
  var readStream = fs.createReadStream(filename)
  var stat = fs.statSync(filename)
  console.log(stat)
  res.setHeader('Content-Length', stat.size)
  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', 'inline; filename=sampleContract1.pdf')
  readStream.pipe(res, 'binary');
  // readStream.on('open', function(){
  //   res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
  //   res.setHeader('Content-type', 'application/pdf');
  //   readStream.pipe(res)
  // })
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})
