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
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

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
    }
})(Box);
const ColorButton = withStyles({
    root:{
        backgroundColor: '#e5e5e5',
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
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#000',
    },
}))(LinearProgress);

function AllReviewsPage() {
    const classes = useStyles()
    const location = useLocation()
    const [allSourceReview, setAllSourceReview] = useState(null)
    const [allSource, setAllSource] = useState(null)
    const mDetail = useSelector(state => state.mDetail.allDetail);
    var fetchResult = []
    var mCodeForm = new FormData();

    mCodeForm.append("moviecode", mDetail.code)

    const fetchImdbAllReview = async (getAllImdbReviewCode) => {
        console.log(getAllImdbReviewCode)
        fetchResult = await axios.post("http://localhost:5000/predict_allreview_imdb", getAllImdbReviewCode) /*error on fetching review*/
        setAllSourceReview(fetchResult.data[0])
    }

    const fetchRottenAllReview = async (getAllRottenReviewCode) => {
        console.log(getAllRottenReviewCode)
        fetchResult = await axios.post("http://localhost:5000/predict_allreview_rotten", getAllRottenReviewCode) /*error on fetching review*/
        setAllSourceReview(fetchResult.data[0])
        console.log(fetchResult.data[0])
    }

    useEffect(async () => {
        let source = location.search.split('?')[1]
        console.log(mDetail.code)
        setAllSource(source)
        if(source === "IMDb") {
            await fetchImdbAllReview(mCodeForm)
        } else if (source === "Rotten") {
            await fetchRottenAllReview(mCodeForm)
        }
    }, [])

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
                        <Typography variant={'h6'} align={'left'}>
                            All review from {allSource}
                        </Typography>
                    </TextBox>
                </Box>
            </Container>

            <Container className={classes.center}>
                <Box width={800} height={'auto'}>
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

                    {allSourceReview.allReview.map((oneAllReview) =>
                        <Grid item xs={12}>
                            <AllReviewBox thisReview={oneAllReview}></AllReviewBox>
                        </Grid>
                    )}

                </Grid>
            </Container>

            <Container className={classes.center}>
                <Box width={800}>
                    <ButtonBox>
                        <ColorButton>
                            <Button fullWidth={100}>
                                Load more
                            </Button>
                        </ColorButton>
                    </ButtonBox>
                </Box>
            </Container>

            <ContactBox></ContactBox>
        </div>
    );
}

export default AllReviewsPage;