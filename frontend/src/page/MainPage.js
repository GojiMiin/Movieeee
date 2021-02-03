import {
    Box, TextField, fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme, Container, Typography
} from "@material-ui/core";
import SearchBar from "../components/SearchBar";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#E5E5E5',
        marginBottom: '60px'
    },
    center: {
        display:"flex",
        justifyContent:"center"
    }
});
const AboutProjectBoxCSS = withStyles({
    root:{
        backgroundColor: '#E5E5E5',
        width:'1000px',
        height:'auto'
    }
})(Box);
const HeaderBoxCSS = withStyles({
    root:{
        padding:'20px 20px 0px 20px'
    }
})(Box);
const TextBoxCSS = withStyles({
    root:{
        padding:'20px'
    }
})(Box);
const ContactBoxCSS = withStyles({
    root:{
        backgroundColor: '#E5E5E5',
        marginTop:'60px',
        width:'1200px',
        height:'auto'
    }
})(Box);

function MainPage() {
    const classes = useStyles()
    return (
        <div className="MainPage">
            <SearchBar/>
            <Container className={classes.center}>
                <AboutProjectBoxCSS>
                    <HeaderBoxCSS>
                        <Typography variant='h6' align='left'>
                            About Project
                        </Typography>
                    </HeaderBoxCSS>
                    <TextBoxCSS>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at eleifend turpis. Sed efficitur tincidunt lacus in volutpat. Nullam vitae dapibus sapien. Curabitur ac nunc non lacus faucibus efficitur ut quis ex. Etiam pharetra, ipsum a blandit elementum, arcu ex gravida nisl, et pharetra felis sapien vel diam. Sed laoreet facilisis lobortis. Curabitur et tellus velit. Quisque bibendum, felis fringilla aliquet fermentum, tellus felis auctor velit, at faucibus magna felis et dolor. Praesent vel nibh sapien. Curabitur cursus turpis ut egestas accumsan. Nullam ante ante, interdum sit amet porta nec, fringilla non ex. In eget elementum massa, at consequat ligula.
                        </Typography>
                    </TextBoxCSS>
                </AboutProjectBoxCSS>

            </Container>
            <Container className={classes.center}>
                <ContactBoxCSS>
                    <HeaderBoxCSS>
                        <Typography variant='h6' align='left'>
                            Contact Us
                        </Typography>
                    </HeaderBoxCSS>
                    <TextBoxCSS>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at eleifend turpis. Sed efficitur tincidunt lacus in volutpat. Nullam vitae dapibus sapien. Curabitur ac nunc non lacus faucibus efficitur ut quis ex. Etiam pharetra, ipsum a blandit elementum
                        </Typography>
                    </TextBoxCSS>
                </ContactBoxCSS>
            </Container>

        </div>
    );
}

export default MainPage;