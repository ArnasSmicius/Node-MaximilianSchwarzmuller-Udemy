const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./util/database");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

db.execute("SELECT * FROM products")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.listen(3000);
