import React, { useState } from "react";
import Navbar from "./components/UI/Navbar/Navbar";
import Sidebar from "./components/UI/Sidebar/Sidebar";
import Home from "./pages/Home";
import Farms from "./pages/Farms";
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

        <Route exact path="/farms" component={Farms} />
      </Switch>
    </Router>
  );
};

export default App;
