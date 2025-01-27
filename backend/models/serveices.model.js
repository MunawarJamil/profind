import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Plumber", "Mechanic", "Barber", "Doctor", "Engineer"], // Add more as needed
    },
    location: {
      type: {
        type: String,
        enum: ["Point"], // Geospatial data
        required: false,
      },
      coordinates: {
        type: [Number],
        required: false,
      },
    },
    contact: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

serviceSchema.index({ location: "2dsphere" }); // Enable geospatial queries
const Services = mongoose.model("Service", serviceSchema);
export default Services;
