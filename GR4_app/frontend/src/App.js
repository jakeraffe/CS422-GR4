import './App.css';
import Validate from './components/./Pages/Validate'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Validate/>
          </Route>
           <Route exact path="/Validate">
            <Validate/>
          </Route>
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
