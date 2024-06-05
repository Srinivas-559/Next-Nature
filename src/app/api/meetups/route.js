import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Meetup from "@/models/meetup";

export async function GET(req, res) {
    try {
        await connectDB();
        const meetups = await Meetup.find();
        return NextResponse.json(meetups, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(req, res) {
    try {
        await connectDB();
        const data = await req.json();
        console.log(data)
        const newMeetup = new Meetup(data);
        await newMeetup.save();
        return NextResponse.json( {message:"success",newMeetup},{ status: 201 }, );
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
    
}

export async function PATCH(req, res) {
    try {
        await connectDB();
        const { id, user } = await req.json();
        
        const meetup = await Meetup.findById(id);
        if (meetup.participants.length >= meetup.participantLimit) {
            return NextResponse.json({ message: 'Participant limit reached' }, { status: 400 });
        }

        if (meetup.participants.includes(user)) {
            return NextResponse.json({ message: 'User already joined' }, { status: 400 });
        }

        meetup.participants.push(user);
        await meetup.save();

        return NextResponse.json(meetup, { status: 200 },{message:"success"});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(req, res) {
    try {
        await connectDB();
        const { id, user } = await req.json();
        
        const meetup = await Meetup.findById(id);
        const index = meetup.participants.indexOf(user);
        if (index === -1) {
            return NextResponse.json({ message: 'User not in participants list' }, { status: 400 });
        }

        meetup.participants.splice(index, 1);
        await meetup.save();

        return NextResponse.json(meetup, { status: 200 },{message:"success"});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}