import './App.css';

// Pages
import ValidatePage from './components/Pages/ValidatePage'
import LearnPage from './components/Pages/LearnPage'
import NewsPage from './components/Pages/NewsPage'
import ValidatedResultPage from './components/Pages/ValidatedResultPage'
import InfluencerPage from './components/Pages/InfluencerPage'
import AboutUsPage from './components/Pages/AboutUsPage';

// Modules
import NavbarModule from './components/Modules/NavbarModule'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavbarModule/>
      <Router>
        <Switch>
          <Route exact path="/">
            <ValidatePage/>
          </Route>
          <Route exact path="/Learn">
            <LearnPage/>
          </Route>
          <Route exact path="/News">
            <NewsPage/>
          </Route>
          <Route exact path="/Influencer-Activity">
            <InfluencerPage/>
          </Route>
          <Route exact path="/Validate-Result">
            <ValidatedResultPage/>
          </Route>
          <Route exact path="/About-Us">
            <AboutUsPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;