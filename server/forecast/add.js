/*
 * Add a location to the DB
 * First argument: NAME
 * Second argument: ID
 */

const pool = require('../db/pool');
const lib = require('./lib');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

;(async () => {
  let name = process.argv[2];
  let id = process.argv[3];

  try {
    if (!name || !id) throw('USAGE:\n\tnpm run add-loc NAME ID');

    console.log('[NEW LOCATION]');
    console.log('Name: ', name);
    console.log('Id: ', id);
    console.log('Input \'OK\' if this information is correct:');
    const permission = await new Promise(resolve => {
      readline.question('-> ', resolve);
    });

    if (permission !== 'OK') {
      process.exit();
    }

    const forecast = await lib.fetchSLForecast(name, id);
    await lib.updateOneForecast(forecast);
  } catch(error) {
    console.log(error);
  } finally {
    process.exit();
  }
})();
