const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Google it. Access from react app
const dotenv = require("dotenv").config();

const contactsRoutes = require("./routes/contactsRoutes");
const userRoutes = require("./routes/userRoutes");

const port = 5000;
const URL = process.env.MONGO_URL;

//express app
const app = express();

//middleware
app.use((req, res, next) => {
  console.log("SOMEONE is here : ");
  console.log("Method : " + req.method);
  console.log("URL : " + req.url);
  console.log("IP : " + req.ip);
  console.log("--------------------------------");
  next();
});

app.use(cors());
app.use(express.json()); //In old version is body-parser.Server can accept json in the body of the req.
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/contacts", contactsRoutes);
app.use("/api/user", userRoutes);

//mongoose setup
mongoose.set("strictQuery", false);
mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(5000, () => {
      console.log(`db connected and server is live on port: ${port}...`);
    })
  )
  .catch((err) => console.log(err));
