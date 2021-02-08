import MovieDescBox from "../components/MovieDescBox";
import MovieDescBoxs from "../components/MovieDescBox";
import {Box, Container, makeStyles, TextField, Typography, withStyles, Grid, Paper} from "@material-ui/core";
import {LinearProgress} from "@material-ui/core";
import ContactBox from "../components/ContactBox";
import ReviewBox from "../components/ReviewBox";

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
        width:'800px',
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
    return (
        <div className="MoviePage">
            <Container className={classes.center}>
                <MovieDescBoxs></MovieDescBoxs>
            </Container>
            <Container className={classes.center}>
                <DetailBox>
                    <Grid container spacing={3}>
                        <Grid className={classes.centeralignitem} item xs={4}> {/* need to use props instead of img component*/}
                            <img style={{ width: '100%', height: 'auto' }} src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg" />
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
                                                            5.0
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
                                                    The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.
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
            <ReviewBox></ReviewBox>
            <ContactBox></ContactBox>
        </div>
    );
}

export default MoviePage;