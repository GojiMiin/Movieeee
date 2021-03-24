import {Box, Container, makeStyles, Typography} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import {withStyles} from "@material-ui/core";


const useStyles = makeStyles({
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
const MovieDescBox = withStyles({
    root:{
        backgroundColor: '#1A95B0',
        width:'800px',
        height:'auto'
    }
})(Box);

function MovieDescBoxs({movieName, movieCate, movieTime, movieRate, movieYear}) {
    const classes = useStyles()
    return (
        <MovieDescBox boxShadow={3} borderRadius={8}>
            <HeaderBox>
                <Typography className={classes.white} variant='h6' align='left'>
                    {movieName}
                </Typography>
            </HeaderBox>
            <TextBox>
                <Grid container spacing={3}>
                    <Grid item>
                        <Typography className={classes.white} variant={'body2'} align='left'>
                            Year {movieYear}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.white} variant={'body2'} align='left'>
                            {movieTime}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.white} variant={'body2'} align='left'>
                            {movieCate}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.white} variant={'body2'} align='left'>
                            {movieRate}
                        </Typography>
                    </Grid>

                </Grid>

            </TextBox>
        </MovieDescBox>
    );
}

export default MovieDescBoxs;