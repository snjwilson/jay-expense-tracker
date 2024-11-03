const express = require("express");
const { startDB } = require("./initDB");
const { router } = require("./routes/apiv1");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

startDB().then(() => {
  // middlewares
  app.use(bodyParser.json());
  app.use(router);

  // listen and serve
  app.listen(port, () => {
    console.log(`Expense app listening on port ${port}`);
  });
});
