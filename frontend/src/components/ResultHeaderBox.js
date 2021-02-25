import {Box, Container, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/core";

const HeaderBox = withStyles({
    root:{
        padding:'20px'
    }
})(Box);
const TextBox = withStyles({
    root:{
        padding:'20px'
    }
})(Box);
const ResultHeaderBox = withStyles({
    root:{
        backgroundColor: '#E5E5E5',
        width:'800px',
        height:'auto'
    }
})(Box);

function ResultHeaderBoxs({showKey}) {
    return (
        <ResultHeaderBox boxShadow={3} borderRadius={8}>
            <HeaderBox>
                <Typography variant='h6' align='left'>
                    Result for "{showKey}"
                </Typography>
            </HeaderBox>
        </ResultHeaderBox>
    );
}

export default ResultHeaderBoxs;