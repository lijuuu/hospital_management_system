const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// GET all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find({}, 'name specialization availability');
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST - Create a new doctor
router.post('/', async (req, res) => {
  try {
    const doctor = new Doctor({
      name: req.body.name,
      specialization: req.body.specialization,
      availability: req.body.availability,
    });

    const savedDoctor = await doctor.save();
    res.status(201).json(savedDoctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT - Update doctor by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        specialization: req.body.specialization,
        availability: req.body.availability,
      },
      { new: true }
    );

    if (!updatedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.json(updatedDoctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE - Remove doctor by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!deletedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.json({ message: 'Doctor deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
