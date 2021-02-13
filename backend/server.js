var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

movie = require('./models/movieData')

app = express()
port = process.env.PORT || 3000

var mongo_uri = "mongodb+srv://GojiMiin:342510@movieweb.r4ob8.mongodb.net/MovieDetail?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useNewUrlParser: true }).then(
    () => {
        console.log("[success] : connected to the database ");
    },
    error => {
        console.log("[failed] " + error);
        process.exit();
    }
);

app = express()
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var routes = require('./routes/allRoutes')
routes(app)

app.listen(port)
console.log('Server started on : ' + port)