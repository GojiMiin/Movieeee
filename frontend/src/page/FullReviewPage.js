import MovieDescBoxs from "../components/MovieDescBox";
import {Box, Container, makeStyles, TextField, Typography, withStyles, Grid, Paper} from "@material-ui/core";
import ContactBox from "../components/ContactBox";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import FullReviewBox from "../components/FullReviewBox";
import axios from "axios";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#E5E5E5',
        marginBottom: '30px'
    },
    center: {
        display:"flex",
        justifyContent:"center"
    },
    centeralignitem: {
        display:"flex",
        alignItems:"center"
    }
});

const HeaderBox = withStyles({
    root:{
        padding:'20px 20px 0px 20px'
    }
})(Box);
const TextBox = withStyles({
    root:{
        padding:'20px'
    }
})(Box);
const DetailBox = withStyles({
    root:{
        maxWidth:'800px',
        marginTop:'24px'
    }
})(Box);
const PosterBox = withStyles({
    root:{
        borderRadius:'8px',
        backgroundColor: '#E5E5E5',
    }
})(Box);



function FullReviewPage(allDetailReview) {
    const classes = useStyles()
    const [detail, setDetail] = useState([])
    let mCode = useParams();
    var movieDetail = []

    useEffect(async () => {
        movieDetail = await axios.post("http://localhost:3000/moviedetail", {code:mCode.movieCode})
        await setDetail(movieDetail.data)
    }, [])

    console.log(detail)

    return (
        <div className="MoviePage">
            <Container className={classes.center}>
                <MovieDescBoxs movieName={'TestName'} movieCate={'Action, Drama'}></MovieDescBoxs>
            </Container>
            <Container className={classes.center}>
                <FullReviewBox></FullReviewBox>
            </Container>
            <ContactBox></ContactBox>
        </div>
    );
}

export default FullReviewPage;