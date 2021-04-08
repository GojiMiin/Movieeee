import {
    Box,
    withStyles,
    makeStyles,
    Container
} from "@material-ui/core";
import ContactBox from "../components/ContactBox";
import MovieDescBoxs from "../components/MovieDescBox";
import ResultHeaderBox from "../components/ResultHeaderBox";
import ResultBox from "../components/ResultBox";
import {useEffect, useState} from "react";
import { useLocation, BrowserRouter } from "react-router-dom"
import axios from "axios"
import SearchBar from "../components/SearchBar";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#E5E5E5',
        marginBottom: '60px'
    },
    center: {
        display:"flex",
        justifyContent:"center"
    },
    centerColumn: {
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }

});
const AboutProjectBox = withStyles({
    root:{
        backgroundColor: '#E5E5E5',
        width:'1000px',
        height:'auto'
    }
})(Box);
const HeaderBox = withStyles({
    root:{
        padding:'20px 20px 20px 20px'
    }
})(Box);
const TextBox = withStyles({
    root:{
        padding:'20px'
    }
})(Box);

function SearchPage() {
    const classes = useStyles()
    const location = useLocation()
    const [movie, setMovie] = useState([])
    const keyWord = location.state.keyword
    const type = location.state.type
    var result

    useEffect(async () => {
        switch(type){
            case "nameSearch":
                result = await axios.post("http://localhost:3000/namesearch", {sname:keyWord})
                setMovie(result.data)
                break;
            case "yearSearch":
                result = await axios.post("http://localhost:3000/yearfil", {year:keyWord})
                setMovie(result.data)
                break;
            case "cateSearch":
                result = await axios.post("http://localhost:3000/catesearch", {scate:keyWord})
                setMovie(result.data)
                break;
            default: break;
        };
    },[keyWord])

    console.log(movie)

    return (
        <div className="SearchPage">
                <SearchBar/>
            <Container className={classes.center}>
                <ResultHeaderBox showKey={location.state.keyword}></ResultHeaderBox>
            </Container>
            <Container className={classes.centerColumn}>

                {movie.map((oneMovie) =>
                    <ResultBox key={oneMovie.code} mName={oneMovie.name} mPoster={oneMovie.poster} mCate={oneMovie.category} mCode={oneMovie.code} mTime={oneMovie.time} mRate={oneMovie.rate} mYear={oneMovie.year} mDes={oneMovie.description}/>
                )}

            </Container>
            <ContactBox></ContactBox>
        </div>
    );
}

export default SearchPage;