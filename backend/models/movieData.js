var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var movieSchema = new Schema({
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
    imdbscore: {
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