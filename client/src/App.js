import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Garden from "./pages/Garden";
import CommunityGarden from "./pages/CommunityGarden";

// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/register" component={Register} /> */}
          <Route exact path="/garden" component={Garden} />
          <Route exact path="/plants" component={Home} />
          <Route exact path="/accounts" component={CommunityGarden} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
