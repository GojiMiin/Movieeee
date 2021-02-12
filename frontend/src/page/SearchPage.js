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
import { useLocation } from "react-router-dom"
import axios from "axios"

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
    var result

    useEffect(async () => {
        const keyWord = location.state.keyword
        result = await axios.post("http://localhost:3000/namesearch", {sname:keyWord})
        setMovie(result.data)
    }, [])

    console.log(movie)

    return (
        <div className="SearchPage">
            <Container className={classes.center}>
                <ResultHeaderBox showKey={location.state.keyword}></ResultHeaderBox>
            </Container>
            <Container className={classes.centerColumn}>

                {movie.map((oneMovie) =>
                    <ResultBox key={oneMovie.code} mName={oneMovie.name} mPoster={oneMovie.poster} mCate={oneMovie.category} mCode={oneMovie.code}/>
                )}

            </Container>
            <ContactBox></ContactBox>
        </div>
    );
}

export default SearchPage;