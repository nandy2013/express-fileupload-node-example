const express = require("express");
const app = express();
const http = require("http").Server(app).listen(3000);
const upload = require("express-fileupload");

app.use(upload());

console.log("Server Started");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
}
)

app.post("/", function (req, res) {
  if (req.files) {
    //console.log(req.files);
    const file = req.files.filename;
    const filename = file.name;

    file.mv("./upload/" + filename, function (err) {
      if (err) {
        console.log(err);
        res.send("error occured");
      }
      else {
        res.send("Done");
      }
    })
  }
})