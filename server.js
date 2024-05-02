// Import required modules
import express from 'express'; // Import Express framework
import mongoose from 'mongoose'; // Import Mongoose ODM (Object Data Modeling library)
import cors from 'cors';
import { cors } from 'cors';
const app = express(); // Create an instance of Express
const PORT = process.env.PORT || 5000; // Define the port number for the server

// Connect to MongoDB database
mongoose.connect('mongodb+srv://noman:123456%40cfd@cluster0.nfvdd7a.mongodb.net/Formdata', {
  useNewUrlParser: true, // Use new URL parser
  useUnifiedTopology: true, // Use new Server Discovery and Monitoring engine
});

// Define schema and model for the form data using Mongoose
const FormDataSchema = new mongoose.Schema({
  name: String,
  rollNo: String,
  email: String,
  section: String,
  course: String,
});

const FormData = mongoose.model('FormData', FormDataSchema); // Create a model from the schema

app.use(express.json()); // Middleware to parse JSON request bodies
app
// Endpoint to handle form submission
app.post('/submit', async (req, res) => {
  try {
    const { name, rollNo, email, section, course } = req.body; // Extract form data from request body

    // Create a new instance of FormData model with the extracted form data
    const formData = new FormData({
      name,
      rollNo,
      email,
      section,
      course,
    });

    // Save the form data to the database
    await formData.save();

    // Send success response
    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    // Send error response
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
