const accountsRoutes = (app, fs) => {
  
  const accountsDataPath = "./data/accounts.json";

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

