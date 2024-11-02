const express = require("express");
const { startDB } = require("./initDB");
const { router } = require("./routes/apiv1");

const app = express();
const port = 8000;

startDB().then(() => {
  app.use(router);

  app.listen(port, () => {
    console.log(`Expense app listening on port ${port}`);
  });
});
