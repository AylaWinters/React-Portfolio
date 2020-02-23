var express = require("express");
var compression = require("compression");
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

// app.use(express.static("public"));

require("./routes/HTMLroutes")(app);

app.get("/api/Close2You", function(req, res) {
  res.sendFile(path.join(__dirname, "./Close2You.png"));
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
