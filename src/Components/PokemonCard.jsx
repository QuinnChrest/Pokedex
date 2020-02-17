import React, {Component} from 'react';

class PokemonCard extends Component{
    render() {
        return(
            <div className="card">
                <div className="titleContainer">
                    <div className="title">Pikachu</div>
                </div>
                <div className="imageContainer">
                    <img height="104px" width="104px" className="image" src="https:\/\/intern-pokedex.myriadapps.com\/images\/pokemon\/25.png"/>
                </div>
                <div className="typeContainer">
                    <div className="type">
                        <div className="text">Electric</div>
                    </div>
                    <div className="type">
                        <div className="text">Grass</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PokemonCard;