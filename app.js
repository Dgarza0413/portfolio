var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/portfolio");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("home");
});

app.post("");

//must change to different port
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("server is listening");
});
