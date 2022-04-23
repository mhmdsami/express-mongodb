const { MongoClient } = require("mongodb");
const config = require("./config");

let db;

const initializeClient = async () => {
  try {
    const client = new MongoClient(config.connectionString);
    await client.connect();
    console.log("Connected to Database");
    return client.db(config.databaseName);
  } catch {
    console.log("Cannot connect to Database");
  }
};

module.exports = async () => {
  if (!db) {
    db = await initializeClient();
  }
  return db;
};
