import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
import Issue from "@/models/Issue";

export async function GET(req, { params }) {
    try {
        await connectDB();
        const { username } = params;
        const userIssues = await Issue.find({ user: username });

        if (userIssues.length === 0) {
            return NextResponse.json(userIssues,{ message: 'No issues found for this user' }, { status: 200 });
        }

        return NextResponse.json(userIssues, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
