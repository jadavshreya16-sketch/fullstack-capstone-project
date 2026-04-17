const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";

let client;
let db;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db("giftlink");
  }
  return db;
}

module.exports = { connectToDatabase };
