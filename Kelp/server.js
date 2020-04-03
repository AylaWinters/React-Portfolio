var express = require("express");
var compression = require("compression");
var app = express();
var mongoose = require('mongoose')

var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

// app.use(express.static("public"));

require("./routes/HTMLroutes")(app);

app.get("/", function (req, res) {
  res.send("hello");
});

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/game",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
