import {Box, Button, Container, Typography} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import {withStyles} from "@material-ui/core";
import {useSelector} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";

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
const BottomBox = withStyles({
    root:{
        padding:'0px 20px 20px 20px'
    }
})(Box);
const FullReviewBox = withStyles({
    root:{
        backgroundColor: '#fff',
        ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
            width: '800px'
        },
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            width: '600px'
        },
        marginTop:'24px',
        height:'auto'
    }
})(Box);
const TypoNoWrap2Line = withStyles({
    root:{
        display: '-webkit-box',
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical',
        overflow:'hidden',
        textOverflow: 'ellipsis'
    }
})(Typography);

function AllReviewBox(thisReview) {

    const history = useHistory()
    const location = useLocation()
    const mDetail = useSelector(state => state.mDetail.allDetail);

    const readMoreReview = (reviewDetail) => {
        history.push({
            pathname: "/review/"+mDetail.code,
            search: "IMDb",
            state: {reviewAllDetail: reviewDetail}
        })
    }

    return (
        <FullReviewBox boxShadow={3} borderRadius={8} style={parseFloat(thisReview.thisReview.score.replace(/[^0-9.]/g, '')).toFixed(4) <= 0.5 ? { borderStyle:'solid',borderColor:'#ff6961'} : {borderStyle:'solid', borderColor:'#aeffda'}}>
            <HeaderBox>
                <Grid container>
                    <Grid item xs={6}>
                        {
                            thisReview.thisReview.title == null ?
                                <Typography variant='subtitle2' align='left'>
                                    Untitled Review
                                </Typography> :
                                <Typography variant='subtitle2' align='left'>
                                    {thisReview.thisReview.title}
                                </Typography>

                        }

                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='subtitle2' align='right'>
                            {location.search.split('?')}
                        </Typography>
                    </Grid>
                </Grid>
            </HeaderBox>
            <TextBox>
                <TypoNoWrap2Line variant='body2'>
                    {thisReview.thisReview.review}
                </TypoNoWrap2Line>
            </TextBox>
            <BottomBox>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant='subtitle2' align='left'>
                            Predict Score : {parseFloat(thisReview.thisReview.score.replace(/[^0-9.]/g, '')).toFixed(4)}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='subtitle2' align='right' onClick={() => readMoreReview(thisReview.thisReview)}>
                            Read More
                        </Typography>
                    </Grid>
                </Grid>
            </BottomBox>
        </FullReviewBox>
    );
}

export default AllReviewBox;