import { NextResponse } from 'next/server';
import connectDB from '../../lib/connectDB';
import Course from '../../../models/Course'
import { useParams } from 'next/navigation';

export async function GET() {
    try {
        const courseId = useParams();
        await connectDB();
        console.log("Connected to database...");

        console.log(courseId);
        

        //fetching the single course data
        const courseData = await Course.findOne({_id: new ObjectId(courseId)});
        console.log("Data Fetched...");
        

        console.log(courseData);
        

        //return data in JSON format
        return new Response(JSON.stringify({ success: true, data: courseData}) , {
            status: 200,
            headers: { 'Content-Type' : 'application/json' },
        });
        
    } catch(error) {
        console.log("Error Fetching The Course ",error);
        return new Response(JSON.stringify({ success: false, message: "Failed to fetch courses" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

