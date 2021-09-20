import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import BeersList from './pages/BeersList/BeersList';
import RandomBeer from './pages/RandomBeer/RandomBeer';
import SingleBeer from './pages/SingleBeer/SingleBeer';
import NewBeer from './pages/NewBeer/NewBeer';
import NavBar from './components/NavBar/NavBar';
import { Switch, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      {
        (useLocation().pathname !== '/') && (
          <header className="app-header">
            <NavBar />
          </header>
        )
      }

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={BeersList} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route path="/beers/:id" component={SingleBeer} />
        <Route path="*" render={() => <div>404 NOT FOUND</div>} />
      </Switch>
    </div>
  );
}

export default App;
