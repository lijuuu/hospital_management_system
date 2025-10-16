const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const doctorsRoute = require('./routes/doctors');
const patientsRoute = require('./routes/patients');
const appointmentsRoute = require('./routes/appointments');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
app.use('/api/doctors', doctorsRoute);
app.use('/api/patients', patientsRoute);
app.use('/api/appointments', appointmentsRoute);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
