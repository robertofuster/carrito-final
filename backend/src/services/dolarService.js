const axios = require('axios');

const getDolar = async () => {
  try {
    const response = await axios.get('https://dolarapi.com/v1/dolares');

    return response.data;

  } catch (error) {
    throw new Error('Error consultando API externa');
  }
};

module.exports = {
  getDolar
};