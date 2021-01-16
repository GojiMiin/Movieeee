module.exports = function(app){
    var movie = require('../controllers/movieController')

    app.route('/imdbmovie')
        .post(movie.loadDetail)
    app.route('/yearfil')
        .post(movie.yearFilter)
}