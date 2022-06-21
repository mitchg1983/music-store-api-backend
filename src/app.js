const express = require("express");
const productRouter = require("./routes/productRouter");
const mongoose = require("mongoose");

const app = express();
const port = 2112;

mongoose
  .connect(
    "mongodb+srv://mitchg1983:KiU1zKsu3WMyQXpd@mitchcluster.zkdasoh.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(() => console.log("Unable to connect to mongoDB..."));

//Parsing cookies
app.use((req, res, next) => {
  console.log("\n");
  console.log("first Middlware");
  console.log(
    "Parsing your cookies from their native format, to a developer friendly format."
  );
  next();
});

//Parsing JSON
app.use((req, res, next) => {
  console.log("\n");
  console.log("second Middlware");
  console.log("Parses request into json so we can work with them");
  next();
});

//Authorization
app.use((req, res, next) => {
  console.log("\n");
  console.log("third Middlware");
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
