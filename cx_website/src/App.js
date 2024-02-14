import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import UserRegistration from "./pages/UserRegistration";
import OrderCreation from "./pages/OrderCreation";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/api/createUser" component={UserRegistration} />
          <Route path="/api/createOrder" component={OrderCreation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
