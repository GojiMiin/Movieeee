import './App.css';
import TopBar from "./components/TopBar";
import MainPage from "./page/MainPage";
import MoviePage from "./page/MoviePage";
import Typography from "@material-ui/core/Typography"
import { BrowserRouter as  Switch, Route } from 'react-router-dom';
import {makeStyles} from "@material-ui/core";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core";

const THEME = createMuiTheme({
    typography: {
        "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }
});

function App() {
    return (
    <div className="App">
        <MuiThemeProvider theme={THEME}>
            <TopBar/>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/movie" exact component={MoviePage} />
            </Switch>
        </MuiThemeProvider>
    </div>
  );
}

export default App;
