import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

// Add New Event
router.post("/add", async (req, res) => {
    try {

        const newEvent = new Event(req.body);

        await newEvent.save();

        res.status(201).json({
            success: true,
            message: "Event added successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to add event"
        });

    }
});

// Get All Events
router.get("/all", async (req, res) => {
    try {

        const events = await Event.find();

        res.json(events);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch events"
        });

    }
});

export default router;