const pool = require('../pool');

const query = async (id) => {
  try {
    const forecasts = await pool.query(`
      SELECT * FROM forecasts WHERE id = $1
    `, [id]
    );

    return forecasts.rows;
  } catch (error) {
    throw error;
  }
}

module.exports = query;
