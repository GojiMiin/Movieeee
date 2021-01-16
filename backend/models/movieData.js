var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    Source: {
        type: String
    },
    Code: {
        type: String
    },
    Year: {
        type: Number
    },
    Name: {
        type: String
    },
    Time: {
        type: String
    },
    Category: {
        type: String
    },
    Rate: {
        type: String
    },
    Score: {
        type: Number
    },
    Poster: {
        type: String
    },
    Description: {
        type: String
    }
})

module.exports = mongoose.model('movieDetail', movieSchema, 'allMovie')