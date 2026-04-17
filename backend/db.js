require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI || "mongodb://localhost:27017";

let client;
let db;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db("giftdb");
  }
  return db;
}

module.exports = { connectToDatabase };
