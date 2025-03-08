const express = require("express");
const appointmentController = require("../controllers/appointmentController");

const router = express.Router();

// Route to handle appointment booking
router.post("/appointments", appointmentController.createAppointment);
router.get("/appointments", appointmentController.getAllAppointments);

module.exports = router;