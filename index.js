require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./util/database");

const app = express();
const port = process.env.PORT;
const routes = require("./routes/routes");

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});


app.use("/api/users", routes);

app.listen(port, () => {
  console.log("Your app is listening on port " + port);
});
