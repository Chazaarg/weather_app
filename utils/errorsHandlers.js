//middleware de manejo de errores

function clientErrorHandler(err, req, res, next) {
  res.status(err.status || 500).json({
    err: err.message,
  });
}

module.exports = {
  clientErrorHandler,
};
