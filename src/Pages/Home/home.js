import React, { Component }       from 'react';
import axios                      from 'axios';
import {Icon}                     from 'antd';
import PokemonCard                from '../../Components/PokemonCard/PokemonCard';

import './home.css';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon: ""
    }

    this.URL = "https://pokeapi.co/api/v2/pokemon"
    this.prevLink = "";
    this.nextLink = "";

    this.leftArrowClick = this.leftArrowClick.bind(this);
    this.rightArrowClick = this.rightArrowClick.bind(this);

    document.documentElement.style.setProperty("--primary-color", "rgba(85, 166, 156, 1)");

    this.getPokemon();
  }


  getPokemon(){
    axios.get(this.URL).then((response) => {
      try{
        this.prevLink = response.data.previous;
        this.nextLink = response.data.next;
        this.setState({
          pokemon: <ul className="cardList">{response.data.results.map(pokemon => (
            <li className="cardListItem"><PokemonCard id={pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")} name={pokemon.name} url={pokemon.url}/></li>
          ))}</ul>
        })
      }  
      catch(error){
        console.log(error);
      }
    })
  }

  leftArrowClick(){
    if(this.prevLink !== null){
      this.URL = this.prevLink;
      this.getPokemon();
    }
  }

  rightArrowClick(){
    if(this.nextLink !== null){
      this.URL = this.nextLink;
      this.getPokemon();
    }
  }

  render(){
    return (
      <div className="Content">
        <div className="navigationPanel">
          <div className="leftArrow" onClick={this.leftArrowClick}>
            <Icon type="arrow-left" />
          </div>
          <div className="title">
            Pokédex
          </div>
          <div className="rightArrow" onClick={this.rightArrowClick}>
            <Icon type="arrow-right" />
          </div>
        </div>
        <div className="cardPanel">
            {this.state.pokemon}
        </div>
      </div>
    );
  }
}

export default Home;
