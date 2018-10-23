var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 5050;

//APPLICATION/JSON PARSER
var jsonParser = bodyParser.json()

//CREAT APP URLENCODED PARSER
var urlencodedParser = bodyParser.urlencoded({ extended: false})

//PARSE VARIOUS DIFFERENT CUSTOM JSON TYPES AS JSON
app.use(bodyParser.json({ type: 'application/**json'}))

//PARSE INTO BUFFER
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}))

//PARSE AN HTML BODY TO STRING
app.use(bodyParser.text({ type: 'text/html'}))

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});