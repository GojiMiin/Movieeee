import {Box, Button, Container, Typography} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import {withStyles} from "@material-ui/core";

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
const FullReviewBox = withStyles({
    root:{
        backgroundColor: '#E5E5E5',
        maxWidth:'800px',
        marginTop:'24px',
        height:'auto'
    }
})(Box);

function AllReviewBox() {
    return (
        <FullReviewBox borderRadius={8}>
            <HeaderBox>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant='subtitle2' align='left'>
                            Positive / Negative
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='subtitle2' align='right'>
                            IMDB / Rotten
                        </Typography>
                    </Grid>
                </Grid>
            </HeaderBox>
            <TextBox>
                <Typography variant='body2' noWrap={true}>
                    What persuaded me to watch this movie was the blessing bestowed upon it by the stories original creator, Stephen King, who claimed: "I wasn't prepared for how good it really was".
                    He's not wrong.

                    "IT" is quite extraordinary. The attention to detail, the subtle but effective comedic undertone and the
                    exquisite cinematography not only do the original title proud, they make this re-imagining of the original
                    classic even better than its predecessor.

                    It's a very scary film but what impressed me was how true the film sticks to the original's tricks; it isn't
                    filled with loud in-your-face jump scares, in fact, a lot of what makes this film scary is the slick cinematography
                    and intricate shadow play. The use of lighting and creation of atmosphere is what makes this film so tense,
                    which is why it's perfectly suited for those who like Horror movies but without the obnoxious gore.

                    Watched the pre-release as a critic - August 28th.
                </Typography>
            </TextBox>
            <Box display={'flex'} justifyContent={'flex-end'}>
                <Box style={{padding:'0px 20px 20px 20px'}}>
                    <Button style={{padding:'0px', textTransform: 'none'}}>
                        <Typography variant='subtitle2' align='right'>
                            Read More
                        </Typography>
                    </Button>
                </Box>

            </Box>

        </FullReviewBox>
    );
}

export default AllReviewBox;