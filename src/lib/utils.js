import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import mongoose from 'mongoose'

const connection = {}
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log('Using existing connection')
      return
    }

    const db = await mongoose.connect(process.env.MONGODB_URI)
    connection.isConnected = db.connections[0].readyState
    console.log(
      'Database connection state:',
      connection.isConnected === 1 ? 'Connected' : 'Not connected',
    )
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}
