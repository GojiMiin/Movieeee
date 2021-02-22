import {Box, Container, makeStyles,withStyles, TextField,InputAdornment,IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    center: {
        display:"flex",
        justifyContent:"center",
        marginBottom:"60px"
    }
});

const SearchTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#E5E5E5',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#E5E5E5',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#E5E5E5',
            },
            '&:hover fieldset': {
                borderColor: '#E5E5E5',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#E5E5E5',
            },
        },
    },
})(TextField);



function SearchBar() {

    const classes = useStyles()
    const history = useHistory()
    const [keyWord, setKeyWord] = useState("")
    const getKeyWord = event => {
        setKeyWord(event.target.value)
    }

    const toSearch = event => {
        if(event.key === "Enter" ){
            history.push({
                pathname: "/search/"+keyWord,
                state: { keyword: keyWord,
                        type: "nameSearch"
                }
            })
        }
    }

    return (
        <div className="SearchBar">
            <Container className={classes.center}>
                <Box width={800}>
                    <SearchTextField
                        id="outlined-basic"
                        placeholder="Search Movie Here..."
                        variant="outlined"
                        fullWidth={true}
                        onChange={getKeyWord}
                        onKeyPress={toSearch}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <SearchIcon/>
                                </InputAdornment>
                            )
                        }}
                    />
                </Box>
            </Container>
        </div>
    );
}

export default SearchBar;