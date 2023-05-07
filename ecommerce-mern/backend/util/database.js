const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "example", {
  dialect: "mysql",
  host: "db",
});

module.exports = sequelize;
