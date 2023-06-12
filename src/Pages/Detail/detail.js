import React, { Component } from 'react';
import './detail.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {Icon} from 'antd';
import PokemonDetail from '../../Components/PokemonDetail/PokemonDetail';


class Detail extends Component{
    constructor(props){
        super(props);

        this.state = {
          detailView: ""
        }

        this.URL = "https://pokeapi.co/api/v2/pokemon/" + this.props.match.params.name;
        this.name = "";

        this.leftArrowClick = this.leftArrowClick.bind(this);

        this.getDetail();
    }

    getDetail(){
      let data;

      axios.get(this.URL).then((response) => {
        data = response.data;
      }).finally(() => {
        axios.get(data.species.url).then((species) => {
          this.name = data.name;
          var image = data.sprites.front_default;
          var types = data.types.map(function(item) { return item.type.name; });
          var height = data.height;
          var weight = data.weight;
          var abilities = data.abilities.map(function(item) { return item.ability.name; });
          var stats = Object.assign({}, ...data.stats.map((x) => ({[x.stat.name]: x.base_stat})));
          var eggGroups = species.data.egg_groups.map(function(item) { return item.name; });
          var genus = species.data.genera.filter(x => x.language.name == 'en').shift();
          var description = species.data.flavor_text_entries.filter(x => x.language.name == 'en').shift();

          this.setState({
            PokemonDetail: <PokemonDetail id={data.id} name={this.name} image={image} types={types} height={height} weight={weight} abilities={abilities} eggGroups={eggGroups} stats={stats} genus={genus.genus} description={description.flavor_text} />
          });
        });
      });
    }

    leftArrowClick(){
      this.props.history.push("/");
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

export default withRouter(Detail);