// backend endpoint
import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Meetup from "@/models/meetup";

// Fetch meetings created by the user
export async function GET(req, res) {
    const user = req.headers.get('user');

    try {
        await connectDB();
        const createdMeetups = await Meetup.find({ user });
        return NextResponse.json(createdMeetups, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}


export async function DELETE(req, res) {
    try {
        const { id, user } = await req.json();
        await connectDB();
        const meetup = await Meetup.findOneAndDelete({ _id: id, user });

        if (!meetup) {
            return NextResponse.json({ message: 'Meetup not found or not authorized' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Meetup deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}