const query = require('../db/models/locations');

const get = async (req, res) => {
  try {
    const locations = await query();
    res.status(200).send(locations);
  } catch (error) {
    console.log(error);
    res.sendStatus(504);
  }
}

module.exports.get = get;
