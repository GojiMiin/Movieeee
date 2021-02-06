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
        width:'800px',
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


function ReviewBoxs() {
    const classes = useStyles()
    return (
        <Container className={classes.center}>
            <ReviewBox borderRadius={8}>
                <ReviewFromBox>
                    <Typography>
                        Show all reviews
                    </Typography>
                    <Button>
                        <Typography>
                            IMDB
                        </Typography>
                    </Button>
                    <Button>
                        <Typography>
                            Rotten
                        </Typography>
                    </Button>
                </ReviewFromBox>
                <HeaderBox>
                    <Typography variant='h6' align='left'>
                        Movie Review
                    </Typography>
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
                                        Movie Review
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
                                        Movie Review
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