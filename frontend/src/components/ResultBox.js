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
        maxWidth:'800px',
        height:'auto',
        marginTop:'24px'
    }
})(Box);
const ResultDetailBox = withStyles({
    root:{
        backgroundColor: '#E5E5E5',
        height:'auto'
    }
})(Box);

function ResultBoxs({mName, mPoster, mCate, mCode}) {
    const classes = useStyles()
    const location = useLocation()

    return (
        <ResultBox>
            <Grid container>
                <Grid item xs={4}>
                    <img style={{ width: '75%', height: 'auto' }} src={mPoster} />
                </Grid>
                <Grid item xs={8} className={classes.centerColumn}>
                    <Box>
                        <ResultDetailBox borderRadius={8}>
                            <HeaderBox>
                                <Typography variant='h6' align='left'>
                                    <Link href={"/movie/"+mCode} style={{ textDecoration: 'none' }}>{mName}</Link>
                                </Typography>
                            </HeaderBox>
                            <TextBox>
                                <Typography align='left'>
                                    {mCate}
                                </Typography>
                            </TextBox>
                        </ResultDetailBox>
                    </Box>
                </Grid>
            </Grid>
        </ResultBox>

    );
}

export default ResultBoxs;