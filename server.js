const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let APIroutes = require("./app/routing/apiRoutes");
APIroutes(app);

let HTMLroutes = require("./app/routing/htmlRoutes");
HTMLroutes(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });