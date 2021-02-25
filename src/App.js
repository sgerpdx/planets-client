import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ListPlanets from './ListPlanets.js';
import HomePage from './HomePage.js';
import DetailPlanet from './DetailPlanet.js';
import CreatePlanet from './CreatePlanet.js';
import Header from './Header.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              path="/planets"
              exact
              render={(routerProps) => <ListPlanets {...routerProps} />}
            />
            <Route
              path="/planets/:id"
              exact
              render={(routerProps) => <DetailPlanet {...routerProps} />}
            />
            <Route
              path="/create"
              exact
              render={(routerProps) => <CreatePlanet {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
