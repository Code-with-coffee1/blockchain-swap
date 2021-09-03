import React, { useState } from "react";
import Navbar from "./UI/Navbar/Navbar";
import Sidebar from "./UI/Sidebar/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles.css";

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <Router>
      <Navbar onToggle={setSidebar} />
      <Sidebar isOpen={sidebar} onToggle={setSidebar} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trade" component={Home} />

        <Route exact path="/farms" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
