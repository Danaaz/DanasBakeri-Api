const express = require("express");
const router = require("./router/routes");

const port = 8080;

const app = express();

router(app);

app.listen(port, console.log("Running on port " + port));