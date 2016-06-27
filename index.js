var express = require('express')
var app = express()
var fs = require('fs')

app.get('/listUsers', function(req, res){
  fs.readFile(__dirname + "/users.json", "utf-8", function(err, data){
    console.log(data)
    res.end(data)
  })
})

app.get('/:id', function(req,res){
  fs.readFile(__dirname + "/users.json", function(err, data) {
    users = JSON.parse(data)
    var user = users["user" + req.params.id]
    res.end(JSON.stringify(user))
  })
})

var user = {
    "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
    }
}

app.get('/addUser', function(req, res){
  fs.readFile(__dirname + "/users.json", "utf-8", function(err,data){
    data = JSON.parse(data)
    data["user4"] = user["user4"]
    res.end(JSON.stringify(data))
  })
})

var server = app.listen(8081, function(){
  var host = server.address().address
  var port = server.address().port
  console.log("server listening at http://%s%s", host, port)
})
