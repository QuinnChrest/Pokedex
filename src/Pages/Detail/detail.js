import React, { Component } from 'react';
import './detail.css';
import axios from 'axios';
import {Icon} from 'antd';
import PokemonDetail from '../../Components/PokemonDetail/PokemonDetail';


class Detail extends Component{
    constructor(props){
        super(props);

        this.state = {
          detailView: ""
        }

        this.URL = "https://intern-pokedex.myriadapps.com/api/v1/pokemon/" + this.props.match.params.id;
        this.name = "";

        this.getDetail();
    }

    getDetail(){
        axios.get(this.URL).then((response) => {
          try{
            this.name = response.data.data.name;
            var image = response.data.data.image;
            var types = response.data.data.types;
            var height = response.data.data.height;
            var weight = response.data.data.weight;
            var abilities = response.data.data.abilities;
            var eggGroups = response.data.data.egg_groups;
            var stats = response.data.data.stats;
            var genus = response.data.data.genus;
            var description = response.data.data.description;
            this.setState({
              PokemonDetail: <PokemonDetail id={this.props.match.params.id} name={this.name} image={image} types={types} height={height} weight={weight} abilities={abilities} eggGroups={eggGroups} stats={stats} genus={genus} description={description} />
            })
          }  
          catch(error){
            console.log(error);
          }
        })
    }

    leftArrowClick(){
      window.location.href = "/Pokedex/";
    }

    render(){
        return (
            <div className="detailContent">
              <div className="headerPanel">
                <div className="leftArrow" onClick={this.leftArrowClick}>
                  <Icon type="arrow-left" />
                </div>
                <div className="header">
                  {this.name}
                </div>
              </div>
              {this.state.PokemonDetail}
            </div>
        );
    }
}

export default Detail;