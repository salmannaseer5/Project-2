const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const app = express();
const photoShareCtrl = require("./controllers/application");

//middlewares
app.set("view engine", "hbs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/", photoShareCtrl);
// app.use("/user", userControl);
// app.use("/photo", photoController);
// app.use(require("./routes/index.js"));

//app listening to port 5000
app.listen(5000, () => console.log("server is running at 5000"));
