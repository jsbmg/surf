/* Updates the database with fresh forecast data */
const lib = require('./lib');
const format = require('pg-format');

;(async (name, id) => {
  try {
    const locations = await lib.getCurrentLocations();
    console.log(locations);
    requests = locations.map(async (loc, i) => {
      // Don't request all at once
      await new Promise(resolve => setTimeout(resolve, 500 * i));
      const result = await lib.fetchSLForecast(loc.name, loc.id);
      console.log('Updated :', loc.name);
      return result;
    });

    let results = await Promise.all(requests);
    results = results.map(res => {
      return lib.updateOneForecast(res);
    });

    await Promise.all(results);
    console.log('Update finished.');
  } catch(error) {
    console.log(error);
  } finally {
    process.exit();
  }
})();
