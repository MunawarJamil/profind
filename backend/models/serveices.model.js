import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema(
  {
    personName: {
      type: String,
      required: true,
      trim: true,
    },
    profession: {
      type: String,
      required: true,
    },
    // category: {
    // type: String,

    // enum: ["Plumber", "Mechanic", "Barber", "Doctor", "Engineer"],
    // },

    bio: {
      type: String,
      trim: true,
    },

    serviceName: {
      type: String,
      trim: true,
    },
    serviceDiscription: {
      type: String,
      trim: true,
    },

    contact: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
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
  },
  { timestamps: true }
);

serviceSchema.index({ location: "2dsphere" }); // Enable geospatial queries
const Services = mongoose.model("Service", serviceSchema);
export default Services;
