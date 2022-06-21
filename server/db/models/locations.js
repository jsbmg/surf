const pool = require('../pool');

const query = async () => {
  try {
    const res = await pool.query(`
      SELECT json_agg(
          json_build_object(
              'name', name,
              'id', id,
              'latitude', latitude,
              'longitude', longitude
          )
      )
      FROM forecasts;
    `);

    return res.rows[0].json_agg;
  } catch (error) {
    throw error;
  }
};

module.exports = query;
