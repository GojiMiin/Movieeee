import {Box, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {withStyles, Link} from "@material-ui/core";
import { useLocation } from "react-router-dom"
import {useEffect} from "react";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#E5E5E5',
        marginBottom: '30px'
    },
    center: {
        display:"flex",
        justifyContent:"center"
    },
    centerColumn: {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
    },
    cyan:{
        color:"#485477"
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
const ResultBox = withStyles({
    root:{
        backgroundColor: '#fff',
        height:'auto',
        marginTop:'24px',
        ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
            width: '800px'
        }
    }
})(Box);
const ResultDetailBox = withStyles({
    root:{
        backgroundColor: '#E5E5E5',
        height:'auto'
    }
})(Box);

function ResultBoxs({mName, mPoster, mCate, mCode, mTime, mRate, mYear}) {
    const classes = useStyles()

    return (
        <ResultBox>
            <Grid container>
                <Grid item xs={4}>
                    <Container>
                        <img style={{ width: '100%', height: 'auto', borderRadius: '8px'}} src={mPoster} />
                    </Container>
                </Grid>
                <Grid item xs={8} className={classes.centerColumn}>
                    <Container>
                        <ResultDetailBox boxShadow={3} borderRadius={8}>
                            <HeaderBox>
                                <Typography variant='h6' align='left'>
                                    <Link href={"/movie/"+mCode} style={{ textDecoration: 'none' , color:"#485477", fontWeight: 'bold'}}>{mName}</Link>
                                </Typography>
                            </HeaderBox>
                            <TextBox>
                                <Grid container spacing={3}>
                                    <Grid item>
                                        <Typography align='left' variant={'body2'} className={classes.cyan}>
                                            Year {mYear}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align='left' variant={'body2'} className={classes.cyan}>
                                            {mTime}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align='left' variant={'body2'} className={classes.cyan}>
                                            {mCate}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align='left' variant={'body2'} className={classes.cyan}>
                                            {mRate}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </TextBox>
                        </ResultDetailBox>
                    </Container>
                </Grid>
            </Grid>
        </ResultBox>
    );
}

export default ResultBoxs;