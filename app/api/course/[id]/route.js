import { NextResponse } from 'next/server';
import connectDB from "../../lib/connectDB"
import Course from "../../../models/Course"

// Fetch course by ID (GET)
export async function GET(req, { params }) {
    const { id } = params;

    try {
        // Connect to the database
        await connectDB();

        // Fetch the course by its ID
        const course = await Course.findById(id);

        // Check if the course exists
        if (!course) {
            return new Response(JSON.stringify({ success: false, message: "Course not found" }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Return the course as JSON
        return new Response(JSON.stringify({ success: true, data: course }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error fetching course:", error);
        return new Response(JSON.stringify({ success: false, message: "Failed to fetch course" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
