const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Add routes, both API and view
require("./routes/api/accounts-api-route")(app);
require("./routes/api/customers-api-route")(app);





app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
