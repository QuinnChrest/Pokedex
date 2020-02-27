import React, { Component } from 'react';
import './detail.css';
import axios from 'axios';
import {Icon} from 'antd';
import PokemonDetail from '../../Components/PokemonDetail/PokemonDetail';

class Detail extends Component{
    constructor(props){
        super(props);

        this.URL = "https://intern-pokedex.myriadapps.com/api/v1/pokemon/" + this.props.match.params.pokedexNumber;

        this.pokedex = "";
        this.name = "";
        this.image = "";
        this.types = [];
        this.height = "";
        this.weight = "";
        this.abilities = [];
        this.eggGroups = [];
        this.stats = Object;
        this.genus = "";
        this.description = "";

        this.renderDetail = this.renderDetail.bind(this);
    }

    getDetail(){
        console.log("epic");
        axios.get(this.URL).then((response) => {
          try{
            this.pokedex = response.data.id;
            this.name = response.data.name;
            this.image = response.data.image;
            this.types = response.data.types;
            this.height = response.data.height;
            this.weight = response.data.weight;
            this.abilities = response.data.abilities;
            this.eggGroups = response.data.egg_groups;
            this.stats = response.data.stats;
            this.genus = response.data.genus;
            this.description = response.data.description;
          }  
          catch(error){
            console.log(error);
          }
        })
    }
    
    renderDetail(){
        this.getDetail();
        console.log(this.types + "hello");
        return <PokemonDetail pokedex={this.pokedex} name={this.name} image={this.image} types={this.types} height={this.height} weight={this.weight} abilities={this.abilities} eggGroups={this.eggGroups} stats={this.stats} genus={this.genus} description={this.description} />;
    }

    render(){
        console.log(this.props.match.params.pokedexNumber);
        return (
            <div>hello {this.renderDetail()}</div>
            
        );
    }
}

export default Detail;