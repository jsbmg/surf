const axios = require('axios');

const cache = {};

const get = async (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  try {
    if (req.url in cache) { res.status(200).send(cache[req.url]); console.log('haha'); return }
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}&units=imperial`,
    )
    cache[req.url] = response.data;
    res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}

module.exports.get = get;

