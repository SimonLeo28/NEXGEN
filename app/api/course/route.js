import { NextResponse } from 'next/server';
import connectDB from '../../../lib/connectDB';
import Course from "../../models/Course"

// Handle GET request to fetch courses
export async function GET(req) {
    try {
        // Connect to the database
        await connectDB();
        console.log("Connected to the database...");

        // Fetch all courses
        const courses = await Course.find({});

        // Return the courses in JSON format
        return new Response(JSON.stringify({ success: true, data: courses }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error fetching courses:", error);
        return new Response(JSON.stringify({ success: false, message: "Failed to fetch courses" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}


