import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Icon} from 'antd';
import PokemonCard from './Components/PokemonCard/PokemonCard';

class App extends Component {
  constructor(){
    super();
    this.state = {
      URL: "https://intern-pokedex.myriadapps.com/api/v1/pokemon",
      pokemon: [],
      prevLink: "",
      nextLink: "",
    }

    this.leftArrowClick = this.leftArrowClick.bind(this);
    this.rightArrowClick = this.rightArrowClick.bind(this);
    this.search = this.search.bind(this);
  }


  getPokemon(){
    axios.get(this.state.URL).then((response) => {
      try{
        this.setState({
          pokemon: response.data.data,
          prevLink: response.data.links.prev,
          nextLink: response.data.links.next
        })
      }  
      catch(error){
        console.log(error);
      }
    })
  }

  renderPokemon(){
    this.getPokemon();
    return this.state.pokemon.map(pokemon => (
      <PokemonCard name={pokemon.name} image={pokemon.image} types={pokemon.types}/>
    ))
  }

  leftArrowClick(){
    if(this.state.prevLink !== null){
      this.setState({
        URL: this.state.prevLink
      })
    }
  }

  rightArrowClick(){
    if(this.state.nextLink !== null){
      this.setState({
        URL: this.state.nextLink
      })
    }
  }

  search({target}){
    this.setState({
      URL: "https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=" + target.value
    })

    if(this.state.URL === "https://intern-pokedex.myriadapps.com/api/v1/pokemon?name="){
      this.setState({
        URL: "https://intern-pokedex.myriadapps.com/api/v1/pokemon"
      })
    }
  }

  render(){
    return (
      <div className="Content">
        <div className="navigationPanel">
          <div className="leftArrow" onClick={this.leftArrowClick}>
            <Icon type="arrow-left" />
          </div>
          <div className="searchBar">
            <div className="searchIcon">
              <Icon type="search"/>
            </div>
            <input type="text" className="search" placeholder="Pokédex" onInput={this.search}/>
          </div>
          <div className="rightArrow" onClick={this.rightArrowClick}>
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
