import { NextResponse } from 'next/server'
 
import connectDB from '@/utils/db'
import User from '@/models/User'

export async function POST(req, res) {
  
  try {
    // Connect to the database
    await connectDB();

    // Extract fields from request body
    
    const { email,dob, username, password } = await req.json();
    console.log(email, dob,username, password)

    // Validate request body
    if (!email||!dob || !username || !password) {
      return NextResponse.json({ error: 'Email, username, and password are required' },{status:400});
    }

    // Create a new user object
    const newUser = new User({ email, dob, username, password });

    // Save user data to the database
    await newUser.save();

    // Respond with success message
    return NextResponse.json({ message: 'success' },{status:200});
  } catch (error) {
    console.error('Error registering user:', error);
    return NextResponse.json({ error: 'Internal Server Error' },{message:"failed"});
  }
}


export async function GET() {
  return NextResponse.json({ message: "GET request has been made  world ...." });
}