require("dotenv").config();

module.exports = {
  port: process.env.PORT || 5000,
  connectionString: process.env.CONN_STRING,
  databaseName: process.env.DB_NAME,
};
