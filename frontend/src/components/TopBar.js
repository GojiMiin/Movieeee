import React from 'react';
import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    Button,
    Menu,
    MenuItem,
    makeStyles,
    Box,
    InputAdornment, IconButton
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import CategoryIcon from '@material-ui/icons/Category';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';



const useStyles = makeStyles(theme => ({
    root: {
        margin:0,
        backgroundColor: '#fff',
        marginBottom: '60px',
        boxShadow: "none"
    },
    test: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    blue: {
        color: "#485477",
        fontWeight: "bold"
    },
    cyan: {
        color: "#8BABBE"
    },
    appButton: {

    },
}));

const ScheduleIconStyled = withStyles((theme) => ({
    root: {
        [theme.breakpoints.up('sm')]: { display: 'none', }
    },
}))(ScheduleIcon);

const CategoryIconStyled = withStyles((theme) => ({
    root: {
        [theme.breakpoints.up('sm')]: { display: 'none', }
    },
}))(CategoryIcon);

const ThumbUpIconStyled = withStyles((theme) => ({
    root: {
        [theme.breakpoints.up('sm')]: { display: 'none', }
    },
}))(ThumbUpIcon);

const TypoStyled = withStyles((theme) => ({
    root: {
        [theme.breakpoints.down(600)]: { display: 'none', }
    },
}))(Typography);

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
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        {...props}
    />
));

function TopBar(props) {
    const classes = useStyles()
    const history = useHistory()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const allCate = ['Action',
        'Adventure',
        'Animation',
        'Biography',
        'Comedy',
        'Crime',
        'Drama',
        'Family',
        'Fantasy',
        'History',
        'Horror',
        'Music',
        'Musical',
        'Mystery',
        'Romance',
        'Sci-Fi',
        'Sport',
        'Thriller',
        'War',
        'Western']
    const handleClose = () => {
        setAnchorEl(null);
        setAnchorEl2(null);
    };

    const yearClick = year => {
        history.push({
            pathname: "/search/"+year,
            state: { keyword: year,
                type: "yearSearch"
            }
        })
    }

    const cateClick = cate => {
        history.push({
            pathname: "/search/"+cate,
            state: { keyword: cate,
                type: "cateSearch"
            }
        })
    }

    return (
        <AppBar className={classes.root} position="relative">
            <Container>
                <Toolbar className={classes.test}>
                    <Typography className={classes.blue} edge="start" variant='h6'>
                        Movie Review Classification
                    </Typography>
                    <Box>
                        <Button aria-controls="menu-year" aria-haspopup="true" onClick={e => setAnchorEl(e.currentTarget)} className={classes.textTopbar}>
                            <TypoStyled variant={'subtitle2'} className={classes.blue}>
                                Year
                            </TypoStyled>
                            <ScheduleIconStyled/>
                        </Button>
                        <StyledMenu
                            id="menu-year"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {/*<MenuItem onClick={handleClose}>*/}
                            <MenuItem onClick={() => yearClick(2018)}>
                                <Typography variant={'body2'} >
                                    2018
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Typography variant={'body2'} onClick={() => yearClick(2019)}>
                                    2019
                                </Typography>
                            </MenuItem>
                        </StyledMenu>
                        <Button aria-controls="menu-genre" aria-haspopup="true" onClick={e => setAnchorEl2(e.currentTarget)} className={classes.textTopbar}>
                            <TypoStyled variant={'subtitle2'} className={classes.blue}>
                                Genre
                            </TypoStyled>
                            <CategoryIconStyled/>
                        </Button>
                        <StyledMenu
                            id="menu-genre"
                            anchorEl={anchorEl2}
                            keepMounted
                            open={Boolean(anchorEl2)}
                            onClose={handleClose}
                        >

                            {allCate.map((eachCategory) =>
                                <MenuItem onClick={handleClose} key={allCate.indexOf(eachCategory)}>
                                    <Typography variant={'body2'} onClick={() => cateClick(eachCategory)}>
                                        {eachCategory}
                                    </Typography>
                                </MenuItem>
                            )}
                        </StyledMenu>
                    </Box>
                </Toolbar>
            </Container>

        </AppBar>


    );
}

/*export default TopBar;*/
export default TopBar;