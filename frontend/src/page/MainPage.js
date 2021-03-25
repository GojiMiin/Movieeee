import {
    Box,
    withStyles,
    makeStyles,
    Container, Typography,
    Grid
} from "@material-ui/core";
import SearchBar from "../components/SearchBar";
import ContactBox from "../components/ContactBox";
import Calendar from "../icons/calendar.png"

const useStyles = makeStyles({
    root: {
        backgroundColor: '#E5E5E5',
        marginBottom: '60px'
    },
    center: {
        display:"flex",
        justifyContent:"center"
    },
    white: {
        color: "white"
    },
    end:{
        display:"flex",
        justifyContent:"flex-end"
    },
    start:{
        display:"flex",
        justifyContent:"flex-start"
    }

});
const AboutProjectBox = withStyles({
    root:{
        backgroundColor: '#1A95B0',
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
const ButtonBox = withStyles({
    root:{
        '&:hover':{
            cursor: 'pointer',
            transform: 'scale(0.95)',
            transitionDuration: '0.5s',
        },
    }
})(Box);


function MainPage() {

    const classes = useStyles()

    return (
        <div className="MainPage">
            <SearchBar/>
            {/*<Container className={classes.center}>
                <Grid container spacing={3}>
                    <Grid item xs={6} className={classes.end}>
                        <ButtonBox boxShadow={3} borderRadius={8} style={{backgroundColor: '#fff',width:'300px',height:'300px', marginBottom:'60px'}}>
                            <img src={Calendar} style={{width:'150px',height:'auto',margin:'20px'}}/>
                        </ButtonBox>
                    </Grid>
                    <Grid item xs={6} className={classes.start}>
                        <ButtonBox boxShadow={3} borderRadius={8} style={{backgroundColor: '#fff',width:'300px',height:'300px', marginBottom:'60px'}}>

                        </ButtonBox>
                    </Grid>
                </Grid>
            </Container>*/}
            <Container className={classes.center}>
                <AboutProjectBox boxShadow={3} borderRadius={8}>
                    <HeaderBox>
                        <Typography variant='h6' align='left' className={classes.white}>
                            About Project
                        </Typography>
                    </HeaderBox>
                    <TextBox>
                        <Typography variant='body1' className={classes.white}>
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