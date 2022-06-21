const axios = require('axios');

const pool = require('../db/pool');

const SL_URL = "https://services.surfline.com/kbyg/spots/forecasts/wave?spotId=";

const get = (url) => {
  try {
    const response = axios.get(url);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

const fetchSLForecast = async (name, id) => {
  const url = SL_URL + id;
  try {
    const data = await get(url);
    const assoc = data.data.associated;
    const coords = assoc.location;
    let forecast = data.data.data;

    // Set the date to a human readable format
    forecast = forecast.wave.map(entry => {
      let date = new Date(entry.timestamp * 1000);
      date.setHours(date.getHours() - 7);
      entry.timestamp = date;
      return entry;
    })

    let output = {
      id,
      name,
      latitude: coords.lat,
      longitude: coords.lon,
      forecast,
    }
    return output;
  } catch (error) {
    throw error;
  }
}

const updateOneForecast = async (data) => {
  try {
    await pool.query(`
      INSERT INTO forecasts (id, name, latitude, longitude, forecast)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (id) DO UPDATE
      SET forecast = $5;
      `, [data.id, data.name, data.latitude, data.longitude, JSON.stringify(data.forecast)]
    )
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCurrentLocations = async () => {
  const locations = await pool.query(`
    SELECT id, name FROM forecasts;
  `);

  return locations.rows;
}

module.exports = {
  fetchSLForecast,
  updateOneForecast,
  getCurrentLocations,
};
