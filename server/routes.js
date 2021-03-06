const express = require('express');
const router = express.Router();

const forecast = require('./controllers/forecast');
const locations = require('./controllers/locations');
const weather = require('./controllers/weather');

router.get('/api/forecast/:id', (req, res) => forecast.get(req, res));

router.get('/api/locations', (req, res) => locations.get(req, res));

router.get('/api/weather', (req, res) => weather.get(req, res));

module.exports = router;
