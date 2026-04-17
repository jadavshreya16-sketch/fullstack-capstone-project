const express = require('express');
const app = express();

const searchRoutes = require('./routes/searchRoutes');

app.use(express.json());

// Use search route
app.use('/api/search', searchRoutes);

module.exports = app;
