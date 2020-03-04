import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './PokemonCard.css';

class PokemonCard extends Component{

    cardClick({target}){
        this.props.history.push("/pokemon/" + this.props.id);
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
            <div className="card" onClick={this.cardClick.bind(this)}>
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

export default withRouter(PokemonCard);