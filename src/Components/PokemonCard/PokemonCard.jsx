import React, {Component} from 'react';
import './PokemonCard.css';

class PokemonCard extends Component{

    cardClick({target}){
        console.log("nice");
        window.location.href = "https://intern-pokedex.myriadapps.com/api/v1/pokemon/" + this.props.key;
    }

    renderTypes(){
        return this.props.types.map(type => (
            <div key={type.key} className={"type " + type}>
                <div className="text">{type}</div>
            </div>
        ))
    }

    render() {
        return(
            <div className="card" onClick={this.cardClick}>
                <div className="titleContainer">
                    <div className="title">{this.props.name}</div>
                </div>
                <div className="imageContainer">
                    <img height="104px" width="104px" className="image" alt="pokemon" src={this.props.image}/>
                </div>
                <div className="typeContainer">
                    {this.renderTypes()}
                </div>
            </div>
        );
    }
}

export default PokemonCard;