import express from "express";
import { createAppointment, deleteAppointmentDelete, getAppointmentDetailsByUserId } from "../controller/acceptedformController.js";

const router = express.Router();

// Routes for appointments
router.post("/appointments", createAppointment); // Create a new appointment
router.get("/getall", getAppointmentDetailsByUserId); // Get appointment details by ID
router.delete("/delete/:id", deleteAppointmentDelete);

export default router;
