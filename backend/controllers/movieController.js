var express = require('express')
var mongoose = require('mongoose');
var body = require('body-parser')
var app = express();
movie = mongoose.model('movieDetail')

app.use(body.json());

exports.loadDetail = async function(req, res) {
    let movieCode = {
        code: req.body.code
    }
    let detail = await movie.findOne(movieCode)
    res.send(detail)
}

exports.yearFilter = async function(req, res) {
    let movieYear = {
        year: req.body.year
    }
    let yearFilter = await movie.find(movieYear)
    res.send(yearFilter)
}