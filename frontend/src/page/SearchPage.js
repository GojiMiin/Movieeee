import {
    Box, TextField, fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme, Container, Typography
} from "@material-ui/core";
import ContactBox from "../components/ContactBox";
import MovieDescBoxs from "../components/MovieDescBox";
import ResultHeaderBox from "../components/ResultHeaderBox";
import ResultBox from "../components/ResultBox";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#E5E5E5',
        marginBottom: '60px'
    },
    center: {
        display:"flex",
        justifyContent:"center"
    },
    centerColumn: {
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }

});
const AboutProjectBox = withStyles({
    root:{
        backgroundColor: '#E5E5E5',
        width:'1000px',
        height:'auto'
    }
})(Box);
const HeaderBox = withStyles({
    root:{
        padding:'20px 20px 20px 20px'
    }
})(Box);
const TextBox = withStyles({
    root:{
        padding:'20px'
    }
})(Box);

function SearchPage() {
    const classes = useStyles()
    return (
        <div className="SearchPage">
            <Container className={classes.center}>
                <ResultHeaderBox></ResultHeaderBox>

            </Container>
            <Container className={classes.centerColumn}>

                    {/*loop result here*/}
                    <ResultBox></ResultBox>
                    <ResultBox></ResultBox>


            </Container>
            <ContactBox></ContactBox>
        </div>
    );
}

export default SearchPage;