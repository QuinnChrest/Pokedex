import React, {Component} from 'react';
import './PokemonDetail.css';

class PokemonDetail extends Component{

    renderTypes(){
        console.log(this.props.types);
        return this.props.types.map(type => (
            <div key={type.key} className={"type " + type}>
                <div className="text">{type}</div>
            </div>
        ))
    }

    renderStats(){
        console.log(this.props.stats);
    }

    renderProfile(){
        return (
            <table>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        )
    }

    render() {
        return (
            <div className="detailCard">
                <div className="titlePanel">
                    <div className="name">
                        {this.props.name}
                        <span className="pokedexNumber">
                            {this.props.number}
                        </span>
                    </div>
                    <div className="types">
                        {this.renderTypes()}
                    </div>
                </div>
                <div className="statsPanel">
                    <img height="104px" width="104px" className="image" alt="pokemon" src={this.props.image}/>
                    <div className="stats">
                        {this.renderStats()}
                    </div>
                </div>
                <div className="descriptionPanel">
                    {this.props.description}
                </div>
                <div className="profilePanel">
                    {this.renderProfile()}
                </div>
            </div>
        );
    }
}

export default PokemonDetail;