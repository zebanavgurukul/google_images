const express = require('express');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())
const port = 8000;

const Routes = require("./controller/Routes")
app.use("/",Routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

