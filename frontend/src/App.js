import './App.css';
import TopBar from "./components/TopBar";
import MainPage from "./page/MainPage";
import MoviePage from "./page/MoviePage";
import Typography from "@material-ui/core/Typography"
import { BrowserRouter as  Switch, Route } from 'react-router-dom';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    typographyStyle: {
        //import font here
    }
});

function App() {
    const classes = useStyles()
  return (
    <div className="App">
        <Typography className={classes.typographyStyle}>
            <TopBar/>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/movie" exact component={MoviePage} />
            </Switch>
        </Typography>

    </div>
  );
}

export default App;
