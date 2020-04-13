const fetch = require("isomorphic-fetch");
const getLocation = async (req, res, next) => {
  //Si el middleware encuentra un parámetro city lo devuelve.
  //De otra forma busca por IP

  if (req.params.city) {
    res.locals.location = { city: req.params.city };
    return next();
  }
  const ip = req.header("x-forwarded-for"); //IP del cliente
  try {
    //Si se recibe IP del cliente, busca por IP... si no por la ubicación del servidor.
    const response = await fetch(`http://ip-api.com/json/${ip ? ip : ""}`, {
      method: "GET",
    });
    let data = await response.json();
    res.locals.location = data;
  } catch (error) {
    next(error);
  }
  return next();
};

module.exports = {
  getLocation,
};
