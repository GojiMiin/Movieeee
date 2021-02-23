import {Box, Button, Container, Grid, Link, makeStyles, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/core";
import { useHistory } from "react-router-dom";

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
const ReviewBoxRotten = withStyles({
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


function ReviewBoxRottens({onePageReview, mCode}) {
    const classes = useStyles()
    const history = useHistory()

    const readMoreReview = (reviewDetail) => {
        history.push({
            pathname: "/review/"+mCode.movieCode,
            search: "IMDb",
            state: {reviewAllDetail: reviewDetail}
        })
    }

    return (
        <Container className={classes.center}>
            <ReviewBoxRotten borderRadius={8}>
                <HeaderBox>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant='h6' align='left'>
                                Movie Review
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
                                    <Typography variant={'subtitle2'}>
                                        Rotten
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
                                                    Predict Score : {oneReview.score}
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
            </ReviewBoxRotten>
        </Container>
    );
}

export default ReviewBoxRottens;