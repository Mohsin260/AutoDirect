// app/api/inventories/route.ts
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(); // Get the database
    const collection = db.collection('inventories'); // Access the 'inventories' collection
    const inventories = await collection.find({}).toArray(); // Fetch all inventory items

    return NextResponse.json(inventories); // Return the data as JSON
  } catch (err) {
    console.error(err);
    return NextResponse.error(new Error('Failed to fetch inventories!'));
  }
}
