import {Box, Button, Container, Grid, Link, makeStyles, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {useSelector} from "react-redux";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#E5E5E5',
        marginBottom: '60px'
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
const ReviewBoxImdb = withStyles({
    root:{
        position:'relative',
        backgroundColor: '#E5E5E5',
        maxWidth:'800px',
        height:'auto',
        margin:'24px 0px 24px 0px',
    }
})(Box);
const ReviewTextBox = withStyles({
    root:{
        position:'relative',
        backgroundColor: '#fff',
        height:'auto'
    }
})(Box);
const ReviewFromBox = withStyles({
    root:{
        position:'absolute',
        right:'10px',
        top:'10px'
    }
})(Box);
const BottomBox = withStyles({
    root:{
        padding:'0px 20px 20px 20px'
    }
})(Box);


function ReviewBoxImdbs({onePageReview}) {
    const classes = useStyles()
    const history = useHistory()
    const movieDetail = useSelector(state => state.mDetail.allDetail);

    const readMoreReview = (reviewDetail) => {
        history.push({
            pathname: "/review/"+movieDetail.code,
            search: "IMDb",
            state: {reviewAllDetail: reviewDetail}
        })
    }

    const toAllReviewPage = () => {
        history.push({
            pathname: "/allreviews/"+movieDetail.code,
            search: "IMDb"
        })
    }

    return (
        <Container className={classes.center}>
            <ReviewBoxImdb borderRadius={8}>
                <HeaderBox>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant='h6' align='left'>
                                IMDb Movie Review
                            </Typography>
                        </Grid>
                        <Grid item container xs={6}>
                            <Grid item xs={9} style={{display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
                                <Typography variant='subtitle2' align='right'>
                                    Show all reviews
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Button>
                                    <Typography variant={'subtitle2'} onClick={() => toAllReviewPage()}>
                                        IMDB
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </HeaderBox>
                <TextBox>
                    <Grid container spacing={3}>
                        {onePageReview.allReview.map((oneReview) =>
                            <Grid item xs={6} key={oneReview.score}> {/*imdb review box*/}
                            <ReviewTextBox borderRadius={8}>
                                <Grid container>
                                    <Grid item xs={9}>
                                        <HeaderBox>
                                            <Typography align={'left'} variant={'subtitle2'} noWrap={true}>
                                                {oneReview.title} {/*add review title and show positive negative score*/}
                                            </Typography>
                                        </HeaderBox>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <HeaderBox>
                                            <Typography align={'right'} variant={'subtitle2'}>
                                                IMDB
                                            </Typography>
                                        </HeaderBox>
                                    </Grid>
                                </Grid>
                                <TextBox>
                                    <Typography align='left' variant={'body2'} noWrap={true}>
                                        {oneReview.review}
                                    </Typography>
                                </TextBox>
                                <Grid container>
                                    <Grid item xs={8}>
                                        <BottomBox>
                                            <Typography variant='subtitle2' align='left'>
                                                Predict Score : {parseFloat(oneReview.score.replace(/[^0-9.]/g, '')).toFixed(4)}
                                            </Typography>
                                        </BottomBox>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <BottomBox>
                                            <Typography variant='subtitle2' align='right' onClick={() => readMoreReview(oneReview)}>
                                                Read More
                                            </Typography>
                                        </BottomBox>
                                    </Grid>
                                </Grid>
                            </ReviewTextBox>
                        </Grid>
                        )}
                    </Grid>
                </TextBox>
            </ReviewBoxImdb>
        </Container>
    );
}

export default ReviewBoxImdbs;