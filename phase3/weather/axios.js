const axios = require('axios');

(async () => {
  try {
    const response = await axios.get('https://api.darksky.net/forecast/0f117a9db5a9407fd73d76e7555804b1/37.8267,-122.4233');
    console.log(response.data.name);
  } catch (error) {
    console.log(error.response.body);
  }
})();