import {
    Box,
    withStyles,
    makeStyles,
    Container, Typography
} from "@material-ui/core";
import SearchBar from "../components/SearchBar";
import ContactBox from "../components/ContactBox";

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
const AboutProjectBox = withStyles({
    root:{
        backgroundColor: '#E5E5E5',
        width:'1000px',
        height:'auto'
    }
})(Box);
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

function MainPage() {

    const classes = useStyles()

    return (
        <div className="MainPage">
            <SearchBar/>
            <Container className={classes.center}>
                <AboutProjectBox borderRadius={8}>
                    <HeaderBox>
                        <Typography variant='h6' align='left'>
                            About Project
                        </Typography>
                    </HeaderBox>
                    <TextBox>
                        <Typography variant='body1'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at eleifend turpis. Sed efficitur tincidunt lacus in volutpat. Nullam vitae dapibus sapien. Curabitur ac nunc non lacus faucibus efficitur ut quis ex. Etiam pharetra, ipsum a blandit elementum, arcu ex gravida nisl, et pharetra felis sapien vel diam. Sed laoreet facilisis lobortis. Curabitur et tellus velit. Quisque bibendum, felis fringilla aliquet fermentum, tellus felis auctor velit, at faucibus magna felis et dolor. Praesent vel nibh sapien. Curabitur cursus turpis ut egestas accumsan. Nullam ante ante, interdum sit amet porta nec, fringilla non ex. In eget elementum massa, at consequat ligula.
                        </Typography>
                    </TextBox>
                </AboutProjectBox>

            </Container>
            <ContactBox></ContactBox>

        </div>
    );
}

export default MainPage;