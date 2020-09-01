const customersRoutes = (app, fs) => {

  const customersDataPath = "./data/customers.json";

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
