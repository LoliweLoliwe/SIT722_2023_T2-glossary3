var express = require('express');
var app = express();
  
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Server setup
app.listen(3000, function (req, res) {
    console.log("Connected on port:3000");
});