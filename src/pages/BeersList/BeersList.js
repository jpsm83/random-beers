import React, { Component } from 'react';
import BeerItem from '../../components/BeerItem/BeerItem';
import BeerService from '../../services/beers.service';
import Search from '../../components/Search/Search';

export default class BeersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      beersFiltered: '',
    };
    this.beerService = new BeerService();
  }

  componentDidMount() {
    this.beerService.get()
      .then((res) => {
        console.log(res.data);
        this.setState({ beers: res.data });
      })
      .catch((error) => console.error(error));
  }

  displayBeers() {
    const { beers, beersFiltered } = this.state;
    if (beersFiltered) {
      return beersFiltered.map((beer) => {
        return <BeerItem {...beer} key={`${beer._id}${beer.name}`} />;
      });
    } else {
      return beers.map((beer) => {
        return <BeerItem {...beer} key={`${beer.id}${beer.name}`} />;
      });
    }
  }

  handleSearchBeer(event) {
    let searchedBeer = event.target.value;
    const { beers } = this.state;
    let filteredBeers = beers.filter((beer) => {
      return beer.name.toLowerCase().includes(searchedBeer.toLowerCase());
    });
    this.setState({
      beersFiltered: filteredBeers,
    });
  }

  render() {
    return (
      <div>
        <Search handleSearchBeer={(e) => this.handleSearchBeer(e)} />
        {this.displayBeers()}
      </div>
    );
  }
}
