const dolarService = require('../services/dolarService');

exports.getDolar = async (req, res) => {
  try {

    const data = await dolarService.getDolar();

    const oficial = data.find(d => d.casa === "oficial");
    const blue = data.find(d => d.casa === "blue");

    const result = {
      fecha: new Date().toISOString().split('T')[0],
      oficial: {
        compra: oficial.compra,
        venta: oficial.venta
      },
      blue: {
        compra: blue.compra,
        venta: blue.venta
      }
    };

    res.json(result);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};