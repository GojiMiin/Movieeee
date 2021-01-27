import React from "react";
import {AppBar, Toolbar, List, ListItem, ListItemText, makeStyles, Container, Typography, Box} from '@material-ui/core';
import '../scss/Header.scss'

const useStyles = makeStyles({
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`
    }
});

const navlinks = [
    { title: "Year", path: "/year"},
    {title: "Genre", path: "/genre"},
    {title: "Rate", path: "/rate"}
]

const Header = () => {
    const classes = useStyles();
    return(
        <AppBar>
            <Toolbar>
                <Container fixed className={classes.navDisplayFlex}>
                    <Container fixed className="titleBox">
                        <Typography variant="h6">
                            Movie Classification
                        </Typography>
                    </Container>
                    <List component="nav"
                          aria-labelledby="main navigation"
                          className={classes.navDisplayFlex}>
                        {navlinks.map(({ title, path }) => (
                            <a href={path} key={title} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </a>
                        ))}
                    </List>
                </Container>
            </Toolbar>
        </AppBar>
    );
}
export default Header;