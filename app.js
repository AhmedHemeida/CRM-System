const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require("./routes/index");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);

  if (req.method === "OPTIONS") {
    return res.sendStatus(200); 
  }

  next();
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
