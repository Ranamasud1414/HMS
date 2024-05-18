import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { AppointmentDetails } from "../models/appectedFormSchema.js";

// Controller for creating a new appointment
export const createAppointment = catchAsyncErrors(async (req, res, next) => {
  const { appointmentDate, appointmentTime, doctor, patient, patientId, doctorId } = req.body;

  try {
    const appointment = await AppointmentDetails.create({
      appointmentDate,
      appointmentTime,
      doctor,
      patient,
      patientId,
      doctorId,

      // Add more fields if needed
    });

    res.status(201).json({
      success: true,
      appointment,
    });
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
});

// Controller for getting appointment details
// Import necessary modules
// Import your appointment details model

// Controller to get appointment details by ID
export const getAppointmentDetailsByUserId = catchAsyncErrors(async (req, res) => {
  try {
    // Fetch appointments for the logged-in user by matching their _id with patientId
    const appointments = await AppointmentDetails.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});
export const deleteAppointmentDelete = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const appointment = await AppointmentDetails.findById(id);
  if (!appointment) {
    return next(new ErrorHandler("Appointment Not Found!", 404));
  }
  await appointment.deleteOne();
  res.status(200).json({
    success: true,
    message: "Appointment Deleted!",
  });
});
