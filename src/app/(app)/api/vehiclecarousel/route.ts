// app/api/VehicleCarousel/route.ts
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(); // Get the database
    const collection = db.collection('VehicleCarousel'); // Access the 'VehicleCarousel' collection
    const VehicleCarousel = await collection.find({}).toArray(); // Fetch all VehicleCarousel items

    return NextResponse.json(VehicleCarousel); // Return the data as JSON
  } catch (err) {
    console.error(err);
    return NextResponse.error(new Error('Failed to fetch VehicleCarousel Data!'));
  }
}
