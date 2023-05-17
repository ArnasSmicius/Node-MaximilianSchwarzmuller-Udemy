const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");

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

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);

sequelize
  .sync({ force: true })
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));
