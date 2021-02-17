import {Box, Container, Typography} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import {withStyles} from "@material-ui/core";
import { useLocation } from "react-router-dom"
import {useEffect, useState} from "react";

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
        width:'800px',
        marginTop:'24px',
        height:'auto'
    }
})(Box);

function FullReviewBoxs({toShowSource, toShowReviewDetail}) {

    if(toShowSource === null || toShowReviewDetail === null){
        return <p>Loading review...</p>;
    }

    return (
        <FullReviewBox borderRadius={8}>
            <HeaderBox>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant='h6' align='left'>
                            {toShowReviewDetail.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h6' align='right'>
                            {toShowSource}
                        </Typography>
                    </Grid>
                </Grid>
            </HeaderBox>
            <TextBox>
                <Typography>
                    {toShowReviewDetail.review}
                </Typography>

            </TextBox>
        </FullReviewBox>
    );
}

export default FullReviewBoxs;