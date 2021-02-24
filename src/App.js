import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import PlanetsDisplay from './PlanetsDisplay.js';
import HomePage from './HomePage.js';
//also import: Header, DetailPlanet, CreatePlanet

//note

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              path="/planets"
              exact
              render={(routerProps) => <PlanetsDisplay {...routerProps} />}
            />
            <Route
              path="/planets/:id"
              exact
              render={(routerProps) => <DetailPlanet {...routerProps} />}
            />
            <Route
              path="/planets"
              exact
              render={(routerProps) => <PlanetsDisplay {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}