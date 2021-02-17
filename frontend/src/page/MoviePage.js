import MovieDescBox from "../components/MovieDescBox";
import MovieDescBoxs from "../components/MovieDescBox";
import {Box, Container, makeStyles, TextField, Typography, withStyles, Grid, Paper} from "@material-ui/core";
import {LinearProgress} from "@material-ui/core";
import ContactBox from "../components/ContactBox";
import ReviewBox from "../components/ReviewBox";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
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

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 20,
        borderRadius: 0,
    },
    colorPrimary: {
        backgroundColor: '#000',
    },
    bar: {
        borderRadius: 0,
        backgroundColor: '#fff',
    },
}))(LinearProgress);



function MoviePage() {
    const classes = useStyles()
    const [detail, setDetail] = useState(null)
    const [pageReview, setPageReview] = useState(null)
    let mCode = useParams();
    var mCodeForm = new FormData();
    var movieDetail = []
    var onePageReview = []

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }

    const detailFetching = async () => {
        movieDetail = await axios.post("http://localhost:3000/moviedetail", {code:mCode.movieCode})
        await setDetail(movieDetail.data)
    }

    const predictFetching = async () => {
        onePageReview = await axios.post("http://localhost:5000/predict_review", mCodeForm)
        await setPageReview(onePageReview.data[0])
    }

    mCodeForm.append("moviecode", mCode.movieCode)

    useEffect(async () => {
        detailFetching()
        predictFetching()
    }, [])

    if(pageReview === null || detail === null){
        return <p>Loading review...</p>;
    }

    return (
        <div className="MoviePage">
            <Container className={classes.center}>
                <MovieDescBoxs movieName={detail.name} movieCate={detail.category} movieTime={detail.time} movieRate={detail.rate}></MovieDescBoxs>
            </Container>
            <Container className={classes.center}>
                <DetailBox>
                    <Grid container spacing={3}>
                        <Grid className={classes.centeralignitem} item xs={4}>
                            <img style={{ width: '100%', height: 'auto' }} src={detail.poster} />
                        </Grid>
                        <Grid className={classes.centeralignitem} item xs={8}>
                            <Grid container direction={"column"}  spacing={5}>
                                <Grid item>
                                    <PosterBox>
                                        <Container>
                                            <HeaderBox>
                                                <Typography variant='h6' align='left'>
                                                    Score
                                                </Typography>
                                            </HeaderBox>
                                        </Container>
                                        <Container>
                                            <Grid container spacing={3}>
                                                <Grid item xs={6}>
                                                    <Box padding={1}>
                                                        <Typography variant='h6'>
                                                            IMDB
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography>
                                                            {detail.imdbscore}
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Box padding={1}>
                                                        <Typography variant='h6'>
                                                            Rotten
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography>
                                                            5.5
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Container>
                                    </PosterBox>
                                </Grid>
                                <Grid item>
                                    <PosterBox>
                                        <Container>
                                            <HeaderBox>
                                                <Typography variant='h6' align='left'>
                                                    Description
                                                </Typography>
                                            </HeaderBox>
                                            <TextBox>
                                                <Typography>
                                                    {detail.description}
                                                </Typography>
                                            </TextBox>
                                        </Container>
                                    </PosterBox>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </DetailBox>
            </Container>
            <ReviewBox onePageReview={pageReview} mCode={mCode}></ReviewBox>
            <ContactBox></ContactBox>
        </div>
    );
}

export default MoviePage;