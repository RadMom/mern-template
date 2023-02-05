const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");

const phonebookRoutes = require("./routes/contactsRoutes");

const port = 5000;
const URL = process.env.MONGO_URL;

mongoose.set("strictQuery", false);
mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(5000, () => {
      console.log(`db connected and server is live on port: ${port}...`);
    })
  )
  .catch((err) => console.log(err));

const app = express();
app.use(express.json()); //In old version is body-parser.Server can accept json in the body of the req.
app.use(express.urlencoded({ extended: false }));

app.use("/contacts", phonebookRoutes);

app.use(errorHandler);
