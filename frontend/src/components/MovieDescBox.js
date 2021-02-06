import {Box, Container, Typography} from "@material-ui/core";
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
const MovieDescBox = withStyles({
    root:{
        backgroundColor: '#E5E5E5',
        width:'800px',
        height:'auto'
    }
})(Box);

function MovieDescBoxs() {
    return (
        <MovieDescBox borderRadius={8}>
            <HeaderBox>
                <Typography variant='h6' align='left'>
                    Movie Title
                </Typography>
            </HeaderBox>
            <TextBox>
                <Typography align='left'>
                    Action, Drama, History
                </Typography>
            </TextBox>
        </MovieDescBox>
    );
}

export default MovieDescBoxs;