require("dotenv").config();
const express = require("express");
const productRouter = require("./routes/productRouter");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 2112;

mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(() => console.log("Unable to connect to mongoDB..."));

//Parsing cookies
app.use((req, res, next) => {
  console.log(
    "Parsing your cookies from their native format, to a developer friendly format."
  );
  next();
});

//Parsing JSON
app.use((req, res, next) => {
  console.log("Parses request into json so we can work with them");
  next();
});

//CORS POLICY
app.use(cors());

//Authorization
app.use((req, res, next) => {
  console.log("userAuthorization middleware");
  next();
});

app.use(productRouter);

app.get("/", () => {
  console.log("--Mainline server was hit.--");
});

app.get("/check", () => {
  console.log("...and MATE.");
});

app.listen(port, () => {
  console.log(`Our backend is UP and LISTENING on port #${port}`);
});
