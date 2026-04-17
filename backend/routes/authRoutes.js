const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../db');

// Register user
router.post('/api/register', async (req, res) => {
  const db = await connectToDatabase();
  const user = req.body;

  await db.collection('users').insertOne(user);
  res.json({ message: 'User registered successfully' });
});
// Login user
router.post('/api/login', async (req, res) => {
  const db = await connectToDatabase();
  const { email, password } = req.body;

  const user = await db.collection('users').findOne({ email, password });

  if (user) {
    res.json({ message: 'Login successful', token: 'sampletoken123' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Update user
router.put('/api/user/:id', async (req, res) => {
  const db = await connectToDatabase();
  const id = req.params.id;
  const updateData = req.body;

  await db.collection('users').updateOne(
    { id: id },
    { $set: updateData }
  );

  res.json({ message: 'User updated successfully' });
});

module.exports = router;
