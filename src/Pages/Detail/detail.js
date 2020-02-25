import React, { Component } from 'react';
import './detail.css';
import axios from 'axios';
import {Icon} from 'antd';
import PokemonDetail from '../../Components/PokemonDetail/PokemonDetail';

class Detail extends Component{
    render(){
        console.log(this.props.match.params.pokedexNumber);
        return (
            <div>hello</div>
        );
    }
}

export default Detail;