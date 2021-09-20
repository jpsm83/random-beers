import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import beers from '../../assets/beers.png';
import randomBeer from '../../assets/random-beer.png';
import newBeer from '../../assets/new-beer.png'

export default function () {
    return (
        <div className="containers">
            <Link to="/beers">
                <div className="homeImages">
                    <img src={beers} alt="Beers" />
                </div>
                <h2>Beers</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum totam rem dicta.</p>
            </Link>
            <Link to="/random-beer">
                <div className="homeImages">
                    <img src={randomBeer} alt="Beers" />
                </div>
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum totam rem dicta.</p>
            </Link>
            <Link to="/new-beer">
                <div className="homeImages">
                    <img src={newBeer} alt="Beers" />
                </div>
                <h2>New Beer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum totam rem dicta.</p>
            </Link>
        </div>
    )
}
