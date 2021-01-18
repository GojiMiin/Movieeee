var express = require('express')
var mongoose = require('mongoose');
var body = require('body-parser')
var app = express();
movie = mongoose.model('movieDetail')

app.use(body.json());

exports.loadDetail = async function(req, res) { //input string movie code
    let movieCode = {
        code: req.body.code
    }
    let detail = await movie.findOne(movieCode)
    res.send(detail)
}

exports.yearFilter = async function(req, res) { //input int year
    let movieYear = {
        year: req.body.year
    }
    let yearFilter = await movie.find(movieYear)
    res.send(yearFilter)
}

exports.nameSearch = async function(req, res) {
    const sname = req.body.sname.toLowerCase()
    let allMovie = await movie.find({})
    let result = []
    for(i in allMovie){
        if(allMovie[i].name.toLowerCase().includes(sname)){
            result.push(allMovie[i])
        }
    }
    res.send(result)
}

exports.rateSearch = async function(req, res) {
    const srate = req.body.srate.toLowerCase()
    let allMovie = await movie.find({})
    let rateResult = []
    for(i in allMovie){
        if(allMovie[i].rate.toLowerCase().includes(srate)){
            rateResult.push(allMovie[i])
        }
    }
    res.send(rateResult)
}

exports.cateSearch = async function(req, res) {
    const scate = req.body.scate.toLowerCase()
    let allMovie = await movie.find({})
    let cateResult = []
    for(i in allMovie){
        if(allMovie[i].category.toLowerCase().includes(scate)){
            cateResult.push(allMovie[i])
        }
    }
    res.send(cateResult)
}


