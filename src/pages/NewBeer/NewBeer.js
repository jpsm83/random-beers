import React, { Component } from 'react';
import BeerService from '../../services/beers.service';

export default class NewBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: '',
    };
    this.beerService = new BeerService();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.beerService.create(this.state)
      .then(
        this.setState(
          {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: '',
          },
          () => {
            this.props.history.push('/');
          }
        )
      )
      .catch((error) => console.error(error));
  }

  render() {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = this.state;
    return (
      <div>
        <h2>New Beer</h2>

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Tagline:</label>
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => this.handleChange(e)}
          />

          <label>First brewed:</label>
          <input
            type="text"
            name="first_brewed"
            value={first_brewed}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Brewers tips:</label>
          <input
            type="text"
            name="brewers_tips"
            value={brewers_tips}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Attenuation level:</label>
          <input
            type="number"
            name="attenuation_level"
            value={attenuation_level}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Contributed by:</label>
          <input
            type="text"
            name="contributed_by"
            value={contributed_by}
            onChange={(e) => this.handleChange(e)}
          />

          <button type="submit" onClick={(e) => this.handleSubmit(e)}>Create</button>
        </form>
      </div>
    );
  }
}
