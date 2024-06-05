import { NextResponse } from 'next/server';
import Issue from '@/models/Issue';
import connectDB from '@/utils/db';
export async function DELETE(req, { params }) {
    
    try {
        await connectDB();
        const { id } = params;
        const issue
            = await Issue.findByIdAndDelete(id);
        if (!issue) {
            return NextResponse.json({ message: 'Issue not found' }, { status: 404 });
        }   
        return NextResponse.json({ message: 'deleted' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}