const express = require("express");
const routes = require("./routes");
const { clientErrorHandler } = require("./utils/errorsHandlers");
const cors = require("cors");
const app = express();
app.use(cors());
//rutas
app.use("/v1", require("./routes"));

//error handler
app.use(clientErrorHandler);

app.listen(3001);
console.log("Aplicación escuchando en puerto 3001");
