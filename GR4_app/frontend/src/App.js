import './App.css';

// Pages
import ValidatePage from './components/Pages/ValidatePage'
import LearnPage from './components/Pages/LearnPage'
import NewsPage from './components/Pages/NewsPage'
import ValidatedResultPage from './components/Pages/ValidatedResultPage'
// Modules
import BubbleModule from './components/Pages/Modules/BubbleModule'
import FilterModule from './components/Pages/Modules/FilterModule'
import InfluencerCardModule from './components/Pages/Modules/InfluencerCardModule'
import NavbarModule from './components/Pages/Modules/NavbarModule'
import TitleBarModule from './components/Pages/Modules/TitleBarModule'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <ValidatePage/>
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
