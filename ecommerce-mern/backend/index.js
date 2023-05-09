const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./util/database");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/admin", adminRoutes);
app.use(shopRoutes);

sequelize
  .sync()
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));
