import Article from "@/models/Article";
import mongoose from "mongoose"
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export async  function POST(req, res) {
    
    const { authorname, title, date, category, articleImage, description } = await  req.json();
    console.log(authorname, title, date, category, articleImage, description);
    
    // Perform validation checks
    if (!authorname || !title || !date || !category || !articleImage || !description) {
        return NextResponse.json({ message: 'Please fill in all fields' },{status:400});
    }
    
    if (description.length < 100) {
        return NextResponse.json({ message: 'Description must be at least 100 characters long' }, {status:400});
    }
    
    try {
        // Connect to MongoDB
        await connectDB();
        
        // Create a new news article
        const newArticle = new Article({
          authorname,
          title,
          date,
          category,
          articleImage,
          description
        });
    
        // Save the new news article to the database
        const savedArticle = await newArticle.save();
          return NextResponse.json({ message: 'News article uploaded successfully', artricle: savedArticle }, {status:201});
      } catch (error) {
        console.error('Error uploading news article:', error);
          return NextResponse.json({ message: 'Internal Server Error' }, {status:500});
      }
}

export async function GET() {
    try {
        // Connect to MongoDB
        await connectDB();
    
        // Fetch all articles from the database
        const articles = await Article.find({});
    
        return NextResponse.json({ articles }, {status:200});
      } catch (error) {
        console.error('Error fetching articles:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, {status:500});
      }

}