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
import ReviewBox from "../components/ReviewBox";
import {useEffect, useState} from "react";
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

function MoviePage() {
    const classes = useStyles()
    const [pageReview, setPageReview] = useState(null)
    const dispatch = useDispatch();
    const mCode = useParams();
    const movieDetail = useSelector(state => state.mDetail.allDetail);
    var mCodeForm = new FormData();
    var onePageReview = []

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }

    const predictFetching = async () => {
        onePageReview = await axios.post("http://localhost:5000/predict_review_imdb", mCodeForm)
        await setPageReview(onePageReview.data[0])
        console.log(onePageReview)
    }

    mCodeForm.append("moviecode", mCode.movieCode)

    useEffect(async () => {
        dispatch(setNewDetail(mCode))
        await predictFetching()
    }, [])

    if(pageReview === null || movieDetail === null){
        return <CircularProgress />;
    }

    return (
        <div className="MoviePage">
            <Container className={classes.center}>
                <MovieDescBoxs movieName={movieDetail.name} movieCate={movieDetail.category} movieTime={movieDetail.time} movieRate={movieDetail.rate}></MovieDescBoxs>
            </Container>
            <Container className={classes.center}>
                <DetailBox>
                    <Grid container spacing={3}>
                        <Grid className={classes.centeralignitem} item xs={4}>
                            <img style={{ width: '100%', height: 'auto' }} src={movieDetail.poster} />
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
                                                        <Typography variant={'body2'}>
                                                            {pageReview.imdbScore}
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
                                                        <Typography variant={'body2'}>
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
                                                <Typography variant={'body2'}>
                                                    {movieDetail.description}
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


/*const mapStateToProps = (state) => ({ movieDetail: state.mDetail.allDetail })

export default connect(mapStateToProps)(MoviePage);*/
export default MoviePage;
