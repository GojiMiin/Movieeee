import {
    Box,
    Container,
    makeStyles,
    TextField,
    Typography,
    withStyles,
    Grid,
    Paper,
    Button,
    CircularProgress
} from "@material-ui/core";
import {LinearProgress} from "@material-ui/core";
import ContactBox from "../components/ContactBox";
import AllReviewBox from "../components/AllReviewBox";
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#fff',
        marginBottom: '30px'
    },
    center: {
        display:"flex",
        justifyContent:"center"
    },
    centeralignitem: {
        display:"flex",
        alignItems:"center"
    },
    blue:{
        color:"#485477"
    },
    white: {
        color: "white"
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
const ColorBox = withStyles({
    root:{
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#8BABBE',
    }
})(Box);
const ColorButton = withStyles({
    root:{
        backgroundColor: '#1A95B0',
        borderRadius: '10px'
    }
})(Box);
const ButtonBox = withStyles({
    root:{
        marginTop:'24px'
    }
})(Box);
const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 20,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: '#FF6961',
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#3FA987',
    },
}))(LinearProgress);

function AllReviewsPage() {
    const classes = useStyles()
    const location = useLocation()
    const postsPerPage = 5
    const [allSourceReview, setAllSourceReview] = useState(null)
    const [allSource, setAllSource] = useState(null)
    const [postsToShow, setPostsToShow] = useState([])
    const [count, setCount] = useState(1)
    const [clickNext, setClickNext] = useState(0)
    const [isNext, setIsNext] = useState(true)
    const [isStartPage, setIsStartPage] = useState(true)
    const [isFirstLoad, setIsFirstLoad] = useState(true)
    const mDetail = useSelector(state => state.mDetail.allDetail)
    var arrayForHoldingPosts = [];
    var fetchResult = [];
    var mCodeForm = new FormData();

    mCodeForm.append("moviecode", mDetail.code)

    const onStartLoopThroughPosts = (count) => {
        for (
            let i = count * postsPerPage - postsPerPage;
            i < postsPerPage * count;
            i++
        ) {
            if (fetchResult.data[0].allReview[i] !== undefined) {
                arrayForHoldingPosts.push(fetchResult.data[0].allReview[i]);
            }
        }
        setPostsToShow(arrayForHoldingPosts);
    }

    const loadMoreLoopThroughPosts = (count) => {
        console.log(arrayForHoldingPosts)
        for (
            let i = count * postsPerPage - postsPerPage;
            i < postsPerPage * count;
            i++
        ) {
            if (allSourceReview.allReview[i] !== undefined) {
                arrayForHoldingPosts.push(allSourceReview.allReview[i]);
            }
        }
        setPostsToShow(arrayForHoldingPosts);
    }

    const addMoreClickNext = () => {
        setIsNext(true)
        setClickNext(clickNext+1)
    }

    const minusClickNext = () => {
        setIsNext(false)
        setClickNext(clickNext-1)
    }

    const onStartPageFetch = async () => {
        for(
            let i = 0;
            i < postsPerPage;
            i++
        ) {
            if (fetchResult.data[0].allReview[i] !== undefined) {
                arrayForHoldingPosts.push(fetchResult.data[0].allReview[i]);
            }
        }
        setPostsToShow(arrayForHoldingPosts);
    }

    const onClickNext = async () => {
        for(
            let i = postsPerPage * clickNext;
            i < (postsPerPage * clickNext)+postsPerPage;
            i++
        ) {
            if (allSourceReview.allReview[i] !== undefined) {
                arrayForHoldingPosts.push(allSourceReview.allReview[i]);
            }
        }
        setPostsToShow(arrayForHoldingPosts);
    }

    const onClickPrev = async () => {
        for(
            let i = postsPerPage * clickNext;
            i < (postsPerPage * clickNext)+postsPerPage;
            i++
        ) {
            if (allSourceReview.allReview[i] !== undefined) {
                arrayForHoldingPosts.push(allSourceReview.allReview[i]);
            }
        }
        setPostsToShow(arrayForHoldingPosts);
    }

    const fetchImdbAllReview = async (getAllImdbReviewCode) => {
        console.log(getAllImdbReviewCode)
        fetchResult = await axios.post("http://localhost:5000/predict_allreview_imdb", getAllImdbReviewCode)
        await setAllSourceReview(fetchResult.data[0])
        setCount((prevCount) => prevCount + 1);
        await onStartPageFetch()
        console.log(fetchResult.data)
    }

    const fetchRottenAllReview = async (getAllRottenReviewCode) => {
        console.log(getAllRottenReviewCode)
        fetchResult = await axios.post("http://localhost:5000/predict_allreview_rotten", getAllRottenReviewCode)
        setAllSourceReview(fetchResult.data[0])
        setCount((prevCount) => prevCount + 1);
        await onStartPageFetch()
        console.log(fetchResult.data[0])
    }

    const handleShowMorePosts = () => {
        setCount((prevCount) => prevCount + 1);
        loadMoreLoopThroughPosts(count);
    };

    useEffect(async () => {
        let source = location.search.split('?')[1]
        console.log(mDetail.code)
        setAllSource(source)
        if(isStartPage === true){
            if(source === "IMDb") {
                await fetchImdbAllReview(mCodeForm)
            } else if (source === "Rotten") {
                await fetchRottenAllReview(mCodeForm)
            }
        }
        setIsStartPage(false)
        setIsFirstLoad(false)
    }, [])

    useEffect( () => {
        if(isFirstLoad === false){
            if(isNext){
                console.log(clickNext)
                onClickNext()
            } else {
                console.log(clickNext)
                onClickPrev()
            }

        }
    },[clickNext])

    //TODO : Disable next btn at end of all review

    if(allSourceReview === null || allSource === null){
        return(
            <div style={{position:'absolute',top:'45%',left:'50%'}}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <div className="AllReviewsPage">

            <Container className={classes.center}>
                <Box width={800}>
                    <TextBox>
                        <Typography className={classes.blue} variant={'h6'} align={'left'}>
                            All review from {allSource}
                        </Typography>
                    </TextBox>
                </Box>
            </Container>

            <Container className={classes.center}>
                <Box className={classes.blue} width={800} height={'auto'}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <ColorBox boxShadow={3} borderRadius={8} height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                                <Container>
                                    <HeaderBox>
                                        <Typography variant={'h6'}>
                                            {mDetail.name}
                                        </Typography>
                                    </HeaderBox>
                                    <TextBox>
                                        <Typography variant={'body2'} align={"left"}>
                                            {mDetail.time}
                                        </Typography>
                                        <Typography variant={'body2'} align={"left"}>
                                            {mDetail.category}
                                        </Typography>
                                        <Typography variant={'body2'} align={"left"}>
                                            {mDetail.rate}
                                        </Typography>
                                    </TextBox>
                                </Container>

                            </ColorBox>
                        </Grid>
                        <Grid item xs={8}>
                            <ColorBox boxShadow={3} borderRadius={8} height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                                <HeaderBox>
                                    <Typography variant={'h6'} align={'left'}>
                                        From {allSourceReview.reviewCount} Reviews
                                    </Typography>
                                </HeaderBox>
                                <TextBox>
                                    <BorderLinearProgress variant="determinate" value={(allSourceReview.positiveReview/allSourceReview.reviewCount)*100} />
                                </TextBox>
                                <TextBox>
                                    <Typography variant={'body2'} align={'left'}>
                                        Positive reviews calculate as {((allSourceReview.positiveReview/allSourceReview.reviewCount)*100).toFixed(2)} % of all reviews
                                    </Typography>
                                    <Typography variant={'body2'} align={'left'}>
                                        Negative reviews calculate as {((allSourceReview.negativeReview/allSourceReview.reviewCount)*100).toFixed(2)} % of all reviews
                                    </Typography>
                                </TextBox>
                            </ColorBox>
                        </Grid>
                    </Grid>
                </Box>

            </Container>

            <Container className={classes.center}>
                <Grid container direction={'column'} alignItems={'center'}>
                    {/*loop review here*/}

                    {postsToShow.map((oneAllReview) =>
                        <Grid item xs={12} key={postsToShow.indexOf(oneAllReview)}>
                            <AllReviewBox thisReview={oneAllReview}></AllReviewBox>
                        </Grid>
                    )}

                </Grid>
            </Container>

            <Container className={classes.center}>
                <Box width={800}>

                    <Grid container spacing={3}>
                        <Grid item sm={6}>

                            {clickNext === 0 ? (
                                <ButtonBox>
                                    <ColorButton>
                                        <Button className={classes.white} fullWidth={100} disabled={true} onClick={onClickPrev}>
                                            <SkipPreviousIcon/>
                                            Prev
                                        </Button>
                                    </ColorButton>
                                </ButtonBox>
                            ):(
                                <ButtonBox>
                                    <ColorButton>
                                        <Button className={classes.white} fullWidth={100} onClick={minusClickNext}>
                                            <SkipPreviousIcon/>
                                            Prev
                                        </Button>
                                    </ColorButton>
                                </ButtonBox>
                            )}
                        </Grid>
                        <Grid item sm={6}>
                            <ButtonBox>
                                <ColorButton>
                                    <Button className={classes.white} fullWidth={100} onClick={addMoreClickNext}>
                                        Next
                                        <SkipNextIcon/>
                                    </Button>
                                </ColorButton>
                            </ButtonBox>
                        </Grid>
                    </Grid>
                    {/*<ButtonBox>
                        <ColorButton>
                            <Button className={classes.white} fullWidth={100} onClick={handleShowMorePosts}>
                                Load more
                            </Button>
                        </ColorButton>
                    </ButtonBox>*/}
                </Box>
            </Container>

            <ContactBox></ContactBox>
        </div>
    );
}

export default AllReviewsPage;