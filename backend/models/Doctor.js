const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    name: String,
    specialization: String,
    availability: [String], // e.g., ["Monday", "Wednesday"]
});

module.exports = mongoose.model('Doctor', DoctorSchema);
