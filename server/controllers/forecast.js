const query = require('../db/models/forecast');

const get = async (req, res) => {
  try {
    const forecast = await query(req.params.id);
    res.status(200).send(forecast);
  } catch (error) {
    res.sendStatus(400);
  }
}

module.exports.get = get;
