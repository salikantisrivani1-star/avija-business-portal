import React, { useState } from "react";
import axios from "axios";
import "./AddEvent.css";

const AddEvent = () => {

  const [event, setEvent] = useState({
    title: "",
    category: "",
    description: "",
    date: "",
    location: "",
    image: ""
  });

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/events/add",
        event
      );

      alert(response.data.message);

      setEvent({
        title: "",
        category: "",
        description: "",
        date: "",
        location: "",
        image: ""
      });

    } catch (error) {

      alert("Failed to add event");

    }
  };

  return (

    <div className="add-event">

      <h1>Add New Event</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={event.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={event.category}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={event.description}
          onChange={handleChange}
          required
        ></textarea>

        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={event.location}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL (optional)"
          value={event.image}
          onChange={handleChange}
        />

        <button type="submit">
          Add Event
        </button>

      </form>

    </div>

  );
};

export default AddEvent;