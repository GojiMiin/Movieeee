import React from 'react';
import {AppBar,Container,Toolbar,Typography,Button,Menu,MenuItem, makeStyles} from "@material-ui/core";
import {withStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        margin:0,
        backgroundColor: '#E5E5E5',
        marginBottom: '60px',
    },
    test: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    textTopbar: {
        color: "black"
    }
});

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
        }}
        transformOrigin={{
            vertical: 'top',
        }}
        {...props}
    />
));

function TopBar(props) {
    const classes = useStyles(props)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const handleClose = () => {
        setAnchorEl(null);
        setAnchorEl2(null);
    };

    return (
        <AppBar className={classes.root} position="relative">
            <Container>
                <Toolbar className={classes.test}>
                    <Typography className={classes.textTopbar} edge="start" variant='h6'>
                        Movie Review Classification
                    </Typography>
                    <div>
                        <Button aria-controls="menu-year" aria-haspopup="true" onClick={e => setAnchorEl(e.currentTarget)} className={classes.textTopbar}>
                            Year
                        </Button>
                        <StyledMenu
                            id="menu-year"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </StyledMenu>
                        <Button aria-controls="menu-genre" aria-haspopup="true" onClick={e => setAnchorEl2(e.currentTarget)} className={classes.textTopbar}>
                            Genre
                        </Button>
                        <StyledMenu
                            id="menu-genre"
                            anchorEl={anchorEl2}
                            keepMounted
                            open={Boolean(anchorEl2)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile1</MenuItem>
                            <MenuItem onClick={handleClose}>My account1</MenuItem>
                            <MenuItem onClick={handleClose}>Logout1</MenuItem>
                        </StyledMenu>
                        <Button className={classes.textTopbar}>
                            Rate
                        </Button>
                    </div>
                </Toolbar>
            </Container>

        </AppBar>


    );
}

export default TopBar;