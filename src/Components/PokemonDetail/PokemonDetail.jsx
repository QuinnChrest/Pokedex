import React, {Component} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './PokemonDetail.css';
import ColorThief from 'color-thief'

class PokemonDetail extends Component{
    constructor(props){
        super(props);

        //color thief tutorial for accessing image via google proxy
        const colorThief = new ColorThief();
        const image = new Image();

        image.addEventListener('load', function(){
            var color = colorThief.getColor(image);
            document.documentElement.style.setProperty("--primary-color", "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")");
        })

        let imageURL = this.props.image;
        let googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';

        image.crossOrigin = 'Anonymous';
        image.src = googleProxyURL + encodeURIComponent(imageURL);
    }

    renderTypes(){
        return this.props.types.map((type, index) => (
            <div key={index} className={"type " + type}>
                <div className="text">{type}</div>
            </div>
        ))
    }

    renderStats(){
        var stats = Object.values(this.props.stats);
        var max = 0;
        for(var i = 0; i < stats.length; i++){
            if(max < stats[i]){
                max = stats[i];
            }
        }

        return (
            <table className="statTable">
                <tbody>
                    {Object.entries(this.props.stats).map(([stat, value], index) => (
                        <tr key={index}>
                            <td className="statName">{this.getStatHeader(stat)}</td>
                            <td className="statValue">{value}</td>
                            <td className="statBar" ><ProgressBar now={value} max={max}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    getStatHeader(header){
        switch(header){
            case "hp":
                return "HP";
            case "speed":
                return "Speed"
            case "attack":
                return "Attack";
            case "defense":
                return "Defense";
            case "special-attack":
                return "Sp Atk";
            case "special-defense":
                return "Sp Def";
            default:
                return "Unknown";
        }
    }

    renderProfile(){
        return (
            <table className="profileTable">
                <tbody>
                    <tr>
                        <td className="abilityHeader">Height:</td>
                        <td>{this.props.height} m</td>
                        <td className="abilityHeader">Weight:</td>
                        <td>{this.props.weight} kg</td>
                    </tr>
                    <tr>
                        <td className="abilityHeader">Egg Groups:</td>
                        <td><ul>{this.props.eggGroups.map( (eg, index) => ( <li key={index}>{eg}</li> ))}</ul></td>
                        <td className="abilityHeader">Abilities:</td>
                        <td><ul>{this.props.abilities.map( (ab, index) => ( <li key={index}>{ab}</li> ))}</ul></td>
                    </tr>
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <div className="detailCard">
                <div className="titlePanel">
                    <div className="nameContainer">
                        {this.props.name}
                        <span className="pokedexNumber">
                            #{this.props.id}
                        </span>
                    </div>
                    <div className="typeContainer">
                        {this.renderTypes()}
                    </div>
                </div>
                <div className="statsPanel">
                    <img id="image" height="130px" width="130px" className="image" alt="pokemon" src={this.props.image}/>
                    <div className="stats">
                        {this.renderStats()}
                    </div>
                </div>
                <div className="descriptionPanel">
                    <div className="genus">
                        {this.props.genus}
                    </div>
                    <div className="description">
                        {this.props.description.replace("\f", " ")}
                    </div>
                </div>
                <div className="profilePanel">
                    <div className="profileHeader">
                        <span className="profileHeaderText">Profile</span>
                    </div>
                    {this.renderProfile()}
                </div>
            </div>
        );
    }
}

export default PokemonDetail;