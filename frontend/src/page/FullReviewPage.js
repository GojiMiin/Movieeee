import MovieDescBoxs from "../components/MovieDescBox";
import React from "react";
import {
    Box,
    Container,
    makeStyles,
    TextField,
    Typography,
    withStyles,
    Grid,
    Paper,
    CircularProgress
} from "@material-ui/core";
import ContactBox from "../components/ContactBox";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import FullReviewBox from "../components/FullReviewBox";
import { useLocation } from "react-router-dom"
import axios from "axios";
import {useSelector} from "react-redux";

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
        maxWidth:'800px',
        marginTop:'24px'
    }
})(Box);
const PosterBox = withStyles({
    root:{
        borderRadius:'8px',
        backgroundColor: '#E5E5E5',
    }
})(Box);



function FullReviewPage(allDetailReview) {
    const classes = useStyles()
    const location = useLocation()
    const [reviewDetail, setReviewDetail] = useState(null)
    const [reviewSource, setReviewSource] = useState(null)
    const detail = useSelector(state => state.mDetail.allDetail);

    useEffect(async () => {
        const reviewToShow = location.state.reviewAllDetail
        const rSource = location.search.split('?')[1]
        await setReviewDetail(reviewToShow)
        await setReviewSource(rSource)
    }, [])


    if(reviewDetail === null || reviewSource === null){
        return(
            <div style={{position:'absolute',top:'45%',left:'50%'}}>
                <CircularProgress />
            </div>
        );

    }

    return (
        <div className="MoviePage">
            <Container className={classes.center}>
                <MovieDescBoxs movieName={detail.name} movieCate={detail.category} movieTime={detail.time} movieRate={detail.rate}></MovieDescBoxs>
            </Container>
            <Container className={classes.center}>
                <FullReviewBox toShowSource={reviewSource} toShowReviewDetail={reviewDetail}></FullReviewBox>
            </Container>
            <ContactBox></ContactBox>
        </div>
    );
}

export default FullReviewPage;