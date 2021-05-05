import MovieDescBoxs from "../components/MovieDescBox";
import {
    Box,
    Container,
    makeStyles,
    TextField,
    Typography,
    withStyles,
    Grid,
    Paper,
    CircularProgress
} from "@material-ui/core";
import ContactBox from "../components/ContactBox";
import ReviewBoxImdb from "../components/ReviewBoxImdb";
import ReviewBoxRotten from "../components/ReviewBoxRotten";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import axios from "axios";
import {setNewDetail} from "../actions/actionindex";
import {useSelector, useDispatch, connect} from "react-redux";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#E5E5E5',
        marginBottom: '30px'
    },
    center: {
        display:"flex",
        justifyContent:"center"
    },
    directionCenter: {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
    },
    blue: {
        color:"#485477"
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
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#8BABBE',
    }
})(Box);

function MoviePage() {
    const classes = useStyles()
    const [imdbPageReview, setImdbPageReview] = useState(null)
    const [rottenPageReview, setRottenPageReview] = useState(null)
    const dispatch = useDispatch();
    const mCode = useParams();
    const movieDetail = useSelector(state => state.mDetail.allDetail);
    var mCodeForm = new FormData();
    var imdbOnePageReview = []
    var rottenOnePageReview = []

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }

    const imdbPredictFetching = async (getImdbMcode) => {
        imdbOnePageReview = await axios.post("http://localhost:5000/predict_review_imdb", getImdbMcode)
        await setImdbPageReview(imdbOnePageReview.data[0])
        console.log(imdbOnePageReview)
    }

    const rottenPredictFetching = async (getRottenMcode) => {
        rottenOnePageReview = await axios.post("http://localhost:5000/predict_review_rotten", getRottenMcode)
        await setRottenPageReview(rottenOnePageReview.data[0])
        console.log(rottenPageReview)
    }

    mCodeForm.append("moviecode", mCode.movieCode)

    useEffect(async () => {
        dispatch(setNewDetail(mCode))
        await imdbPredictFetching(mCodeForm)
        await rottenPredictFetching(mCodeForm)
    }, [])

    if(imdbPageReview === null || rottenPageReview === null || movieDetail === null){
        return(
            <div style={{position:'absolute',top:'45%',left:'50%'}}>
                <CircularProgress />
            </div>
        );

    }

    return (
        <div className="MoviePage">
            <Container className={classes.center}>
                <MovieDescBoxs movieName={movieDetail.name} movieCate={movieDetail.category} movieTime={movieDetail.time} movieRate={movieDetail.rate} movieYear={movieDetail.year}></MovieDescBoxs>
            </Container>
            <Container className={classes.center}>
                <DetailBox>
                    <Grid container spacing={3}>
                        <Grid className={classes.centeralignitem} item xs={4}>
                            <img style={{ width: '100%', height: 'auto', borderRadius: '8px'}} src={movieDetail.poster} />
                        </Grid>
                        <Grid item xs={8} className={classes.directionCenter}>
                                <div style={{margin:"20px", display:'flex', justifyContent: 'center', gap: '12px'}}>  {/* Gap between flex child */}
                                    <PosterBox boxShadow={3} borderRadius={8} style={{flex: '0 0 48.5%'}}> {/* Flex basis size */}
                                        <Container>
                                            <Box padding={2}>
                                                <Typography className={classes.blue} variant='h6'>
                                                    IMDb
                                                </Typography>
                                            </Box>
                                            <Box style={{padding:"0px 0px 12px 0px"}}>
                                                <Typography className={classes.blue} variant={'body2'}>
                                                    {imdbPageReview.imdbScore}
                                                </Typography>
                                            </Box>
                                        </Container>
                                    </PosterBox>
                                    <PosterBox boxShadow={3} borderRadius={8} style={{flex: '0 0 48.5%'}}> {/* Flex basis size */}
                                        <Container>
                                            <Box padding={2}>
                                                <Typography className={classes.blue} variant='h6'>
                                                    Rotten Tomatoes
                                                </Typography>
                                            </Box>
                                            <Box style={{padding:"0px 0px 12px 0px"}}>
                                                <Typography className={classes.blue} variant={'body2'}>
                                                    {rottenPageReview.rottenScore}
                                                </Typography>
                                            </Box>
                                        </Container>

                                    </PosterBox>
                                </div>
                                <div style={{margin:"20px"}}>
                                    <PosterBox boxShadow={3} borderRadius={8}>
                                        <Container>
                                            <HeaderBox>
                                                <Typography className={classes.blue} variant='h6' align='left'>
                                                    Description
                                                </Typography>
                                            </HeaderBox>
                                            <TextBox>
                                                <Typography className={classes.blue} variant={'body2'}>
                                                    {movieDetail.description}
                                                </Typography>
                                            </TextBox>
                                        </Container>
                                    </PosterBox>
                                </div>
                        </Grid>
                    </Grid>
                </DetailBox>
            </Container>
            <ReviewBoxImdb onePageReview={imdbPageReview}></ReviewBoxImdb>

            {/*Rotten*/}
            <ReviewBoxRotten onePageReview={rottenPageReview} mCode={mCode}></ReviewBoxRotten>
            {/**/}
            <ContactBox></ContactBox>
        </div>
    );
}

export default MoviePage;
