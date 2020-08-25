const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const fs = require("fs");

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Add routes, both API and view
require("./routes/api/accounts-api-route")(app, fs);
require("./routes/api/customers-api-route")(app, fs);

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
