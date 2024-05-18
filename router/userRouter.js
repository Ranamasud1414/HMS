import express from "express";
import { addNewAdmin, addNewDoctor, getAllDoctors, getAllPatients, getUserDetails, login, logoutAdmin, findUserById, logoutDoctor, logoutPatient, patientRegister, getme, updateprofile } from "../controller/userController.js";
import { isAdminAuthenticated, isPatientAuthenticated, isDoctorAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);
router.get("/doctors", getAllDoctors);
router.get("/patients", getAllPatients);
router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/doctor/me", isDoctorAuthenticated, getUserDetails);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.get("/doctor/logout", isDoctorAuthenticated, logoutDoctor);
router.get("/getdetails", isDoctorAuthenticated, getme);
router.get("/:patientId", findUserById);
// router.get("/patients", getAllPatients);
// Route to update user details
router.put("/update/:id", updateprofile);

export default router;
