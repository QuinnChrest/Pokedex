import React, { Component } from 'react';
import './home.css';
import axios from 'axios';
import {Icon} from 'antd';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';

class Home extends Component {
  constructor(props){
    super(props);

    var url = "https://intern-pokedex.myriadapps.com/api/v1/pokemon";
    if(this.props.match.params.pageNumber){
      url = url +"?page=" + this.props.match.params.pageNumber;
    }

    if(this.props.match.params.search){
      url = url + "?name=" + this.props.match.params.search;
    }

    this.state = {
      pokemon: [],
      URL: url
    }
    
    if(!this.props.match.params.pageNumber){
      this.pageNumber = 1;
    } else {
      this.pageNumber = this.props.match.params.pageNumber;
    }

    if(this.props.match.params.search){
      this.searchValue = this.props.match.params.search;
    } else {
      this.searchValue = "";
    }

    this.nextLink = "";
    this.prevLink = "";

    this.leftArrowClick = this.leftArrowClick.bind(this);
    this.rightArrowClick = this.rightArrowClick.bind(this);
    this.search = this.search.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
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
      <PokemonCard key={pokemon.id} pokedex={pokemon.id} name={pokemon.name} image={pokemon.image} types={pokemon.types} onClick={this.cardClick}/>
    ))
  }

  leftArrowClick(){
    if(this.prevLink !== null){
      window.location.href = "/home/" + (parseInt(this.pageNumber) - 1);
    }
  }

  rightArrowClick(){
    if(this.nextLink !== null){
      window.location.href = "/home/" + (parseInt(this.pageNumber) + 1);
    }
  }

  onSearchChange({target}){
    this.searchValue = target.value;
  }

  search = (e) => { 
    if(e.key === "Enter"){
      window.location.href = "/search/" + this.searchValue;
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
            <input id="input" type="text" className="search" placeholder="Pokédex" value={this.searchValue} onKeyPress={this.search} onChangeCapture={this.onSearchChange}/>
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
