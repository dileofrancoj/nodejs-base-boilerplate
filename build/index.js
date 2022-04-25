"use strict";

const express = require("express");

require("./config");

const morgan = require("morgan");

const app = express();

const cors = require("cors");

const port = process.env.PORT || 8005;
const host = "0.0.0.0";
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
app.use("/api/ping", (_, res) => {
  console.log(process.env?.PORT);
  res.json({
    message: "Pong"
  });
});
app.listen(port, host, () => console.info(`Nodejs App Listening on port: ${port}`));
app.use((error, req, res, next) => {
  return errorHandler(error, res);
});
app.use((_, res) => {
  res.status(404).json({
    message: "Sorry can't find that!"
  });
});