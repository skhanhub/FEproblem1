import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { useSelector } from "react-redux"
import NoMatch from "./pages/NoMatch";
import Game from "./pages/Game";
import Result from "./pages/Result";
import Footer from "./components/Footer/Footer";



function App() {

  const error = useSelector((state) => state.getData.error)

  return (
    <Router>
      <NavBar />
      {error && <h3 style={{color: 'red', textAlign: 'center'}}>{error}</h3>}
      <Switch>
        <Route exact path="/" component={Game} />
        <Route exact path="/Result" component={Result} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;