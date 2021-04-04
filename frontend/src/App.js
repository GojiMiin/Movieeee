import './App.css';
import TopBar from "./components/TopBar";
import MainPage from "./page/MainPage";
import MoviePage from "./page/MoviePage";
import SearchPage from "./page/SearchPage";
import FullReviewPage from "./page/FullReviewPage";
import AllReviewsPage from "./page/AllReviewPage";
import {BrowserRouter, BrowserRouter as Switch, Route} from 'react-router-dom';
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
            <Switch>
                <TopBar/>
                <div style={{marginTop:'100px'}}></div>
                <Route path="/" exact component={MainPage} />
                <Route path="/movie/:movieCode" exact component={MoviePage} />
                <Route path="/search/:keyword" exact component={SearchPage} />
                <Route path="/review/:movieCode" exact component={FullReviewPage} />
                <Route path="/allreviews/:movieCode" exact component={AllReviewsPage} />
            </Switch>
        </MuiThemeProvider>
    </div>
  );
}

export default App;
