require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const controller = require("./controllers/controller");

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

app.get("/api/test", (req, res, next) => {
  res.sendStatus(200);
});

app.get("/api/houses", controller.getAll);
app.post("/api/house", controller.create);
app.delete("/api/house/:id", controller.deleteHouse);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
