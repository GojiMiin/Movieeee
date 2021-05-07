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
    directionCenter: {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
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
    const [clickNext, setClickNext] = useState(0)
    const [isNext, setIsNext] = useState(true)
    const [isStartPage, setIsStartPage] = useState(true)
    const [isFirstLoad, setIsFirstLoad] = useState(true)
    const [endOfReview, setEndOfReview] = useState(false)
    const [allReviewForShow, setAllReviewForShow] = useState([])
    const [keepAllReview, setKeepAllReview] = useState([])
    const [keepPositiveReview, setKeepPositiveReview] = useState([])
    const [keepNegativeReview, setKeepNegativeReview] = useState([])
    const [btnChoose, setBtnChoose] = useState(null)
    const [reviewForShowNum, setReviewForShowNum] = useState(null)
    const mDetail = useSelector(state => state.mDetail.allDetail)
    var arrayForHoldingPosts = [];
    var fetchResult = [];
    var positiveReview = [];
    var negativeReview = [];
    var mCodeForm = new FormData();

    mCodeForm.append("moviecode", mDetail.code)

    const addMoreClickNext = () => {
        setIsNext(true)
        setClickNext(clickNext+1)
    }

    const minusClickNext = () => {
        setIsNext(false)
        setClickNext(clickNext-1)
    }

    const onFilterReview = async () => {
        for(
            let i = 0;
            i < postsPerPage;
            i++
        ) {
            if (allReviewForShow[i] !== undefined) {
                arrayForHoldingPosts.push(allReviewForShow[i]);
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
            if (allReviewForShow[i] !== undefined) {
                arrayForHoldingPosts.push(allReviewForShow[i]);
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
            if (allReviewForShow[i] !== undefined) {
                arrayForHoldingPosts.push(allReviewForShow[i]);
            }
        }
        setPostsToShow(arrayForHoldingPosts);
    }

    const onClickFullReviewFilter = async () => {
        await setAllReviewForShow(keepAllReview)
        await setReviewForShowNum(keepAllReview.length)
        await setBtnChoose("full")
    }

    const onClickPositiveReviewFilter = async () => {
        await setAllReviewForShow(keepPositiveReview)
        await setReviewForShowNum(keepPositiveReview.length)
        await setBtnChoose("positive")
    }

    const onClickNegativeReviewFilter = async () => {
        await setAllReviewForShow(keepNegativeReview)
        await setReviewForShowNum(keepNegativeReview.length)
        await setBtnChoose("negative")
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

    const onFirstLoadPage = async (fetchResult) => {
        await setAllSourceReview(fetchResult.data[0])
        setAllReviewForShow(fetchResult.data[0].allReview)
        setKeepAllReview(fetchResult.data[0].allReview)
        await onStartPageFetch()
        console.log(fetchResult.data[0].allReview)
        for(
            let i=0;
            i<fetchResult.data[0].allReview.length;
            i++
        ) {
            if(parseFloat(fetchResult.data[0].allReview[i].score)<0.5){
                negativeReview.push(fetchResult.data[0].allReview[i])
            }
            else if (parseFloat(fetchResult.data[0].allReview[i].score)>0.5){
                positiveReview.push(fetchResult.data[0].allReview[i])
            }
        }
        setKeepPositiveReview(positiveReview)
        setKeepNegativeReview(negativeReview)
        setReviewForShowNum(fetchResult.data[0].allReview.length)
    }

    const fetchImdbAllReview = async (getAllImdbReviewCode) => {
        console.log(getAllImdbReviewCode)
        fetchResult = await axios.post("http://localhost:5000/predict_allreview_imdb", getAllImdbReviewCode)
        await onFirstLoadPage(fetchResult)
    }

    const fetchRottenAllReview = async (getAllRottenReviewCode) => {
        console.log(getAllRottenReviewCode)
        fetchResult = await axios.post("http://localhost:5000/predict_allreview_rotten", getAllRottenReviewCode)
        await onFirstLoadPage(fetchResult)
    }


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
                if((postsPerPage * clickNext)+postsPerPage>=reviewForShowNum){
                    setEndOfReview(true)
                }
                onClickNext()
            } else {
                console.log(clickNext)
                setEndOfReview(false)
                onClickPrev()
            }

        }
    },[clickNext])

    useEffect(async () => {
        if(isFirstLoad === false){
            switch (btnChoose) {
                case "positive":
                    await setAllReviewForShow(keepPositiveReview)
                    break;
                case "negative":
                    await setAllReviewForShow(keepNegativeReview)
                    break;
                case "full":
                    await setAllReviewForShow(keepAllReview)
                    break;
                default:
                    await setAllReviewForShow(keepAllReview)
            }
            console.log(allReviewForShow)
            onFilterReview()
        }
    }, [btnChoose])



    if(allSourceReview === null || allSource === null || allReviewForShow === null){
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
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextBox>
                                <Typography className={classes.blue} variant={'h6'} align={'left'}>
                                    All review from {allSource}
                                </Typography>
                            </TextBox>
                        </Grid>

                        <Grid item xs={6} className={classes.directionCenter}>
                            <Box display="flex">
                                <Button fullWidth={20} onClick={onClickFullReviewFilter}>
                                    All Review
                                </Button>
                                <Button fullWidth={20} onClick={onClickPositiveReviewFilter}>
                                    Positive Review Only
                                </Button>
                                <Button fullWidth={20} onClick={onClickNegativeReviewFilter}>
                                    Negative Review Only
                                </Button>
                            </Box>
                        </Grid>

                    </Grid>


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
                                    <Box position="relative">
                                        <Box
                                            top={0}
                                            left={0}
                                            bottom={0}
                                            right={0}
                                            position="absolute"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            style={{zIndex:1}}
                                        >
                                            <Typography variant="caption" component="div" className={classes.white}>
                                                {allSourceReview.positiveReview}
                                            </Typography>
                                        </Box>
                                        <BorderLinearProgress variant="determinate" value={(allSourceReview.positiveReview/allSourceReview.reviewCount)*100} />

                                    </Box>
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

                            {endOfReview === true ? (
                                <ButtonBox>
                                    <ColorButton>
                                        <Button className={classes.white} fullWidth={100} disabled={true} onClick={addMoreClickNext}>
                                            Next
                                            <SkipNextIcon/>
                                        </Button>
                                    </ColorButton>
                                </ButtonBox>
                            ):(
                                <ButtonBox>
                                    <ColorButton>
                                        <Button className={classes.white} fullWidth={100} onClick={addMoreClickNext}>
                                            Next
                                            <SkipNextIcon/>
                                        </Button>
                                    </ColorButton>
                                </ButtonBox>
                            )}

                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <ContactBox></ContactBox>
        </div>
    );
}

export default AllReviewsPage;