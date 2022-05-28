const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routers = require("./routers/vocab");

const app = express();
const PORT = 8000;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routers);

const mongooseUri = "YOUR MONGOOSE URI";

mongoose
  .connect(mongooseUri, {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("SERVER 8000");
    });
  })
  .catch((err) => {
    console.log("connect err", err);
  });
