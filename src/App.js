import React from 'react';
import './App.css';
import PokemonCard from './Components/PokemonCard/PokemonCard';
import PokemonDetail from './Components/PokemonDetail/PokemonDetail';

function App() {
  return (
    <div className="Content">
      <PokemonDetail/>
      <div className="navigationPanel">

      </div>
      <div className="cardPanel">
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
      </div>
    </div>
  );
}

export default App;
