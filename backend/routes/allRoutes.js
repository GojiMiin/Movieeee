module.exports = function(app){
    var movie = require('../controllers/movieController')

    app.route('/imdbmovie')
        .post(movie.loadDetail)
    app.route('/yearfil')
        .post(movie.yearFilter)
    app.route('/namesearch')
        .post(movie.nameSearch)
    app.route('/ratesearch')
        .post(movie.rateSearch)
    app.route('/catesearch')
        .post(movie.cateSearch)
}