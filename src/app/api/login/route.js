import connectDB from "@/utils/db";
import User from "@/models/User";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export  async  function POST(req,res) {

    await connectDB();

    const { username, password } = await req.json();
    console.log(username, password);
    try {
        // Check if user exists and password matches
        const user = await User.findOne({ username, password });
        console.log(user)
    
        if (!user || user.password !== password) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
    
        // Authentication successful
        return NextResponse.json({ message: 'success' }, {status:200});
    } catch (err) {
        console.log("Login Failed ")
        return NextResponse.json({ message: 'failed' },{status:200});
      }
    
}
export  async function GET(req, res) {
    return NextResponse.json({ message: "get request has been made for login" }, { status: 200 });
}