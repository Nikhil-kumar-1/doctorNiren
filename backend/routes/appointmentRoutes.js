const express = require("express");
const Appointment = require("../models/Appointment"); // Import Appointment model
const appointmentController = require("../controllers/appointmentController");

const router = express.Router();

// Route to handle appointment booking
router.post("/appointments", appointmentController.createAppointment);
router.get("/appointments", appointmentController.getAllAppointments);

// Route to delete an appointment by ID
router.delete("/appointments/:appointmentId", async (req, res) => {
  try {
    const { appointmentId } = req.params; // Get appointmentId from URL params

    // Find and delete the appointment by its ID
    const deletedAppointment = await Appointment.findByIdAndDelete(appointmentId);

    if (!deletedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
