// lib/mongodb.ts
import { MongoClient } from 'mongodb';

// Define the URI and ensure it's present
const uri = process.env.MONGODB_URI as string; // Ensure URI is defined in env

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

// Extend the NodeJS Global interface to include _mongoClientPromise
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient>; // This is to avoid the global variable issue in TypeScript
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to preserve the client between hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new client for every request
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
