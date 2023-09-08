const express = require("express");

const path = require("path");

const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

const userRoutes = require("./Routes/userRoutes");

const Sequelize = require("./util/database");

app.use(cors());

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(userRoutes)

Sequelize.sync()
  .then(() => app.listen(5000))
  .catch((err) => {
    return err;
  });
