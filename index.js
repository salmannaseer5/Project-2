const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const app = express();
const cors = require('cors')



// view engine setup
app.set("view engine", "hbs");

app.use(cors())

//middlwware

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(require("./routes/index.js"));



app.set('port', process.env.PORT || 5000)

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })
