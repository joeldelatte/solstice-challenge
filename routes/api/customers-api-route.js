const customersRoutes = (app, fs) => {
  // variables
  const customersDataPath = "./data/accounts.json";

  // READ
  app.get("/customers", (req, res) => {
    fs.readFile(customersDataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = customersRoutes;
