const accountsRoutes = (app, fs) => {
  // variables
  const accountsDataPath = "../../data/accounts.json";

  // READ
  app.get("/accounts", (req, res) => {
    fs.readFile(accountsDataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = accountsRoutes;

