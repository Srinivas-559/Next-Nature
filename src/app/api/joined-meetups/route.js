import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
import Meetup from "@/models/meetup";


export async function GET(req, res) {
    const user = req.headers.get('user');
    
    try {
        await connectDB();
        const joinedMeetups = await Meetup.find({ participants: user });
        return NextResponse.json(joinedMeetups, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}