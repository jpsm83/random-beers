import React, { Component } from 'react';
import BeerDetail from '../../components/BeerDetail/BeerDetail'
import BeerService from '../../services/beers.service';

export default class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: [],
    }
    this.beerService = new BeerService()
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.beerService
      .getOne(id)
      .then((res) => {
        console.log(res.data);
        this.setState({
          beer: res.data,
        });
      })
      .catch((error) => console.error(error));
  }

  displayBeer() {
    const { beer } = this.state;
      return <BeerDetail {...beer} key={`${beer.id}${beer.name}`} />;
    }

  render(){
    return(
      <div>
        {this.displayBeer()}
      </div>
    )
  }
}