import {Box, Button, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/core";

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
        padding:'20px 20px 40px 20px'
    }
})(Box);
const ReviewBox = withStyles({
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
const ReadMoreBox = withStyles({
    root:{
        position: 'absolute',
        right: '5px',
        bottom: '5px',
    }
})(Box);


function ReviewBoxs({onePageReview}) {
    const classes = useStyles()
    return (
        <Container className={classes.center}>
            <ReviewBox borderRadius={8}>
                <HeaderBox>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant='h6' align='left'>
                                Movie Review
                            </Typography>
                        </Grid>
                        <Grid item container xs={6}>
                            <Grid item xs={6} style={{display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
                                <Typography variant='subtitle2' align='right'>
                                    Show all reviews
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Button>
                                    <Typography>
                                        IMDB
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button>
                                    <Typography>
                                        Rotten
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </HeaderBox>
                <TextBox>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <ReviewTextBox borderRadius={8}>
                                <ReadMoreBox>
                                    <Button>
                                        <Typography>
                                            Read More
                                        </Typography>
                                    </Button>
                                </ReadMoreBox>
                                <ReviewFromBox>
                                    <Typography align='right'>
                                        IMDB
                                    </Typography>
                                </ReviewFromBox>
                                <HeaderBox>
                                    <Typography align='left'>
                                        Movie Review {/*add review title and show positive negative score*/}
                                    </Typography>
                                </HeaderBox>
                                <TextBox>
                                    <Typography align='left' noWrap={true}>
                                        Test Review Veryyyyyyyyyyyyyyyyyyyyyyyyyyyy Long
                                    </Typography>
                                </TextBox>
                            </ReviewTextBox>
                        </Grid>
                        <Grid item xs={6}>
                            <ReviewTextBox borderRadius={8}>
                                <ReadMoreBox>
                                    <Button>
                                        <Typography>
                                            Read More
                                        </Typography>
                                    </Button>
                                </ReadMoreBox>
                                <ReviewFromBox>
                                    <Typography align='right'>
                                        Rotten
                                    </Typography>
                                </ReviewFromBox>
                                <HeaderBox>
                                    <Typography align='left'>
                                        Movie Review {/*add review title and show positive negative score*/}
                                    </Typography>
                                </HeaderBox>
                                <TextBox>
                                    <Typography align='left' noWrap={true}>
                                        Test Review Veryyyyyyyyyyyyyyyyyyyyyyyyyyyy Long
                                    </Typography>
                                </TextBox>
                            </ReviewTextBox>
                        </Grid>
                    </Grid>
                </TextBox>
            </ReviewBox>
        </Container>
    );
}

export default ReviewBoxs;