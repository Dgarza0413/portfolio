var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = 80;

//mongoose.connect("mongodb://localhost/portfolio");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var Url = "http://localhost:3000/";

app.get("/", function (req, res) {
  res.render("home");
});

app.post("");

//must change to different port
app.listen(port, () =>
  console.log(`server is listening on port ${port}! on ${Url}`)
);
// app.listen(process.env.PORT, process.env.IP, function() {
//   console.log("server is listening");
// });
