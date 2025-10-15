const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    medicalHistory: [String],
});

module.exports = mongoose.model('Patient', PatientSchema);
