const axios = require("axios");

// Make an HTTP GET request using axios
const resp = await axios({
  method: "GET",
  url: `https://swapi.co/api/films/`,
});

// Retrieve just the data from the response
const { data } = resp;