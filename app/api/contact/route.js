import { NextResponse } from "next/server";
import connectDB from "../lib/connectDB"
import Contact from "../../models/Contact"

export async function POST(req) {
    try {
        await connectDB();
        console.log("Connected to database...");
        

        const data = req.body;
        console.log("Data recieved successfully.");
        
        const newItem = new Contact(data);
        const savedItem = await newItem.save();
        console.log("Data sent successfully.");
        
        return NextResponse.json({message: "Item created successfully"}, {status: 200},{savedItem});
    }  catch(error) {
        return NextResponse.json({ message: "Error inserting data"}, {status:200},{error});
        
    }
}