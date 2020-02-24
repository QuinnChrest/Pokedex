import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Icon} from 'antd';
import PokemonCard from './Components/PokemonCard/PokemonCard';

class App extends Component {

  state = {
    pokemon: []
  }

  componentDidMount(){
    axios.get("https://intern-pokedex.myriadapps.com/api/v1/pokemon").then((response) => {
      try{
        const poke = response.data;
        const pokemon = poke.data;
        this.setState({pokemon});
      }  
      catch(error){
        console.log(error);
      }
    })
  }

  renderPokemon(){
    console.log(this.state.pokemon);
    return this.state.pokemon.map(pokemon => (
      <PokemonCard name={pokemon.name} image={pokemon.image} types={pokemon.types}/>
    ))
  }

  render(){
    return (
      <div className="Content">
        <div className="navigationPanel">
          <div className="leftArrow">
            <Icon type="arrow-left" />
          </div>
          <div className="searchBar">
            <div className="searchIcon">
              <Icon type="search"/>
            </div>
            <input type="text" className="search" placeholder="Pokédex"/>
          </div>
          <div className="rightArrow">
            <Icon type="arrow-right" />
          </div>
        </div>
        <div className="cardPanel">
          {this.renderPokemon()}
        </div>
      </div>
    );
  }
}

export default App;
