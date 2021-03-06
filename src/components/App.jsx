import React from "react";
import Header from "./Header";
import GameList from "./GameList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameDetail from "./GameDetail";
import { GameProvider } from "./GameContext";

const App = () => {
  return (
    <Router>
      <GameProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={GameList} />
          <Route exact path="/games/:id" component={GameDetail} />
        </Switch>
      </GameProvider>
    </Router>
  );
};

export default App;
