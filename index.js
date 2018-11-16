const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const app = express();

// view engine setup
app.set("view engine", "hbs");

//middlwware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// app.use(bodyParser.json());
app.use(require("./routes/index.js"));

//app listening to port 5000
// app.listen(5000, () => console.log("server is running at 5000"));

app.set('port', process.env.PORT || 5000)

  app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })