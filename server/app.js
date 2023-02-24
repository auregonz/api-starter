const express = require("express"); // Fast, unopinionated, minimalist web framework for node.
const cors = require("cors"); // CORS provides a middleware that can be used to enable CORS with various options.
const morgan = require("morgan");
const helmet = require("helmet");
require("dotenv").config();

const errorMiddlewares = require("./middlewares/errorMiddlewares");
const api = require("./api");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route Test
app.get("/", (req, res) => {
  res.json({ message: "🐱‍👤" });
});

// Routes
app.use("/api/v1", api);

// Middlewares for Errors
app.use(errorMiddlewares.notFound);
app.use(errorMiddlewares.errorHandler);

module.exports = app;
