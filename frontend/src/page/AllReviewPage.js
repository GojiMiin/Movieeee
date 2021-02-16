import {Box, Container, makeStyles, TextField, Typography, withStyles, Grid, Paper, Button} from "@material-ui/core";
import {LinearProgress} from "@material-ui/core";
import ContactBox from "../components/ContactBox";
import AllReviewBox from "../components/AllReviewBox";

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
const ColorBox = withStyles({
    root:{
        backgroundColor: '#E5E5E5',
    }
})(Box);
const ButtonBox = withStyles({
    root:{
        marginTop:'24px'
    }
})(Box);
const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
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
    return (
        <div className="AllReviewsPage">

            <Container className={classes.center}>
                <Box width={800}>
                    <TextBox>
                        <Typography variant={'h6'} align={'left'}>
                            All review from IMDb / Rotten Tomatoes
                        </Typography>
                    </TextBox>
                </Box>
            </Container>

            <Container className={classes.center}>
                <Box width={800} height={'auto'}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <ColorBox borderRadius={8} height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                                <Container>
                                    <HeaderBox>
                                        <Typography variant={'h6'}>
                                            Movie Name
                                        </Typography>
                                    </HeaderBox>
                                    <TextBox>
                                        <Typography variant={'body2'}>
                                            Movie Time
                                        </Typography>
                                        <Typography variant={'body2'}>
                                            Category
                                        </Typography>
                                        <Typography variant={'body2'}>
                                            Rate
                                        </Typography>
                                    </TextBox>
                                </Container>

                            </ColorBox>
                        </Grid>
                        <Grid item xs={8}>
                            <ColorBox borderRadius={8}>
                                <HeaderBox>
                                    <Typography variant={'subtitle1'} align={'left'}>
                                        From 108 Reviews
                                    </Typography>
                                </HeaderBox>
                                <TextBox>
                                    <BorderLinearProgress variant="determinate" value={50} />
                                </TextBox>
                                <TextBox>
                                    <Typography variant={'body2'} align={'left'}>
                                        Positive reviews calculate as 29.62 % of all reviews
                                    </Typography>
                                    <Typography variant={'body2'} align={'left'}>
                                        Negative reviews calculate as 70.38 % of all reviews
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
                    <Grid item xs={12}>
                        <AllReviewBox></AllReviewBox>
                    </Grid>
                    <Grid item xs={12}>
                        <AllReviewBox></AllReviewBox>
                    </Grid>
                    <Grid item xs={12}>
                        <AllReviewBox></AllReviewBox>
                    </Grid>
                    <Grid item xs={12}>
                        <AllReviewBox></AllReviewBox>
                    </Grid>
                    <Grid item xs={12}>
                        <AllReviewBox></AllReviewBox>
                    </Grid>
                </Grid>
            </Container>

            <Container className={classes.center}>
                <Box width={800}>
                    <ButtonBox>
                        <ColorBox>
                            <Button fullWidth={100}>
                                Load more
                            </Button>
                        </ColorBox>
                    </ButtonBox>
                </Box>
            </Container>

            <ContactBox></ContactBox>
        </div>
    );
}

export default AllReviewsPage;