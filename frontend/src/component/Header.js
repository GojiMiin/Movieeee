import React from "react";
import { Container, Box } from '@material-ui/core';
import '../scss/Header.scss'

class Header extends React.Component {
    render() {
        return(
            <Container className="TopBar">
                <Box>
                    <p>Movie Classification</p>
                </Box>
                <Box>
                    <p>Hello</p>
                </Box>
            </Container>
        );
    }
}
export default Header;