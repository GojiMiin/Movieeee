var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    source: {
        type: String
    },
    code: {
        type: String
    },
    year: {
        type: Number
    },
    name: {
        type: String
    },
    time: {
        type: String
    },
    category: {
        type: String
    },
    rate: {
        type: String
    },
    score: {
        type: Number
    },
    poster: {
        type: String
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('movieDetail', movieSchema, 'allMovie')