 const accountsDataPath = "../../data/accounts.json"; 

 
const accountsRoutes = (app, fs) => {

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

