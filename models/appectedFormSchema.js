import mongoose from "mongoose";

const appointmentDetailsSchema = new mongoose.Schema({
  // Define your appointment fields here
  appointmentDate: {
    type: Date,
    required: true,
  },
  appointmentTime: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  patient: {
    type: String,
    required: true,
  },
  patientId: {
    type: String, // Change the type according to your requirements
    required: true,
  },
  doctorId: {
    type: String,
    required: true,
  },

  // Add more fields as needed
});

export const AppointmentDetails = mongoose.model("AppointmentDetails", appointmentDetailsSchema);
