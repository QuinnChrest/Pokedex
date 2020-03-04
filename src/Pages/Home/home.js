import React, { Component } from 'react';
import './home.css';
import axios from 'axios';
import {Icon} from 'antd';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon: ""
    }

    this.URL = "https://intern-pokedex.myriadapps.com/api/v1/pokemon"
    this.prevLink = "";
    this.nextLink = "";

    this.leftArrowClick = this.leftArrowClick.bind(this);
    this.rightArrowClick = this.rightArrowClick.bind(this);
    this.search = this.search.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.closeSearch = this.closeSearch.bind(this);

    document.documentElement.style.setProperty("--primary-color", "rgba(85, 166, 156, 1)");

    this.getPokemon();
  }


  getPokemon(){
    axios.get(this.URL).then((response) => {
      try{
        this.prevLink = response.data.links.prev;
        this.nextLink = response.data.links.next;
        this.setState({
          pokemon: <ul className="cardList">{response.data.data.map(pokemon => (
            <li className="cardListItem"><PokemonCard id={pokemon.id} name={pokemon.name} image={pokemon.image} types={pokemon.types}/></li>
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

  onSearchChange({target}){
    this.searchValue = target.value;
  }

  search = (e) => { 
    if(e.key === "Enter" && this.searchValue !== undefined){
      this.URL = "https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=" + this.searchValue;
      this.getPokemon();
      document.getElementById("closeIcon").style.display = "inline-block";
    }
  }

  closeSearch(){
    document.getElementById("search").value = "";
    document.getElementById("closeIcon").style.display = "none";
    this.URL = "https://intern-pokedex.myriadapps.com/api/v1/pokemon";
    this.getPokemon();
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
            <input type="text" id="search" className="search" placeholder="Pokédex" onKeyPress={this.search} onChangeCapture={this.onSearchChange}/>
            <div id="closeIcon" className="closeIcon" onClick={this.closeSearch}>
              <Icon type="close" />
            </div>
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
