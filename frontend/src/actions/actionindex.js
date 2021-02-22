import axios from 'axios'

export const setNewDetail = ( mCode ) => async dispatch => {

    try{
        const movieDetail = await axios.post("http://localhost:3000/moviedetail", {code:mCode.movieCode})
        dispatch({
            type: 'NEW_MOVIE',
            payload: movieDetail.data
        })
    }
    catch(e) {
        console.log("error")
    }
}