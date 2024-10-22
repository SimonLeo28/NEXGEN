import { NextResponse } from 'next/server';
import connectDB from '../../lib/connectDB';
import Course from '../../../models/Course';
import { ObjectId } from 'mongodb'; 

export async function GET({ params }) {
    try {
        console.log("Reached to id page...");


        const { courseId } = params;
        await connectDB();
        console.log("Connected to database...");

        console.log(courseId);

        const courseData = await Course.findOne({ _id: new ObjectId(courseId) });
        console.log("Data Fetched...");

        if (!courseData) {
            return NextResponse.json({ success: false, message: 'Course not found' }, { status: 404 });
        }

        console.log(courseData);

        return new Response(JSON.stringify({ success: true, data: courseData }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.log("Error Fetching The Course ", error);
        return new Response(JSON.stringify({ success: false, message: "Failed to fetch courses" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
