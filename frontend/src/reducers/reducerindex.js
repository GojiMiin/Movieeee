import setMovieDetail from "./setMovieDetail";
import { combineReducers } from "redux";

const allReducer = combineReducers({
    mDetail: setMovieDetail
});

export default allReducer;
