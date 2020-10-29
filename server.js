const express = require('express');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())

const Routes = require("./controller/Routes")
app.use("/",Routes)

app.listen(8000, () => {
    console.log("server is listening 8000.........")
});