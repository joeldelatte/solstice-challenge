const express = require("express");
const router = require("express").Router();
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Add routes, both API and view
require("./routes/api/accounts-api-route")(app, fs);
require("./routes/api/customers-api-route")(app, fs);


app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
