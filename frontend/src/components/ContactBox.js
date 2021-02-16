import {Box, Container, makeStyles, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/core";
import MainPage from "../page/MainPage";

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
const ContactBox =  withStyles({
    root:{
        backgroundColor: '#E5E5E5',
        margin:'60px 0px 60px 0px',
        width:'1200px',
        height:'auto'
    }
})(Box);

function ContactBoxs() {
    const classes = useStyles()
    return (
        <Container className={classes.center}>
            <ContactBox borderRadius={8}>
                <HeaderBox>
                    <Typography variant='h6' align='left'>
                        Contact Us
                    </Typography>
                </HeaderBox>
                <TextBox>
                    <Typography variant='body1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at eleifend turpis. Sed efficitur tincidunt lacus in volutpat. Nullam vitae dapibus sapien. Curabitur ac nunc non lacus faucibus efficitur ut quis ex. Etiam pharetra, ipsum a blandit elementum
                    </Typography>
                </TextBox>
            </ContactBox>
        </Container>
    );
}
export default ContactBoxs;
