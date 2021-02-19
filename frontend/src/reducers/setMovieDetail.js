const initialMovieDetail = {
    /*category: "",
    code: "",
    description: "",
    imdbscore: 0,
    index: 0,
    name: "",
    poster: "",
    rate: "",
    time: "",
    year: 0*/
    test: "show"
}

const setMovieDetail = (state = initialMovieDetail, action) => {
    switch(action.type) {
        case 'NEW_MOVIE': return (
            /*initialMovieDetail.category = action.payload.category,
            initialMovieDetail.code = action.payload.code,
            initialMovieDetail.description = action.payload.description,
            initialMovieDetail.imdbscore = action.payload.imdbscore,
            initialMovieDetail.index = action.payload.index,
            initialMovieDetail.name = action.payload.name,
            initialMovieDetail.poster = action.payload.poster,
            initialMovieDetail.rate = action.payload.rate,
            initialMovieDetail.time = action.payload.time,
            initialMovieDetail.year = action.payload.year*/
            initialMovieDetail.test = "ssssssssss"
        );
        default:
            return initialMovieDetail;
    }
};

export default setMovieDetail;

