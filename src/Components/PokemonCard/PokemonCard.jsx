import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './PokemonCard.css';

class PokemonCard extends Component{

    cardClick({target}){
        this.props.history.push("/pokemon/" + this.props.name);
    }

    render() {
        return(
            <div className="card" onClick={this.cardClick.bind(this)}>
                <div className="titleContainer">
                    <div className="title">{this.props.name}</div>
                </div>
                <div className="imageContainer">
                    <img height="104px" width="104px" className="image" alt="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ this.props.id +".png"}/>
                </div>
            </div>
        );
    }
}

export default withRouter(PokemonCard);