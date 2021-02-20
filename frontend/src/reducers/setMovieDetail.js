const currentMovieDetail = {
    allDetail:{
        category: "",
        code: "",
        description: "",
        imdbscore: 0,
        index: 0,
        name: "",
        poster: "",
        rate: "",
        time: "",
        year: 0
    }
}

const setMovieDetail = (state = currentMovieDetail, action) => {
    switch(action.type) {
        case 'NEW_MOVIE': return {
            ...state,
            allDetail: action.payload
        };
        default:
            return currentMovieDetail;
    }
};

export default setMovieDetail;

