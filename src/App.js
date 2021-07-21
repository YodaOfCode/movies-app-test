import './App.css';
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import Film from "./pages/Film";

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <div className="App">
                    <Header/>
                    <Route exact path='/' component={Main}/>
                    <Route path='/:id' component={Film}/>
                    <Footer/>
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
