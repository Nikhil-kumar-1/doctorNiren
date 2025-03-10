const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");



// Save a new contact message
router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
});

// Fetch all contact messages (Admin Dashboard)
router.get("/admin/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// Route to delete an appointment by ID
router.delete("/contact/:contactId", async (req, res) => {
  try {
    const { contactId } = req.params; // Get appointmentId from URL params

    // Find and delete the appointment by its ID
    const deletedContact = await Appointment.findByIdAndDelete(contactId);

    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ message: "Contact Details deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact details:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


module.exports=router;
