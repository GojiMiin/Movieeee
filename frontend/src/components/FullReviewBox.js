import {Box, Container, makeStyles, Typography} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import {withStyles} from "@material-ui/core";
import {CircularProgress} from "@material-ui/core";
import { useLocation } from "react-router-dom"
import {useEffect, useState} from "react";

const useStyles = makeStyles({

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
const FullReviewBox = withStyles({
    root:{
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#8BABBE',
        width:'800px',
        marginTop:'24px',
        height:'auto'
    }
})(Box);



function FullReviewBoxs({toShowSource, toShowReviewDetail}) {

    const classes = useStyles()
    const predictScore = parseFloat(toShowReviewDetail.score.replace(/[^0-9.]/g, '')).toFixed(4)

    if(toShowSource === null || toShowReviewDetail === null){
        return <CircularProgress />;
    }

    return (
        <FullReviewBox className={classes.blue} boxShadow={3} borderRadius={8} checkReviewVibe>
            <HeaderBox >
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant='h6' align='left'>
                            {/*{toShowReviewDetail.title}*/}
                            Predict Score : {predictScore}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h6' align='right'>
                            {toShowSource}
                        </Typography>
                    </Grid>
                </Grid>
            </HeaderBox>
            <HeaderBox>
                <Typography variant='subtitle2' align='left'>
                    {toShowReviewDetail.title}
                </Typography>
            </HeaderBox>
            <TextBox>
                <Typography variant={'body2'}>
                    {toShowReviewDetail.review}
                </Typography>

            </TextBox>
        </FullReviewBox>
    );
}

export default FullReviewBoxs;