import {Box, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {withStyles, Link} from "@material-ui/core";
import { useHistory } from "react-router-dom";
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
    blue:{
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
        },
        '&:hover':{
            cursor: 'pointer',
            transform: 'scale(0.95)',
            transitionDuration: '0.5s',
        },
        '&:after':{

        }
    }
})(Box);
const ResultDetailBox = withStyles({
    root:{
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#8BABBE',
        height:'auto'
    }
})(Box);

function ResultBoxs({mName, mPoster, mCate, mCode, mTime, mRate, mYear, mDes}) {
    const classes = useStyles()
    const history = useHistory()
    const toMovieReviewPage = () => {
        history.push({
            pathname: "/movie/"+mCode
        })
    }

    return (
        <ResultBox onClick={() => toMovieReviewPage()}>
            <ResultDetailBox boxShadow={3} borderRadius={8}>
            <Grid container>
                <Grid item xs={4}>
                    <Container>
                        <img style={{ width: '100%', height: 'auto', borderRadius: '8px', margin:'10px'}} src={mPoster} />
                    </Container>
                </Grid>
                <Grid item xs={8} className={classes.centerColumn}>
                    <Container>

                            <HeaderBox>
                                <Typography variant='h6' align='left'>
                                    <Link href={"/movie/"+mCode} style={{ textDecoration: 'none' , color:"#485477", fontWeight: 'bold'}}>{mName}</Link>
                                </Typography>
                            </HeaderBox>
                            <TextBox>
                                <Grid container spacing={3}>
                                    <Grid item>
                                        <Typography align='left' variant={'body2'} className={classes.blue}>
                                            Year {mYear}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align='left' variant={'body2'} className={classes.blue}>
                                            {mTime}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align='left' variant={'body2'} className={classes.blue}>
                                            {mCate}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align='left' variant={'body2'} className={classes.blue}>
                                            {mRate}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </TextBox>
                        <TextBox>
                            <Typography align='left' variant={'body2'} className={classes.blue}>
                                {mDes}
                            </Typography>
                        </TextBox>

                    </Container>
                </Grid>
            </Grid>
            </ResultDetailBox>
        </ResultBox>
    );
}

export default ResultBoxs;