import React, { Component } from 'react';
import './home.css';
import axios from 'axios';
import {Icon} from 'antd';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon: [],
      URL: "https://intern-pokedex.myriadapps.com/api/v1/pokemon"
    }

    this.nextLink = "";
    this.prevLink = "";

    this.leftArrowClick = this.leftArrowClick.bind(this);
    this.rightArrowClick = this.rightArrowClick.bind(this);
    this.search = this.search.bind(this);
  }


  getPokemon(){
    axios.get(this.state.URL).then((response) => {
      try{
        this.prevLink = response.data.links.prev;
        this.nextLink = response.data.links.next;
        this.setState({
          pokemon: response.data.data
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
      <PokemonCard key={pokemon.id} name={pokemon.name} image={pokemon.image} types={pokemon.types} onClick={this.cardClick}/>
    ))
  }

  leftArrowClick(){
    if(this.prevLink !== null){
      this.setState({
        URL: this.prevLink
      })
    }
  }

  rightArrowClick(){
    if(this.nextLink !== null){
      this.setState({
        URL: this.nextLink
      })
    }
  }

  search({target}){
    this.setState({
      URL: "https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=" + target.value
    })
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

export default Home;
