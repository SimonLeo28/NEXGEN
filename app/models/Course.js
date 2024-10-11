import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    expectation: {
        type: String,
        required: true,
    },
    requirement: {
        type: String,
        required: true,
    },
    eligibility: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
  });

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);