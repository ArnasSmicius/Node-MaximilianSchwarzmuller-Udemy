const express = require("express");
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.json());

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.listen(3000);
