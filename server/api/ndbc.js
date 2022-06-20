const axios = require('axios');

const endpoint = "http://www.ndbc.noaa.gov/data/realtime2"; // + id +.txt

const fetchNDBC = async (station) => {
  const url = `${endpoint}/${station}.txt`;
  console.log(url);
  try {
    return await axios.get(url);
  } catch (error) {
    console.log(error);
  }
};

const trimNDBC = (response) => {
  const date = new Date();
  console.log(date.getDay());
  return;
  const data = response.data;
}

trimNDBC();
