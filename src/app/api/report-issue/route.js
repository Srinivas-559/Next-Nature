import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Issue from "@/models/Issue";

export async function POST(req, res) {
    try {
        await connectDB();
        const { user,description, image } = await req.json();
        console.log(user,description, image);

        const newIssue = await Issue.create({ user, description, image });

        return NextResponse.json({ message:'registered' },{status:200});

    
    } catch (e) {
        console.log(e)
        return NextResponse.json({ message: 'Internal Server Error ' },{status:401})
    }
    
}




