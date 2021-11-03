import './App.css';

// Pages
import ValidatePage from './components/Pages/ValidatePage'
import LearnPage from './components/Pages/LearnPage'
import NewsPage from './components/Pages/NewsPage'
import ValidatedResultPage from './components/Pages/ValidatedResultPage'
// Modules
import BubbleModule from './components/Modules/BubbleModule'
import FilterModule from './components/Modules/FilterModule'
import InfluencerCardModule from './components/Modules/InfluencerCardModule'
import NavbarModule from './components/Modules/NavbarModule'
import TitleBarModule from './components/Modules/TitleBarModule'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LearnPage/>
          </Route>
           {/* <Route exact path="/Validate">
            <Validate/>
          </Route> */}
          {/*<Route exact path="/learn">
            <LearnCypto/>
          </Route>
          <Route exact path="/quizes">
            <Quizes/>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
