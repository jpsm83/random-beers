import React, { Component } from 'react';
import BeerService from '../../services/beers.service';
import BeerDetail from '../../components/BeerDetail/BeerDetail';

export default class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
    this.beerService = new BeerService();
  }

  componentDidMount() {
    this.beerService
      .get()
      .then((res) => {
        this.setState({
          beers: res.data,
        });
      })
      .catch((error) => console.error(error));
  }

  displayRandomBeer() {
    const randomBeer = this.state.beers[Math.floor(Math.random() * this.state.beers.length)];
    return <BeerDetail {...randomBeer} />;
}

  render = () => (
    <div>
      <h2>Random Beer</h2>
      {this.state.beers ? this.displayRandomBeer() : <p>No beers to show!</p>}
    </div>
  );
}
